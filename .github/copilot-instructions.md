# Vite + Vanilla JS + SCSS 多頁面網站 GitHub Copilot 規範

## 開發規範

### 1. **程式碼品質**
   - 所有程式碼必須包含函式級註解（說明用途、參數、回傳值）
   - 註解使用**繁體中文**撰寫
   - 遵循 ES6+ 標準語法
   - 變數命名使用駝峰式命名法，必須具備描述性

### 2. **Plan 模式要求**
   - 完成所有子任務後，將完成報告記錄至 `./report.md`
   - 需包含：任務描述、完成時間、遇到的問題、解決方案
   - 記錄所有重要的架構決策與技術選型理由

### 3. **規格文件要求**
   - Plan 模式結束時產生 spec.md（技術規格文件）
   - Plan 模式結束時產生 todolist.md（任務清單）
   - spec.md 必須包含：
     * 系統流程圖 (Flow Chart)
     * 循序圖 (Sequence Diagram)
     * 類別圖/物件關聯圖 (Class/ER Diagram)
     * API 規格定義
     * 資料結構設計
     * 模組架構說明

### 4. **Build 模式要求**
   - 嚴格遵循 spec.md 進行開發
   - 每次修改程式前必須確認 spec.md 的相關規格
   - 每完成一個任務後更新 todolist.md 的進度狀態
   - 確保程式碼變更符合既定規格

### 5. **專案完成文檔**
   - 撰寫完整的 README.md，必須包含：
     * 專案描述與目標
     * 完整檔案結構樹狀圖
     * 使用的技術棧清單
     * 所有檔案清單與簡短說明
     * 安裝步驟
     * 執行方式
     * 環境需求

### 6. **版本控制**
   - 每個重要任務完成後建立 checkpoint
   - checkpoint 訊息必須有意義且描述清楚（例如：「✅ 完成用戶登入功能與 JWT 驗證」）
   - 遵循 Git commit message 規範

### 7. **語言要求**
   - 所有對話、文檔、註解皆使用繁體中文
   - 程式碼中的變數、函式名稱使用英文，但必須附帶中文註解

---

## 程式碼風格指南

### JavaScript
- 使用 `const` 和 `let`，避免使用 `var`
- 優先使用箭頭函式
- 使用模組化設計（ES6 import/export）
- 函式保持單一職責原則
- 錯誤處理要完整（try-catch 或返回錯誤物件）

### SCSS
- 使用變數管理顏色、尺寸等可重用值
- 巢狀結構不超過 3 層
- 使用語意化的 class 命名
- 遵循 BEM 命名規範（選用）

### HTML
- 使用語意化標籤（header, nav, main, section, article, footer）
- 所有表單元素必須有對應的 label
- 確保可訪問性（ARIA 屬性）

---

## 專案特定規範

### 路由處理
- 所有頁面導向必須透過 `router.js` 模組
- 必須考慮 CONTEXT_PATH 前綴
- 範例：
  ```javascript
  import { navigateTo } from './router.js';
  navigateTo('welcome.html'); // 自動加入 CONTEXT_PATH
  ```

### 認證邏輯
- 登入狀態檢查使用 `auth.js` 模組
- 保護頁面使用 `requireAuth()` 函式
- 範例：
  ```javascript
  import { requireAuth, getContextPath } from './auth.js';
  requireAuth(getContextPath()); // 未登入自動導向登入頁
  ```

### 環境變數存取
- 透過 `import.meta.env.VITE_CONTEXT_PATH` 存取
- 不要直接寫死路徑，始終使用環境變數

---

## 常見模式

### 事件處理器
```javascript
/**
 * 處理表單提交事件
 * @param {Event} event - 表單提交事件物件
 */
function handleSubmit(event) {
  event.preventDefault();
  // 處理邏輯
}
```

### 頁面初始化
```javascript
/**
 * 初始化頁面
 * 用途：綁定事件、載入資料、檢查權限
 */
function init() {
  // 初始化邏輯
}

// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded', init);
```

### 模組匯出
```javascript
/**
 * 檢查使用者是否已登入
 * @returns {boolean} 已登入回傳 true，否則回傳 false
 */
export function isLoggedIn() {
  return localStorage.getItem('isLoggedIn') === 'true';
}
```

---

## 除錯指南

### 常見問題
1. **頁面導向錯誤**: 確認是否正確使用 `navigateTo()` 並加入 CONTEXT_PATH
2. **樣式未載入**: 檢查 SCSS 檔案路徑是否正確（使用 `/src/styles/main.scss`）
3. **模組找不到**: 確認 import 路徑正確，並使用 `.js` 副檔名

### 除錯步驟
1. 檢查瀏覽器 Console 是否有錯誤訊息
2. 確認開發伺服器是否正常運行（`npm run dev`）
3. 檢查檔案路徑是否正確
4. 驗證環境變數是否正確設定

---

## 測試要求

### 功能測試
- 登入流程測試（正確/錯誤帳密）
- 頁面導向測試（含 CONTEXT_PATH）
- 登入狀態保持測試
- 未登入存取保護頁面測試

### 環境測試
- 測試環境（`npm run dev`）
- 正式環境（`npm run dev:production`）
- 建置測試（`npm run build`）

---

## 安全注意事項

1. **不要在前端儲存敏感資訊**: 目前使用 localStorage 僅為示範，生產環境應使用安全的 session 管理
2. **輸入驗證**: 所有使用者輸入必須驗證與清理
3. **XSS 防護**: 避免直接使用 `innerHTML`，優先使用 `textContent`
4. **HTTPS**: 生產環境必須使用 HTTPS

---

## 效能最佳化

1. **程式碼分割**: 利用 Vite 的動態 import
2. **樣式最小化**: 避免不必要的 CSS 規則
3. **圖片最佳化**: 使用適當的圖片格式與大小
4. **快取策略**: 適當設定 HTTP 快取標頭
