import BoardingPass from './BoardingPass';

// Ikon sederhana buatan sendiri untuk stiker keunggulan.
const ICONS = {
  bulb: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15.5 14.3c3 .2 5.5 2.3 5.5 5.7" />
    </svg>
  ),
};

const PERKS = [
  { icon: 'bulb', label: 'Real projects' },
  { icon: 'briefcase', label: 'Paid internship' },
  { icon: 'people', label: 'Volunteership' },
];

export default function Hero({ stats }) {
  return (
    <div className="hero">
      <span className="spark" style={{ top: '7%', right: '46%', '--s': '30px' }} aria-hidden="true" />
      <span className="spark" style={{ bottom: '9%', left: '45%', '--s': '22px' }} aria-hidden="true" />
      <span className="spark" style={{ top: '6%', right: '5%', '--s': '38px' }} aria-hidden="true" />

      <div className="hero-copy">
        <p className="eyebrow">Open recruitment · Batch 2</p>
        <h1 id="judul-karir">
          <span className="h-line">Pilih</span>{' '}
          <span className="h-box">rutemu.</span>{' '}
          <span className="h-sub">Kami siapkan perjalanannya.</span>
        </h1>
        <p className="lead">
          Bangun, belajar, dan tumbuh lewat proyek nyata. Kamu dibimbing mentor dan pulang
          dengan portofolio yang bisa kamu tunjukkan.
        </p>

        <ul className="perks" aria-label="Keunggulan program">
          {PERKS.map((perk) => (
            <li key={perk.label} className="perk">
              <span className="perk-icon">{ICONS[perk.icon]}</span>
              {perk.label}
            </li>
          ))}
        </ul>

        <div className="actions">
          <a className="btn btn-yellow" href="#rute">
            Lihat rute terbuka <span aria-hidden="true">→</span>
          </a>
          <a className="btn btn-white" href="#proses">Bagaimana prosesnya</a>
        </div>
        <p className="hero-meta">
          {stats.roleCount} rute · {stats.deptCount} divisi · {stats.slotCount} kursi tersedia
        </p>
      </div>

      <BoardingPass slotCount={stats.slotCount} />
    </div>
  );
}