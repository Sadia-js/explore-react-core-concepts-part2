import './App.css'
import Counter from './Counter';
import Friends from './friends';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick(){
    alert('button clicked');
  }
  const handleClick2 = () => {
    alert('button-2 clicked');
  }
  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me 2</button>
      <button onClick={()=> {alert('third button clicked')}}>third</button>
      <button onClick={()=>addToFive(3)}>forth</button>

    </>
  )
}

export default App
