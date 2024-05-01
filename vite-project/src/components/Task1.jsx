import React, { useState } from 'react';


function Modal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div>
        <h2>Modal Title</h2>
        <p>This is a modal. You can customize the content as you wish.</p>
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
}

function Task1() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Task1; 


