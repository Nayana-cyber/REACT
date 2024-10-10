import { useState } from "react"; 
import FirstComponent from "./Components/FirstComponent";

const App = () => {


  const [x,setx] = useState(0);

  const btnClick = ()  => {
    console.log("Clicked");
    setx(x+1);
    console.log(x)
  }
  return (
    <div>
      {x}
      <button onClick={()=>{btnClick()}}>Click me </button>
      <FirstComponent data={x}/>
    </div>
  )
}

export default App
