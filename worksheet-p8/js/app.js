const profil = {
  nama: "Muhammad Ziaul Haq",
  nim: "25523065",
  kelas: "B",
  peran: "Mahasiswa Informatika yang belajar front-end",
  topik: "Jadwal dan Target Olahraga Saya",
  keahlian: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
  jumlahSesiMingguan: 4,
};

const daftarProyek = [
  { judul: "Halaman Profil Olahraga", tahun: 2026, label: "profil", selesai: true },
  { judul: "Jadwal Olahraga Mingguan", tahun: 2026, label: "jadwal", selesai: true },
  { judul: "Form Catat Latihan", tahun: 2026, label: "form", selesai: true },
  { judul: "Pengalih Tema", tahun: 2026, label: "interaksi", selesai: true },
];

function buatPerkenalan({ nama, peran, topik }) {
  return `${nama} — ${peran}. Halaman saya bertema ${topik}.`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai);
const proyekForm = daftarProyek.find((proyek) => proyek.label === "form");
const proyekUrut = [...daftarProyek].sort((a, b) => a.judul.localeCompare(b.judul));
const salinanProfil = { ...profil };

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
console.log(`Jumlah sesi mingguan: ${profil.jumlahSesiMingguan ?? 0}`);
console.log(`Kota: ${profil.alamat?.kota ?? "belum diisi"}`);
console.table(profil.keahlian);
console.table(daftarProyek);
console.table(proyekSelesai);
console.log(judulProyek);
console.log(proyekForm);
console.table(proyekUrut);
console.log(salinanProfil);

// Hanya jalankan di browser, bukan di Node
if (typeof document !== "undefined") {
  const tombolTema = document.querySelector(".pengalih-tema");

  if (tombolTema !== null) {
    tombolTema.addEventListener("click", () => {
      document.body.classList.toggle("tema-gelap");
      tombolTema.setAttribute("aria-pressed", document.body.classList.contains("tema-gelap"));
    });
  } else {
    console.error("Tombol tema tidak ditemukan. Periksa class .pengalih-tema di profil.html.");
  }
}
