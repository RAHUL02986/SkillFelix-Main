// components/Breadcrumb.tsx
import Link from 'next/link';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: Props) {
  return (
    <nav className="text-xs mb-4" aria-label="Breadcrumb">
      <ol className="list-reset flex text-white">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-white">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-white">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
