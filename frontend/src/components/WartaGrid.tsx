'use client';

import { useEffect, useState } from 'react';
import type { WartaArticle } from '@/lib/types';

interface WartaGridProps {
  articles: WartaArticle[];
}

export default function WartaGrid({ articles }: WartaGridProps) {
  const [selectedArticle, setSelectedArticle] = useState<WartaArticle | null>(null);

  useEffect(() => {
    if (!selectedArticle) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedArticle]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="p-6 rounded-2xl bg-white border border-emerald-900/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span className="px-2.5 py-0.5 rounded-full font-bold bg-emerald-100 text-nu-deep">
                  {article.category}
                </span>
                <time>
                  {new Date(article.published_at).toLocaleDateString('id-ID', {
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-2 leading-snug">{article.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
                {article.excerpt}
              </p>
            </div>

            <button
              type="button"
              className="text-xs font-bold text-nu-green hover:text-nu-deep flex items-center gap-1 mt-auto pt-3 border-t border-gray-100 text-left"
              onClick={() => setSelectedArticle(article)}
            >
              Baca Berita Lengkap →
            </button>
          </article>
        ))}
      </div>

      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4 pb-4 border-b border-gray-100">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-nu-deep">
                  {selectedArticle.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">
                  {selectedArticle.title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                  <span>Oleh: {selectedArticle.author || 'Tim Media PRNU'}</span>
                  <span>•</span>
                  <time>
                    {new Date(selectedArticle.published_at).toLocaleDateString('id-ID', {
                      dateStyle: 'long'
                    })}
                  </time>
                </div>
              </div>
              <button
                type="button"
                aria-label="Tutup"
                className="text-gray-400 hover:text-gray-700 text-xl font-bold p-1"
                onClick={() => setSelectedArticle(null)}
              >
                ✕
              </button>
            </div>

            <div className="py-6 space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-nu-deep text-base sm:text-lg">
                {selectedArticle.excerpt}
              </p>
              <p>{selectedArticle.content || selectedArticle.excerpt}</p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-3 justify-end">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  `${selectedArticle.title} - Baca di website resmi PRNU Banjarkemuning`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-50 text-nu-green hover:bg-emerald-100 transition-colors"
              >
                Bagikan ke WhatsApp
              </a>
              <button
                type="button"
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-nu-green text-white hover:bg-nu-deep transition-colors"
                onClick={() => setSelectedArticle(null)}
              >
                Tutup Bacaan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

