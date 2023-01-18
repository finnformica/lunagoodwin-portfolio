import { useRef, useEffect } from "react";
import { Particle } from "./particle";
import { Vector } from "./vector";

const FlowField = (props) => {
  const canvasRef = useRef(null);

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#CCC";
    ctx.beginPath();
    ctx.arc(
      ctx.canvas.width / 2,
      ctx.canvas.height / 2,
      200 * Math.sin(frameCount * 0.002) ** 2,
      0,
      2 * Math.PI
    );
    ctx.fill();
  };

  function reset(canvas) {
    const rect = canvas.parentNode.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    // reset(canvas);
    // window.addEventListener("resize", () => reset(canvas));

    //Our draw came here
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
};

export default FlowField;
