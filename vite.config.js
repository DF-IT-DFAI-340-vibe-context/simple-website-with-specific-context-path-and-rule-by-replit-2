/**
 * Vite 配置檔案
 * 用途：配置 Vite 建置工具，包含開發伺服器、環境變數、多頁面設定
 */
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  // 根據不同模式設定 CONTEXT_PATH
  const contextPath = mode === 'production' ? '/foo/bar' : '/';
  
  return {
    // 設定基礎路徑
    base: contextPath,
    
    // 定義全域常數，可在程式碼中使用
    define: {
      'import.meta.env.VITE_CONTEXT_PATH': JSON.stringify(contextPath),
    },
    
    // 開發伺服器配置
    server: {
      host: '0.0.0.0',
      port: 5000,
      // 允許所有主機存取（Replit 必要配置）
      strictPort: true,
    },
    
    // 多頁面應用配置
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          welcome: resolve(__dirname, 'welcome.html'),
          about: resolve(__dirname, 'about.html'),
        },
      },
    },
  };
});
