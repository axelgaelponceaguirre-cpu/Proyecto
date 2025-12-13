# Menú de Recetas por Dietas - Documentación del Proyecto

## Descripción
Aplicación web de menú de recetas organizado por tipos de dieta, permitiendo a los usuarios encontrar recetas adaptadas a sus objetivos nutricionales específicos.

## Características
- **5 tipos de dieta**: Hipocalórica, Hiperproteica, Vegetariana, Vegana y Cetogénica
- **Tarjetas informativas de dietas**: Con descripción, características y contador de recetas
- **Búsqueda de recetas**: Búsqueda en tiempo real por nombre
- **Filtrado por dieta**: Botones interactivos para filtrar recetas por tipo de dieta
- **Información nutricional**: Cada receta muestra calorías, tiempo, dificultad y calificación
- **Diseño responsivo**: Adaptable a diferentes tamaños de pantalla

## Tipos de Dieta
1. **Hipocalórica**: Para pérdida de peso (bajo en calorías, alto en fibra)
2. **Hiperproteica**: Para aumento de masa muscular (alto en proteínas)
3. **Vegetariana**: Sin carne, incluye lácteos y huevos
4. **Vegana**: 100% vegetal, sin productos animales
5. **Cetogénica**: Alta en grasas, muy baja en carbohidratos

## Estructura del Proyecto
```
/
├── index.html              # Página principal
├── app.js                  # Componente principal de la aplicación
├── components/             # Componentes de React
│   ├── Header.js          # Barra de navegación
│   ├── DietCard.js        # Tarjeta de tipo de dieta
│   ├── RecipeCard.js      # Tarjeta de receta
│   └── Footer.js          # Pie de página
├── data/
│   └── dietsData.js       # Datos de dietas y recetas
└── trickle/
    ├── assets/            # Recursos del proyecto
    ├── notes/             # Documentación
    └── rules/             # Reglas del proyecto
```

## Tecnologías
- React 18
- TailwindCSS
- Lucide Icons
- Babel Standalone

## Paleta de Colores
- Color primario: #ff6b35 (Naranja)
- Color secundario: #fff4e6 (Crema)
- Color de acento: #ffa726 (Naranja claro)

## Datos
El proyecto incluye 30 recetas organizadas en 5 tipos de dieta (6 recetas por dieta) con imágenes de alta calidad de Unsplash e información nutricional detallada.
