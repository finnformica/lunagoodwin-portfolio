import { useRef, useEffect } from "react";
import { Particle } from "./particle";
import { Vector } from "./vector";
import { createNoise3D } from "simplex-noise";

const FlowField = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let field,
      w,
      h,
      columns,
      rows,
      particles,
      noise3D,
      noiseZ = 0,
      particleCount = 10000,
      particleSize = 0.56,
      fieldSize = 75,
      fieldForce = 0.25,
      noiseSpeed = 0.0015,
      trailLength = 0.05,
      hueBase = 232,
      hueRange = 10;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function initParticles() {
      particles = [];
      let numberOfParticles = particleCount;
      for (let i = 0; i < numberOfParticles; i++) {
        let particle = new Particle(Math.random() * w, Math.random() * h);
        particles.push(particle);
      }
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

    function reset() {
      const rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      noise3D = createNoise3D();

      w = canvas.width;
      h = canvas.height;
      columns = Math.round(w / fieldSize) + 1;
      rows = Math.round(h / fieldSize) + 1;
      initParticles();
      initField();
    }

    function draw() {
      requestAnimationFrame(draw);
      calcField();
      noiseZ += noiseSpeed;
      drawBackground();
      drawParticles();
    }

    function drawBackground() {
      ctx.fillStyle = "rgba(0,0,0," + trailLength + ")";
      ctx.fillRect(0, 0, w, h);
    }

    function drawParticles() {
      particles.forEach((p) => {
        var ps = (p.fieldSize =
          Math.abs(p.vel.x + p.vel.y) * particleSize + 0.3);
        ctx.fillStyle =
          "hsl(" +
          (hueBase + p.hue + (p.vel.x + p.vel.y) * hueRange) +
          ", 100%, 50%)";
        // ctx.fillStyle =
        //   "hsl(0, 0%," +
        //   (hueBase + p.hue + (p.vel.x + p.vel.y) * hueRange + 40) +
        //   "%)";
        ctx.fillRect(p.pos.x, p.pos.y, ps, ps);
        let pos = p.pos.div(fieldSize);
        let v;
        if (pos.x >= 0 && pos.x < columns && pos.y >= 0 && pos.y < rows) {
          v = field[Math.floor(pos.x)][Math.floor(pos.y)];
        }
        p.move(v);
        p.wrap();
      });
    }

    reset();
    window.addEventListener("resize", reset);
    let animationFrameId;

    const render = () => {
      draw();
      animationFrameId = window.requestAnimationFrame(render);
    };
    // render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default FlowField;
