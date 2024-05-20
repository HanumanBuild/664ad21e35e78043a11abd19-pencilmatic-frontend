import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import axios from 'axios';

function Dashboard() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const canvasInstance = new fabric.Canvas(canvasRef.current, {
      height: 800,
      width: 800,
      backgroundColor: 'white',
    });
    setCanvas(canvasInstance);
  }, []);

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
      <canvas ref={canvasRef} id="canvas" className="border"></canvas>
      <button onClick={saveDrawing} className="bg-blue-500 text-white p-2 mt-4">Save Drawing</button>
    </div>
  );
}

export default Dashboard;