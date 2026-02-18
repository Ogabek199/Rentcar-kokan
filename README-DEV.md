# Development uchun qo'llanma

## Development'da ishga tushirish

### 1-usul: Server va Frontend alohida terminalda

**Terminal 1** (API server):
```bash
npm run server
```

**Terminal 2** (React app):
```bash
npm start
```

### 2-usul: Bir terminalda ikkalasini birga

```bash
npm run dev:full
```

Bu ikki terminalni avtomatik ochadi:
- `http://localhost:5000` - API server
- `http://localhost:3000` - React app

## Muhim eslatmalar

1. **Environment variables**: `.env` fayl yaratib, quyidagilarni qo'ying:
   ```
   TELEGRAM_TOKEN=your_token_here
   TELEGRAM_CHAT_ID=your_chat_id_here
   PORT=5000
   ```

2. **API endpoint**: Development'da `/api/telegram` so'rovlari avtomatik `http://localhost:5000/api/telegram` ga proxy qilinadi (`package.json` da `"proxy"` sozlangani).

3. **Browser cache**: Agar eski JS fayllar xatolik bersa, browser cache'ni tozalang yoki Hard Reload (Cmd+Shift+R / Ctrl+Shift+R) qiling.

## Production build

```bash
npm run build
```

Build `build/` papkasida yaratiladi.
