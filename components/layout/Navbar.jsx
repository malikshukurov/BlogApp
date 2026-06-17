import Link from "next/link";
import { BookOpen, PlusCircle, Home, FileText } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Sol Tərəf */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="bg-blue-600 p-2 rounded-xl text-white group-hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
            <BookOpen size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            <span className="text-blue-600">Blog</span>
          </span>
        </Link>

        {/* Orta və Sağ Tərəf - Naviqasiya Linkləri */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            <Home size={16} />
            <span>Home</span>
          </Link>
          <Link
            href="/posts"
            className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            <FileText size={16} />
            <span>Blogs</span>
          </Link>
          <Link
            href="/create"
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-sm shadow-sm hover:shadow-md transition-all duration-200"
          >
            <PlusCircle size={16} />
            <span>Create</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
