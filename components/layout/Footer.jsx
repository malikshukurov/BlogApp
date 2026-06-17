import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Sol tərəf */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="bg-blue-600 p-2.5 rounded-xl text-white group-hover:bg-blue-700 transition-colors">
                <BookOpen size={22} />
              </div>

              <h2 className="text-2xl font-bold">
                <span className="text-blue-600">Blog</span> Platform
              </h2>
            </Link>

            <p className="text-slate-500 leading-7">
              İstifadəçilərin öz fikirlərini paylaşa, bloq yarada və yeni
              biliklər kəşf edə biləcəyi müasir platforma.
            </p>
          </div>

          {/* Orta hissə */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Naviqasiya</h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                Ana Səhifə
              </Link>

              <Link
                href="/posts"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                Bloqlar
              </Link>

              <Link
                href="/create"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                Yeni Bloq Yarat
              </Link>
            </div>
          </div>

          {/* Sağ tərəf */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Platforma</h3>

            <p className="text-slate-500 mb-4">
              Bir neçə kliklə yeni yazı yarat, digər istifadəçilərin
              paylaşımlarını oxu və öz ideyalarını dünya ilə bölüş.
            </p>

            <Link
              href="/create"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium transition-colors"
            >
              Yazmağa Başla
            </Link>
          </div>
        </div>

        {/* Alt hissə */}

        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-400">
            © 2026 Blog Platform. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
}
