// Hooks
import { useState } from 'react';

// components
import Challenge from './components/Challenge';
import Events from './components/Events';
import MyComponent from './components/MyComponent';
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';

// styles / CSS
import './App.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <h1 style={{ fontSize: '75px' }}>Fundamentos React</h1>
      <Challenge />
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent a={'App.jsx'} />
      <Events />
    </div>
  );
}

export default App
