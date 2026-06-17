import { blogService } from '@/services/blogService';
import BlogList from '@/components/BlogList';
import { AlertCircle } from 'lucide-react';

export default async function PostsPage() {
  let posts = [];
  let errorMsg = null;

  try {
    posts = await blogService.getAllPosts();
  } catch (err) {
    errorMsg = err.message;
  }

  return (
    <main className="w-full py-10">
      {errorMsg ? (
        <div className="bg-red-50/50 border border-red-100 rounded-2xl p-8 max-w-2xl mx-auto text-center my-12 flex flex-col items-center gap-3">
          <AlertCircle className="text-red-500 w-10 h-10" />
          <h3 className="text-lg font-bold text-slate-800">Məlumat yüklənərkən xəta baş verdi</h3>
          <p className="text-slate-600 text-sm">{errorMsg}</p>
        </div>
      ) : (
        <BlogList initialPosts={posts} />
      )}
    </main>
  );
}