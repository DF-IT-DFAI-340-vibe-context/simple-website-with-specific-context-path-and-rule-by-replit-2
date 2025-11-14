# Vite + Vanilla JS + SCSS 多頁面網站

使用 Vite、Vanilla JavaScript 和 SCSS 建立的簡單多頁面網站，包含登入功能與環境變數配置。

## 專案描述

本專案是一個輕量級的多頁面網站範例，展示如何使用現代前端工具建立不依賴框架的網頁應用。主要功能包括：

- ✅ 使用者登入與登出
- ✅ 登入狀態管理（localStorage）
- ✅ 受保護的歡迎頁面（需登入）
- ✅ 公開的關於我們頁面
- ✅ 環境變數配置（測試與正式環境）
- ✅ 響應式設計與現代化 UI

## 專案目標

1. 提供簡單易懂的登入機制範例
2. 示範 Vite 在多頁面應用的使用方式
3. 展示 Vanilla JavaScript 的模組化設計
4. 實作環境變數管理（CONTEXT_PATH）

## 技術棧

### 核心技術
- **建置工具**: Vite 7.2.2
- **前端語言**: Vanilla JavaScript (ES6+)
- **樣式預處理**: SCSS/Sass 1.94.0
- **套件管理**: npm
- **執行環境**: Node.js 20

### 開發工具
- Git (版本控制)
- ESM (ES6 模組)

## 檔案結構

```
vite-vanilla-multipage/
├── src/                        # 原始碼目錄
│   ├── scripts/                # JavaScript 模組
│   │   ├── auth.js             # 認證模組（登入、登出、狀態檢查）
│   │   ├── router.js           # 路由工具（頁面導向、CONTEXT_PATH 處理）
│   │   ├── login.js            # 登入頁面腳本
│   │   ├── welcome.js          # 歡迎頁面腳本
│   │   └── about.js            # 關於頁面腳本
│   └── styles/                 # SCSS 樣式
│       └── main.scss           # 主要樣式檔案（變數、共用樣式）
├── public/                     # 公開靜態資源目錄
├── .github/                    # GitHub 配置
│   └── copilot-instructions.md # GitHub Copilot 開發規範
├── index.html                  # 登入頁面（首頁）
├── welcome.html                # 歡迎頁面（需登入）
├── about.html                  # 關於我們頁面（公開）
├── vite.config.js              # Vite 配置檔案
├── package.json                # 專案依賴與腳本
├── .gitignore                  # Git 忽略清單
├── .replit                     # Replit 配置
├── replit.md                   # Replit Agent 開發規範
└── README.md                   # 專案說明文件（本檔案）
```

## 檔案說明

### HTML 頁面
- `index.html`: 登入頁面，包含使用者名稱與密碼輸入表單
- `welcome.html`: 登入後的歡迎頁面，顯示使用者資訊與登出按鈕
- `about.html`: 公開的關於我們頁面，介紹公司資訊

### JavaScript 模組
- `auth.js`: 認證核心模組
  - `isLoggedIn()`: 檢查登入狀態
  - `getCurrentUser()`: 取得目前使用者資訊
  - `login()`: 執行登入
  - `logout()`: 執行登出
  - `requireAuth()`: 頁面保護（未登入則導向）

- `router.js`: 路由工具模組
  - `getContextPath()`: 取得環境變數中的路徑前綴
  - `navigateTo()`: 頁面導向（自動加入 CONTEXT_PATH）
  - `getPageUrl()`: 建立完整頁面 URL

- `login.js`: 登入頁面邏輯
  - 表單驗證與提交處理
  - 登入成功後導向歡迎頁面
  - 錯誤訊息顯示

- `welcome.js`: 歡迎頁面邏輯
  - 登入狀態驗證（未登入自動導向）
  - 顯示使用者資訊
  - 登出功能

- `about.js`: 關於頁面邏輯
  - 返回首頁連結處理
  - 根據登入狀態決定導向位置

### 樣式檔案
- `main.scss`: 主要樣式檔案
  - SCSS 變數定義（顏色、尺寸）
  - 全域樣式重置
  - 共用元件樣式（表單、按鈕、訊息）
  - 響應式設計

### 配置檔案
- `vite.config.js`: Vite 建置工具配置
  - 開發伺服器設定（Port 5000）
  - 環境變數定義
  - 多頁面應用配置
  - 基礎路徑設定

- `package.json`: 專案依賴與腳本定義
  - 依賴套件清單
  - npm scripts（dev, dev:production, build, preview）
  - 專案基本資訊

## 環境變數

專案使用 `vite.config.js` 管理環境變數，不使用 `.env` 檔案（Replit 安全考量）。

### CONTEXT_PATH 設定

- **測試環境**: `/`（預設）
- **正式環境**: `/foo/bar`

環境變數在程式碼中的使用方式：
```javascript
const contextPath = import.meta.env.VITE_CONTEXT_PATH;
```

## 安裝步驟

### 前置需求
- Node.js 18+ 或 20+
- npm 或 yarn

### 安裝指令

1. 複製專案（如果從 Git 取得）
```bash
git clone <repository-url>
cd vite-vanilla-multipage
```

2. 安裝依賴套件
```bash
npm install
```

## 執行方式

### 開發模式（測試環境）
```bash
npm run dev
```
- 啟動開發伺服器於 http://localhost:5000/
- CONTEXT_PATH = `/`
- 支援熱模組替換（HMR）

### 開發模式（正式環境）
```bash
npm run dev:production
```
- 啟動開發伺服器於 http://localhost:5000/
- CONTEXT_PATH = `/foo/bar`
- 模擬正式環境的路徑設定

### 建置正式版本
```bash
npm run build
```
- 輸出至 `dist/` 目錄
- 自動最小化與優化
- 產生生產環境檔案

### 預覽建置結果
```bash
npm run preview
```
- 預覽 `dist/` 目錄的建置結果
- 驗證建置是否正確

## 使用說明

### 登入功能

1. 開啟首頁（http://localhost:5000/）
2. 輸入使用者名稱（至少 3 個字元）
3. 輸入密碼（至少 6 個字元）
4. 點擊「登入」按鈕
5. 登入成功後自動導向歡迎頁面

**注意**: 目前為示範版本，任何符合長度要求的帳密都可登入。

### 頁面導航

- **首頁**: 登入頁面（未登入時的主頁）
- **歡迎頁**: 登入後顯示使用者資訊（需登入）
- **關於我們**: 公開頁面，任何人都可存取

### 登出功能

在歡迎頁面點擊「登出」按鈕即可登出，系統會自動導向登入頁面。

## 環境需求

### 執行環境
- Node.js 18.x 或以上
- npm 8.x 或以上
- 現代瀏覽器（支援 ES6+）

### 瀏覽器支援
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 開發指南

詳細的開發規範請參考：
- [Replit Agent 開發規範](./replit.md)
- [GitHub Copilot 開發規範](./.github/copilot-instructions.md)

### 重要規範摘要

1. **程式碼品質**: 所有函式必須包含繁體中文註解
2. **模組化設計**: 使用 ES6 import/export
3. **路由處理**: 統一使用 `router.js` 處理頁面導向
4. **認證邏輯**: 統一使用 `auth.js` 管理登入狀態
5. **樣式管理**: 使用 SCSS 變數管理可重用值

## 已知限制

1. **認證機制**: 目前使用 localStorage 儲存登入狀態，僅適合示範用途
2. **無後端整合**: 尚未整合真實的後端 API
3. **密碼安全**: 未實作密碼雜湊與加密
4. **Session 管理**: 無 token 過期機制

## 未來改善計畫

- [ ] 整合後端 API（Node.js + Express）
- [ ] 實作 JWT token 認證
- [ ] 加入 Session 過期與自動登出
- [ ] 實作密碼雜湊與加密
- [ ] 加入使用者權限管理
- [ ] 建立單元測試與整合測試
- [ ] 加入 ESLint 與 Prettier
- [ ] 優化錯誤處理與使用者體驗

## 授權

ISC License

## 聯絡資訊

如有問題或建議，歡迎提出 Issue 或 Pull Request。

---

**建立日期**: 2025-11-14  
**版本**: 1.0.0  
**維護狀態**: 積極維護中
