import React from "react";
import useEditor from "@app/hooks/use-editor";

const ColorPicker = () => {
  const { palette } = useEditor();

  return (
    <>
      <div className="color-picker">
        {palette.map((color) => (
          <Swatch key={color} color={color} />
        ))}
      </div>

      <style jsx>{`
        .color-picker {
          display: flex;
          gap: 6px;
        }
      `}</style>
    </>
  );
};

interface SwatchProps {
  color: string;
}

const Swatch = ({ color }: SwatchProps) => {
  const { brushColor, setBrushColor } = useEditor();
  const borderColor = color === brushColor ? "dodgerblue" : "hsl(0deg 0% 80%)";

  return (
    <>
      <button
        className="color-swatch-button"
        onClick={() => setBrushColor(color)}
        style={{ borderColor }}
      >
        <div className="color-swatch" style={{ background: color }} />
      </button>
      <style jsx>{`
        .color-swatch-button {
          padding: 4px;
          cursor: pointer;
          width: 2rem;
          height: 2rem;
          border: 2px solid hsl(0deg 0% 80%);
          background: white;
          border-radius: 50%;
          will-change: border-color, transform;
          transition: border-color 0.2s ease-in-out, transform 0.2s ease-in-out;
        }

        .color-swatch-button:hover {
          transform: scale(1.1);
        }

        .color-swatch {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

export default ColorPicker;