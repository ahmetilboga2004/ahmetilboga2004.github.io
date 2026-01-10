# GitHub Pages Deployment Guide

Projeyi `ahmetilboga2004.github.io` adresinde yayınlamak için iki yöntem vardır. Eğer hesabınızda faturalandırma (billing) veya Actions hatası alıyorsanız **Yöntem 2'yi** kullanın.

## Yöntem 1: Otomatik (GitHub Actions ile) -- _Hata aldıysanız bunu atlayın_

1.  GitHub'da `ahmetilboga2004.github.io` adında repo oluşturun.
2.  Kodları pushlayın.
3.  GitHub Settings > Pages > Source: **GitHub Actions** seçin (veya branch ayarını yapın).

---

## Yöntem 2: Manuel Deploy (Hata Alanlar İçin Kesin Çözüm) ✅

Eğer "Billing issue" veya "Actions failed" hatası alıyorsanız bu yöntemi kullanın. Projeyi kendi bilgisayarınızda derleyip gönderir.

### 1. Hazırlık (Sadece bir kere yapılır)

Terminalde şu komutla gerekli paketi yükleyin (ben zaten yükledim ama emin olmak için çalıştırabilirsiniz):

```bash
npm install gh-pages --save-dev
```

### 2. Deploy Etme (Her güncellemede yapılır)

Sitenizi yayınlamak veya güncellemek için sadece şu komutu çalıştırın:

```bash
npm run deploy
```

Bu komut otomatik olarak:

1.  Projeyi derler (`npm run build`).
2.  `dist` klasörünü oluşturur.
3.  Bu klasörü GitHub'daki `gh-pages` branch'ine yükler.

### 3. GitHub Ayarı (Önemli!)

Komutu çalıştırdıktan sonra:

1.  GitHub reponuzda **Settings** > **Pages** menüsüne gidin.
2.  **Source** kısmında `Deploy from a branch` seçili olsun.
3.  **Branch** kısmını `gh-pages` yapın ve `/ (root)` seçin.
4.  **Save** butonuna basın.

Birkaç dakika içinde siteniz `https://ahmetilboga2004.github.io` adresinde açılacaktır.
