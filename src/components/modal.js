import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function AuthModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="App">
      <button onClick={openModal}>モーダルを開く</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>閉じる</button>
      </Modal>
    </div>
  );
}

export default AuthModal;
