/**
 * 認證模組
 * 用途：處理使用者登入、登出、驗證狀態管理
 * 依賴：localStorage
 */

/**
 * 檢查使用者是否已登入
 * @returns {boolean} 已登入回傳 true，否則回傳 false
 */
export function isLoggedIn() {
  return localStorage.getItem('isLoggedIn') === 'true';
}

/**
 * 取得目前登入的使用者資訊
 * @returns {Object|null} 使用者物件 {username, loginTime} 或 null
 */
export function getCurrentUser() {
  const username = localStorage.getItem('username');
  const loginTime = localStorage.getItem('loginTime');
  
  if (username && loginTime) {
    return { username, loginTime };
  }
  
  return null;
}

/**
 * 執行登入操作
 * @param {string} username - 使用者名稱
 * @param {string} password - 密碼
 * @returns {Object} 登入結果 {success: boolean, message: string}
 */
export function login(username, password) {
  // 簡單的驗證邏輯（示範用途，實際應使用後端 API）
  if (!username || !password) {
    return {
      success: false,
      message: '請輸入使用者名稱和密碼'
    };
  }

  if (username.length < 3) {
    return {
      success: false,
      message: '使用者名稱至少需要 3 個字元'
    };
  }

  if (password.length < 6) {
    return {
      success: false,
      message: '密碼至少需要 6 個字元'
    };
  }

  // 示範：任何符合條件的帳號密碼都可登入
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('username', username);
  localStorage.setItem('loginTime', new Date().toISOString());

  return {
    success: true,
    message: '登入成功'
  };
}

/**
 * 執行登出操作
 */
export function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');
  localStorage.removeItem('loginTime');
}

/**
 * 要求登入保護（未登入則導向登入頁）
 * @param {string} contextPath - 網址前綴
 */
export function requireAuth(contextPath) {
  if (!isLoggedIn()) {
    window.location.href = `${contextPath}index.html`;
  }
}
