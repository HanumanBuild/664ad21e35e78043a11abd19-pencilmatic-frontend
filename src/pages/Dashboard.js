import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import axios from 'axios';

function Dashboard() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [color, setColor] = useState('black');
  const [brushSize, setBrushSize] = useState(5);

  useEffect(() => {
    const canvasInstance = new fabric.Canvas(canvasRef.current, {
      height: 800,
      width: 800,
      backgroundColor: 'white',
    });
    setCanvas(canvasInstance);

    canvasInstance.isDrawingMode = true;
    canvasInstance.freeDrawingBrush.color = color;
    canvasInstance.freeDrawingBrush.width = brushSize;

    return () => {
      canvasInstance.dispose();
    };
  }, [color, brushSize]);

  const saveDrawing = async () => {
    const drawingData = JSON.stringify(canvas.toJSON());
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_PENCILMATIC_BACKEND_URL}/drawings`,
        { drawingData },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">Dashboard</h1>
      <div className="flex space-x-4 mb-4">
        <label>
          Brush Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="ml-2"
          />
        </label>
        <label>
          Brush Size:
          <input
            type="number"
            value={brushSize}
            onChange={(e) => setBrushSize(parseInt(e.target.value))}
            className="ml-2 w-16"
          />
        </label>
      </div>
      <canvas ref={canvasRef} id="canvas" className="border"></canvas>
      <button onClick={saveDrawing} className="bg-blue-500 text-white p-2 mt-4">Save Drawing</button>
    </div>
  );
}

export default Dashboard;