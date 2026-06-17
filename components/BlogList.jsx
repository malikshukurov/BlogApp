"use client";

import { useSearch } from "@/hooks/useSearch";
import PostCard from "./PostCard";
import { Search, SlidersHorizontal } from "lucide-react";

export default function BlogList({ initialPosts }) {
  const { searchTerm, setSearchTerm, filteredData } = useSearch(initialPosts);

  return (
    <section
      id="posts-list"
      className="max-w-6xl mx-auto px-4 py-12 scroll-mt-20"
    >
      {/* Axtarış və Başlıq Paneli */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-800">
              Bütün Bloq Yazıları
            </h2>

            <span className="px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full">
              {filteredData.length} post
            </span>
          </div>

          <p className="text-sm text-slate-500 mt-1">
            Platformadakı ən son paylaşımlar və kəşflər
          </p>
        </div>

        <div className="relative flex-1 max-w-md w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search size={18} />
          </div>

          <input
            type="text"
            placeholder="Bloqlarda axtar (başlıq və ya məzmun)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-900 shadow-sm placeholder:text-slate-400 transition-all"
          />
        </div>
      </div>

      {/* Grid Listələmə */}
      {filteredData.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 p-8">
          <div className="bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 text-slate-400">
            <SlidersHorizontal size={20} />
          </div>
          <p className="font-medium text-slate-600">
            Axtarışınıza uyğun heç bir bloq tapılmadı.
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Fərqli açar sözlərlə yenidən yoxlayın.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...filteredData].reverse().map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
