"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import axios from "axios";

export default function BlogCard({ url }) {
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 5;
  const RETRY_DELAY = 1000; // 1 second delay between retries

  async function fetchOgData(attempt = 1) {
    setLoading(true);
    try {
      const res = await axios.get(`/api/og?url=${encodeURIComponent(url)}`);
      setMetadata(res.data);
      setError(null);
      setLoading(false);
    } catch (err) {
      console.error(`Failed to fetch OG data (attempt ${attempt}):`, err);

      if (attempt < MAX_RETRIES) {
        setRetryCount(attempt);
        // Wait for RETRY_DELAY milliseconds before retrying
        setTimeout(() => {
          fetchOgData(attempt + 1);
        }, RETRY_DELAY);
      } else {
        setError(`Error getting og metadata for ${url}`);
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchOgData();
  }, [url]);

  if (loading) {
    return (
      <div className="animate-pulse rounded-2xl bg-gray-100 p-6 w-full h-[400px]">
        <div className="bg-gray-200 h-48 rounded-xl mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        {retryCount > 0 && (
          <div className="mt-4 text-amber-600 text-sm text-center">
            Retrying... Attempt {retryCount} of {MAX_RETRIES}
          </div>
        )}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl bg-red-50 p-6 border border-red-100 h-full justify-center items-center ">
        <div className="text-red-500 text-center flex flex-col  ">
          <p className="font-medium mb-2">Failed to load blog metadata</p>
          <p className="text-sm">{error}</p>
          <button
            className="border p-2 px-4 rounded bg-destructive text-white"
            onClick={fetchOgData}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative rounded-2xl bg-white p-6 transition-all duration-300 ease-in-out
                    hover:shadow-lg hover:-translate-y-1 border backdrop-blur-sm flex flex-col"
    >
      <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-xl bg-gray-50">
        {metadata?.image && (
          <Image
            src={metadata.image}
            alt={metadata.title || "Blog post image"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        )}
      </div>
      <h2 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
        {metadata?.title}
      </h2>
      <p className="text-gray-600 text-sm flex-grow line-clamp-3">
        {metadata?.description}
      </p>
      <div className="mt-6">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn w-full rounded-xl bg-muted p-3 transition-all duration-300
                   hover:bg-amber-600 border border-gray-100 hover:border-amber-600 block"
        >
          <span
            className="inline-flex items-center justify-center gap-2 text-gray-600
                        group-hover/btn:text-white transition-colors"
          >
            <span className="font-medium">Read on Medium</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </span>
        </a>
      </div>
    </div>
  );
}
