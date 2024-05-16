import React, { useEffect, useState } from 'react';

function FetchHello() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // JSONPlaceholderのモックAPIを使用
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => setMessage(data.title))  // 投稿のタイトルを表示
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      {message ? <p>APIからのメッセージ: {message}</p> : <p>データを読み込み中...</p>}
    </div>
  );
}

export default FetchHello;