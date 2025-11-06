import { Briefcase, MessageSquare, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-indigo-600 text-white">
              <Briefcase size={18} />
            </span>
            <span className="text-lg">Cakrawala Hub</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition">Fitur</a>
            <a href="#roles" className="hover:text-slate-900 transition">Peran</a>
            <a href="#contact" className="hover:text-slate-900 transition">Kontak</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <MessageSquare size={16} />
              Demo Chat
            </button>
            <button className="relative inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500">
              <Bell size={16} />
              Notifikasi
              <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white">3</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
