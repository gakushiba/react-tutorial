import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InputForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    inspectionNumber: '',
    office: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/tel');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>検針票番号</label>
        <input
          type="text"
          name="inspectionNumber"
          value={formData.inspectionNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>担当営業所</label>
        <input
          type="text"
          name="office"
          value={formData.office}
          onChange={handleChange}
        />
      </div>
      <button type="submit">送信</button>
    </form>
  );
}

export default InputForm;
