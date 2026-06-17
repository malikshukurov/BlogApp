import Link from 'next/link';
import { useBlog } from '@/hooks/useBlog';
import { Eye, Trash2 } from 'lucide-react';

export default function PostCard({ post }) {
    const { deleteExistingPost } = useBlog();
const handleDeleteClick = () => {
  if (confirm('Bu bloq yazısını silmək istədiyinizdən əminsiniz?')) {
    deleteExistingPost(post.id);
  }
};
  return (
    <div className="relative bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">

      {/* Delete icon */}
      <button
      onClick={()=> handleDeleteClick()}
        className="absolute top-4 right-4 bg-red-100 hover:bg-red-200 p-2 rounded-lg transition-colors cursor-pointer"
      >
        <Trash2 size={18} className="text-red-600" />
      </button>

      <div>
        <h2 className="text-xl font-semibold text-slate-800 line-clamp-2 mb-3">
          {post.title || 'Başlıqsız Bloq'}
        </h2>

        <p className="text-slate-600 line-clamp-3 text-sm mb-4">
          {post.body || 'Məzmun daxil edilməyib.'}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-50">
        <Link
          href={`/posts/${post.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          <Eye size={16} />
          Ətraflı Oxu
        </Link>
      </div>
    </div>
  );
}