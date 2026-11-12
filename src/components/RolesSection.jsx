import { countByDept } from '../lib/roleStats';
import RoleCard from './RoleCard';

export default function RolesSection({
  roles,
  visibleRoles,
  departments,
  filter,
  onFilterChange,
  selectedId,
  onPick,
}) {
  return (
    <div className="block" id="rute">
      <div className="block-head">
        <h2>
          Rute yang <span className="hl">terbuka</span>
        </h2>
        <p className="count" role="status" aria-live="polite">
          Menampilkan {visibleRoles.length} dari {roles.length} rute
        </p>
      </div>

      <div className="filters" role="group" aria-label="Filter berdasarkan divisi">
        {departments.map((dept) => (
          <button
            key={dept}
            type="button"
            className="chip"
            aria-pressed={dept === filter}
            onClick={() => onFilterChange(dept)}
          >
            {dept} <span className="chip-n">{countByDept(roles, dept)}</span>
          </button>
        ))}
      </div>

      <ul className="grid" aria-label="Daftar posisi magang">
        {visibleRoles.map((role, index) => (
          // Key memuat filter agar kartu dipasang ulang (dan animasi masuk berjalan lagi)
          // setiap filter berganti, tetapi tidak saat pengguna hanya memilih rute.
          <RoleCard
            key={`${filter}-${role.id}`}
            role={role}
            index={index}
            selected={role.id === selectedId}
            onPick={onPick}
          />
        ))}
      </ul>
    </div>
  );
}
