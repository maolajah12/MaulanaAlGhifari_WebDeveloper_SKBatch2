/** Tiket dekoratif di pembuka. Disembunyikan dari pembaca layar. */
export default function BoardingPass({ slotCount }) {
  return (
    <div className="pass" aria-hidden="true">
      <div className="pass-shell notched">
        <div className="pass-main">
          <div className="pass-label"><span>Tiket karir</span><span>Batch 2</span></div>
          <div className="pass-route">
            <div className="pass-city"><small>Dari</small><strong>Bangku kuliah</strong></div>
            <span className="pass-line" />
            <div className="pass-city"><small>Ke</small><strong>Tim produk</strong></div>
          </div>
          <dl className="pass-fields">
            <div><dt>Durasi</dt><dd>4–6 bulan</dd></div>
            <div><dt>Mode</dt><dd>Hybrid / Remote</dd></div>
            <div><dt>Kursi</dt><dd>{slotCount}</dd></div>
          </dl>
        </div>
        <div className="pass-stub">
          <span className="stub-line" />
          <span className="barcode" />
          <span className="stamp">Terbuka</span>
        </div>
      </div>
    </div>
  );
}