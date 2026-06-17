"use client";

import Link from "next/link";
import { Eye, Trash2 } from "lucide-react";
export default function PostCard({ post }) {
  return (
    <div className="relative bg-white rounded-xl shadow-sm border border-slate-100 p-6">
      <div>
        <h2 className="text-xl font-semibold mb-3">{post.title}</h2>

        <p className="text-slate-600 text-sm mb-4">{post.body}</p>
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
