# E‑Commerce (React + Vite)

Canlı Demo: https://e-commerce-three-iota-23.vercel.app/

> Bu depo şu an React + Vite iskeletiyle oluşturulmuş durumdadır. Aşağıdaki başlıklar, projeyi gerçek bir e‑ticaret uygulamasına dönüştürürken net ve ölçülebilir şekilde anlatmanız için hazırlanmıştır. Yer tutucuları doldurun.

---

## İçindekiler
- [Özellikler](#özellikler)
- [Ekran Görüntüleri](#ekran-görüntüleri)
- [Teknolojiler](#teknolojiler)
- [Kurulum](#kurulum)
- [Çalıştırma Komutları](#çalıştırma-komutları)
- [Proje Yapısı](#proje-yapısı)
- [Çevresel Değişkenler](#çevresel-değişkenler)
- [Build ve Dağıtım](#build-ve-dağıtım)
- [Yol Haritası](#yol-haritası)
- [Katkı](#katkı)
- [Lisans](#lisans)

---

## Özellikler
Aşağıdaki listeyi proje kapsamınıza göre güncelleyin.

- Ürün listeleme
- Kategori/etiket filtreleme
- Arama
- Sepet yönetimi
- Favoriler
- Responsive arayüz
- Kalıcı durum yönetimi (LocalStorage veya benzeri)
- API tüketimi (ör. `/products`, `/categories`)

> Not: Gerçekleştirdiğiniz akışları maddeler halinde, mümkünse rakamlarla (ör. performans, kapsama, kullanıcı akışı) yazın.

## Ekran Görüntüleri
Yerleştirilecek örnek:

```
/docs/screens/home.png
/docs/screens/product-detail.png
```

> Görselleri `docs/screens` içine ekleyin ve burada relative path ile referans verin.

## Teknolojiler
- React 18 + Vite
- JavaScript
- CSS
- ESLint (Vite varsayılan kuralları)
- Vercel (barındırma)

## Kurulum

Önkoşullar:
- Node.js LTS (>=18)
- npm

Kurulum adımları:

```bash
npm install
```

## Çalıştırma Komutları

Geliştirme sunucusu:

```bash
npm run dev
```

Üretim derlemesi:

```bash
npm run build
```

Yerel önizleme:

```bash
npm run preview
```

## Proje Yapısı
Ağaç görünümü örnektir. Kendi dosyalarınıza göre güncelleyin.

```
.
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ pages/
│  ├─ hooks/
│  ├─ context/
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
├─ vite.config.js
└─ vercel.json
```

## Çevresel Değişkenler
Gerekiyorsa `.env` dosyasına örnek:

```
VITE_API_BASE_URL=
VITE_ANALYTICS_KEY=
```

> `VITE_` öneki Vite tarafından zorunludur.

## Build ve Dağıtım

### Vite build
```bash
npm run build
```
`dist/` çıktısını üretir.

### Vercel
- `vercel.json` ile yönlendirme/headers ayarları yapılabilir.
- Ana dal `main` üzerine push sonrası otomatik preview ve production dağıtımı yapılandırılabilir.

İsteğe bağlı ayarlar:
- Çevresel değişkenleri Vercel Proje Ayarları → Environment sekmesinden tanımlayın.
- Framework Preset: **Vite**

## Yol Haritası
Kendi proje planınızı maddeler halinde yazın.

- [ ] Kategori/filtre bileşenleri
- [ ] Sepet durum yönetimi
- [ ] Ürün detay sayfası
- [ ] Ödeme akışı
- [ ] Birim testleri ve e2e
- [ ] Performans bütçesi (Core Web Vitals)

## Katkı
Pull request açmadan önce küçük değişiklikler için issue oluşturun. Konvansiyonel commit mesajları tercih edilir.

## Lisans
Bir lisans seçin ve buraya ekleyin. Örn: MIT.
