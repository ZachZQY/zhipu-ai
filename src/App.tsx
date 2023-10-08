import { ZhipuAi } from './components/ZhipuAi';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { useState } from "react";
function App() {

  const [globalData, setGlobalData] = useState({});
  return (
    <BrowserRouter>
      <div style={{ height: '60px', width: '60px' }}>
        <ZhipuAi globalData={globalData} setGlobalData={
          setGlobalData
        } />
      </div>
    </BrowserRouter>
  );
}

export default App;
