import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <h1>Hi I'm Kita</h1>
      <ReactTypingEffect
        text={["-Software Engineer"]}
      />
      <br />

      {/* <ReactTypingEffect
        text={["Lakita Gaither"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: 'white'} : {}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      /> */}
  
    </React.Fragment>
  );
}

export default App;
