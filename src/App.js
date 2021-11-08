import './App.css';
import Noti from './Noti';
import {useState} from "react";

function App() {
  const [x, setx] = useState(false);
  return (
    <>
    <div className="homei">
      <button className="btn" onClick={()=>{
        return(
          setx(true)
        )
      }} >For OTP Verification</button>
      <Noti trigger={x} settr={setx}/>
    </div>
    </>
  );
}

export default App;
