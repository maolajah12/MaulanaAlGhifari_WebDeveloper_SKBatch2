import { DEPT_TONES, LOW_SLOT_LIMIT } from '../config';

function BulletList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function RoleCard({ role, index, selected, onPick }) {
  const scarce = role.slots <= LOW_SLOT_LIMIT;

  return (
    // <li> membawa bayangan keras (filter) dan animasi; <div> di dalamnya
    // membawa mask takik tiket, karena mask akan memotong bayangan biasa.
    <li
      className="ticket"
      data-id={role.id}
      data-tone={DEPT_TONES[role.dept] ?? 'blue'}
      style={{ '--i': index }}
    >
      <div className={`ticket-shell notched${selected ? ' is-selected' : ''}`}>
        <div className="ticket-head">
          <div className="ticket-top">
            <span className="code">{role.id}</span>
            <span className={`pill${scarce ? ' pill-warn' : ''}`}>
              {scarce ? 'Slot terbatas' : 'Dibuka'}
            </span>
          </div>
          <p className="dept">{role.dept}</p>
          <h3>{role.title}</h3>
        </div>

        <div className="ticket-body">
          <p className="summary">{role.summary}</p>

          <dl className="fields">
            <div><dt>Durasi</dt><dd>{role.duration}</dd></div>
            <div><dt>Mode</dt><dd>{role.mode}</dd></div>
            <div><dt>Kursi</dt><dd>{role.slots}</dd></div>
          </dl>

          <ul className="skills" aria-label="Skill utama">
            {role.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <details className="more">
            <summary>Lihat detail rute</summary>
            <div className="more-body">
              <h4>Yang kamu kerjakan</h4>
              <BulletList items={role.tasks} />
              <h4>Yang kami cari</h4>
              <BulletList items={role.needs} />
            </div>
          </details>
        </div>

        <div className="ticket-stub">
          <span className="stub-line" />
          <span className="barcode" aria-hidden="true" />
          <button
            type="button"
            className="btn btn-small"
            data-selected={selected}
            aria-label={`${selected ? 'Rute dipilih' : 'Pilih rute'}: ${role.title}`}
            onClick={() => onPick(role.id)}
          >
            {selected ? 'Rute dipilih ✓' : 'Pilih rute ini'}
          </button>
        </div>
      </div>
    </li>
  );
}