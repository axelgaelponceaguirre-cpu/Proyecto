function CategoryCard({ category, onClick }) {
  try {
    return (
      <div 
        className="category-card p-6" 
        onClick={onClick}
        data-name="category-card" 
        data-file="components/CategoryCard.js"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 rounded-xl bg-[var(--secondary-color)] flex items-center justify-center">
            <div className={`icon-${category.icon} text-3xl text-[var(--primary-color)]`}></div>
          </div>
          <div className="icon-arrow-right text-xl text-[var(--text-light)]"></div>
        </div>
        <h3 className="text-xl font-bold mb-2">{category.name}</h3>
        <p className="text-[var(--text-light)]">{category.count} recetas</p>
      </div>
    );
  } catch (error) {
    console.error('CategoryCard component error:', error);
    return null;
  }
}