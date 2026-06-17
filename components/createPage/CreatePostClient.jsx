// components/CreatePostClient.jsx
"use client";

import { useRouter } from "next/navigation";
import { useBlog } from "@/hooks/useBlog";
import BlogForm from "@/components/BlogForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CreatePostClient() {
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
      <Link href="/posts" className="mb-6 inline-flex items-center gap-2">
        <ArrowLeft size={16} />
        Geri qayıt
      </Link>

      <BlogForm
        titleLabel="Yeni Bloq Yazısı"
        onFormSubmit={handleCreateSubmit}
        submitLoading={loading}
        submitError={error}
      />
    </main>
  );
}