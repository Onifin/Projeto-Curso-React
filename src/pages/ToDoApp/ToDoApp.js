import ToDoCreator from "./containers/ToDoCreator/ToDoCreator";
import ToDoList from "./containers/ToDoList/ToDoList";


export default function ToDoApp(){
  return(
    <>
      <ToDoCreator/>
      <ToDoList/>
      <footer>a</footer>
    </>
  )
}