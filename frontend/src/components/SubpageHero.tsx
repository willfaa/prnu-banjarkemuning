import Link from 'next/link';
import type { ReactNode } from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SubpageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description: string;
  badge?: string;
  visual?: ReactNode;
}

export default function SubpageHero({
  breadcrumbs,
  title,
  description,
  badge,
  visual
}: SubpageHeroProps) {
  return (
    <div className="bg-gradient-to-br from-nu-darker via-nu-deep to-[#013f20] text-white py-14 px-4 text-center border-b-4 border-nu-gold">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center flex-wrap gap-2 text-xs font-semibold text-nu-goldLight mb-3">
          {breadcrumbs.map((item, index) => (
            <span key={item.label} className="inline-flex items-center gap-2">
              {index > 0 && <span>›</span>}
              {item.href ? (
                <Link href={item.href} className="text-white/75 hover:text-white transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
            </span>
          ))}
        </div>

        {visual && <div className="mb-4 flex justify-center items-center gap-5">{visual}</div>}

        {badge && (
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-gray-950 mb-3">
            {badge}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm mb-3">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

