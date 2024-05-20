import React, { useState } from 'react';
import Modal from 'react-modal';
import './common.css'; // CSSファイルをインポート

Modal.setAppElement('#root'); // アプリのルート要素に合わせてください

function TelModal({ isOpen, onRequestClose }) {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = () => {
    window.location.href = 'https://member-stg.beenavi.jp/login';
  };

  const handleResendCode = async () => {
    try {
      const response = await fetch('https://react-tutorial-nu-roan.vercel.app/api/hello', {
        method: 'GET', // APIのメソッドタイプに応じて変更（GET, POSTなど）
      });
      if (response.ok) {
        const data = await response.json();
        console.log('コード再送信成功:', data);
        // 必要に応じて追加の処理を行う
      } else {
        console.error('コード再送信失敗:', response.statusText);
      }
    } catch (error) {
      console.error('エラーが発生しました:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="modal-content">
        <h2 className="modal-header">認証コード入力</h2>
        <input 
          type="text" 
          value={code} 
          onChange={handleChange} 
          className="modal-input"
        />
        <div className='button-container'>
          <button 
            onClick={handleSubmit} 
            className="modal-button"
          >
            送信
          </button>
          <button 
            onClick={onRequestClose} 
            className="modal-back-button"
          >
            戻る
          </button>
          <button 
            onClick={handleResendCode} 
            className="modal-resend-button"
          >
            コード再送信
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default TelModal;
