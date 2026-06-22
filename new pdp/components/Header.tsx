import { Search, Grid3x3, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold">
              <span className="text-primary">TECHNO</span>
              <br />
              <span className="text-primary">STORE</span>
              <span className="text-accent text-xl">360</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="flex items-center bg-secondary rounded-lg px-4 py-2">
              <input
                type="text"
                placeholder="Search for products, categories..."
                className="flex-1 bg-transparent text-foreground placeholder-muted-foreground text-sm focus:outline-none"
              />
              <Search className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-8">
            {/* Categories */}
            <button className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Grid3x3 className="w-5 h-5" />
              <span className="text-sm font-medium">Categories</span>
            </button>

            {/* Sign In */}
            <button className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">Sign in</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
