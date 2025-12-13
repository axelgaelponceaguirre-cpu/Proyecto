class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Algo salió mal</h1>
            <p className="text-gray-600 mb-4">Lo sentimos, ocurrió un error inesperado.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Recargar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function RecipeDetailApp() {
  try {
    const [recipe, setRecipe] = React.useState(null);

    React.useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const recipeId = parseInt(urlParams.get('id'));
      
      if (recipeId) {
        const foundRecipe = dietsData.recipes.find(r => r.id === recipeId);
        const recipeDetail = recipesDetails[recipeId];
        
        if (foundRecipe && recipeDetail) {
          setRecipe({ ...foundRecipe, ...recipeDetail });
        }
      }
    }, []);

    if (!recipe) {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="container mx-auto px-4 py-12 text-center">
            <p className="text-xl text-[var(--text-light)]">Cargando receta...</p>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <button 
            onClick={() => window.location.href = 'index.html'}
            className="flex items-center gap-2 text-[var(--primary-color)] mb-6 hover:underline"
          >
            <div className="icon-arrow-left text-lg"></div>
            Volver al menú
          </button>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96 relative">
              <img 
                src={recipe.image} 
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-sm font-semibold text-[var(--primary-color)] bg-[var(--secondary-color)] px-4 py-2 rounded-full">
                  {recipe.dietTypeName}
                </span>
                <span className="flex items-center gap-1 text-sm text-[var(--text-light)]">
                  <div className="icon-clock text-base"></div>
                  {recipe.time}
                </span>
                <span className="text-sm text-[var(--text-light)]">
                  {recipe.difficulty}
                </span>
                <span className="flex items-center gap-1 text-sm">
                  <div className="icon-star text-base text-yellow-500"></div>
                  {recipe.rating}
                </span>
                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  {recipe.calories} kcal
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-4">{recipe.name}</h1>
              <p className="text-lg text-[var(--text-light)] mb-8">{recipe.description}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <div className="icon-list text-xl text-[var(--primary-color)]"></div>
                    Ingredientes
                  </h2>
                  <ul className="space-y-2">
                    {recipe.ingredients.map((ingredient, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="icon-check text-base text-green-600 mt-1"></div>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <div className="icon-chef-hat text-xl text-[var(--primary-color)]"></div>
                    Preparación
                  </h2>
                  <ol className="space-y-3">
                    {recipe.steps.map((step, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="flex-shrink-0 w-8 h-8 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <span className="pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('RecipeDetailApp error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <RecipeDetailApp />
  </ErrorBoundary>
);