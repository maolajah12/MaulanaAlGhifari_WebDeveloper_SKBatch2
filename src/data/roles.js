/**
 * Data posisi (mock). Semua isi fiktif untuk kebutuhan assignment.
 * Menambah posisi baru cukup dengan menambah satu objek di sini;
 * kartu, filter, hitungan, dan statistik akan mengikuti otomatis.
 */
export const ROLES = [
  {
    id: 'SK-ENG-01',
    dept: 'Engineering',
    title: 'Frontend Web Developer',
    summary: 'Membangun halaman dan komponen yang dipakai peserta belajar setiap hari, dari desain sampai rilis.',
    duration: '6 bulan',
    mode: 'Hybrid',
    slots: 3,
    skills: ['HTML & CSS', 'JavaScript', 'Git', 'Aksesibilitas'],
    tasks: [
      'Mengubah desain Figma menjadi halaman yang responsif',
      'Menulis komponen UI yang bisa dipakai ulang',
      'Memperbaiki bug tampilan bersama reviewer',
    ],
    needs: [
      'Paham HTML, CSS, dan JavaScript dasar',
      'Pernah membuat satu proyek web, sekecil apa pun',
      'Nyaman memakai Git dan membaca kode orang lain',
    ],
  },
  {
    id: 'SK-ENG-02',
    dept: 'Engineering',
    title: 'Backend Developer',
    summary: 'Merawat API dan database yang menopang fitur belajar, tes, dan sertifikat.',
    duration: '6 bulan',
    mode: 'Remote',
    slots: 2,
    skills: ['Node.js', 'SQL', 'REST API', 'Pengujian'],
    tasks: [
      'Membuat dan merawat endpoint REST untuk fitur baru',
      'Merancang tabel dan query yang efisien',
      'Menulis tes otomatis untuk jalur yang penting',
    ],
    needs: [
      'Mengerti dasar basis data dan protokol HTTP',
      'Bisa menjelaskan alasan di balik pilihan desainmu',
      'Terbiasa membaca dokumentasi teknis',
    ],
  },
  {
    id: 'SK-DSN-01',
    dept: 'Design',
    title: 'UI/UX Designer',
    summary: 'Merancang alur dari pendaftaran sampai kelulusan supaya peserta tidak tersesat di tengah jalan.',
    duration: '6 bulan',
    mode: 'Hybrid',
    slots: 2,
    skills: ['Figma', 'Riset pengguna', 'Prototyping', 'Design system'],
    tasks: [
      'Memetakan perjalanan peserta dari daftar sampai selesai belajar',
      'Membuat prototipe dan mengujinya ke pengguna',
      'Merawat komponen di design system',
    ],
    needs: [
      'Portofolio dengan minimal dua studi kasus',
      'Bisa menjelaskan alasan di balik keputusan desain',
      'Peka pada detail dan keterbacaan',
    ],
  },
  {
    id: 'SK-CNT-01',
    dept: 'Content',
    title: 'Content & Learning Writer',
    summary: 'Menulis materi belajar dan artikel karir yang jelas, ringkas, dan enak dibaca di layar ponsel.',
    duration: '4 bulan',
    mode: 'Remote',
    slots: 4,
    skills: ['Copywriting', 'Kurikulum', 'SEO dasar', 'Penyuntingan'],
    tasks: [
      'Menulis materi belajar dan artikel karir',
      'Menyunting naskah dari mentor dan praktisi',
      'Menyusun kalender konten bulanan',
    ],
    needs: [
      'Tulisan rapi dalam Bahasa Indonesia',
      'Bisa meringkas topik rumit menjadi mudah dipahami',
      'Senang riset dan mengecek fakta',
    ],
  },
  {
    id: 'SK-GRW-01',
    dept: 'Growth & Data',
    title: 'Growth Marketing',
    summary: 'Menjalankan kampanye pendaftaran, membaca hasilnya, lalu memperbaikinya minggu demi minggu.',
    duration: '4 bulan',
    mode: 'Hybrid',
    slots: 3,
    skills: ['Kampanye digital', 'Analitik', 'A/B testing', 'Email'],
    tasks: [
      'Menjalankan kampanye pendaftaran program',
      'Membaca hasil kampanye dan menyarankan perbaikan',
      'Menguji variasi halaman dan pesan',
    ],
    needs: [
      'Terbiasa membaca angka di spreadsheet atau dashboard',
      'Bisa menulis pesan yang singkat dan meyakinkan',
      'Rasa ingin tahu pada perilaku pengguna',
    ],
  },
  {
    id: 'SK-DAT-01',
    dept: 'Growth & Data',
    title: 'Data Analyst',
    summary: 'Mengubah data progres peserta menjadi dashboard dan temuan yang bisa langsung dipakai tim.',
    duration: '6 bulan',
    mode: 'Remote',
    slots: 1,
    skills: ['SQL', 'Spreadsheet', 'Visualisasi data', 'Statistik dasar'],
    tasks: [
      'Membuat dashboard progres peserta',
      'Membersihkan dan menggabungkan data dari beberapa sumber',
      'Menyajikan temuan dalam ringkasan satu halaman',
    ],
    needs: [
      'Bisa menulis query SQL dasar',
      'Mengerti statistik deskriptif',
      'Teliti saat memeriksa kualitas data',
    ],
  },
];
