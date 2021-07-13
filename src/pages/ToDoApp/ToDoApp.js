import ToDoCreator from "./containers/ToDoCreator/ToDoCreator";
import ToDoList from "./containers/ToDoList/ToDoList";
import ToDoFilter from "./containers/ToDoFilter/ToDoFilter";

export default function ToDoApp(){
  return(
    <>
      <ToDoCreator/>
      <ToDoList/>
      <ToDoFilter/>
    </>
  )
}