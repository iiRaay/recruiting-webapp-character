import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST } from './consts.js';
import Attributes from './components/attributes/attributes.jsx';
import Class from './components/classes/class.jsx';


const createDefaultAttributes = () => {
  const defaultAttributes = {};
  ATTRIBUTE_LIST.forEach(attribute => {
    defaultAttributes[attribute] = 10;
  });
  return defaultAttributes;
}

function App() {
  // const [num, setNum] = useState(0);
  const [characterAttributes, setCharacterAttributes] = useState(createDefaultAttributes);
  console.log(characterAttributes)
  const decrementAttribute = (attributeName, value) => {
    if ((characterAttributes[attributeName]) <= 0) {
      alert("Attributes cannot be less than 0");
      return;
    }
  
    setCharacterAttributes(prevAttributes => ({
      ...prevAttributes,
      [attributeName]: value
    }));
  };

  const increaseAttribute = (attributeName, value) => {
    // add total attributes
    const totalAttributePoints = Object.values(characterAttributes)
    .reduce((total, currentValue) => total + currentValue, 0);

    //exit of 70+
    if (totalAttributePoints >= 70) {
      alert("Total attribute points cannot exceed 70");
      return;
    }

    setCharacterAttributes(prevAttributes => ({
      ...prevAttributes,
      [attributeName]: value
    }));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        {/* will want to throw this into a characterSheet later on... -> this for adding chars/subtracting chars */}
        <h1>Attributes</h1>
        {ATTRIBUTE_LIST.map(attribute => (
          <Attributes
            key={attribute}
            attribute={attribute}
            count={characterAttributes[attribute]}
            onIncrement={() => increaseAttribute(attribute, (characterAttributes[attribute]) + 1)}
            onDecrement={() => decrementAttribute(attribute, (characterAttributes[attribute]) - 1)}
          />
        ))}
        <Class characterAttributes={characterAttributes} />
      </section>
    </div>
  );
}

export default App;
