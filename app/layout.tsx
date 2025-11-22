import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'German Shepherd Food | Complete Feeding Guide',
  description:
    'Evidence-based nutrition advice and top food picks for German Shepherds: puppy, adult, and senior. Portions, macronutrients, and vet-backed tips.',
  metadataBase: new URL('https://agentic-164efb9d.vercel.app'),
  openGraph: {
    title: 'German Shepherd Food | Complete Feeding Guide',
    description:
      'Evidence-based nutrition advice and top food picks for German Shepherds: puppy, adult, and senior.',
    type: 'website',
    url: 'https://agentic-164efb9d.vercel.app',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Healthy German Shepherd enjoying a balanced meal'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'German Shepherd Food | Complete Feeding Guide',
    description:
      'Evidence-based nutrition advice and top food picks for German Shepherds: puppy, adult, and senior.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <div className="brand">
              <span className="logo">??</span>
              <span className="brand-text">GSD Food Guide</span>
            </div>
            <nav className="nav">
              <a href="#guide">Feeding Guide</a>
              <a href="#picks">Top Picks</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-inner">
            <p>? {new Date().getFullYear()} GSD Food Guide. For educational purposes only. Consult your vet.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
