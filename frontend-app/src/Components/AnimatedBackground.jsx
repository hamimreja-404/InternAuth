import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  // Canvas Grid Trail Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let squares = [];
    const gridSize = 40;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize size
    window.addEventListener('resize', resize);
    resize();

    // Track mouse movement
    const handleMouseMove = (e) => {
      // Calculate which grid cell the mouse is in
      const x = Math.floor(e.clientX / gridSize) * gridSize;
      const y = Math.floor(e.clientY / gridSize) * gridSize;

      // If square exists, reset its opacity. Otherwise, add a new one.
      const existing = squares.find(sq => sq.x === x && sq.y === y);
      if (existing) {
        existing.opacity = 1;
      } else {
        squares.push({ x, y, opacity: 1 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Render Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw a faint background grid structure
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < canvas.width; i += gridSize) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
      }

      // 2. Draw active trailing squares
      for (let i = 0; i < squares.length; i++) {
        const sq = squares[i];
        
        // Fading white fill
        ctx.fillStyle = `rgba(255, 255, 255, ${sq.opacity * 0.15})`;
        ctx.fillRect(sq.x, sq.y, gridSize, gridSize);

        // Brighter fading white border
        ctx.strokeStyle = `rgba(255, 255, 255, ${sq.opacity * 0.5})`;
        ctx.strokeRect(sq.x, sq.y, gridSize, gridSize);

        // Decrease opacity (controls fade-out speed)
        sq.opacity -= 0.09;
      }

      // Remove fully faded squares from the array
      squares = squares.filter(sq => sq.opacity > 0);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    // Fixed to the back of the screen, ignoring all pointer events.
    // Base background is a very deep, professional slate/blue.
    <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1] pointer-events-none bg-[#020617]">
      
      {/* Global CSS for Custom Pen Cursor */}
      <style>
        {`
          * {
            /* Using a Base64 SVG of a stylized pen. Focus point is set to X:2 Y:22 (the bottom left tip) */
            cursor: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.8));'%3E%3Cpath d='M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z'%3E%3C/path%3E%3C/svg%3E") 2 22, auto !important;
          }
        `}
      </style>

      {/* Grid Trail Canvas Layer */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10"
      />

      {/* We use large, heavily blurred orbs to create the "Mesh Gradient" effect.
        The colors are "Trustworthy & Cool": Blues, Cyans, Teals, and Indigos.
      */}

      {/* Top Left Orb - Deep Indigo */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1.1, 1], 
          x: ['-10%', '10%', '-5%', '-10%'], 
          y: ['-10%', '5%', '-10%', '-10%'] 
        }} 
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-indigo-700/40 rounded-full mix-blend-screen filter blur-[150px]"
      />
      
      {/* Bottom Right Orb - Bright Cyan */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1, 1], 
          x: ['10%', '-10%', '5%', '10%'], 
          y: ['10%', '-5%', '10%', '10%'] 
        }} 
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[60vw] h-[60vh] bg-cyan-600/30 rounded-full mix-blend-screen filter blur-[150px]"
      />

      {/* Top Right Orb - Trustworthy Blue */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1.2, 1], 
          x: ['5%', '-15%', '5%', '5%'], 
          y: ['-5%', '15%', '-5%', '-5%'] 
        }} 
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[45vw] h-[55vh] bg-blue-600/40 rounded-full mix-blend-screen filter blur-[140px]"
      />

      {/* Bottom Left Orb - Soft Sky/Teal */}
      <motion.div 
        animate={{ 
          scale: [1.1, 1, 1.2, 1.1], 
          x: ['-5%', '15%', '-10%', '-5%'], 
          y: ['5%', '-10%', '5%', '5%'] 
        }} 
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[55vw] h-[45vh] bg-sky-500/30 rounded-full mix-blend-screen filter blur-[160px]"
      />

      {/* Subtle Grain/Noise Overlay to give it a premium texture and prevent color banding */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay z-0"
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      ></div>
      
    </div>
  );
}