let tanggal = 10;

let sisa = (tanggal - 1) % 7;

let hari;
if (sisa === 0) {
  hari = "Senin";
} else if (sisa === 1) {
  hari = "Selasa";
} else if (sisa === 2) {
  hari = "Rabu";
} else if (sisa === 3) {
  hari = "Kamis";
} else if (sisa === 4) {
  hari = "Jumat";
} else if (sisa === 5) {
  hari = "Sabtu";
} else if (sisa === 6) {
  hari = "Minggu";
}

console.log(`Tanggal ${tanggal} adalah hari ${hari}`);