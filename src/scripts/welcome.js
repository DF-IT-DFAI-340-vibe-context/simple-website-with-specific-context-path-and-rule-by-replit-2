/**
 * 歡迎頁面腳本
 * 用途：顯示使用者資訊、處理登出、權限驗證
 */
import { requireAuth, getCurrentUser, logout } from './auth.js';
import { navigateTo, getContextPath } from './router.js';

/**
 * 格式化日期時間
 * @param {string} isoString - ISO 格式的日期字串
 * @returns {string} 格式化後的日期時間字串
 */
function formatDateTime(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

/**
 * 處理登出事件
 */
function handleLogout() {
  logout();
  navigateTo('index.html');
}

/**
 * 初始化歡迎頁面
 */
function init() {
  // 驗證登入狀態，未登入則導向登入頁
  requireAuth(getContextPath());
  
  // 取得並顯示使用者資訊
  const user = getCurrentUser();
  if (user) {
    document.getElementById('username').textContent = user.username;
    document.getElementById('loginTime').textContent = formatDateTime(user.loginTime);
  }
  
  // 綁定登出按鈕事件
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', handleLogout);
  
  // 綁定關於我們連結
  const aboutLink = document.getElementById('aboutLink');
  aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('about.html');
  });
}

// 頁面載入完成後執行初始化
document.addEventListener('DOMContentLoaded', init);
