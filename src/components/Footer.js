import React from 'react';
import './common.css'; // common.cssをインポート

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="#" alt="三ツ輪産業株式会社" className="footer-logo-image" />
        </div>
        <nav className="footer-nav">
          <a href="/terms" className="footer-link">利用規約</a>
          <a href="/privacy" className="footer-link">プライバシーポリシー</a>
        </nav>
      </div>
      <address className="footer-address">
        〒160-0023 東京都新宿区西新宿8-14-24 西新宿KFビル2F
      </address>
    </footer>
  );
}

export default Footer;
