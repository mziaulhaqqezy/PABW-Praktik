# PABW — MUHAMMAD ZIAUL HAQ — 25523065

Repository ini berisi pekerjaan mata kuliah
Pengembangan Aplikasi Berbasis Web.

## Pertemuan 3 — Halaman Profil Saya

### Topik

Jadwal dan Target Olahraga Saya

### Rencana Halaman

- **Judul halaman:** Jadwal dan Target Olahraga Saya
- **Deskripsi:** Halaman yang berisi jadwal latihan dan target olahraga saya dalam satu minggu.

### Tautan Navigasi

1. Jadwal Olahraga
2. Target Olahraga
3. Catat Latihan

### Dua Bagian Utama

1. Jadwal Olahraga
2. Catat Latihan

### Kolom Tabel

- Hari
- Jenis Olahraga
- Durasi
- Target Kalori

### Kolom Form

- Jenis Olahraga
- Tanggal Latihan
- Durasi

### Gambar

`olahraga.jpg`

## Catatan Penggunaan AI

Saya menggunakan AI untuk membantu memahami instruksi tugas,
menyusun struktur HTML, dan memeriksa kesesuaian kode.






## Pertemuan 4 — Design token halaman profil

### Deskripsi

Pada Pertemuan 4, halaman profil dikembangkan menggunakan CSS Fundamental dan Design Token. CSS dipisahkan menjadi beberapa file agar kode lebih terstruktur dan mudah dikelola.

### Warna yang Dipilih

Warna utama yang digunakan adalah biru.

- Primary: `#1D4ED8`
- Primary hover/focus: `#2563EB`
- Background: `#F8FAFC`
- Text: `#0F172A`
- Surface: `#FFFFFF`
- Border: `#CBD5E1`
- Danger: `#B00020`

### Struktur File CSS

| File | Fungsi |
|---|---|
| `tokens.css` | Menyimpan primitive dan semantic design token |
| `base.css` | Mengatur dasar halaman, typography, warna, dan gambar |
| `layout.css` | Mengatur layout menggunakan Flexbox dan gap |
| `komponen.css` | Mengatur komponen seperti tabel dan form |
| `tema.css` | Mengatur dark theme dan toggle tema |

### Design Token

| Token | Nilai / Fungsi |
|---|---|
| `--blue-700` | Warna biru utama |
| `--blue-500` | Warna biru untuk focus |
| `--color-bg` | Warna background halaman |
| `--color-fg` | Warna teks utama |
| `--color-surface` | Warna permukaan/card/input |
| `--color-border` | Warna border |
| `--color-primary` | Warna utama komponen |
| `--color-danger` | Warna pesan kesalahan |
| `--color-focus` | Warna focus |
| `--space-1` sampai `--space-6` | Jarak antar elemen |
| `--radius-md` | Radius sudut komponen |
| `--shadow-1` | Bayangan komponen |

### Pengujian Design Token

Pengujian dilakukan dengan mengubah nilai:

`--blue-700`

menjadi warna merah `#FF0000`.

Hasil pengujian menunjukkan bahwa elemen yang menggunakan `--color-primary` ikut berubah menjadi merah. Setelah pengujian selesai, nilai dikembalikan ke `#1D4ED8`.

Hal ini menunjukkan bahwa primitive token terhubung dengan semantic token dan dapat digunakan kembali oleh berbagai komponen halaman.

### Dark Theme

Halaman memiliki dark theme menggunakan:

- `prefers-color-scheme: dark`
- toggle manual menggunakan checkbox
- semantic token untuk warna background, teks, surface, border, primary, danger, dan focus.

### Kriteria Keberhasilan

- [x] Primitive dan semantic token digunakan.
- [x] Layout menggunakan Flexbox.
- [x] Spacing menggunakan `gap`.
- [x] Typography menggunakan `rem`.
- [x] Dark theme tersedia.
- [x] Toggle tema manual berfungsi.
- [x] Design token berhasil diuji dengan perubahan satu nilai token.
- [x] Tidak menggunakan `!important`.
- [x] Tidak menggunakan inline `style`.


# Worksheet P5 — Layout Modern: Flexbox dan Grid

## Identitas

- Nama: **Muhammad Ziaul Haq**
- NIM: **25523065**
- Kelas: **B**
- Tanggal: **30 September 2026**

## A. Kerangka halaman

| Bagian | Nilai yang dipakai |
| --- | --- |
| Baris pertama | `auto` — tinggi mengikuti isi header |
| Baris kedua | `1fr` — mengisi sisa tinggi halaman |
| Baris ketiga | `auto` — tinggi mengikuti isi footer |
| Kolom isi | `minmax(0, 16rem) minmax(0, 1fr)` — sidebar tetap dan konten lentur |

### Sumbu dan arah

| Komponen | Arah | Sumbu utama | Sumbu silang |
| --- | --- | --- | --- |
| Navbar | baris | horizontal | vertikal |
| Baris tombol pada kartu | baris | horizontal | vertikal |
| Daftar menu samping | kolom | vertikal | horizontal |

### Pemilihan Flex dan Grid

| Bagian | Pilihan | Alasan |
| --- | --- | --- |
| Kepala halaman | Flex | Logo dan navigasi disusun dalam satu baris dengan jarak yang konsisten. |
| Isi dua kolom | Grid | Sidebar dan konten adalah struktur dua dimensi dengan kolom yang jelas. |
| Galeri kartu | Grid | Kartu menyesuaikan jumlah kolom otomatis melalui `repeat(auto-fit, minmax(...))`. |
| Isi di dalam satu kartu | Grid | Isi kartu memiliki baris dan jarak vertikal yang konsisten. |

## D. Penempatan blok

| Blok | Cara | Potongan kode |
| --- | --- | --- |
| Ringkasan jadwal | span | `.sorotan { grid-column: span 2; }` |
| Kartu jadwal mingguan | span | `.papan { grid-row: span 2; }` |
| Area isi halaman | area bernama | `.isi { grid-template-areas: "sisi utama"; }` |

## F. Pemeriksaan

- [x] Kerangka halaman menggunakan tiga baris Grid: `auto 1fr auto`.
- [x] Navbar dan baris aksi kartu memakai Flexbox dengan `gap`.
- [x] Kolom utama memakai `minmax()` dan `1fr`; tidak ada kolom dengan lebar piksel tetap.
- [x] Galeri memakai `repeat(auto-fit, minmax(min(16rem, 100%), 1fr))`.
- [x] Penempatan khusus memakai `span` dan named grid area.
- [x] Konten panjang ditangani dengan `min-width: 0` serta `overflow-wrap: anywhere`.
- [x] Tidak menggunakan `float` atau `!important`.
- [x] Pengalih tema gelap tetap tersedia.

### Potongan kode yang diingat

```css
.galeri {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
  gap: var(--space-4);
}
```

Dipakai pada galeri kartu agar jumlah kolom menyesuaikan lebar ruang tanpa aturan media query khusus untuk galeri.

### Tiket keluar

1. **Bagian yang memakai Flex:** navbar, menu samping, dan kaki kartu memakai Flexbox karena setiap bagian terutama menyusun item pada satu arah.
2. **Bagian yang memakai Grid:** kerangka halaman, area isi, dan galeri memakai Grid karena bagian tersebut mengatur baris dan kolom sekaligus.
3. **Kasus meluber dan perbaikannya:** judul yang sangat panjang dapat memperlebar kartu; masalah ini dicegah dengan `min-width: 0` pada isi kartu dan `overflow-wrap: anywhere` pada judul.

## Struktur berkas

```text
worksheet-p5/
├── profil.html
├── tokens.css
├── base.css
├── layout.css
├── komponen.css
├── tema.css
├── olahraga.jpg
└── README.md
```
