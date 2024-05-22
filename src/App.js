import {useState, useEffect} from "react";
function App() {

const [input, setInput] = useState('')
const [tarefas, setTarefa] = useState([])
function handleTask(e){
  e.preventDefault()
  setTarefa([...tarefas, input])
  setInput('')
}

useEffect(()=>{
  const salvarStorage = localStorage.getItem('@tarefa')
  if(salvarStorage){
    setTarefa(JSON.parse(salvarStorage))
  }
}, []);

useEffect(()=>{
  localStorage.setItem('@tarefa', JSON.stringify(tarefas))
}, [tarefas]);

  return (
    <div>
    <form onSubmit={handleTask}>
      <h1>TO-DO list</h1>
      <label>Registrar Tarefas</label><br/>
      <input placeholder="Insira uma tarefa"  value={input}
      onChange={(e) => setInput(e.target.value)}></input><br/>
      <button type="submit">Registrar</button><br/>
    </form>
      <div>
        <ul>
          {tarefas.map((tarefa)=>(
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
