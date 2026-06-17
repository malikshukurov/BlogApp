import { blogService } from '@/services/blogService';
import Link from 'next/link';
import { ArrowLeft, Edit3 } from 'lucide-react';
import DeleteButton from './DeleteButton'; // Eyni qovluqdakı düymə

export default async function PostDetailPage({ params }) {
  const { id } = await params;
  let post = null;
  let errorMsg = null;

  try {
    post = await blogService.getPostById(id);
  } catch (err) {
    errorMsg = err.message;
  }

  if (errorMsg) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
          <p className="text-amber-800 font-semibold mb-4">{errorMsg}</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm">
            <ArrowLeft size={16} /> Ana Səhifəyə Qayıt
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Geri Düyməsi */}
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-8 transition-colors">
        <ArrowLeft size={16} />
        Bloqlara geri qayıt
      </Link>

      {/* Bloq Məzmunu */}
      <article className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="text-slate-700 leading-relaxed whitespace-pre-wrap text-base md:text-lg">
          {post.body}
        </div>
      </article>

      {/* 🛠️ Düymələr Paneli: EDIT və DELETE */}
      <div className="flex items-center justify-end gap-3 border-t border-slate-200 pt-6">
        {/* EDIT DÜYMƏSİ (Link olaraq edit səhifəsinə aparır) */}
        <Link
          href={`/posts/${id}/edit`}
          className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-5 py-2.5 rounded-lg text-sm transition-colors shadow-sm"
        >
          <Edit3 size={16} />
          Redaktə Et
        </Link>
        
        {/* DELETE DÜYMƏSİ (Client side action işlədir) */}
        <DeleteButton postId={id} />
      </div>
    </main>
  );
}