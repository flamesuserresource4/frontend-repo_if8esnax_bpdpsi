import { Rocket, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-48 -right-32 h-96 w-96 rounded-full bg-indigo-100 blur-3xl" />
        <div className="absolute -bottom-48 -left-32 h-96 w-96 rounded-full bg-sky-100 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Cakrawala Hub
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Platform manajemen karier terpadu untuk pendaftaran magang, pengelolaan lowongan, logbook, komunikasi, dan bimbingan karier di lingkungan kampus.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500">
                <Rocket size={16} /> Mulai Eksplor
              </button>
              <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                <ShieldCheck size={16} /> Lihat Fitur
              </button>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              Dukungan peran: Mahasiswa, Perusahaan, Staf CDC, Kaprodi & Mentor
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Pendaftaran Magang", desc: "Lamar & lacak status" },
                  { title: "Lowongan & Perusahaan", desc: "Kelola job posting" },
                  { title: "Logbook", desc: "Catatan harian magang" },
                  { title: "Komunikasi", desc: "Chat & notifikasi" },
                ].map((card) => (
                  <div key={card.title} className="rounded-lg border border-slate-200 p-4">
                    <div className="font-semibold text-slate-900">{card.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{card.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
