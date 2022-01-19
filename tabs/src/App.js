import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Display from './components/Display';


function App() {

  const tabs = ([
    { name: "Tab 1",message: "Tab 1 is SUPER FUN!" }, 
    { name: "Tab 2",message: "Tab 2 is here for YOU!" }, 
    { name: "Tab 3",message: "Tab 3 can't see me!" }, 
    { name: "Tab 4",message: "Tab 4 on the floor!" },
  ]);

  const [message, setMessage] = useState([
    ("nothing to see here...")
  ]);

  const currentMessage = (idx) => {
    setMessage(tabs[idx].message)
  }

  return (
    <div className="App">
      <Tabs tabs={tabs} currentMessage={currentMessage}/>
      <Display message={message} />

    </div>
  );
}

export default App;
