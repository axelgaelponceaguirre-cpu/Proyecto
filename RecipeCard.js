function RecipeCard({ recipe }) {
  try {
    return (
      <div className="recipe-card" data-name="recipe-card" data-file="components/RecipeCard.js">
        <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-50">
          <img 
            src={recipe.image} 
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-medium">
            <div className="icon-clock inline-block text-sm mr-1"></div>
            {recipe.time}
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-xs font-semibold text-[var(--primary-color)] bg-[var(--secondary-color)] px-3 py-1 rounded-full">
              {recipe.dietTypeName}
            </span>
            <span className="text-xs text-[var(--text-light)]">
              {recipe.difficulty}
            </span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
              {recipe.calories} kcal
            </span>
          </div>
          
          <h3 className="text-xl font-bold mb-2 line-clamp-1">{recipe.name}</h3>
          <p className="text-[var(--text-light)] text-sm mb-4 line-clamp-2">
            {recipe.description}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-1">
              <div className="icon-star text-sm text-yellow-500"></div>
              <span className="text-sm font-medium">{recipe.rating}</span>
            </div>
            <button 
              onClick={() => window.location.href = `recipe-detail.html?id=${recipe.id}`}
              className="text-[var(--primary-color)] font-medium text-sm hover:underline"
            >
              Ver receta
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('RecipeCard component error:', error);
    return null;
  }
}