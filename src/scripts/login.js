/**
 * 登入頁面腳本
 * 用途：處理登入表單提交、驗證、導向
 */
import { login, isLoggedIn } from './auth.js';
import { navigateTo, getPageUrl } from './router.js';

/**
 * 顯示訊息給使用者
 * @param {string} message - 訊息內容
 * @param {string} type - 訊息類型（'error' 或 'success'）
 */
function showMessage(message, type = 'error') {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = message;
  messageDiv.className = `message ${type}`;
  messageDiv.style.display = 'block';
}

/**
 * 處理登入表單提交事件
 * @param {Event} event - 表單提交事件
 */
function handleLogin(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  
  const result = login(username, password);
  
  if (result.success) {
    showMessage(result.message, 'success');
    // 延遲導向，讓使用者看到成功訊息
    setTimeout(() => {
      navigateTo('welcome.html');
    }, 500);
  } else {
    showMessage(result.message, 'error');
  }
}

/**
 * 初始化登入頁面
 */
function init() {
  // 如果已經登入，直接導向歡迎頁面
  if (isLoggedIn()) {
    navigateTo('welcome.html');
    return;
  }
  
  // 綁定表單提交事件
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', handleLogin);
  
  // 綁定關於我們連結
  const aboutLink = document.getElementById('aboutLink');
  aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('about.html');
  });
}

// 頁面載入完成後執行初始化
document.addEventListener('DOMContentLoaded', init);
