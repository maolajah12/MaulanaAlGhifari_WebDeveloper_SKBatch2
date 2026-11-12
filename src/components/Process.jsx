const STOPS = [
  { title: 'Kirim berkas', text: 'CV singkat dan tautan portofolio atau proyek. Satu halaman sudah cukup.' },
  { title: 'Mini assignment', text: 'Soal kecil yang dikerjakan 90–120 menit, dengan jendela pengumpulan 72 jam.' },
  { title: 'Ngobrol dengan tim', text: 'Kami membahas hasil kerjamu dan cara kamu mengambil keputusan.' },
  { title: 'Hari pertama', text: 'Kamu bertemu mentor dan langsung masuk ke pekerjaan yang sudah disiapkan.' },
];

export default function Process() {
  return (
    <div className="block" id="proses">
      <div className="block-head">
        <h2>
          Empat pemberhentian sampai <span className="hl hl-pink">hari pertama</span>
        </h2>
      </div>
      <ol className="route">
        {STOPS.map((stop, index) => (
          <li key={stop.title} className={`stop${index === STOPS.length - 1 ? ' stop-last' : ''}`}>
            <span className="stop-dot" aria-hidden="true">{index + 1}</span>
            <div>
              <h3>{stop.title}</h3>
              <p>{stop.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
