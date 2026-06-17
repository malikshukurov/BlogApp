"use client";

import { useRouter } from "next/navigation";
import { useBlog } from "@/hooks/useBlog";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogForm from "@/components/BlogForm"; 

export default function CreatePostPage() {
  const router = useRouter();
  const { loading, error, createNewPost } = useBlog();

  const handleCreateSubmit = (fields) => {
    createNewPost(fields, () => {
      router.push("/posts"); 
      router.refresh();
    });
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <Link
        href="/posts"
        className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        Geri qayıt
      </Link>

      <BlogForm
        titleLabel="Yeni Bloq Yazısı Paylaş"
        onFormSubmit={handleCreateSubmit}
        submitLoading={loading}
        submitError={error}
      />
    </main>
  );
}
