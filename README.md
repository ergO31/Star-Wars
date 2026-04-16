# Star Wars Holocron Archive

Star Wars editlerini ve tarihce sayfalarini tek bir web arayuzunde toplayan proje.

## Web olarak calistirma

`index.html` dosyasini dogrudan acmak yerine PowerShell'de asagidaki komutu calistir:

```powershell
.\start-local-server.ps1
```

Sonra siteyi `http://localhost:5500` adresinden ac.

## Tauri + Rust masaustu surumu

Bu proje Tauri tabanli masaustu surume sahip. Mevcut HTML, CSS ve JS dosyalari korunur; masaustu kabugu `src-tauri` klasorunde bulunur.

Kurulum icin gerekenler:

1. Rustup / Cargo
2. Microsoft C++ Build Tools
3. WebView2 Runtime
4. Node.js veya mevcut portable Node kurulumu

Tauri gelistirme komutlari:

```powershell
npm install
npm run tauri:dev
npm run tauri:build
```
