'use client';

import Link from 'next/link';
import { useBlog } from '@/hooks/useBlog';
import { useRouter } from 'next/navigation';
import { Eye, Trash2 } from 'lucide-react';

export default function PostCard({ post }) {
  const { deleteExistingPost } = useBlog();
  const router = useRouter();

  const handleDeleteClick = () => {
    if (confirm('Bu bloq yazısını silmək istədiyinizdən əminsiniz?')) {

      deleteExistingPost(post.id, () => {
        router.refresh();
      });

    }
  };

  return (
    <div className="relative bg-white rounded-xl shadow-sm border border-slate-100 p-6">

      <button
        onClick={handleDeleteClick}
        className="absolute top-4 right-4 bg-red-100 hover:bg-red-200 p-2 rounded-lg cursor-pointer"
      >
        <Trash2 size={18} className="text-red-600" />
      </button>

      <div>
        <h2 className="text-xl font-semibold mb-3">
          {post.title}
        </h2>

        <p className="text-slate-600 text-sm mb-4">
          {post.body}
        </p>
      </div>

      <Link
        href={`/posts/${post.id}`}
        className="inline-flex items-center gap-2 text-blue-600"
      >
        <Eye size={16} />
        Ətraflı Oxu
      </Link>

    </div>
  );
}