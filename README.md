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
# Worksheet 6 — Responsif Mobile-First

- Nama: Muhammad Ziaul Haq
- NIM: 25523065
- Kelas: B

## Struktur

Folder ini salinan mandiri dari Worksheet 5. File asli di proyek PABW-Praktik tidak diubah.

- `profil.html`
- `tokens.css`
- `base.css`
- `layout.css`
- `komponen.css`
- `tema.css`
- `responsif.css`
- `olahraga.jpg`

## Implementasi

- Meta viewport sudah ada di `profil.html`.
- Gaya dasar mobile-first ada di `responsif.css`.
- Breakpoint tablet: `48rem`; galeri menjadi dua kolom.
- Breakpoint desktop: `60rem`; sidebar bersanding dengan konten dan galeri menjadi tiga kolom.
- Gambar memakai `max-width: 100%`.
- Tabel memakai `.tabel-wrap { overflow-x: auto; }`.
- Konten panjang memakai `min-width: 0` dan `overflow-wrap: anywhere`.
- Tidak memakai lebar tetap piksel untuk kolom layout.

## Hasil uji rancangan

| Lebar | Susunan |
|---|---|
| 360 px | Satu kolom, sidebar di bawah konten |
| 768 px | Galeri dua kolom |
| 1.280 px | Sidebar bersanding, galeri tiga kolom |


# Worksheet P8 — JavaScript Modern ES6+, Struktur Data, dan Array Methods

Nama: Muhammad Ziaul Haq  
NIM: 25523065  
Kelas: B  
Tanggal: 7 Oktober 2026

## Ringkasan pekerjaan

Folder ini berisi salinan hasil Pertemuan 6 yang dikembangkan untuk Pertemuan 8. Isi halaman olahraga dipindahkan menjadi data JavaScript di `js/app.js`, lalu diolah dengan fungsi murni dan array methods.

## Bukti implementasi

- `profil.html` memuat `js/app.js` dengan `<script type="module" src="js/app.js"></script>` sebelum `</body>`.
- Data profil tersimpan dalam `const profil`.
- Data proyek tersimpan dalam `const daftarProyek` berbentuk array of object.
- Fungsi murni `buatPerkenalan()` mengembalikan kalimat perkenalan.
- Fungsi murni `formatKeahlian()` mengembalikan daftar keahlian dalam satu baris.
- `map` dipakai untuk mengambil judul proyek.
- `filter` dipakai untuk mengambil proyek yang selesai.
- `find` dipakai untuk mengambil proyek dengan label `form`.
- Salinan array dibuat dengan `[...daftarProyek]` sebelum `sort`, sehingga data asli tidak berubah.
- Salinan object dibuat dengan `{ ...profil }`.
- Akses aman memakai `profil.alamat?.kota ?? "belum diisi"`.

## Catatan galat dan debugging

| Pesan galat | Baris | Sebab | Yang saya ubah |
|---|---:|---|---|
| `Failed to load resource: 404 (Not Found)` | `<script>` | Jalur script tidak cocok dengan letak file | Membuat folder `js/` dan memakai `src="js/app.js"` |
| `Cannot read properties of null` | Selector tombol tema | Selector tidak menemukan elemen | Memeriksa class `.pengalih-tema` dan menambahkan pengecekan `tombolTema !== null` |
| Nilai input tidak bisa dijumlahkan | Input angka | Nilai dari input bertipe string | Nilai harus diubah dengan `Number(input.value)` sebelum dihitung |

## Tiket keluar

1. Data yang sekarang tersimpan sebagai variabel adalah nama profil pada `profil.nama`. Kalau isinya berubah, saya cukup mengubah nilai `nama` di object `profil` pada `js/app.js`.
2. `const` dipakai untuk nilai yang tidak ditunjuk ulang, sedangkan `let` dipakai untuk nilai yang berubah. Contoh pemakaian `let`: `let pilihanAktif = "semua";` saat filter halaman nanti berubah oleh tombol.
3. Kalau `{ ...profil }` diganti menjadi `profil`, salinan hanya menunjuk object yang sama. Perubahan pada salinan ikut mengubah data asli. Hasilnya bisa terlihat di Console saat nilai salinan diubah.
4. Jika Console menampilkan `Cannot read properties of null` pada `querySelector`, saya memeriksa penulisan selector terhadap id/class HTML dan memeriksa letak script supaya elemen sudah ada saat dibaca.
5. Nilai dari kolom isian tidak bisa langsung dijumlahkan karena `input.value` selalu string. Caranya: `Number(input.value)` sebelum dihitung.

## Checklist F.1

- [x] Berkas `profil.html` dan folder `js/` ada.
- [x] Script module ada sebelum `</body>` dan tidak ditulis dua kali.
- [x] Data identitas, daftar keahlian, dan daftar proyek tersimpan sebagai `const` di `js/app.js`.
- [x] Dua fungsi murni bekerja dan memakai `return`.
- [x] `map`, `filter`, dan `find` dipakai pada data yang benar.
- [x] Data asli tidak berubah setelah salinan diurutkan.
- [x] Deklarasi AI ditulis di README.

## Satu baris untuk diingat

Kalau data sudah disimpan sebagai object dan array, HTML tidak perlu diubah setiap kali isi halaman berubah.

## Penilaian mandiri

| Bagian | Bobot | Nilai saya | Bukti |
|---|---:|---:|---|
| Sintaks dan tipe data | 15 | 15 | `js/app.js` bagian `profil`, `??`, `?.`, template literal |
| Fungsi murni | 25 | 25 | `buatPerkenalan()`, `formatKeahlian()` |
| Array methods | 25 | 25 | `map`, `filter`, `find`, `[...daftarProyek].sort()` |
| Penanganan galat dan kebersihan Console | 20 | 18 | Pengecekan selector, catatan galat README |
| Kebersihan kode, deklarasi AI, dan commit | 15 | 13 | README sudah ada; commit dan push dilakukan setelah ini |
| TOTAL | 100 | 96 | Folder `worksheet-p8` |

## Catatan untuk pengampu

Bagian tersulit hari ini: membedakan kapan memakai `map`, `filter`, dan `find`.


## Deklarasi AI

AI membantu menyusun struktur `js/app.js`, membuat contoh jawaban README, dan memeriksa kesesuaian dengan rubrik. Pemilihan topik halaman, identitas, pengecekan akhir, commit, dan push ke GitHub dilakukan sendiri oleh mahasiswa.

