# Rute Karir · Mini Assignment Web Developer (SK Batch 2)

Satu section landing page rekrutmen yang responsif: headline, kartu posisi, dan CTA.
Dibuat dengan React + Vite dan CSS biasa.

**Demo:** <tempel link GitHub Pages di sini>

## Cara menjalankan

Butuh Node.js 20 atau lebih baru.

```bash
npm install
npm run dev      # buka alamat yang tampil, biasanya http://localhost:5173
npm test         # 6 tes otomatis
npm run build    # hasil produksi ke dist/
```

## Struktur

```
src/App.jsx           state (filter, rute terpilih, dialog) dan susunan komponen
src/data/roles.js     data posisi (fiktif)
src/lib/              fungsi murni (filter, statistik) dan helper scroll
src/components/       Header, Hero, RolesSection, RoleCard, Process, CtaBand, ApplyDialog, Footer
src/styles/style.css  token desain, komponen, breakpoint
src/App.test.jsx      tes perilaku utama
```

## Keputusan utama

- **Konsep "rute".** Posisi tampil sebagai tiket, divisi sebagai filter rute, dan alur seleksi
  sebagai garis rute. Gaya visual mengikuti bahasa desain Sekolah Karir: biru royal, outline
  hitam tebal, bayangan keras, dan stiker.
- **State minimal di `App`.** Hanya `filter`, `selectedId`, dan status dialog. Daftar kartu,
  hitungan, dan teks CTA diturunkan dari nilai itu, tanpa Redux atau Context.
- **Data terpisah dari tampilan.** Menambah posisi cukup menambah satu objek di `roles.js`.
- **Responsif.** Grid kartu memakai `repeat(auto-fill, minmax(min(100%, 320px), 1fr))`,
  jadi 1, 2, atau 3 kolom otomatis. Breakpoint (960px, 760px, 560px) hanya untuk bagian
  yang memang berubah bentuk. Diuji dari lebar 320px sampai 1920px.
- **Efek tiket murni CSS.** Takik dibuat dengan `mask` dan `radial-gradient`; bayangan keras
  dipasang di pembungkus lewat `filter: drop-shadow` karena `mask` memotong `box-shadow`.
- **Formulir simulasi dengan `<dialog>`.** Tidak ada data yang dikirim atau disimpan.
  Fokus terkunci, Esc menutup, dan validasi memakai atribut bawaan browser.
- **Aksesibilitas dasar.** Heading berurutan, tautan "lewati ke konten", fokus terlihat,
  `aria-pressed` pada filter, `aria-live` pada hitungan dan pilihan rute,
  dan animasi dimatikan bila `prefers-reduced-motion`.

## Data

Semua nama posisi, jumlah kursi, dan deskripsi adalah data fiktif. Tidak ada data pribadi
atau rahasia.

## Catatan penggunaan AI

- **Tool:** Claude (Anthropic).
- **Dipakai untuk:** ide konsep, draf awal komponen React, CSS, dan tes, konten contoh,
  serta peninjauan tampilan di desktop dan mobile.
- Tidak ada tool atau API berbayar yang dibeli untuk assignment ini.