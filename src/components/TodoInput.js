import React, { useState } from 'react';

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  };

  return (
    <form className="input-row" onSubmit={submit}>
      <input
        className="input"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button className="btn">Add</button>
    </form>
  );
}
