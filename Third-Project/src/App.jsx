

const App = () => {
 
  let array = ["user1","user2","user3","user4","user5"];
  return (
    <div>
      
      {array.map((user)=>{return <h2>{user}</h2>})}
    </div>
  )
}

export default App
