import { GraduationCap, Building2, ShieldCheck, UsersRound } from "lucide-react";

const roles = [
  {
    icon: GraduationCap,
    title: "Mahasiswa",
    points: ["Lamar pekerjaan & lacak status", "Isi logbook harian", "Ikuti forum & acara"],
  },
  {
    icon: Building2,
    title: "Perusahaan",
    points: ["Buka lowongan & kelola kandidat", "Jadwal wawancara", "Kelola talent pool"],
  },
  {
    icon: ShieldCheck,
    title: "Staf CDC",
    points: ["Pantau lamaran & validasi", "Atur konseling", "Berikan feedback"],
  },
  {
    icon: UsersRound,
    title: "Kaprodi & Mentor",
    points: ["Validasi & pembimbingan", "Review logbook", "Monitoring hasil magang"],
  },
];

export default function Roles() {
  return (
    <section id="roles" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Peran Pengguna</h2>
        <p className="mt-2 text-slate-600">Setiap peran memiliki akses dan tugas yang disesuaikan untuk kelancaran ekosistem magang.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map(({ icon: Icon, title, points }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Icon size={18} />
                </span>
                <div className="font-semibold text-slate-900">{title}</div>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc list-inside">
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
