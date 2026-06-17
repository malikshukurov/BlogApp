import Link from "next/link";
import { Sparkles, PenSquare, Search, BookOpen } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Sparkles size={16} />
            Real-Time Blog Platform
          </div>

          <h1 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Fikirlərini paylaş,
            <br />
            insanlara ilham ver.
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-10">
            Bu platforma istifadəçilərə öz bloqlarını yaratmaq, məqalələr
            paylaşmaq, digər insanların yazılarını oxumaq və yeni ideyalar kəşf
            etmək imkanı yaradır.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/posts"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Bloqlara Bax
            </Link>

            <Link
              href="/create"
              className="border border-slate-300 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50"
            >
              İlk Yazını Yarat
            </Link>
          </div>
        </div>
      </section>

      {/* SAYT NƏ ÜÇÜNDÜR */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Bu sayt nə üçündür?
          </h2>

          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16">
            Burada texnologiya, proqramlaşdırma, oyunlar, gündəlik həyat, biznes
            və istənilən mövzuda yazılar paylaşa bilərsən.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border p-8 rounded-2xl">
              <PenSquare className="text-blue-600 mb-5" size={36} />

              <h3 className="text-xl font-semibold mb-3">Bloq Yarat</h3>

              <p className="text-slate-600">
                Başlıq və məzmun əlavə edərək öz bloqunu saniyələr ərzində
                yarat.
              </p>
            </div>

            <div className="border p-8 rounded-2xl">
              <Search className="text-blue-600 mb-5" size={36} />

              <h3 className="text-xl font-semibold mb-3">Axtarış Et</h3>

              <p className="text-slate-600">
                Digər istifadəçilərin paylaşdığı bloqları rahatlıqla tap.
              </p>
            </div>

            <div className="border p-8 rounded-2xl">
              <BookOpen className="text-blue-600 mb-5" size={36} />

              <h3 className="text-xl font-semibold mb-3">Oxu və Öyrən</h3>

              <p className="text-slate-600">
                Müxtəlif mövzularda yeni biliklər əldə et.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NECƏ İSTİFADƏ OLUNUR */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Necə istifadə edilir?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-5">
                1
              </div>

              <h3 className="font-semibold mb-2">Yazını yarat</h3>

              <p className="text-slate-600">Create səhifəsinə keç.</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-5">
                2
              </div>

              <h3 className="font-semibold mb-2">Başlıq və məzmun əlavə et</h3>

              <p className="text-slate-600">Öz fikirlərini paylaş.</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-5">
                3
              </div>

              <h3 className="font-semibold mb-2">Dərc et</h3>

              <p className="text-slate-600">
                Yazın bütün istifadəçilərə görünəcək.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
