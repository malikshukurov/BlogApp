'use client';

import { useBlog } from '@/hooks/useBlog';
import { useRouter } from 'next/navigation';
import { Trash2, Loader2 } from 'lucide-react';

export default function DeleteButton({ postId }) {
  const router = useRouter();
  const { loading, deleteExistingPost } = useBlog();

  const handleDeleteClick = () => {
    if (confirm('Bu bloq yazısını silmək istədiyinizdən əminsiniz?')) {
      deleteExistingPost(postId, () => {
        router.push('/'); // Silinəndən sonra ana səhifəyə atır
        router.refresh(); // Ana səhifənin datasını yeniləyir
      });
    }
  };

  return (
    <button
      onClick={handleDeleteClick}
      disabled={loading}
      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors shadow-sm cursor-pointer"
    >
      {loading ? <Loader2 className="animate-spin" size={16} /> : <Trash2 size={16} />}
      {loading ? 'Silinir...' : 'Postu Sil'}
    </button>
  );
}