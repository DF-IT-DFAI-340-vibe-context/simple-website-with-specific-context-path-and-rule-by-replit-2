# Vite + Vanilla JS + SCSS 多頁面網站 Replit Agent 規範

## 專案概述

本專案使用 Vite + Vanilla JavaScript + SCSS 技術棧建立的多頁面網站，包含登入功能、使用者認證與環境變數配置。

### 專案目標
- 提供簡單的登入機制（使用 localStorage 管理登入狀態）
- 實作多頁面路由（登入頁、歡迎頁、關於我們）
- 支援正式與測試環境的配置切換（透過 CONTEXT_PATH）

### 目前狀態
✅ 專案架構已建立完成
✅ 三個頁面已實作（index.html、welcome.html、about.html）
✅ 環境變數配置完成（透過 vite.config.js）
✅ 開發伺服器運行中（http://localhost:5000/）

---

## 開發規範

### 1. **程式碼品質**
   - 所有程式碼必須包含函式級註解（說明用途、參數、回傳值）
   - 註解使用**繁體中文**撰寫
   - 程式碼風格保持一致，使用 ES6+ 語法
   - 變數命名使用有意義的駝峰式命名法

### 2. **Plan 模式要求**
   - 完成所有子任務後，將完成報告記錄至 `./report.md`
   - 需包含：任務描述、完成時間、遇到的問題、解決方案
   - 記錄所有重要的技術決策與理由

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
   - 確保所有修改都經過測試驗證

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
   - 避免提交不必要的檔案（使用 .gitignore）

### 7. **語言要求**
   - 所有對話、文檔、註解皆使用繁體中文
   - 變數名稱可使用英文，但必須有清楚的中文註解說明

---

## 專案架構

### 技術棧
- **建置工具**: Vite 7.2.2
- **前端語言**: Vanilla JavaScript (ES6+)
- **樣式**: SCSS/Sass
- **套件管理**: npm
- **執行環境**: Node.js 20

### 目錄結構
```
/
├── src/
│   ├── scripts/        # JavaScript 模組
│   │   ├── auth.js     # 認證模組
│   │   ├── router.js   # 路由工具
│   │   ├── login.js    # 登入頁面腳本
│   │   ├── welcome.js  # 歡迎頁面腳本
│   │   └── about.js    # 關於頁面腳本
│   └── styles/         # SCSS 樣式
│       └── main.scss   # 主要樣式檔案
├── public/             # 靜態資源
├── index.html          # 登入頁面
├── welcome.html        # 歡迎頁面
├── about.html          # 關於我們頁面
├── vite.config.js      # Vite 配置檔案
├── package.json        # 專案依賴
└── .gitignore          # Git 忽略清單
```

### 環境變數配置

專案透過 `vite.config.js` 管理環境變數：

- **測試環境** (`npm run dev`): CONTEXT_PATH = `/`
- **正式環境** (`npm run dev:production`): CONTEXT_PATH = `/foo/bar`

環境變數可在程式碼中透過 `import.meta.env.VITE_CONTEXT_PATH` 存取。

---

## 最近變更

### 2025-11-14
- ✅ 初始化專案架構
- ✅ 建立三個核心頁面（登入、歡迎、關於我們）
- ✅ 實作登入認證模組（使用 localStorage）
- ✅ 實作路由導向邏輯（支援 CONTEXT_PATH）
- ✅ 配置 Vite 開發伺服器（Port 5000）
- ✅ 加入 SCSS 樣式系統

---

## 使用者偏好設定

（待記錄）

---

## 已知問題與待改善項目

### 功能增強
- [ ] 整合後端 API 實現真實的登入驗證
- [ ] 實作 JWT token 管理機制
- [ ] 加入登出功能與 session 過期處理
- [ ] 新增使用者權限管理

### 文檔補充
- [ ] 建立 spec.md 技術規格文件
- [ ] 建立 todolist.md 任務追蹤文件
- [ ] 建立 report.md 完成報告
- [ ] 完善 README.md

### 程式碼品質
- [ ] 加入單元測試
- [ ] 設定 ESLint 與 Prettier
- [ ] 優化錯誤處理機制

---

## 重要提醒

1. **不使用 .env 檔案**: 因安全考量，環境變數直接在 `vite.config.js` 中配置
2. **開發伺服器必須綁定 0.0.0.0:5000**: 這是 Replit 環境的必要配置
3. **所有頁面導向必須考慮 CONTEXT_PATH**: 確保在不同環境下路由正確
4. **登入狀態使用 localStorage**: 這是簡化的示範，生產環境應使用更安全的方式
