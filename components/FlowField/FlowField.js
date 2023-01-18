import { useRef, useEffect } from "react";
import { Vector } from "./vector";
import { Particle } from "./particle";
import { createNoise3D } from "simplex-noise";

// Credit goes to: Johan Karlsson and his Post about Particles in Flowfields: https://codepen.io/DonKarlssonSan/post/particles-in-simplex-noise-flow-field
// and to Tibix for the interactive demo of his flowfield that he open-sourced for use https://codepen.io/Tibixx/pen/PryaPK

const FlowField = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let w,
      h,
      field,
      columns,
      rows,
      fieldSize = 75,
      noise3D,
      noiseZ = 0,
      noiseSpeed = 0.0015,
      fieldForce = 0.05,
      particles,
      particleCount = 10000,
      particleSize = 0.56,
      hueBase = 232,
      hueRange = 10,
      trailLength = 0.05;

    function drawCirc(ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = "#CCC";
      ctx.beginPath();
      ctx.arc(
        ctx.canvas.width / 2,
        ctx.canvas.height / 2,
        50 * Math.sin(frameCount * 0.002) ** 2,
        0,
        2 * Math.PI
      );
      ctx.fill();
    }

    function initField() {
      field = new Array(columns);
      for (let x = 0; x < columns; x++) {
        field[x] = new Array(rows);
        for (let y = 0; y < rows; y++) {
          let v = new Vector(0, 0);
          field[x][y] = v;
        }
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        let particle = new Particle(Math.random() * w, Math.random() * h);
        particles.push(particle);
      }
    }

    function calcField() {
      for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
          let angle = (noise3D(x / 20, y / 20, noiseZ) + 1) * Math.PI;
          let length =
            ((noise3D(x / 40 + 40000, y / 40 + 40000, noiseZ) + 1) / 2) *
            fieldForce;

          field[x][y].setLength(length);
          field[x][y].setAngle(angle);
        }
      }
    }

    function drawParticles(ctx) {
      particles.forEach((p) => {
        var ps = (p.fieldSize =
          Math.abs(p.vel.x + p.vel.y) * particleSize + 0.3);
        ctx.fillStyle =
          "hsl(" +
          (hueBase + p.hue + (p.vel.x + p.vel.y) * hueRange) +
          ", 100%, 50%)";
        ctx.fillRect(p.pos.x, p.pos.y, ps, ps);
        let pos = p.pos.div(fieldSize);
        let v;
        if (pos.x >= 0 && pos.x < columns && pos.y >= 0 && pos.y < rows) {
          v = field[Math.floor(pos.x)][Math.floor(pos.y)];
        }
        p.move(v);
        p.wrap(w, h);
      });
    }

    function drawBackground(ctx) {
      ctx.fillStyle = "rgba(0,0,0," + trailLength + ")";
      ctx.fillRect(0, 0, w, h);
    }

    function reset() {
      const rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      noise3D = createNoise3D();

      w = canvas.width;
      h = canvas.height;
      columns = Math.round(w / fieldSize) + 1;
      rows = Math.round(h / fieldSize) + 1;
      initField();
      initParticles();
    }

    function draw(ctx) {
      calcField();
      noiseZ += noiseSpeed;

      drawBackground(ctx);
      drawParticles(ctx);
    }

    reset();
    window.addEventListener("resize", reset);

    console.log("flow field starting...");

    let animationFrameId;
    let frameCount = 0;

    draw(context, frameCount);

    const render = () => {
      // frameCount++;
      draw(context);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default FlowField;
