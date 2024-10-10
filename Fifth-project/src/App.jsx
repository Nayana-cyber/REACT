

const App = () => {

  const btnClick = ()  => {
    console.log("Clicked");
  }
  return (
    <div>
      <button onClick={()=>{btnClick()}}>Click me </button>
    </div>
  )
}

export default App
