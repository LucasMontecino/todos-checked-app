import { type Todo } from '../types';
import ListItem from './ListItem';
import Paragraph from './Paragraph';

export default function ListTodos({
  todos,
  onChange,
  handleDelete,
}: {
  todos: Todo[];
  onChange: (id: string, checked: boolean) => void;
  handleDelete: (id: string) => void;
}) {
  return todos && todos.length > 0 ? (
    <ul className="w-full max-w-2xs border-2 rounded-b-md bg-[url(./assets/paper-bg.jpeg)] bg-no-repeat bg-cover">
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={todo}
          onChange={onChange}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  ) : (
    <Paragraph text="No tienes tareas pendientes." />
  );
}
