// Latihan JavaScript Dasar - Minggu 06
// Kalkulator nilai rapor di Console
// 1. Pesan pertama ke Console
console.log("Halo, saya Lhaila!");
console.log("Ini latihan JavaScript pertamaku.");
// 2. Data siswa
const nama = "Umi Lhailatul Dwi Pranata";
const kelas = "X PPLG 1";
const kkm = 75;
let nilaiTugas = 85;
let nilaiUts = 78;
let nilaiUas = 89;
let kehadiran = 90;
console.log(`Nama: ${nama}, kelas ${kelas}`);
console.log(`Nilai tugas ${nilaiTugas}, UTS ${nilaiUts}, UAS $
{nilaiUas}`);
// 3. Fungsi
const hitungRataRata = (tugas, uts, uas) => (tugas + uts + uas) / 3;
function predikat(nilai) {
  if (nilai >= 90) {
    return "A";
  } else if (nilai >= 80) {
    return "B";
  } else if (nilai >= 70) {
    return "C";
  } else {
    return "D";
  }
}
function rapor(namaSiswa, tugas, uts, uas) {
  const rata = hitungRataRata(tugas, uts, uas);
  return `${namaSiswa}: rata-rata ${rata}, predikat $
{predikat(rata)}`;
}// 4. Hasil nilai Lhaila
const rataRata = hitungRataRata(nilaiTugas, nilaiUts, nilaiUas);
const lulus = rataRata >= kkm;
const dapatSertifikat = lulus && kehadiran >= 80;
console.log(`Rata-rata nilai: ${rataRata}`);
console.log(`Predikat: ${predikat(rataRata)}`);
console.log(`Lulus KKM: ${lulus}`);
console.log(`Dapat sertifikat: ${dapatSertifikat}`);
// Pesan kelulusan
if (lulus) {
  console.log("Selamat, kamu lulus KKM!");
} else {
  console.log("Tetap semangat, ikuti remedial ya.");
}
// 5. Menguji fungsi predikat dengan beberapa nilai
console.log(`predikat(95) = ${predikat(95)}`); // A
console.log(`predikat(90) = ${predikat(90)}`); // A, tepat di batas
console.log(`predikat(84) = ${predikat(84)}`); // B
console.log(`predikat(70) = ${predikat(70)}`); // C
console.log(`predikat(69) = ${predikat(69)}`); // D
// 6. Rapor beberapa siswa
console.log(rapor("Lhaila", 85, 78, 89));
console.log(rapor("Sinta", 92, 88, 96));
console.log(rapor("Budi", 70, 65, 72));

// Ambil elemen tombol dan body
const tombolTema = document.getElementById('theme-toggle');
const body = document.body;

// 1. Cek apakah pengguna sebelumnya sudah memilih mode gelap
if (localStorage.getItem('tema') === 'gelap') {
  body.classList.add('dark-mode');
  if (tombolTema) {
    tombolTema.textContent = 'Mode Terang';
  }
}

// 2. Jalankan fungsi saat tombol diklik
if (tombolTema) {
  tombolTema.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Ubah tulisan tombol dan simpan pilihan ke memori browser
    if (body.classList.contains('dark-mode')) {
      tombolTema.textContent = 'Mode Terang';
      localStorage.setItem('tema', 'gelap');
    } else {
      tombolTema.textContent = 'Mode Gelap';
      localStorage.setItem('tema', 'terang');
    }
  });
}

const statusRepo = document.getElementById("status-repo");
const daftarRepo = document.getElementById("daftar-repo");

// Ganti dengan username GitHub Anda
const username = "Lhailalhaila";

async function ambilRepo() {
  // Tahap 4 sesuai buku: Menampilkan status memuat sebelum data datang
  statusRepo.textContent = "Memuat...";

  try {
    // Mengambil maksimal 6 repositori yang terakhir diperbarui
    const response = await fetch("https://api.github.com/users/Lhailalhaila");





    const data = await response.json();

    // Update teks jumlah repositori
    statusRepo.textContent = `${data.length} repositori yang terakhir diperbarui:`;

    // Masukkan setiap nama repositori ke dalam daftar <ul>
    data.forEach(repo => {
      const li = document.createElement("li");
      const link = document.createElement("a");

      link.href = repo.html_url;
      link.textContent = repo.name;
      link.target = "_blank"; // Buka di tab baru

      li.appendChild(link);
      daftarRepo.appendChild(li);
    });
  } catch (error) {
    statusRepo.textContent = "Gagal memuat repositori.";
    console.error(error);
  }
}

// Jalankan fungsi saat halaman dibuka
ambilRepo();

// 1. Panggil file proyek.json
fetch("proyek.json")
  .then(response => response.json()) // Ubah teks JSON menjadi data JavaScript
  .then(data => {
    const wadah = document.getElementById("wadah-proyek");

    // 2. Ulangi untuk setiap proyek yang ada di dalam JSON
    data.forEach(item => {
      const li = document.createElement("li");

      // 3. Masukkan nama, deskripsi, dan tahun ke dalam tampilan HTML
      li.innerHTML = `<strong>${item.nama}</strong> (${item.tahun}) - ${item.deskripsi}`;

      wadah.appendChild(li);
    });
  })
  .catch(error => {
    console.error("Terjadi kesalahan saat memuat JSON:", error);
  });

