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