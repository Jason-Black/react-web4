import React from 'react';

const cursorStyles = [
  { name: 'Default', class: 'cursor-default' },
  { name: 'Pointer', class: 'cursor-pointer' },
  { name: 'Wait', class: 'cursor-wait' },
  { name: 'Text', class: 'cursor-text' },
  { name: 'Move', class: 'cursor-move' },
  { name: 'Help', class: 'cursor-help' },
  { name: 'Not Allowed', class: 'cursor-not-allowed' },
  { name: 'Crosshair', class: 'cursor-crosshair' },
  { name: 'Zoom In', class: 'cursor-zoom-in' },
  { name: 'Zoom Out', class: 'cursor-zoom-out' },
  { name: 'Grab', class: 'cursor-grab' },
  { name: 'Grabbing', class: 'cursor-grabbing' },
];

 const CursorDemo = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {cursorStyles.map((style, index) => {
        const hue = (Math.random() * 720) % 360; // Change 360 to 720 for more variance
        return (
          <div
            key={index}
            className={`flex items-center justify-center h-32 rounded-lg shadow-lg text-white text-lg font-semibold ${style.class}`}
            style={{
              backgroundColor: `hsl(${hue}, 70%, 50%)`,
            }}
          >
            {style.name}
          </div>
        );
      })}
    </div>
  );
};

export default CursorDemo;
