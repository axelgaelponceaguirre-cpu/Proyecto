function DietCard({ diet, onClick, isSelected }) {
  try {
    return (
      <div 
        className={`category-card p-6 ${isSelected ? 'ring-2 ring-[var(--primary-color)]' : ''}`}
        onClick={onClick}
        data-name="diet-card" 
        data-file="components/DietCard.js"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-16 h-16 rounded-xl bg-[var(--secondary-color)] flex items-center justify-center">
            <div className={`icon-${diet.icon} text-3xl text-[var(--primary-color)]`}></div>
          </div>
          <div className="icon-arrow-right text-xl text-[var(--text-light)]"></div>
        </div>
        <h3 className="text-xl font-bold mb-2">{diet.name}</h3>
        <p className="text-sm text-[var(--text-light)] mb-3">{diet.description}</p>
        <div className="flex flex-wrap gap-2">
          {diet.features.map((feature, idx) => (
            <span key={idx} className="text-xs bg-[var(--secondary-color)] text-[var(--primary-color)] px-2 py-1 rounded-full">
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm font-medium text-[var(--text-dark)]">
            {diet.recipeCount} recetas disponibles
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('DietCard component error:', error);
    return null;
  }
}