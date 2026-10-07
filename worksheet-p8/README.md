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

Yang ingin saya bahas di kelas berikutnya: cara menampilkan data array ke halaman HTML dengan DOM.

## Deklarasi AI

AI membantu menyusun struktur `js/app.js`, membuat contoh jawaban README, dan memeriksa kesesuaian dengan rubrik. Pemilihan topik halaman, identitas, pengecekan akhir, commit, dan push ke GitHub dilakukan sendiri oleh mahasiswa.
