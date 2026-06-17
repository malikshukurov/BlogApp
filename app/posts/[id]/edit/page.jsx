"use client";
import { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useBlog } from "@/hooks/useBlog";
import { blogService } from "@/services/blogService";

import { ArrowLeft, RefreshCw } from "lucide-react";
import BlogForm from "@/components/BlogForm"; // Ortaq form

export default function EditPostPage({ params }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const {
    loading: submitLoading,
    error: submitError,
    updateExistingPost,
  } = useBlog();

  const [currentPost, setCurrentPost] = useState({ title: "", body: "" });
  const [pageLoading, setPageLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const data = await blogService.getPostById(id);
        setCurrentPost({ title: data.title || "", body: data.body || "" });
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setPageLoading(false);
      }
    };
    fetchCurrentPost();
  }, [id]);

  const handleUpdateSubmit = (updatedFields) => {
    updateExistingPost(id, updatedFields, () => {
      router.push(`/posts/${id}`);
      router.refresh();
    });
  };

  if (pageLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-3">
        <RefreshCw className="animate-spin text-blue-600 w-8 h-8" />
        <p className="text-slate-500 text-sm">Məlumatlar yüklənir...</p>
      </div>
    );
  }

  if (fetchError) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="bg-red-50 border border-red-200 p-6 rounded-xl text-red-700">
          <p className="font-semibold">{fetchError}</p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-2 text-sm underline"
          >
            Geri qayıt
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <Link
        href={`/posts/${id}`}
        className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        İmtina et və geri qayıt
      </Link>

      <BlogForm
        titleLabel="Bloq Yazısını Redaktə Et"
        initialData={currentPost} 
        onFormSubmit={handleUpdateSubmit}
        submitLoading={submitLoading}
        submitError={submitError}
      />
    </main>
  );
}
