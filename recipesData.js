const recipesData = {
  categories: [
    { id: 'breakfast', name: 'Desayunos', icon: 'sunrise', count: 4 },
    { id: 'lunch', name: 'Almuerzos', icon: 'utensils', count: 5 },
    { id: 'dinner', name: 'Cenas', icon: 'moon', count: 4 },
    { id: 'desserts', name: 'Postres', icon: 'cake', count: 4 },
    { id: 'drinks', name: 'Bebidas', icon: 'coffee', count: 3 }
  ],
  recipes: [
    {
      id: 1,
      name: 'Tostadas Francesas',
      category: 'breakfast',
      categoryName: 'Desayunos',
      description: 'Deliciosas tostadas con canela y jarabe de maple',
      time: '15 min',
      difficulty: 'Fácil',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Huevos Benedictinos',
      category: 'breakfast',
      categoryName: 'Desayunos',
      description: 'Huevos pochados sobre muffin inglés con salsa holandesa',
      time: '25 min',
      difficulty: 'Media',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Panqueques con Arándanos',
      category: 'breakfast',
      categoryName: 'Desayunos',
      description: 'Esponjosos panqueques con arándanos frescos',
      time: '20 min',
      difficulty: 'Fácil',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Avena con Frutas',
      category: 'breakfast',
      categoryName: 'Desayunos',
      description: 'Avena cremosa con frutas frescas y miel',
      time: '10 min',
      difficulty: 'Fácil',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Pasta Carbonara',
      category: 'lunch',
      categoryName: 'Almuerzos',
      description: 'Pasta cremosa con panceta y queso parmesano',
      time: '30 min',
      difficulty: 'Media',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Ensalada César',
      category: 'lunch',
      categoryName: 'Almuerzos',
      description: 'Ensalada clásica con pollo, crutones y aderezo césar',
      time: '15 min',
      difficulty: 'Fácil',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      name: 'Hamburguesa Gourmet',
      category: 'lunch',
      categoryName: 'Almuerzos',
      description: 'Hamburguesa artesanal con queso cheddar y bacon',
      time: '25 min',
      difficulty: 'Media',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      name: 'Sushi Variado',
      category: 'lunch',
      categoryName: 'Almuerzos',
      description: 'Selección de sushi fresco con salmón y atún',
      time: '45 min',
      difficulty: 'Difícil',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop'
    },
    {
      id: 9,
      name: 'Pizza Margarita',
      category: 'lunch',
      categoryName: 'Almuerzos',
      description: 'Pizza italiana clásica con tomate, mozzarella y albahaca',
      time: '35 min',
      difficulty: 'Media',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop'
    },
    {
      id: 10,
      name: 'Salmón al Horno',
      category: 'dinner',
      categoryName: 'Cenas',
      description: 'Filete de salmón con limón y hierbas aromáticas',
      time: '30 min',
      difficulty: 'Media',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop'
    },
    {
      id: 11,
      name: 'Pollo a la Parrilla',
      category: 'dinner',
      categoryName: 'Cenas',
      description: 'Pechuga de pollo marinada con vegetales asados',
      time: '40 min',
      difficulty: 'Fácil',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop'
    },
    {
      id: 12,
      name: 'Risotto de Hongos',
      category: 'dinner',
      categoryName: 'Cenas',
      description: 'Risotto cremoso con hongos frescos y parmesano',
      time: '35 min',
      difficulty: 'Media',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1476124369491-c209e823b61b?w=400&h=300&fit=crop'
    },
    {
      id: 13,
      name: 'Filete con Papas',
      category: 'dinner',
      categoryName: 'Cenas',
      description: 'Filete jugoso acompañado de papas gratinadas',
      time: '45 min',
      difficulty: 'Media',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop'
    },
    {
      id: 14,
      name: 'Tiramisú',
      category: 'desserts',
      categoryName: 'Postres',
      description: 'Postre italiano clásico con café y mascarpone',
      time: '30 min',
      difficulty: 'Media',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop'
    },
    {
      id: 15,
      name: 'Brownie de Chocolate',
      category: 'desserts',
      categoryName: 'Postres',
      description: 'Brownie húmedo con nueces y chips de chocolate',
      time: '35 min',
      difficulty: 'Fácil',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&h=300&fit=crop'
    },
    {
      id: 16,
      name: 'Cheesecake de Fresa',
      category: 'desserts',
      categoryName: 'Postres',
      description: 'Tarta de queso cremosa con coulis de fresa',
      time: '50 min',
      difficulty: 'Media',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1533134242820-f78df82e2d75?w=400&h=300&fit=crop'
    },
    {
      id: 17,
      name: 'Helado Artesanal',
      category: 'desserts',
      categoryName: 'Postres',
      description: 'Helado cremoso de vainilla con toppings',
      time: '20 min',
      difficulty: 'Fácil',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop'
    },
    {
      id: 18,
      name: 'Smoothie Verde',
      category: 'drinks',
      categoryName: 'Bebidas',
      description: 'Batido saludable de espinaca, plátano y manzana',
      time: '5 min',
      difficulty: 'Fácil',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop'
    },
    {
      id: 19,
      name: 'Limonada Natural',
      category: 'drinks',
      categoryName: 'Bebidas',
      description: 'Refrescante limonada con menta fresca',
      time: '10 min',
      difficulty: 'Fácil',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=400&h=300&fit=crop'
    },
    {
      id: 20,
      name: 'Café Latte',
      category: 'drinks',
      categoryName: 'Bebidas',
      description: 'Café con leche espumosa y arte latte',
      time: '8 min',
      difficulty: 'Media',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
    }
  ]
};