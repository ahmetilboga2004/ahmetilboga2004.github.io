# GitHub Pages Deployment Guide

Projeyi `ahmetilboga2004.github.io` adresinde yayınlamak için aşağıdaki adımları sırasıyla uygulayın.

## 1. GitHub'da Repo Oluşturun

1.  GitHub hesabınıza giriş yapın.
2.  Yeni bir repository oluşturun.
3.  **Repository name** kısmına **kesinlikle** şunu yazın: `ahmetilboga2004.github.io`
    - _Bu isimlendirme önemlidir, çünkü GitHub bu formatı gördüğünde sitenizi otomatik olarak ana domainde yayınlar._
4.  "Public" seçin ve repoyu oluşturun.

## 2. Projeyi GitHub'a Gönderin

Aşağıdaki komutları terminalinizde (proje klasöründe) sırasıyla çalıştırın:

```bash
# Değişiklikleri Git'e ekle
git add .
git commit -m "Portfolio ready for deployment"

# GitHub reposunu tanıt (Eğer daha önce eklemediyseniz)
# NOT: Aşağıdaki linki kendi oluşturduğunuz repo linkiyle değiştirin!
git remote add origin https://github.com/ahmetilboga2004/ahmetilboga2004.github.io.git

# Eğer 'origin' zaten var derse, şunu kullanın:
# git remote set-url origin https://github.com/ahmetilboga2004/ahmetilboga2004.github.io.git

# Kodları gönder
git branch -M main
git push -u origin main
```

## 3. GitHub Ayarlarını Yapın

Kodları gönderdikten yaklaşık 1-2 dakika sonra **GitHub Actions** devreye girecek ve sitenizi derleyip `gh-pages` adında bir branch'e atacak. Bu işlem bitince:

1.  Reponuzun **Settings** (Ayarlar) sekmesine gidin.
2.  Sol menüden **Pages** seçeneğine tıklayın.
3.  **Build and deployment** altında **Source** kısmını `Deploy from a branch` olarak bırakın.
4.  **Branch** kısmında `gh-pages` seçin ve yanındaki klasör kısmını `/ (root)` olarak bırakın.
5.  **Save** butonuna basın.

Birkaç dakika içinde siteniz `https://ahmetilboga2004.github.io` adresinde yayında olacaktır!
