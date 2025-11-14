/**
 * 路由工具模組
 * 用途：處理頁面導向，考慮 CONTEXT_PATH 前綴
 */

/**
 * 取得環境變數中的 CONTEXT_PATH
 * @returns {string} 網址前綴路徑
 */
export function getContextPath() {
  return import.meta.env.VITE_CONTEXT_PATH || '/';
}

/**
 * 導向指定頁面
 * @param {string} page - 頁面名稱（例如：'welcome.html', 'about.html'）
 */
export function navigateTo(page) {
  const contextPath = getContextPath();
  window.location.href = `${contextPath}${page}`;
}

/**
 * 建立完整的頁面網址
 * @param {string} page - 頁面名稱
 * @returns {string} 完整的頁面 URL
 */
export function getPageUrl(page) {
  const contextPath = getContextPath();
  return `${contextPath}${page}`;
}
