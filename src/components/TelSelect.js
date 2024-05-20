import React, { useState } from 'react';
import TelModal from './TelModal';
import './common.css'; // common.cssをインポート

function TelSelect({ onBack }) {
  const [selectedTel, setSelectedTel] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setSelectedTel(e.target.value);
  };

  const handleSend = () => {
    setIsModalOpen(true);
  };

  const handleSkip = () => {
    // スキップ処理をここに追加
  };

  return (
    <div className="tel-select-container">
      <div className="tel-select-group">
        <label className="tel-select-label">
          <input
            type="radio"
            value="0000"
            checked={selectedTel === '0000'}
            onChange={handleChange}
            className="tel-select-radio"
          />
          ***-****-0000
        </label>
        <label className="tel-select-label">
          <input
            type="radio"
            value="1111"
            checked={selectedTel === '1111'}
            onChange={handleChange}
            className="tel-select-radio"
          />
          ***-****-1111
        </label>
        <label className="tel-select-label">
          <input
            type="radio"
            value="2222"
            checked={selectedTel === '2222'}
            onChange={handleChange}
            className="tel-select-radio"
          />
          ***-****-2222
        </label>
      </div>
      <div className="tel-select-button-group">
        <button onClick={handleSend} className="tel-select-button">送信</button>
        <button onClick={handleSkip} className="tel-select-button">スキップ</button>
        <button onClick={onBack} className="tel-select-button">戻る</button>
      </div>
      <TelModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default TelSelect;
