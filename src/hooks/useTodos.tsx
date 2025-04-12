import { useEffect, useState } from 'react';
import { type Todo } from '../types';
import { v4 as uuid } from 'uuid';

export default function useTodos(
  initialData: Todo[],
  key: string
) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const initialStorage = localStorage.getItem(key);
    if (initialStorage) {
      return JSON.parse(initialStorage);
    }

    const storage = localStorage.setItem(
      'todos',
      JSON.stringify(initialData)
    );
    return storage;
  });

  const addTodo = (input: Todo['label']) => {
    setTodos((prev) => [
      {
        id: uuid(),
        label: input,
        checked: false,
        created_at: new Date(Date.now()),
      },
      ...prev,
    ]);
  };

  const handleChange = (id: string, checked: boolean) => {
    setTodos((prev) => {
      const updated = checked
        ? new Date(Date.now())
        : undefined;
      return prev.map((item) =>
        item.id === id
          ? {
              ...item,
              checked,
              completed_at: updated,
            }
          : item
      );
    });
  };

  const handleDelete = (id: string) => {
    setTodos((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos));
  }, [todos, key]);

  const activeTodos = todos.filter(
    (el) => !el.completed_at
  );

  activeTodos.sort((a, b) =>
    a.created_at > b.created_at ? -1 : 1
  );

  const completedTodos = todos.filter(
    (el) => el.completed_at !== undefined
  );

  completedTodos.sort((a, b) => {
    if (a.completed_at && b.completed_at) {
      return a.completed_at > b.completed_at ? 1 : -1;
    }
    return 0;
  });

  const newTodos = [...activeTodos, ...completedTodos];

  return {
    todos: newTodos,
    setTodos,
    addTodo,
    handleChange,
    handleDelete,
  };
}
