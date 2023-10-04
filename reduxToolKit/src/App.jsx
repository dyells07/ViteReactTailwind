
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCode } from '@fortawesome/free-solid-svg-icons';

function App() {
  
  return (
    <>
      <h1 ><FontAwesomeIcon icon={faCode} /> Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
