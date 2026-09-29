/* ============================================================================
   Katalog konsep "Grace" — Amplop Sutra.
   Ciri khas varian ini: barang disusun menurut tiga babak ritual berdua
   (bukan menurut jenis), dan setiap barang siap dijadikan hadiah — lengkap
   dengan cara ia dibungkus. Nama, harga, dan spesifikasi adalah contoh
   untuk purwarupa desain kontes.
   ========================================================================== */

export const BABAK = [
  { no: 'I', id: 'ruang', nama: 'Menyiapkan ruang', waktu: '10 menit', ringkas: 'Cahaya, aroma, dan kesepakatan untuk tidak terburu-buru.' },
  { no: 'II', id: 'tempo', nama: 'Melambatkan tempo', waktu: '20 menit', ringkas: 'Sentuhan yang tidak menuntut apa-apa, lalu perlahan lebih dekat.' },
  { no: 'III', id: 'berdua', nama: 'Berdua', waktu: 'Sesudahnya', ringkas: 'Yang dipakai bersama — dan percakapan setelahnya.' },
]

export const BUNGKUS = [
  { id: 'gading', nama: 'Kertas gading', warna: '#f3e9dc', pita: '#4a2338', ket: 'Kertas bertekstur, pita plum, segel lilin emas.' },
  { id: 'plum', nama: 'Kertas plum', warna: '#4a2338', pita: '#a8834e', ket: 'Kertas plum tua, pita emas redup. Paling sering dipilih untuk ulang tahun pernikahan.' },
  { id: 'polos', nama: 'Kotak polos', warna: '#c9b8a6', pita: null, ket: 'Tanpa pita, tanpa kartu. Untuk yang ingin kejutannya benar-benar diam.' },
]

export const PRODUK = [
  {
    slug: 'kotak-berdua',
    nama: 'Kotak Berdua',
    babak: 'ruang',
    harga: 1480000,
    image: '/images/p4.jpg',
    unggulan: true,
    ringkas: 'Lilin pijat, minyak, pelumas, dan kartu percakapan dalam satu kotak berengsel. Hadiah yang paling sering dipilih.',
    cerita: [
      'Kami menyusun kotak ini seperti menyusun undangan: isinya berurutan sesuai babak. Lapisan teratas untuk menyiapkan ruang, lapisan tengah untuk melambatkan tempo, dan di dasar kotak — kartu untuk dibaca berdua sesudahnya.',
      'Kotaknya berengsel dan dilapisi kain, cukup cantik untuk disimpan sebagai tempat perhiasan setelah isinya habis.',
    ],
    spek: [
      ['Isi', 'Lilin pijat, minyak 50 ml, pelumas 50 ml, 24 kartu'],
      ['Kotak', 'Karton kaku berlapis kain, 26 × 20 × 8 cm'],
      ['Aroma lilin', 'Mawar dan kayu cendana, tipis'],
      ['Siap hadiah', 'Ya — tinggal pilih kertas pembungkus'],
    ],
  },
  {
    slug: 'minyak-pijat-sutra',
    nama: 'Minyak Pijat Sutra',
    babak: 'ruang',
    harga: 185000,
    image: '/images/p15.jpeg',
    unggulan: true,
    ringkas: 'Licin cukup lama untuk pijatan panjang, lalu menyerap tanpa meninggalkan noda di seprai.',
    cerita: [
      'Babak pertama selalu dimulai dari tangan. Minyak ini dibuat untuk pijatan yang tidak terburu-buru: tidak cepat kering, tidak lengket, dan aromanya hilang sebelum menjadi terlalu banyak.',
      'Botolnya kaca bening dengan pipet, cukup rapi untuk diletakkan di meja rias tanpa menimbulkan pertanyaan.',
    ],
    spek: [
      ['Bahan dasar', 'Minyak jojoba & biji anggur'],
      ['Isi', '50 ml, botol kaca dengan pipet'],
      ['Aroma', 'Sitrus dan melati, sangat tipis'],
      ['Catatan', 'Pemakaian luar, tidak untuk kondom lateks'],
    ],
  },
  {
    slug: 'pelumas-sutra',
    nama: 'Pelumas Sutra',
    babak: 'tempo',
    harga: 175000,
    image: '/images/p14.jpeg',
    unggulan: false,
    ringkas: 'Berbahan air, lembut seperti namanya, aman bersama semua alat di koleksi ini.',
    cerita: [
      'Kalau ada satu barang yang kami sarankan diselipkan ke setiap hadiah, inilah dia. Hampir semua ketidaknyamanan di awal berasal dari kurang licin.',
      'Tanpa pewangi dan gliserin, jadi aman untuk kulit yang paling sensitif sekalipun.',
    ],
    spek: [
      ['Bahan dasar', 'Air, tanpa gliserin & paraben'],
      ['Isi', '100 ml, tutup pompa'],
      ['Aman untuk', 'Alat silikon & kondom lateks'],
      ['Setelah dibuka', 'Pakai dalam 12 bulan'],
    ],
  },
  {
    slug: 'bisik',
    nama: 'Bisik',
    babak: 'tempo',
    harga: 345000,
    image: '/images/p2.jpg',
    unggulan: false,
    ringkas: 'Kecil, halus, dan hampir tak bersuara. Alat pertama yang paling jarang membuat canggung.',
    cerita: [
      'Namanya diambil dari suaranya: di tingkat terendah, Bisik lebih pelan dari suara orang berbisik. Satu tombol, tiga kekuatan, tanpa pola yang membingungkan.',
      'Ukurannya sebesar lipstik dan muat di kantong kain yang disertakan — mudah diselipkan ke dalam kotak hadiah mana pun.',
    ],
    spek: [
      ['Material', 'Silikon medical-grade, bebas BPA'],
      ['Kekuatan', '3 tingkat'],
      ['Daya', 'Baterai AAA, ±3 jam'],
      ['Ketahanan air', 'Tahan air penuh (IPX7)'],
    ],
  },
  {
    slug: 'wand-sutra',
    nama: 'Wand Sutra',
    babak: 'tempo',
    harga: 1090000,
    image: '/images/p7.jpg',
    unggulan: false,
    ringkas: 'Kepala lebar yang empuk. Enak untuk pijat bahu — dan untuk yang lebih dari itu.',
    cerita: [
      'Wand Sutra sering menjadi jembatan antara babak kedua dan ketiga: dimulai sebagai alat pijat di punggung, lalu pelan-pelan berpindah tempat.',
      'Selalu menyala di kekuatan terendah, jadi tidak ada kejutan yang tidak diinginkan.',
    ],
    spek: [
      ['Material', 'Silikon medical-grade, gagang ABS'],
      ['Pola', '8 pola, 5 kekuatan'],
      ['Daya', 'Isi ulang USB-C, ±2,5 jam'],
      ['Kebisingan', 'Di bawah 42 dB'],
    ],
  },
  {
    slug: 'duo-berdua',
    nama: 'Duo Berdua',
    babak: 'berdua',
    harga: 1290000,
    image: '/images/p3.jpg',
    unggulan: false,
    ringkas: 'Dirancang untuk dipakai berdua sekaligus, bukan bergantian.',
    cerita: [
      'Babak ketiga adalah tentang kebersamaan, dan Duo Berdua dibuat untuk tepat itu: bentuknya melengkung sehingga bisa dipakai bersamaan oleh kalian berdua.',
      'Kami menyarankan membukanya bersama-sama — bukan sebagai kejutan di tengah malam.',
    ],
    spek: [
      ['Material', 'Silikon medical-grade, bebas BPA'],
      ['Pola', '10 pola, 2 motor'],
      ['Daya', 'Isi ulang USB-C, ±2 jam'],
      ['Ketahanan air', 'Tahan percik'],
    ],
  },
  {
    slug: 'remote-rahasia',
    nama: 'Remote Rahasia',
    babak: 'berdua',
    harga: 1390000,
    image: '/images/p8.jpg',
    unggulan: false,
    ringkas: 'Kendali di tangan pasangan, lewat remote kecil yang muat di genggaman.',
    cerita: [
      'Hadiah untuk pasangan yang sudah lama bersama dan ingin sedikit permainan baru. Remote-nya sebesar kunci mobil dan bekerja sampai delapan meter.',
      'Ada satu tombol "berhenti" yang mematikan semuanya seketika — kami menganggap itu fitur terpenting.',
    ],
    spek: [
      ['Material', 'Silikon medical-grade, bebas BPA'],
      ['Kendali', 'Remote nirkabel, 8 m'],
      ['Daya', 'Isi ulang magnetik, ±90 menit'],
      ['Pengaman', 'Tombol berhenti di remote & alat'],
    ],
  },
  {
    slug: 'kartu-percakapan',
    nama: 'Kartu Percakapan Berdua',
    babak: 'berdua',
    harga: 95000,
    image: null,
    unggulan: true,
    ringkas: 'Dua puluh empat pertanyaan untuk sesudahnya — dari yang ringan sampai yang jarang berani ditanyakan.',
    cerita: [
      'Babak ketiga sering terlupa: percakapan setelahnya. Kartu ini membantu memulainya tanpa terasa seperti rapat evaluasi.',
      'Setiap kartu dicetak di kertas katun tebal dengan huruf timbul. Tidak ada gambar, tidak ada logo — aman ditinggalkan di meja samping.',
    ],
    spek: [
      ['Isi', '24 kartu dalam tiga warna'],
      ['Ukuran', '9 × 6 cm, kertas katun 600 gsm'],
      ['Bahasa', 'Indonesia'],
      ['Contoh kartu', '"Apa yang ingin kita ulangi minggu depan?"'],
    ],
  },
  {
    slug: 'set-lengkap-berdua',
    nama: 'Set Lengkap Berdua',
    babak: 'berdua',
    harga: 1650000,
    image: '/images/p5.jpg',
    unggulan: false,
    ringkas: 'Empat bentuk dalam kotak bersekat, untuk pasangan yang sudah tahu apa yang mereka suka.',
    cerita: [
      'Bukan hadiah pertama — dan kami lebih suka mengatakannya terus terang. Set ini untuk pasangan yang sudah melewati ketiga babak berkali-kali dan ingin menjelajah lebih jauh.',
      'Empat bentuk disimpan di kotak kaku bersekat dengan tutup magnet, tanpa cetakan di luar.',
    ],
    spek: [
      ['Material', 'Silikon medical-grade, bebas BPA'],
      ['Isi', '4 bentuk, 2 bermotor'],
      ['Daya', 'Isi ulang USB-C'],
      ['Ketahanan air', 'Tahan air penuh (IPX7)'],
    ],
  },
]

export const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID')
export const produkBySlug = (slug) => PRODUK.find((p) => p.slug === slug)
export const babakDari = (id) => BABAK.find((b) => b.id === id)
