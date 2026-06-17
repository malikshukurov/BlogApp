'use client';

import { useState } from 'react';
import { blogService } from '@/services/blogService';

export function useBlog() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Post Yaratmaq üçün action
  const createNewPost = async (postData, onSuccess) => {
    setLoading(true);
    setError(null);
    try {
      await blogService.createPost(postData);
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Post Yeniləmək üçün action
  const updateExistingPost = async (id, postData, onSuccess) => {
    setLoading(true);
    setError(null);
    try {
      await blogService.updatePost(id, postData);
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Post Silmək üçün action
  const deleteExistingPost = async (id, onSuccess) => {
    setLoading(true);
    setError(null);
    try {
      await blogService.deletePost(id);
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    createNewPost,
    updateExistingPost,
    deleteExistingPost,
  };
}