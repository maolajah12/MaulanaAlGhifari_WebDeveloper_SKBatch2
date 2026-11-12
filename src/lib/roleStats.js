import { ALL } from '../config';

/** Daftar filter: "Semua" diikuti divisi unik sesuai urutan kemunculan. */
export function getDepartments(roles) {
  return [ALL, ...new Set(roles.map((role) => role.dept))];
}

export function filterRoles(roles, dept) {
  return dept === ALL ? roles : roles.filter((role) => role.dept === dept);
}

export function countByDept(roles, dept) {
  return filterRoles(roles, dept).length;
}

export function getStats(roles) {
  return {
    roleCount: roles.length,
    deptCount: new Set(roles.map((role) => role.dept)).size,
    slotCount: roles.reduce((sum, role) => sum + role.slots, 0),
  };
}
