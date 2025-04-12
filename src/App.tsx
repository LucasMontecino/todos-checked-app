import Header from './components/Header';
import Wrapper from './components/Wrapper';
import { type Todo } from './types';
import ListTodos from './components/ListTodos';
import AddTodo from './components/AddTodo';
import { v4 as uuid } from 'uuid';
import useTodos from './hooks/useTodos';

const initialData: Todo[] = [
  {
    id: uuid(),
    label: 'Go cycling.',
    checked: false,
    created_at: new Date(Date.now()),
  },
  {
    id: uuid(),
    label: 'Taking the trash out.',
    checked: false,
    created_at: new Date(Date.now()),
  },
  {
    id: uuid(),
    label: 'Seeking for a job.',
    checked: false,
    created_at: new Date(Date.now()),
  },
];

function App() {
  const { todos, addTodo, handleChange, handleDelete } =
    useTodos(initialData, 'todos');

  return (
    <Wrapper>
      <Header title="Todo App with Checked"></Header>
      <AddTodo addTodo={addTodo} />
      <ListTodos
        todos={todos}
        onChange={handleChange}
        handleDelete={handleDelete}
      />
    </Wrapper>
  );
}

export default App;
