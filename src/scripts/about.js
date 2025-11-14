/**
 * 關於我們頁面腳本
 * 用途：處理頁面導向
 */
import { navigateTo } from './router.js';
import { isLoggedIn } from './auth.js';

/**
 * 初始化關於我們頁面
 */
function init() {
  // 綁定返回首頁連結
  const homeLink = document.getElementById('homeLink');
  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    // 根據登入狀態決定導向哪個頁面
    if (isLoggedIn()) {
      navigateTo('welcome.html');
    } else {
      navigateTo('index.html');
    }
  });
}

// 頁面載入完成後執行初始化
document.addEventListener('DOMContentLoaded', init);
