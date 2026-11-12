import { useEffect, useId, useRef, useState } from 'react';

/**
 * Formulir pendaftaran SIMULASI. Tidak ada data yang dikirim atau disimpan;
 * tujuannya hanya melengkapi alur demo dari "Pilih rute" sampai "Daftar".
 * Memakai elemen <dialog> bawaan browser: fokus terkunci di dalam dialog,
 * Esc menutup, dan fokus kembali ke tombol pemicu secara otomatis.
 */
export default function ApplyDialog({ open, roles, initialRoleId, onClose }) {
    const dialogRef = useRef(null);
    const titleId = useId();

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (open && !dialog.open) dialog.showModal();
        if (!open && dialog.open) dialog.close();
    }, [open]);

    return (
        // Klik pada latar gelap (::backdrop) mengenai elemen <dialog> itu sendiri.
        // Pengguna keyboard menutup lewat Esc atau tombol Tutup.
        <dialog
            ref={dialogRef}
            className="dialog"
            aria-labelledby={titleId}
            onClose={onClose}
            onClick={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            {open && (
                <ApplyForm
                    roles={roles}
                    initialRoleId={initialRoleId}
                    titleId={titleId}
                    onClose={onClose}
                />
            )}
        </dialog>
    );
}

function ApplyForm({ roles, initialRoleId, titleId, onClose }) {
    const [result, setResult] = useState(null);
    const uid = useId();
    const ids = {
        name: `${uid}-nama`,
        email: `${uid}-email`,
        role: `${uid}-rute`,
        portfolio: `${uid}-portofolio`,
    };

    function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setResult({
            name: String(data.get('nama')).trim(),
            email: String(data.get('email')).trim(),
            role: roles.find((role) => role.id === data.get('rute')),
        });
    }

    if (result) {
        return (
            <div className="dialog-body" role="status">
                <p className="dialog-kicker">Simulasi selesai</p>
                <h2 id={titleId}>Simulasi berhasil, {result.name}</h2>
                <dl className="receipt">
                    <div><dt>Rute</dt><dd>{result.role.title} ({result.role.id})</dd></div>
                    <div><dt>Email</dt><dd>{result.email}</dd></div>
                </dl>
                <p className="dialog-note">
                    Ini hanya demo, jadi tidak ada data yang dikirim atau disimpan. Pada versi nyata,
                    konfirmasi akan dikirim ke email di atas.
                </p>
                <button type="button" className="btn" onClick={onClose}>Selesai</button>
            </div>
        );
    }

    return (
        <form className="dialog-body" onSubmit={handleSubmit}>
            <div className="dialog-head">
                <div>
                    <p className="dialog-kicker">Formulir simulasi</p>
                    <h2 id={titleId}>Daftar ke rutemu</h2>
                </div>
                <button type="button" className="dialog-close" aria-label="Tutup formulir" onClick={onClose}>
                    ×
                </button>
            </div>

            <p className="dialog-note">
                Formulir ini hanya untuk demo. Data tidak dikirim ke mana pun, jadi pakai data contoh
                dan jangan isi data pribadi yang sebenarnya.
            </p>

            <div className="field">
                <label htmlFor={ids.name}>Nama lengkap</label>
                <input id={ids.name} name="nama" type="text" required autoComplete="off" placeholder="Contoh: Nama Peserta" />
            </div>

            <div className="field">
                <label htmlFor={ids.email}>Email</label>
                <input id={ids.email} name="email" type="email" required autoComplete="off" placeholder="nama@contoh.id" />
            </div>

            <div className="field">
                <label htmlFor={ids.role}>Rute yang dipilih</label>
                <select id={ids.role} name="rute" required defaultValue={initialRoleId ?? ''}>
                    <option value="" disabled>Pilih satu rute</option>
                    {roles.map((role) => (
                        <option key={role.id} value={role.id}>{role.title} · {role.id}</option>
                    ))}
                </select>
            </div>

            <div className="field">
                <label htmlFor={ids.portfolio}>Tautan portofolio <span className="optional">(opsional)</span></label>
                <input id={ids.portfolio} name="portofolio" type="url" autoComplete="off" placeholder="https://" />
            </div>

            <div className="dialog-actions">
                <button type="button" className="btn btn-ghost" onClick={onClose}>Batal</button>
                <button type="submit" className="btn">Kirim lamaran</button>
            </div>
        </form>
    );
}