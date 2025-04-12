import { toast } from 'sonner';
import { type Todo } from '../types';
import HoverDelete from './HoverDelete';

export default function ListItem({
  todo,
  onChange,
  handleDelete,
}: {
  todo: Todo;
  onChange: (id: string, checked: boolean) => void;
  handleDelete: (id: string) => void;
}) {
  return (
    <li className="border-b-1 border-zinc-500 last:border-0 text-left  ">
      <label className="flex items-center gap-4 md:text-xl text-zinc-800 font-semibold py-4 px-2 cursor-pointer relative">
        <HoverDelete
          id={todo.id}
          handleDelete={handleDelete}
        />
        <input
          className="cursor-pointer"
          type="checkbox"
          checked={todo.checked}
          onChange={(e) => {
            onChange(todo.id, e.target.checked);
            if (!todo.checked) {
              toast.success('Tarea completada!');
            }
          }}
        />
        <span
          className={todo.checked ? 'line-through' : ''}
        >
          {todo.label}
        </span>
      </label>
    </li>
  );
}
