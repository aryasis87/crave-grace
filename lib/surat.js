/* ============================================================================
   "Surat untuk Berdua" — jurnal konsep Grace. Setiap tulisan berbentuk surat:
   ada sapaan, isi, dan penutup bertanda tangan. Nadanya lembut dan sopan,
   seperti kartu yang diselipkan di dalam amplop.
   Blok: { p } paragraf, { h } subjudul miring, { kutip } kutipan di antara
   garis emas, { daftar } daftar berhias.
   ========================================================================== */

export const SURAT = [
  {
    slug: 'malam-yang-tidak-harus-sempurna',
    no: 'I',
    judul: 'Tentang malam yang tidak harus sempurna',
    ringkas: 'Surat pertama, untuk kalian yang terlalu lama menunggu "waktu yang tepat".',
    sapaan: 'Untuk kalian berdua,',
    tanggal: 'Surat pertama',
    menit: 4,
    isi: [
      { p: 'Kami sering menerima pesan yang dimulai dengan kalimat yang sama: "Kami ingin mencoba, tapi selalu ada saja yang kurang." Anaknya belum tidur. Besok harus berangkat pagi. Kamarnya belum rapi. Lalu minggu berganti bulan.' },
      { p: 'Kami ingin mengatakan sesuatu dengan lembut: malam yang sempurna itu jarang datang. Yang datang biasanya malam yang cukup. Dan malam yang cukup, bila disiapkan dengan sedikit perhatian, sering terasa lebih dari cukup.' },
      { h: 'Cukup itu seperti apa' },
      { daftar: ['Satu lampu kecil, bukan lampu kamar.', 'Dua puluh menit yang tidak diganggu layar.', 'Satu kalimat di awal: "Malam ini kita pelan-pelan saja, ya."'] },
      { p: 'Hanya itu. Tidak perlu lilin di setiap sudut, tidak perlu pakaian baru, tidak perlu barang apa pun dari kami. Babak pertama dari ritual yang kami tulis di beranda bisa dilakukan dengan apa yang sudah ada di rumah.' },
      { kutip: 'Malam yang sempurna jarang datang. Yang datang adalah malam yang cukup — dan itu sudah lebih dari cukup.' },
      { p: 'Kalau nanti ada yang tidak berjalan seperti bayangan — tertawa di saat yang salah, kaki kram, suara pintu kamar sebelah — biarkan saja. Justru hal-hal kecil itulah yang biasanya diingat bertahun-tahun kemudian, sambil tersenyum.' },
    ],
    penutup: 'Dengan hangat,',
  },
  {
    slug: 'hadiah-yang-tidak-dipajang',
    no: 'II',
    judul: 'Tentang memberi hadiah yang tidak bisa dipajang',
    ringkas: 'Cara memberikan hadiah keintiman tanpa membuat penerimanya merasa ditodong.',
    sapaan: 'Untuk kamu yang sedang memilih hadiah,',
    tanggal: 'Surat kedua',
    menit: 5,
    isi: [
      { p: 'Memberi hadiah yang hanya bisa dinikmati berdua itu indah, tapi juga sedikit berisiko. Hadiah yang salah waktu bisa terdengar seperti tuntutan, bukan undangan. Karena itu, izinkan kami berbagi beberapa hal yang kami pelajari dari ribuan kotak yang sudah kami bungkus.' },
      { h: 'Pilih yang mengundang, bukan yang menuntut' },
      { p: 'Hadiah pertama sebaiknya dari babak pertama atau kedua: minyak pijat, lilin, kartu percakapan. Barang-barang ini mengatakan "aku ingin lebih dekat denganmu" — bukan "aku ingin kamu melakukan sesuatu".' },
      { h: 'Berikan di saat yang tenang' },
      { p: 'Bukan di depan keluarga, bukan di tengah makan malam ulang tahun di restoran. Waktu terbaik adalah saat hanya ada kalian berdua dan tidak ada yang sedang terburu-buru. Itulah alasan kami menyediakan pilihan tanggal antar.' },
      { kutip: 'Hadiah yang baik mengatakan "aku ingin lebih dekat denganmu", bukan "aku ingin kamu melakukan sesuatu".' },
      { h: 'Tulis kartunya sendiri' },
      { p: 'Kami menyediakan ruang untuk pesan di setiap hadiah. Tulislah dengan kata-kata sendiri, sependek apa pun. "Untuk malam-malam kita yang pelan" jauh lebih berarti daripada kutipan indah yang disalin dari internet.' },
      { daftar: ['Sebut kenangan kecil yang hanya kalian berdua tahu.', 'Jangan menjelaskan isi kotaknya di kartu.', 'Beri pilihan: "Kita buka kapan kamu mau saja."'] },
    ],
    penutup: 'Semoga kotaknya dibuka dengan senyum,',
  },
  {
    slug: 'percakapan-sesudahnya',
    no: 'III',
    judul: 'Tentang percakapan sesudahnya',
    ringkas: 'Babak ketiga yang paling sering terlupa — dan paling menentukan malam berikutnya.',
    sapaan: 'Untuk kalian yang baru saja berbaring berdampingan,',
    tanggal: 'Surat ketiga',
    menit: 4,
    isi: [
      { p: 'Kami menamai babak ketiga dalam ritual kami "Berdua", dan banyak yang mengira itu soal apa yang terjadi di tengah malam. Sebenarnya bukan. Babak ketiga adalah yang terjadi sesudahnya: ketika napas mulai tenang dan salah satu dari kalian meraih selimut.' },
      { p: 'Di menit-menit itu, orang cenderung paling jujur dan paling lembut. Sayang sekali bila langsung diisi dengan ponsel.' },
      { h: 'Tiga pertanyaan yang tidak menakutkan' },
      { daftar: ['"Bagian mana yang paling kamu suka tadi?"', '"Ada yang ingin kita ulangi?"', '"Ada yang lebih baik kita lewati lain kali?"'] },
      { p: 'Perhatikan urutannya: yang menyenangkan dulu, baru yang perlu diperbaiki. Dan jawablah tanpa membela diri. Pasangan yang berani mengatakan "yang itu kurang enak" sedang memberimu hadiah yang lebih berharga daripada barang apa pun di koleksi kami.' },
      { kutip: 'Pasangan yang berani berkata "yang itu kurang enak" sedang memberimu hadiah paling berharga.' },
      { p: 'Kalau belum terbiasa, Kartu Percakapan Berdua berisi dua puluh empat pertanyaan semacam ini, dari yang paling ringan. Cukup ambil satu kartu, bacakan, dan dengarkan.' },
    ],
    penutup: 'Selamat berbincang,',
  },
]

export const suratBySlug = (slug) => SURAT.find((s) => s.slug === slug)
