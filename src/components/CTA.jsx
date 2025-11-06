export default function CTA() {
  return (
    <section className="py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-600 p-8 text-white shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold">Siap membangun ekosistem karier kampus?</h3>
              <p className="mt-2 text-white/90">Mulai integrasi Cakrawala Hub untuk pengelolaan magang, lowongan, dan layanan CDC yang efisien.</p>
            </div>
            <form className="grid sm:grid-cols-2 gap-3">
              <input className="w-full rounded-md px-3 py-2 text-slate-900" placeholder="Nama" />
              <input className="w-full rounded-md px-3 py-2 text-slate-900" placeholder="Email kampus" />
              <input className="w-full rounded-md px-3 py-2 text-slate-900 sm:col-span-2" placeholder="Institusi" />
              <button type="button" className="inline-flex justify-center rounded-md bg-white px-4 py-2.5 font-semibold text-indigo-700 hover:bg-indigo-50 sm:col-span-2">Minta Demo</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
