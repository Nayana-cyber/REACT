import  {useEffect,useState} from "react";
import PdfTemplate  from "./PDF/pdfTemplate";
import './App.css';

function App() {

  const [InvoiceNumber, setInvoiceNumber] =useState('');
  const [Dates, setDates] =useState('');
  const [view, setView] =useState('true');
  //const [error, setError] = useState(''); //validation error message

  useEffect(()=>{
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    setDates(date);
  },[])

  const create = () => {
    setView(false);
  }

  return (
    <>
    {
      view?
    
      <div className="container">
        <div className="form">
          <div className="inputs">
           
              <input type="text" placeholder='Invoice number' value={InvoiceNumber} onChange={(e)=>setInvoiceNumber(e.target.value)} />
            </div>
            <div className="buttons">
              <button onClick={create}>Create</button>
            </div>
          </div>
        </div>
      : <PdfTemplate InvoiceNumber={InvoiceNumber} data={Dates} />
}
    </>
  );
}

export default App;


