import { ChevronRight } from 'lucide-react'

export default function Breadcrumb() {
  const items = [
    { label: 'Homepage', href: '#' },
    { label: 'Odoo', href: '#' },
    { label: 'Odoo ERP', href: '#' },
    { label: 'Dynamics 365 Business Central Essentials - PIM - Monthly', href: '#', active: true },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <nav className="flex items-center gap-2 text-sm">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {index > 0 && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
            <a
              href={item.href}
              className={`${
                item.active
                  ? 'text-foreground'
                  : 'text-primary hover:underline'
              }`}
            >
              {item.label}
            </a>
          </div>
        ))}
      </nav>
    </div>
  )
}
