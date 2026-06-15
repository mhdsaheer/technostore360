const brands = ["Adobe", "Posway", "Sophos", "easypos", "Wasla Soft", "SUNMI"]

export function Brands() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Choose your brands</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Leading brands trust us to power the engine of their business
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center rounded-xl border border-border bg-card px-6 py-7 text-center transition-colors hover:border-primary/40"
            >
              <span className="font-mono text-base font-bold uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
