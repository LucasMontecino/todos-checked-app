import { useState } from 'react';
import Form from './Form';
import { type Todo } from '../types';
import { toast } from 'sonner';

const getCleanPhrase = (phrase: string): string => {
  return `${phrase[0].toUpperCase()}${phrase.slice(1)}.`;
};

export default function AddTodo({
  addTodo,
}: {
  addTodo: (input: Todo['label']) => void;
}) {
  const [input, setInput] = useState('');
  return (
    <Form
      onSubmit={() => {
        addTodo(getCleanPhrase(input));
        toast.success('Task added successfully!');
        setInput('');
      }}
    >
      <input
        className="py-4 w-full bg-slate-200 text-black px-2 md:text-2xl outline-0"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task..."
      />
      <button type="submit" className="hidden"></button>
    </Form>
  );
}
