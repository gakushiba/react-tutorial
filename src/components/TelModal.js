import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // アプリのルート要素に合わせてください

function TelModal({ isOpen, onRequestClose }) {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = () => {
    // コード送信の処理をここに追加
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div>
        <input type="text" value={code} onChange={handleChange} />
        <button onClick={handleSubmit}>送信</button>
        <button onClick={onRequestClose}>戻る</button>
        <button>コード再送信</button>
      </div>
    </Modal>
  );
}

export default TelModal;
