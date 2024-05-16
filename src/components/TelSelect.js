import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TelModal from './TelModal';

function TelSelect() {
  const navigate = useNavigate();
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

  const handleBack = () => {
    navigate(-1); // 一つ前のページに戻る
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="0000"
            checked={selectedTel === '0000'}
            onChange={handleChange}
          />
          ***-****-0000
        </label>
        <label>
          <input
            type="radio"
            value="1111"
            checked={selectedTel === '1111'}
            onChange={handleChange}
          />
          ***-****-1111
        </label>
        <label>
          <input
            type="radio"
            value="2222"
            checked={selectedTel === '2222'}
            onChange={handleChange}
          />
          ***-****-2222
        </label>
      </div>
      <button onClick={handleSend}>送信</button>
      <button onClick={handleSkip}>スキップ</button>
      <button onClick={handleBack}>戻る</button>
      <TelModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default TelSelect;
