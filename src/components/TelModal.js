import React, { useState } from 'react';
import Modal from 'react-modal';
import './common.css'; // CSSファイルをインポート

Modal.setAppElement('#root'); // アプリのルート要素に合わせてください

function TelModal({ isOpen, onRequestClose }) {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = (ok) => {
    if (ok) {
      // console.log('ok');
      //window.location.href = 'https://member.beenavi.jp/login';
    } else {
      // console.log('error');
      //window.location.href = 'error';
    }
  };

  const handleResendCode = async () => {
    try {
      const response = await fetch('https://service-api-stg.beenavi.jp/api/v2/mtbc/ping/', {
        method: 'GET', // APIのメソッドタイプに応じて変更（GET, POSTなど）
      });
      if (response.ok) {
        const data = await response.json();
        setMessage('コード再送信成功: ' + data.result);
      } else {
        setMessage('コード再送信失敗: ' + response.statusText);
      }
    } catch (error) {
      setMessage('エラーが発生しました: ' + error.result);
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
            onClick={handleSubmit(true)} 
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
          <button 
            onClick={handleSubmit(false)} 
            className="modal-button"
          >
            送信
          </button>
        </div>
        {message && <p className="message">{message}</p>}
      </div>
    </Modal>
  );
}

export default TelModal;
