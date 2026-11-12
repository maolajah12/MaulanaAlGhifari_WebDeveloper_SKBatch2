export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap bar">
        <a className="brand" href="#top" aria-label="Sekolah Karir, kembali ke atas">
          <svg className="brand-mark" viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" focusable="false">
            <rect width="32" height="32" rx="8" fill="currentColor" />
            <path d="M16 6v20" stroke="var(--signal)" strokeWidth="2.5" strokeDasharray="3 3" />
          </svg>
          <span>Sekolah Karir</span>
        </a>
        <nav className="nav" aria-label="Navigasi utama">
          <a href="#rute">Rute</a>
          <a href="#proses">Proses</a>
        </nav>
        <a className="btn btn-small" href="#daftar">Daftar</a>
      </div>
    </header>
  );
}
