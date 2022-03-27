import React, { useState } from 'react';
import Modal from './Modal';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>
        Open modal
      </button>

      <Modal open={open} setOpen={setOpen} />
    </div>
  )
}
