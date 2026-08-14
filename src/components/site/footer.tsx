import { hotel, nav } from "@/data/hotel";

export function Footer() {
  return (
    <footer className="bg-background pb-28 pt-20 md:pb-20">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="grid gap-12 border-b border-border pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow">Hotel Sikkim Aurora</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Mountain views. Warm hospitality. Pelling.
            </p>
          </div>
          <address className="not-italic text-sm leading-relaxed text-muted-foreground">
            {hotel.address.street}
            <br />
            {hotel.address.locality}, {hotel.address.region} {hotel.address.postalCode}
            <br />
            {hotel.address.country}
            <br />
            <a href={hotel.phoneHref} className="mt-3 inline-block text-foreground rule-hover">
              {hotel.phone}
            </a>
          </address>
          <nav aria-label="Footer">
            <ul className="space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="rule-hover">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#location" className="rule-hover">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          {hotel.social.length > 0 && (
            <ul className="space-y-3 text-sm">
              {hotel.social.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="rule-hover">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          © 2026 Hotel Sikkim Aurora. All rights reserved.
        </p>
      </div>
    </footer>
  );
}