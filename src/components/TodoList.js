import React from 'react';

export default function TodoList({ todos, onToggle, onDelete }) {
  if (!todos.length) return <p className="empty">No tasks yet.</p>;

  return (
    <ul className="list">
      {todos.map(t => (
        <li key={t.id} className="item">
          <div>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => onToggle(t.id)}
            />
            <span className={t.done ? 'done' : ''}>{t.text}</span>
          </div>
          <button className="delete" onClick={() => onDelete(t.id)}>✖</button>
        </li>
      ))}
    </ul>
  );
}
