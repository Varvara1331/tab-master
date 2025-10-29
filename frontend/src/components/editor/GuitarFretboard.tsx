import React from "react";

const GuitarFretboard: React.FC = () => {
  const strings = [
    { note: "E", number: 1 },
    { note: "B", number: 2 },
    { note: "G", number: 3 },
    { note: "D", number: 4 },
    { note: "A", number: 5 },
    { note: "E", number: 6 },
  ];

  const frets = Array.from({ length: 27 }, (_, i) => i + 1);

  return (
    <div className="fretboard">
      <div className="string-row-container">
        {strings.map((string) => (
          <div key={string.number} className="string-row">
            <span className="string-label">{string.note}</span>
            {frets.map((fret) => (
              <button key={fret} className="fret-button">
                {fret}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuitarFretboard;
