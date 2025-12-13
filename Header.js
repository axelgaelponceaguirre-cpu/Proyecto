function Header() {
  try {
    return (
      <header className="bg-white shadow-sm sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center">
                <div className="icon-chef-hat text-xl text-[var(--primary-color)]"></div>
              </div>
              <span className="text-2xl font-bold text-[var(--primary-color)]">RecetasApp</span>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
