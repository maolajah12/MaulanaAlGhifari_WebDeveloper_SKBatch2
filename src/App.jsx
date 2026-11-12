import { useMemo, useRef, useState } from 'react';
import { ROLES } from './data/roles';
import { ALL } from './config';
import { filterRoles, getDepartments, getStats } from './lib/roleStats';
import { scrollToElement } from './lib/scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import RolesSection from './components/RolesSection';
import Process from './components/Process';
import CtaBand from './components/CtaBand';
import ApplyDialog from './components/ApplyDialog';
import Footer from './components/Footer';

export default function App() {
  const [filter, setFilter] = useState(ALL);
  const [selectedId, setSelectedId] = useState(null);
  const [applyOpen, setApplyOpen] = useState(false);

  const ctaRef = useRef(null);
  const applyButtonRef = useRef(null);

  const departments = useMemo(() => getDepartments(ROLES), []);
  const stats = useMemo(() => getStats(ROLES), []);
  const visibleRoles = useMemo(() => filterRoles(ROLES, filter), [filter]);
  const selectedRole = ROLES.find((role) => role.id === selectedId) ?? null;

  function handlePick(id) {
    setSelectedId(id);
    scrollToElement(ctaRef.current);
    applyButtonRef.current?.focus({ preventScroll: true });
  }

  return (
    <>
      <a className="skip-link" href="#karir">Lewati ke konten</a>
      <Header />

      <main id="top">
        <section id="karir" className="careers" aria-labelledby="judul-karir">
          <div className="wrap">
            <Hero stats={stats} />
            <RolesSection
              roles={ROLES}
              visibleRoles={visibleRoles}
              departments={departments}
              filter={filter}
              onFilterChange={setFilter}
              selectedId={selectedId}
              onPick={handlePick}
            />
            <Process />
            <CtaBand
              selectedRole={selectedRole}
              onApply={() => setApplyOpen(true)}
              sectionRef={ctaRef}
              buttonRef={applyButtonRef}
            />
          </div>
        </section>
      </main>

      <Footer />

      <ApplyDialog
        open={applyOpen}
        roles={ROLES}
        initialRoleId={selectedId}
        onClose={() => setApplyOpen(false)}
      />
    </>
  );
}