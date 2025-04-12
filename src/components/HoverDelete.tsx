import { MdDelete } from 'react-icons/md';
import { toast } from 'sonner';

export default function HoverDelete({
  id,
  handleDelete,
}: {
  id: string;
  handleDelete: (id: string) => void;
}) {
  return (
    <div className="opacity-0 w-full h-full transition duration-300 absolute left-0 top-0 flex justify-end hover:opacity-100">
      <span
        className="pr-2 pt-2 w-fit h-fit"
        title="Eliminar tarea"
        onClick={() => {
          handleDelete(id);
          toast.success('Tarea eliminada con éxito!');
        }}
      >
        <MdDelete />
      </span>
    </div>
  );
}
