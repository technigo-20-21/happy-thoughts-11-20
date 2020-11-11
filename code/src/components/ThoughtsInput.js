import React, { useState } from 'react';

export const ThoughtsInput = ({ onThoughtChange }) => {
  const [newThought, setNewThought] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onThoughtChange(newThought);
    setNewThought('');
  };

  return (
    <section className="thought-container grey-background">
      <p className="add-thought-input-header">What&apos;s making you happy right now?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newThought}
          rows={4}
          onChange={(event) => setNewThought(event.target.value)}
          className="add-thought-input" />
        <input
          type="submit"
          value="Send Happy Thought"
          className="add-thought-button" />
      </form>
    </section>
  );
};

