import { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import RenderBoxes from './components/RenderBoxes';

function App() {

  ///// Array of box objects \\\\\
  const [boxes, setBoxes] = useState([
    { color: "red", height: 100, width: 100 },
    { color: "gold", height: 100, width: 100 },
    { color: "green", height: 100, width: 100 },
  ]);
  console.log(boxes)

///// copys current array and adds new object to array \\\\\
  const addBox = (newBox) => {
    setBoxes([
      ...boxes, newBox
    ])
  }

///// keyword={functionName} passes function as props to children as props.keyword \\\\\
  return (
    <div className="App">

        <h3>Box Generator</h3>
        <BoxForm addBox={addBox} />
        <RenderBoxes boxes={boxes} />

    </div>
  );
}

export default App;
