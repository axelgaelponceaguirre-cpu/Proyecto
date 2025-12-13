// =================================================================
// [1] CÓDIGO DE DATOS (dietsData)
// =================================================================

const dietsData = {
    diets: [
        {
            id: 'hypocaloric',
            name: 'Hipocalórica',
            icon: 'scale',
            description: 'Ideal para pérdida de peso controlada',
            features: ['Bajo en calorías', 'Alto en fibra', 'Saciante'],
            recipeCount: 6
        },
        {
            id: 'hyperproteic',
            name: 'Hiperproteica',
            icon: 'dumbbell',
            description: 'Para aumento de masa muscular',
            features: ['Alto en proteínas', 'Construcción muscular', 'Recuperación'],
            recipeCount: 6
        },
        {
            id: 'vegetarian',
            name: 'Vegetariana',
            icon: 'leaf',
            description: 'Sin carne, incluye lácteos y huevos',
            features: ['Sin carne', 'Lácteos OK', 'Huevos OK'],
            recipeCount: 6
        },
        {
            id: 'vegan',
            name: 'Vegana',
            icon: 'sprout',
            description: 'Completamente libre de productos animales',
            features: ['100% vegetal', 'Sin lácteos', 'Sin huevos'],
            recipeCount: 6
        },
        {
            id: 'ketogenic',
            name: 'Cetogénica',
            icon: 'flame',
            description: 'Alta en grasas, muy baja en carbohidratos',
            features: ['Bajo en carbos', 'Alto en grasas', 'Cetosis'],
            recipeCount: 6
        }
    ],
    recipes: [
        { id: 1, name: 'Ensalada de Pollo y Verduras', dietType: 'hypocaloric', dietTypeName: 'Hipocalórica', description: 'Ensalada fresca con pechuga de pollo a la plancha', time: '20 min', difficulty: 'Fácil', rating: 4.7, calories: 280, image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop' },
        { id: 2, name: 'Sopa de Verduras', dietType: 'hypocaloric', dietTypeName: 'Hipocalórica', description: 'Sopa casera baja en calorías', time: '30 min', difficulty: 'Fácil', rating: 4.5, calories: 150, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop' },
        { id: 3, name: 'Pescado al Vapor con Limón', dietType: 'hypocaloric', dietTypeName: 'Hipocalórica', description: 'Filete de pescado blanco al vapor', time: '25 min', difficulty: 'Fácil', rating: 4.6, calories: 220, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop' },
        { id: 4, name: 'Wrap de Verduras', dietType: 'hypocaloric', dietTypeName: 'Hipocalórica', description: 'Wrap integral con vegetales frescos', time: '15 min', difficulty: 'Fácil', rating: 4.4, calories: 250, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop' },
        { id: 5, name: 'Yogur con Frutos Rojos', dietType: 'hypocaloric', dietTypeName: 'Hipocalórica', description: 'Yogur griego bajo en grasa con frutos del bosque', time: '5 min', difficulty: 'Fácil', rating: 4.8, calories: 180, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop' },
        { id: 6, name: 'Wok de Vegetales', dietType: 'hypocaloric', dietTypeName: 'Hipocalórica', description: 'Salteado de verduras mixtas', time: '18 min', difficulty: 'Media', calories: 200, rating: 4.5, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop' },
        { id: 7, name: 'Pechuga de Pollo a la Plancha', dietType: 'hyperproteic', dietTypeName: 'Hiperproteica', description: 'Pechuga con especias y arroz integral', time: '25 min', difficulty: 'Fácil', rating: 4.8, calories: 420, image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop' },
        { id: 8, name: 'Huevos Revueltos con Claras', dietType: 'hyperproteic', dietTypeName: 'Hiperproteica', description: 'Revuelto alto en proteínas con vegetales', time: '10 min', difficulty: 'Fácil', rating: 4.6, calories: 250, image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop' },
        { id: 9, name: 'Salmón con Quinoa', dietType: 'hyperproteic', dietTypeName: 'Hiperproteica', description: 'Filete de salmón con quinoa y espárragos', time: '30 min', difficulty: 'Media', rating: 4.9, calories: 480, image: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=400&h=300&fit=crop' },
        { id: 10, name: 'Batido Proteico', dietType: 'hyperproteic', dietTypeName: 'Hiperproteica', description: 'Smoothie con proteína en polvo y plátano', time: '5 min', difficulty: 'Fácil', rating: 4.7, calories: 320, image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop' },
        { id: 11, name: 'Atún con Garbanzos', dietType: 'hyperproteic', dietTypeName: 'Hiperproteica', description: 'Ensalada de atún con garbanzos cocidos', time: '15 min', difficulty: 'Fácil', rating: 4.5, calories: 380, image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop' },
        { id: 12, name: 'Filete de Ternera', dietType: 'hyperproteic', dietTypeName: 'Hiperproteica', description: 'Carne magra con batata asada', time: '35 min', difficulty: 'Media', rating: 4.8, calories: 520, image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop' },
        { id: 13, name: 'Lasaña Vegetariana', dietType: 'vegetarian', dietTypeName: 'Vegetariana', description: 'Lasaña con verduras y queso ricotta', time: '50 min', difficulty: 'Media', rating: 4.8, calories: 380, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop' },
        { id: 14, name: 'Pizza Margarita', dietType: 'vegetarian', dietTypeName: 'Vegetariana', description: 'Pizza casera con tomate y mozzarella', time: '40 min', difficulty: 'Media', rating: 4.9, calories: 450, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop' },
        { id: 15, name: 'Tortilla de Patatas', dietType: 'vegetarian', dietTypeName: 'Vegetariana', description: 'Tortilla española tradicional', time: '30 min', difficulty: 'Media', rating: 4.7, calories: 320, image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop' },
        { id: 16, name: 'Risotto de Champiñones', dietType: 'vegetarian', dietTypeName: 'Vegetariana', description: 'Risotto cremoso con hongos y parmesano', time: '35 min', difficulty: 'Media', rating: 4.8, calories: 420, image: 'https://rainbowplantlife.com/wp-content/uploads/2023/01/Mushroom-Risotto-new-cover-photo-5x4-1-of-1.jpg' },
        { id: 17, name: 'Quiche de Espinacas', dietType: 'vegetarian', dietTypeName: 'Vegetariana', description: 'Tarta salada con espinacas y queso', time: '45 min', difficulty: 'Media', rating: 4.6, calories: 360, image: 'https://sallysbakingaddiction.com/wp-content/uploads/2014/02/spinach-quiche.jpg' },
        { id: 18, name: 'Pasta Alfredo', dietType: 'vegetarian', dietTypeName: 'Vegetariana', description: 'Pasta en salsa cremosa de queso', time: '25 min', difficulty: 'Fácil', rating: 4.7, calories: 480, image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop' },
        { id: 19, name: 'Bowl de Buddha Vegano', dietType: 'vegan', dietTypeName: 'Vegana', description: 'Bowl nutritivo con quinoa, aguacate y vegetales', time: '30 min', difficulty: 'Fácil', rating: 4.9, calories: 420, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop' },
        { id: 20, name: 'Curry de Garbanzos', dietType: 'vegan', dietTypeName: 'Vegana', description: 'Curry cremoso de garbanzos con leche de coco', time: '35 min', difficulty: 'Media', rating: 4.8, calories: 380, image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop' },
        { id: 21, name: 'Hamburguesa de Lentejas', dietType: 'vegan', dietTypeName: 'Vegana', description: 'Burger vegetal con pan integral', time: '25 min', difficulty: 'Media', rating: 4.7, calories: 340, image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop' },
        { id: 22, name: 'Smoothie Verde Detox', dietType: 'vegan', dietTypeName: 'Vegana', description: 'Batido de espinacas, plátano y leche de almendras', time: '5 min', difficulty: 'Fácil', rating: 4.6, calories: 220, image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop' },
        { id: 23, name: 'Pad Thai Vegano', dietType: 'vegan', dietTypeName: 'Vegana', description: 'Fideos tailandeses con tofu y vegetales', time: '30 min', difficulty: 'Media', rating: 4.8, calories: 400, image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop' },
        { id: 24, name: 'Tacos de Tofu', dietType: 'vegan', dietTypeName: 'Vegana', description: 'Tacos con tofu marinado y guacamole', time: '20 min', difficulty: 'Fácil', rating: 4.7, calories: 320, image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop' },
        { id: 25, name: 'Aguacate Relleno', dietType: 'ketogenic', dietTypeName: 'Cetogénica', description: 'Aguacate con huevo y tocino', time: '15 min', difficulty: 'Fácil', rating: 4.8, calories: 380, image: 'https://rantsfrommycrazykitchen.com/wp-content/uploads/2018/05/Breakfast-Stuffed-Avocados.jpg' },
        { id: 26, name: 'Salmón con Mantequilla', dietType: 'ketogenic', dietTypeName: 'Cetogénica', description: 'Filete de salmón con mantequilla de ajo', time: '25 min', difficulty: 'Media', rating: 4.9, calories: 520, image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop' },
        { id: 27, name: 'Huevos con Bacon', dietType: 'ketogenic', dietTypeName: 'Cetogénica', description: 'Huevos revueltos con bacon crujiente', time: '12 min', difficulty: 'Fácil', rating: 4.7, calories: 450, image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop' },
        { id: 28, name: 'Pizza Keto', dietType: 'ketogenic', dietTypeName: 'Cetogénica', description: 'Pizza con base de coliflor y queso', time: '35 min', difficulty: 'Media', rating: 4.6, calories: 380, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop' },
        { id: 29, name: 'Chuletas de Cerdo', dietType: 'ketogenic', dietTypeName: 'Cetogénica', description: 'Chuletas jugosas con espárragos', time: '30 min', difficulty: 'Media', rating: 4.8, calories: 540, image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop' },
        { id: 30, name: 'Ensalada César Keto', dietType: 'ketogenic', dietTypeName: 'Cetogénica', description: 'Ensalada césar sin crutones con pollo', time: '15 min', difficulty: 'Fácil', rating: 4.7, calories: 420, image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop' }
    ]
};

// =================================================================
// [2] CÓDIGO DE DETALLES DE RECETAS (recipesDetails)
// NOTA: Para el index.html, solo se necesita el objeto, no todo el detalle.
// Sin embargo, lo mantendremos para evitar errores de referencia si se intenta acceder.
// =================================================================
const recipesDetails = { /* Generalmente vacío o con datos */ };


// =================================================================
// [3] CÓDIGO DE COMPONENTES (Header, Footer, Cards, etc.)
// =================================================================

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

function RecipeCard({ recipe }) {
    try {
        const handleRecipeClick = () => {
            // Navegación corregida para el detalle de la receta
            window.location.href = `recipe-detail.html?id=${recipe.id}`;
        };

        return (
            <div 
                className="recipe-card p-4 border border-gray-100 flex flex-col hover:border-[var(--primary-color)]"
                onClick={handleRecipeClick}
                data-name="recipe-card"
                data-file="components/RecipeCard.js"
            >
                <div className="h-36 mb-4 overflow-hidden rounded-lg">
                    <img 
                        src={recipe.image} 
                        alt={recipe.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
                <span className="text-xs font-semibold text-[var(--primary-color)] bg-[var(--secondary-color)] px-3 py-1 rounded-full w-fit mb-2">
                    {recipe.dietTypeName}
                </span>
                <h3 className="text-lg font-bold mb-1 line-clamp-2 flex-grow">{recipe.name}</h3>
                <p className="text-sm text-[var(--text-light)] mb-3 line-clamp-2">{recipe.description}</p>
                <div className="flex items-center justify-between text-sm pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-[var(--text-dark)]">
                        <div className="icon-clock text-base"></div>
                        <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                        <div className="icon-star text-base"></div>
                        <span>{recipe.rating}</span>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('RecipeCard component error:', error);
        return null;
    }
}

// Opcional: El componente CategoryCard que enviaste
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

// Opcional: El componente Icon que enviaste
function Icon({ iconName }) {
    try {
        return (
            <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-[var(--secondary-color)]"
                data-name="icon"
                data-file="components/Icon.js"
            >
                <div className={`icon-${iconName} text-2xl text-[var(--primary-color)]`}></div>
            </div>
        );
    } catch (error) {
        console.error('Icon component error:', error);
        return null;
    }
}


// =================================================================
// [4] LÓGICA PRINCIPAL (ErrorBoundary y App)
// =================================================================

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
