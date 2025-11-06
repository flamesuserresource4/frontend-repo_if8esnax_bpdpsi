import { FileText, Building2, ClipboardList, MessagesSquare, Bell, Users, Calendar, BookOpenCheck, Heart } from "lucide-react";

const features = [
  { icon: Building2, title: "Manajemen Perusahaan", desc: "Kelola perusahaan mitra & job posting." },
  { icon: ClipboardList, title: "Lamaran & Status", desc: "Dari apply hingga diterima." },
  { icon: FileText, title: "Logbook Magang", desc: "Catatan harian & persetujuan mentor." },
  { icon: MessagesSquare, title: "Chat Internal", desc: "Diskusi antara mahasiswa, CDC, perusahaan." },
  { icon: Bell, title: "Notifikasi Otomatis", desc: "Update lamaran & jadwal wawancara." },
  { icon: Users, title: "Forum & Komunitas", desc: "Tanya jawab dan berbagi tips." },
  { icon: Calendar, title: "Acara Karier", desc: "Seminar, job fair, dan registrasi." },
  { icon: BookOpenCheck, title: "Bimbingan Karier", desc: "Jadwal konseling & feedback." },
  { icon: Heart, title: "Portfolio & Favorite", desc: "Pamer karya dan simpan lowongan." },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Fitur Utama</h2>
        <p className="mt-2 text-slate-600">Semua yang dibutuhkan untuk mengelola ekosistem karier kampus dalam satu tempat.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Icon size={18} />
                </span>
                <div className="font-semibold text-slate-900">{title}</div>
              </div>
              <p className="mt-3 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
