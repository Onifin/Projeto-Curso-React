import Provider from './state/filter/Components/Provider';
import ToDoProvider from './state/toDo/Components/Provider';
import ToDoApp from './pages/ToDoApp/ToDoApp'

export default function App() {
  return (
    <ToDoProvider>
      <Provider>
        <ToDoApp/>
      </Provider>
    </ToDoProvider>
  );
}


