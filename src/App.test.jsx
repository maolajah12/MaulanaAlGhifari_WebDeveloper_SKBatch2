import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { ROLES } from './data/roles';

const getGrid = () => screen.getByRole('list', { name: 'Daftar posisi magang' });
const cardTitles = () =>
  within(getGrid()).getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent);

describe('Landing page rekrutmen', () => {
  it('menampilkan headline, semua kartu posisi, dan CTA', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Pilih rutemu');
    expect(cardTitles()).toHaveLength(ROLES.length);
    expect(screen.getByRole('button', { name: /lanjut ke formulir/i })).toBeInTheDocument();
  });

  it('menyaring kartu berdasarkan divisi dan memperbarui hitungan', async () => {
    const user = userEvent.setup();
    render(<App />);

    const chip = screen.getByRole('button', { name: /^Engineering/ });
    await user.click(chip);

    expect(chip).toHaveAttribute('aria-pressed', 'true');
    expect(cardTitles()).toEqual(['Frontend Web Developer', 'Backend Developer']);
    expect(screen.getByText(/Menampilkan 2 dari 6 rute/)).toBeInTheDocument();
  });

  it('menandai posisi dengan kursi sedikit sebagai "Slot terbatas"', () => {
    render(<App />);

    const limited = ROLES.filter((role) => role.slots <= 2).length;
    expect(screen.getAllByText('Slot terbatas')).toHaveLength(limited);
  });

  it('menampilkan rute terpilih di CTA dan mempertahankannya saat filter berganti', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Pilih rute: Backend Developer' }));
    expect(screen.getByText(/Rute dipilih: Backend Developer/)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /^Design/ }));
    await user.click(screen.getByRole('button', { name: /^Semua/ }));

    expect(screen.getByRole('button', { name: 'Rute dipilih: Backend Developer' })).toBeInTheDocument();
  });

  it('membuka formulir dengan rute terpilih, lalu menampilkan hasil simulasi', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Pilih rute: UI/UX Designer' }));
    await user.click(screen.getByRole('button', { name: /lanjut ke formulir/i }));

    const dialog = screen.getByRole('dialog', { name: 'Daftar ke rutemu' });
    expect(within(dialog).getByLabelText('Rute yang dipilih')).toHaveValue('SK-DSN-01');

    await user.type(within(dialog).getByLabelText('Nama lengkap'), 'Peserta Contoh');
    await user.type(within(dialog).getByLabelText('Email'), 'peserta@contoh.id');
    await user.click(within(dialog).getByRole('button', { name: 'Kirim lamaran' }));

    expect(within(dialog).getByText(/Simulasi berhasil, Peserta Contoh/)).toBeInTheDocument();
    expect(within(dialog).getByText('UI/UX Designer (SK-DSN-01)')).toBeInTheDocument();

    await user.click(within(dialog).getByRole('button', { name: 'Selesai' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('tidak mengirim formulir bila kolom wajib masih kosong', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /lanjut ke formulir/i }));
    const dialog = screen.getByRole('dialog', { name: 'Daftar ke rutemu' });
    await user.click(within(dialog).getByRole('button', { name: 'Kirim lamaran' }));

    expect(within(dialog).queryByText(/Simulasi berhasil/)).not.toBeInTheDocument();
  });
});