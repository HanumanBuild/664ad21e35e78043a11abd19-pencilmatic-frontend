import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

function Dashboard() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      height: 800,
      width: 800,
      backgroundColor: 'white',
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">Dashboard</h1>
      <canvas ref={canvasRef} id="canvas" className="border"></canvas>
    </div>
  );
}

export default Dashboard;