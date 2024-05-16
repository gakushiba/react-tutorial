import React from 'react';
import { useLocation } from 'react-router-dom';

function ConfirmPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const data = searchParams.get('data');

  return (
    <div>
      <h2>確認ページ</h2>
      <p>入力データ: {data}</p>
    </div>
  );
}

export default ConfirmPage;
