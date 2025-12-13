function Footer() {
  try {
    return (
      <footer className="bg-white border-t border-gray-200 mt-16" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center">
                <div className="icon-chef-hat text-lg text-[var(--primary-color)]"></div>
              </div>
              <span className="text-lg font-bold text-[var(--primary-color)]">RecetasApp</span>
            </div>
            
            <p className="text-[var(--text-light)] text-sm">
              © 2025 RecetasApp. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors">
                <div className="icon-facebook text-xl"></div>
              </a>
              <a href="#" className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors">
                <div className="icon-instagram text-xl"></div>
              </a>
              <a href="#" className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors">
                <div className="icon-twitter text-xl"></div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}