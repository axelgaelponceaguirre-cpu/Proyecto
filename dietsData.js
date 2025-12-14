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
    {
      id: 1,
      name: 'Ensalada de Pollo y Verduras',
      dietType: 'hypocaloric',
      dietTypeName: 'Hipocalórica',
      description: 'Ensalada fresca con pechuga de pollo a la plancha',
      time: '20 min',
      difficulty: 'Fácil',
      rating: 4.7,
      calories: 280,
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Sopa de Verduras',
      dietType: 'hypocaloric',
      dietTypeName: 'Hipocalórica',
      description: 'Sopa casera baja en calorías',
      time: '30 min',
      difficulty: 'Fácil',
      rating: 4.5,
      calories: 150,
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Pescado al Vapor con Limón',
      dietType: 'hypocaloric',
      dietTypeName: 'Hipocalórica',
      description: 'Filete de pescado blanco al vapor',
      time: '25 min',
      difficulty: 'Fácil',
      rating: 4.6,
      calories: 220,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Wrap de Verduras',
      dietType: 'hypocaloric',
      dietTypeName: 'Hipocalórica',
      description: 'Wrap integral con vegetales frescos',
      time: '15 min',
      difficulty: 'Fácil',
      rating: 4.4,
      calories: 250,
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Yogur con Frutos Rojos',
      dietType: 'hypocaloric',
      dietTypeName: 'Hipocalórica',
      description: 'Yogur griego bajo en grasa con frutos del bosque',
      time: '5 min',
      difficulty: 'Fácil',
      rating: 4.8,
      calories: 180,
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Wok de Vegetales',
      dietType: 'hypocaloric',
      dietTypeName: 'Hipocalórica',
      description: 'Salteado de verduras mixtas',
      time: '18 min',
      difficulty: 'Media',
      calories: 200,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      name: 'Pechuga de Pollo a la Plancha',
      dietType: 'hyperproteic',
      dietTypeName: 'Hiperproteica',
      description: 'Pechuga con especias y arroz integral',
      time: '25 min',
      difficulty: 'Fácil',
      rating: 4.8,
      calories: 420,
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      name: 'Huevos Revueltos con Claras',
      dietType: 'hyperproteic',
      dietTypeName: 'Hiperproteica',
      description: 'Revuelto alto en proteínas con vegetales',
      time: '10 min',
      difficulty: 'Fácil',
      rating: 4.6,
      calories: 250,
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop'
    },
    {
      id: 9,
      name: 'Salmón con Quinoa',
      dietType: 'hyperproteic',
      dietTypeName: 'Hiperproteica',
      description: 'Filete de salmón con quinoa y espárragos',
      time: '30 min',
      difficulty: 'Media',
      rating: 4.9,
      calories: 480,
      image: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=400&h=300&fit=crop'
    },
    {
      id: 10,
      name: 'Batido Proteico',
      dietType: 'hyperproteic',
      dietTypeName: 'Hiperproteica',
      description: 'Smoothie con proteína en polvo y plátano',
      time: '5 min',
      difficulty: 'Fácil',
      rating: 4.7,
      calories: 320,
      image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop'
    },
    {
      id: 11,
      name: 'Atún con Garbanzos',
      dietType: 'hyperproteic',
      dietTypeName: 'Hiperproteica',
      description: 'Ensalada de atún con garbanzos cocidos',
      time: '15 min',
      difficulty: 'Fácil',
      rating: 4.5,
      calories: 380,
      image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop'
    },
    {
      id: 12,
      name: 'Filete de Ternera',
      dietType: 'hyperproteic',
      dietTypeName: 'Hiperproteica',
      description: 'Carne magra con batata asada',
      time: '35 min',
      difficulty: 'Media',
      rating: 4.8,
      calories: 520,
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop'
    },
    {
      id: 13,
      name: 'Lasaña Vegetariana',
      dietType: 'vegetarian',
      dietTypeName: 'Vegetariana',
      description: 'Lasaña con verduras y queso ricotta',
      time: '50 min',
      difficulty: 'Media',
      rating: 4.8,
      calories: 380,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop'
    },
    {
      id: 14,
      name: '
