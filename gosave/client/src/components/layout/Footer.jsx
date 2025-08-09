export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2 space-y-2">
          <div className="font-display text-2xl font-bold gradient-text">GoSave</div>
          <p className="text-sm text-text/70 max-w-md">Hyderabad's premier discount membership platform, connecting savvy customers with trusted local businesses.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm text-text/80">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li><a href="/about" className="hover:text-primary">About</a></li>
            <li><a href="/partners" className="hover:text-primary">Partners</a></li>
            <li><a href="#" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Connect</div>
          <ul className="space-y-2 text-sm text-text/80">
            <li><a className="hover:text-primary" href="#">Twitter</a></li>
            <li><a className="hover:text-primary" href="#">Instagram</a></li>
            <li><a className="hover:text-primary" href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-text/60 pb-6">© {new Date().getFullYear()} GoSave. All rights reserved.</div>
    </footer>
  );
}