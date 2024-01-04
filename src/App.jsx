import { useState } from "react";

// Write your Color component here
// eslint-disable-next-line react/prop-types
const Color = ({ color, colorSetter }) => {

  return (
    <div 
      className={color}
      onClick={() => colorSetter(color)}
    >
      <p style={{ color: "white", textAlign: 'center', padding: '25px'}}>
        {color}
      </p>
    </div>
  );
};


const App = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  
  return (
    <div id="container">
      <div id="navbar" className={selectedColor}>
        <div>Currently selected: </div>
        <div>{selectedColor}</div>
      </div>
      <div id="colors-list">{/* colors go here */}</div>

      <div id="colors-list">
        <Color color="blue" colorSetter={setSelectedColor}/>
        <Color color="violet" colorSetter={setSelectedColor}/>
        <Color color="black" colorSetter={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
