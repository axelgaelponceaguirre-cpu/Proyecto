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

function App() {
  try {
    const [selectedDiet, setSelectedDiet] = React.useState(null);

    const handleDietClick = (dietId) => {
      setSelectedDiet(dietId);
      // Scroll to recipes section
      setTimeout(() => {
        const recipesSection = document.getElementById('recipes-section');
        if (recipesSection) {
          recipesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    };

    const filteredRecipes = selectedDiet
      ? dietsData.recipes.filter(r => r.dietType === selectedDiet)
      : dietsData.recipes;

    return (
      <div className="min-h-screen bg-gray-50" data-name="app" data-file="app.js">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gradient">Menú por Dietas</span>
            </h1>
            <p className="text-xl text-[var(--text-light)] max-w-2xl mx-auto">
              Encuentra recetas adaptadas a tu tipo de alimentación y objetivos
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Elige tu Dieta</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dietsData.diets.map(diet => (
                <DietCard 
                  key={diet.id} 
                  diet={diet}
                  onClick={() => handleDietClick(diet.id)}
                  isSelected={selectedDiet === diet.id}
                />
              ))}
            </div>
          </section>



          <section id="recipes-section">
            <h2 className="text-2xl font-bold mb-6">
              {selectedDiet 
                ? `Recetas ${dietsData.diets.find(d => d.id === selectedDiet)?.name}`
                : 'Todas las Recetas'
              }
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </section>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-12">
              <div className="icon-search text-6xl text-gray-300 mb-4"></div>
              <p className="text-xl text-[var(--text-light)]">
                No se encontraron recetas
              </p>
            </div>
          )}
        </main>

        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
