const DEFAULT_TEXT =
  'Belum ada rute yang dipilih. Pilih satu di atas, atau daftar sekarang dan tentukan nanti.';

export default function CtaBand({ selectedRole, onApply, sectionRef, buttonRef }) {
  return (
    <div className="block">
      <div className="cta" id="daftar" ref={sectionRef}>
        <div className="cta-copy">
          <h2>
            Siap <span className="hl hl-yellow">berangkat?</span>
          </h2>
          <p role="status" aria-live="polite">
            {selectedRole
              ? `Rute dipilih: ${selectedRole.title} (${selectedRole.id}). Kamu bisa menggantinya di formulir.`
              : DEFAULT_TEXT}
          </p>
        </div>
        <button type="button" className="btn btn-signal" onClick={onApply} ref={buttonRef}>
          Lanjut ke formulir <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}