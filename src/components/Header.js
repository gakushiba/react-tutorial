import React from 'react';
import './common.css'; // common.cssをインポート

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        {/* ロゴは後ほど埋め込むので、ここは空にしておきます */}
        <img src="#" alt="ロゴ" className="logo-image" />
      </div>
      <nav className="header-nav">
        <a href="/guide" className="header-link">利用ガイド</a>
        <a href="/faq" className="header-link">FAQ</a>
        <a href="/apply" className="header-link">申込・問合せ</a>
      </nav>
    </header>
  );
}

export default Header;
