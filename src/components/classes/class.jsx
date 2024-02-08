import React, { useState } from 'react';
import { CLASS_LIST } from '../../consts.js';

export default function Class({ characterAttributes }) {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleClassClick = (className) => {
    setSelectedClass(selectedClass === className ? null : className);
  };
console.log(characterAttributes)

const meetsRequirements = (className) => {
    const classRequirements = CLASS_LIST[className];
    for (const [attribute, min] of Object.entries(classRequirements)) {
        //gets past and returns green/true if all met...
      if (characterAttributes[attribute] < min) {
        return false; 
      }
    }
    return true;
  };

  return (
    <div>
      <h2>Character Classes</h2>
      {Object.keys(CLASS_LIST).map((className) => (
        <div key={className}>
          <div
            onClick={() => handleClassClick(className)}
            style={{
              color: meetsRequirements(className) ? 'green' : 'white', 
            }}
          >
           {className}
          </div>
          {selectedClass === className && (
            <ul>
              {Object.entries(CLASS_LIST[className]).map(([attribute, min]) => (
                <ul key={attribute}>
                  {attribute}: {min}
                </ul>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};