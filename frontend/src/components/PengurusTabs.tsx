'use client';

import { useState } from 'react';
import type { PengurusGroup } from '@/lib/types';

interface PengurusTabsProps {
  pengurus: PengurusGroup;
  showBranchSummary?: boolean;
}

export default function PengurusTabs({ pengurus, showBranchSummary = false }: PengurusTabsProps) {
  const [activeTab, setActiveTab] = useState<'tanfidziyah' | 'syuriyah'>('tanfidziyah');
  const items = activeTab === 'tanfidziyah' ? pengurus.tanfidziyah : pengurus.syuriyah;

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1.5 rounded-2xl bg-gray-100 border border-gray-200 gap-2">
          <button
            type="button"
            className={`px-5 py-2 text-sm font-bold rounded-xl transition-all ${
              activeTab === 'tanfidziyah'
                ? 'bg-nu-green text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('tanfidziyah')}
          >
            Pengurus Tanfidziyah{showBranchSummary ? ' (Eksekutif)' : ''}
          </button>
          <button
            type="button"
            className={`px-5 py-2 text-sm font-bold rounded-xl transition-all ${
              activeTab === 'syuriyah'
                ? 'bg-nu-green text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab('syuriyah')}
          >
            Majelis Syuriyah{showBranchSummary ? ' (Pengarah)' : ''}
          </button>
        </div>
      </div>

      {showBranchSummary && (
        <div className="bg-white p-6 rounded-2xl border border-emerald-900/10 mb-8 text-center shadow-sm">
          {activeTab === 'tanfidziyah' ? (
            <>
              <strong className="text-nu-deep text-lg">Pengurus Tanfidziyah</strong>
              <p className="text-gray-600 text-sm mt-1">
                Pelaksana harian tugas-tugas organisasi, membidangi program kemasyarakatan, persuratan, keuangan, dan hubungan antar-lembaga.
              </p>
            </>
          ) : (
            <>
              <strong className="text-nu-gold text-lg">Majelis Syuriyah</strong>
              <p className="text-gray-600 text-sm mt-1">
                Pemimpin tertinggi jam&apos;iyyah yang bertugas membina, mengarahkan, mengawasi, serta menetapkan kebijakan dan fatwa keagamaan.
              </p>
            </>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p, idx) => (
          <div
            key={p.id || `${p.role}-${p.name}-${idx}`}
            className="p-6 rounded-2xl bg-nu-soft border border-emerald-900/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white text-nu-deep border border-emerald-200">
                  {p.role}
                </span>
                <span className="text-xs font-semibold text-emerald-700">
                  ● {p.status || 'Aktif Berkhidmat'}
                </span>
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-1">{p.name}</h3>
            </div>
            <p className="text-xs text-gray-500 pt-3 border-t border-emerald-900/10 mt-3">
              {p.responsibility || (p.division ? `Bidang: ${p.division}` : 'Khidmat Organisasi')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

