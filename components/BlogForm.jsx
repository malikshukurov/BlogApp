"use client";

import { useState, useEffect } from "react";
import { Loader2, Save } from "lucide-react";

export default function BlogForm({
  initialData = { title: "", body: "" },
  onFormSubmit,
  submitLoading = false,
  submitError = null,
  titleLabel = "Bloq Yazısı",
}) {
  // Əsas state
  const [formData, setFormData] = useState({ title: "", body: "" });

  useEffect(() => {
    if (initialData && (initialData.title || initialData.body)) {
      setFormData({
        title: initialData.title || "",
        body: initialData.body || "",
      });
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.body.trim()) return;

    onFormSubmit(formData);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">{titleLabel}</h1>

      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-4 rounded-lg mb-6">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Başlıq (Title)
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900"
            placeholder="Postun başlığını daxil edin..."
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Məzmun (Body)
          </label>
          <textarea
            required
            rows="6"
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-900"
            placeholder="Bloq məzmununu bura yazın..."
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={submitLoading}
          className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 rounded-lg shadow-sm transition-colors cursor-pointer"
        >
          {submitLoading ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            <Save size={18} />
          )}
          {submitLoading ? "Yadda saxlanılır..." : "Yadda Saxla"}
        </button>
      </form>
    </div>
  );
}
