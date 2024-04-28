import React, { useState } from 'react';

const App = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [relationship, setRelationship] = useState('');

  const handleChangeName1 = (event) => {
    setName1(event.target.value);
  };

  const handleChangeName2 = (event) => {
    setName2(event.target.value);
  };

  const handleCalculateRelationship = () => {
    const name1Chars = name1.split('');
    const name2Chars = name2.split('');
    
    // Remove common characters
    const uniqueName1Chars = name1Chars.filter(char => !name2Chars.includes(char));
    const uniqueName2Chars = name2Chars.filter(char => !name1Chars.includes(char));

    const combinedLength = uniqueName1Chars.length + uniqueName2Chars.length;
    const relationshipIndex = combinedLength % 6;

    switch (relationshipIndex) {
      case 1:
        setRelationship('Friends');
        break;
      case 2:
        setRelationship('Love');
        break;
      case 3:
        setRelationship('Affection');
        break;
      case 4:
        setRelationship('Marriage');
        break;
      case 5:
        setRelationship('Enemy');
        break;
      case 0:
        setRelationship('Siblings');
        break;
      default:
        setRelationship('Please enter valid input');
    }
  };

  const handleClear = () => {
    setName1('');
    setName2('');
    setRelationship('');
  };

  return (
    <div>
      <input
        type="text"
        value={name1}
        onChange={handleChangeName1}
        placeholder="Enter name 1"
        data-testid="input1"
      />
   
      <input
        type="text"
        value={name2}
        onChange={handleChangeName2}
        placeholder="Enter name 2"
        data-testid="input2"
      />
   
      <button onClick={handleCalculateRelationship} data-testid="calculate_relationship">
        Calculate Relationship
      </button>
      <button onClick={handleClear} data-testid="clear">
        Clear
      </button>
      <h3 data-testid="answer">{relationship}</h3>
    </div>
  );
};

export default App;