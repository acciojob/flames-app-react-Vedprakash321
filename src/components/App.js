import React, { useState } from "react";



const relations = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"]
function findRelation(name1, name2) {
    // calculate frequency for name1 
    let map = {};
    let n = name1.length, m = name2.length;
    for (let i = 0; i < n; i++) {
        let char = name1[i];
        if (map[char]) {
            map[char]++;
        }
        else map[char] = 1;
    }

    let common = 0;
    for (let i = 0; i < m; i++) {
        let char = name2[i];
        if (map[char]) {
            map[char]--;
            common++;
        }
    }
    return relations[(n + m - 2 * common) % 6]
}

const App = () => {
  const styles = {
   
    text: {
      color: 'rgb(116,192,225)',
      fontSize: '16px',
    },
  };
    // 2 inputs 
    // 2 buttons 
    // 1 result text

    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [relation, setRelation] = useState('');

    const calculate = () => {
        setRelation(findRelation(name1, name2))
    }
    const clear = () => {
        setName1('');
        setName2('');
        setRelation('')
    }

    return (
        <div style={{ margin: 70 }} id="main">
            <input value={name1} onChange={(e) => setName1(e.target.value)}placeholder="Enter first name"  data-testid="input1"/>

            <input value={name2}onChange={(e) => setName2(e.target.value)}placeholder="Enter second name"data-testid="input2"/>

            <button data-testid="calculate_relationship"style={styles.text} onClick={calculate}>Calculate Relationshuip Future</button>

            <button style={styles.text} onClick={clear} data-testid="clear">Clear</button>

            {relation && <h3 data-testid="answer">{relation}</h3>}
        </div>
    );
}


export default App;