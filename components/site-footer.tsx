import { Phone, Mail, Camera, AtSign, Share2, Globe, MapPin } from "lucide-react"

const columns = [
  {
    title: "Categories",
    links: ["Email & Collaboration", "Software Brands", "Hardware", "Security & Backup", "Cloud", "On-demand services"],
  },
  {
    title: "Business",
    links: ["Become a Reseller", "Affiliate Program", "List your Product", "Sign up / Sign in", "Advertise with Us"],
  },
  {
    title: "About",
    links: ["About TechnoStore360", "Blog", "Contact", "Local Installers", "Return & Refund Policy", "Privacy Policy", "Terms of Use"],
  },
]

const regions = [
  { n: "1", country: "India", phone: "+91 96337 06212", email: "sales@technostore360.com", addr: "Kinfra Tech Park, Kakkanchery, Kerala" },
  { n: "2", country: "UAE", phone: "+971 4 2766 345", email: "sales@technostore360.com", addr: "Latifa Tower, 17th Floor, Sheikh Zayed Road, Dubai" },
  { n: "3", country: "Oman", phone: "+968 7904 0022", email: "sales@technostore360.com", addr: "2nd Floor, Tamimah Building, Al Wattayah, Muscat" },
]

const socials = [
  { icon: Camera, label: "Instagram" },
  { icon: AtSign, label: "Twitter" },
  { icon: Share2, label: "Facebook" },
  { icon: Globe, label: "LinkedIn" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="flex flex-col leading-none">
              <span className="font-mono text-xl font-extrabold tracking-tight text-foreground">
                TECHNO<span className="text-primary">STORE</span>360
              </span>
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Empowering Diversity in Tech
              </span>
            </div>
            <a href="tel:+919633706212" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Phone className="size-4 text-primary" /> +91 96337 06212
            </a>
            <a href="mailto:sales@technostore360.com" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Mail className="size-4 text-primary" /> sales@technostore360.com
            </a>
            <div className="flex gap-2 pt-1">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Regions */}
        <div className="mt-12 grid gap-4 border-t border-border pt-10 md:grid-cols-3">
          {regions.map((r) => (
            <div key={r.country} className="flex gap-3 rounded-2xl border border-border bg-card p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary text-sm font-bold text-primary">
                {r.n}
              </span>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">{r.country}</p>
                <p className="text-xs text-muted-foreground">{r.phone}</p>
                <p className="text-xs text-muted-foreground">{r.email}</p>
                <p className="flex items-start gap-1 text-xs text-muted-foreground">
                  <MapPin className="mt-0.5 size-3 shrink-0" /> {r.addr}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} TechnoStore360. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
