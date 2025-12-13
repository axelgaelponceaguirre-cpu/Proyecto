const recipesDetails = {
  1: {
    ingredients: [
      'Lechuga romana fresca',
      '200g de pechuga de pollo',
      'Tomate cherry',
      'Pepino',
      'Zanahoria rallada',
      'Aderezo light',
      'Sal y pimienta'
    ],
    steps: [
      'Cocinar la pechuga de pollo a la plancha',
      'Lavar y cortar las verduras',
      'Mezclar todos los ingredientes en un bowl',
      'Agregar aderezo al gusto',
      'Servir fresco'
    ]
  },
  2: {
    ingredients: [
      '200g de vegetales mixtos (brócoli, zanahoria, pimiento)',
      '2 dientes de ajo',
      '1 cucharada de aceite de oliva',
      '1 litro de caldo de verduras bajo en sodio',
      'Hierbas frescas (perejil, albahaca)',
      'Sal y pimienta al gusto'
    ],
    steps: [
      'Picar todas las verduras en trozos pequeños',
      'Sofreír el ajo en aceite de oliva',
      'Agregar las verduras y saltear 5 minutos',
      'Añadir el caldo y cocinar 20 minutos',
      'Condimentar con hierbas, sal y pimienta',
      'Servir caliente'
    ]
  },
  3: {
    ingredients: [
      '200g de filete de pescado blanco',
      '1 limón',
      'Hierbas aromáticas (tomillo, romero)',
      'Sal y pimienta',
      'Verduras al vapor'
    ],
    steps: [
      'Sazonar el pescado con sal, pimienta y hierbas',
      'Colocar en vaporera con rodajas de limón',
      'Cocinar al vapor 15-20 minutos',
      'Verificar que esté bien cocido',
      'Servir con un chorrito de limón fresco'
    ]
  },
  4: {
    ingredients: [
      '1 tortilla integral',
      'Lechuga, tomate, pepino',
      '50g de zanahoria rallada',
      '30g de queso bajo en grasa',
      'Mostaza o salsa light',
      'Germinados'
    ],
    steps: [
      'Lavar y cortar todas las verduras',
      'Calentar ligeramente la tortilla',
      'Untar con salsa o mostaza',
      'Colocar las verduras en el centro',
      'Enrollar firmemente y cortar por la mitad'
    ]
  },
  5: {
    ingredients: [
      '200g de yogur griego 0% grasa',
      '100g de frutos rojos mixtos',
      '1 cucharada de miel (opcional)',
      'Semillas de chía',
      'Nueces picadas'
    ],
    steps: [
      'Colocar el yogur en un bowl',
      'Lavar los frutos rojos',
      'Agregar los frutos sobre el yogur',
      'Espolvorear con chía y nueces',
      'Añadir miel si se desea'
    ]
  },
  6: {
    ingredients: [
      '200g de vegetales mixtos (brócoli, pimiento, calabacín)',
      '1 cucharada de aceite de sésamo',
      'Salsa de soja baja en sodio',
      '2 dientes de ajo',
      'Jengibre fresco rallado',
      'Semillas de sésamo'
    ],
    steps: [
      'Cortar los vegetales en trozos uniformes',
      'Calentar el wok a fuego alto',
      'Añadir aceite y saltear ajo y jengibre',
      'Agregar vegetales y cocinar 5-7 minutos',
      'Condimentar con salsa de soja',
      'Servir con semillas de sésamo'
    ]
  },
  7: {
    ingredients: [
      '200g de pechuga de pollo',
      '100g de arroz integral',
      'Especias (pimentón, ajo en polvo, comino)',
      'Limón',
      'Aceite de oliva',
      'Sal y pimienta'
    ],
    steps: [
      'Marinar el pollo con especias y limón 30 min',
      'Cocinar el arroz integral según instrucciones',
      'Calentar plancha a fuego medio-alto',
      'Cocinar el pollo 6-7 minutos por lado',
      'Dejar reposar 5 minutos antes de cortar',
      'Servir con arroz integral'
    ]
  },
  8: {
    ingredients: [
      '8 claras de huevo',
      '2 huevos enteros',
      'Espinacas frescas',
      'Tomate',
      'Champiñones',
      'Sal y pimienta'
    ],
    steps: [
      'Batir las claras con los huevos enteros',
      'Picar las verduras en trozos pequeños',
      'Calentar sartén antiadherente',
      'Agregar las verduras y saltear',
      'Verter los huevos y revolver constantemente',
      'Cocinar hasta que estén cremosos'
    ]
  },
  9: {
    ingredients: [
      '200g de filete de salmón',
      '150g de quinoa',
      'Espárragos frescos',
      'Aceite de oliva',
      'Limón',
      'Sal y pimienta'
    ],
    steps: [
      'Cocinar la quinoa según instrucciones',
      'Sazonar el salmón con sal, pimienta y limón',
      'Cocinar el salmón al horno 15 minutos a 180°C',
      'Saltear los espárragos en aceite de oliva',
      'Servir el salmón sobre la quinoa con espárragos'
    ]
  },
  10: {
    ingredients: [
      '1 scoop de proteína en polvo',
      '1 plátano maduro',
      '200ml de leche de almendras',
      '1 cucharada de mantequilla de maní',
      'Hielo al gusto',
      'Canela (opcional)'
    ],
    steps: [
      'Colocar todos los ingredientes en la licuadora',
      'Licuar hasta obtener una mezcla homogénea',
      'Ajustar consistencia con más hielo o leche',
      'Servir inmediatamente',
      'Decorar con una pizca de canela'
    ]
  },
  11: {
    ingredients: [
      '1 lata de atún al natural',
      '200g de garbanzos cocidos',
      'Tomate cherry',
      'Cebolla morada',
      'Perejil fresco',
      'Aceite de oliva y limón',
      'Sal y pimienta'
    ],
    steps: [
      'Escurrir el atún y los garbanzos',
      'Cortar los tomates y la cebolla',
      'Mezclar todos los ingredientes',
      'Aliñar con aceite, limón, sal y pimienta',
      'Dejar reposar 10 minutos antes de servir'
    ]
  },
  12: {
    ingredients: [
      '200g de filete de ternera',
      '150g de batata',
      'Aceite de oliva',
      'Romero fresco',
      'Ajo',
      'Sal y pimienta'
    ],
    steps: [
      'Cortar la batata en rodajas y hornear 25 min',
      'Sazonar la carne con sal, pimienta y romero',
      'Cocinar la carne a la plancha al punto deseado',
      'Dejar reposar la carne 5 minutos',
      'Servir con la batata asada'
    ]
  },
  13: {
    ingredients: [
      'Láminas de lasaña',
      'Berenjenas, calabacín, pimientos',
      '400g de queso ricotta',
      'Salsa de tomate casera',
      'Queso mozzarella',
      'Albahaca fresca',
      'Sal y pimienta'
    ],
    steps: [
      'Cortar y asar las verduras',
      'Mezclar ricotta con hierbas',
      'Montar capas: salsa, pasta, verduras, ricotta',
      'Cubrir con mozzarella',
      'Hornear 40 minutos a 180°C'
    ]
  },
  14: {
    ingredients: [
      'Masa de pizza casera',
      'Salsa de tomate natural',
      'Queso mozzarella fresco',
      'Hojas de albahaca fresca',
      'Aceite de oliva virgen extra',
      'Sal marina'
    ],
    steps: [
      'Estirar la masa de pizza',
      'Extender la salsa de tomate',
      'Agregar mozzarella en rodajas',
      'Hornear 12-15 minutos a 220°C',
      'Decorar con albahaca fresca al salir'
    ]
  },
  15: {
    ingredients: [
      '4 patatas medianas',
      '6 huevos',
      '1 cebolla',
      'Aceite de oliva',
      'Sal al gusto'
    ],
    steps: [
      'Pelar y cortar las patatas en rodajas finas',
      'Freír las patatas con la cebolla',
      'Batir los huevos con sal',
      'Mezclar patatas con huevos batidos',
      'Cocinar en sartén por ambos lados hasta cuajar'
    ]
  },
  16: {
    ingredients: [
      '300g de arroz arborio',
      '300g de champiñones variados',
      '1 litro de caldo de verduras',
      '100g de queso parmesano',
      'Vino blanco',
      'Mantequilla',
      'Cebolla, ajo'
    ],
    steps: [
      'Sofreír cebolla y ajo picados',
      'Agregar arroz y tostar 2 minutos',
      'Añadir vino blanco y dejar evaporar',
      'Incorporar caldo poco a poco, revolviendo',
      'Agregar champiñones salteados',
      'Terminar con parmesano y mantequilla'
    ]
  },
  17: {
    ingredients: [
      'Masa quebrada',
      '300g de espinacas frescas',
      '4 huevos',
      '200ml de nata',
      '150g de queso rallado',
      'Nuez moscada',
      'Sal y pimienta'
    ],
    steps: [
      'Forrar molde con masa quebrada',
      'Cocinar espinacas y escurrir bien',
      'Batir huevos con nata y queso',
      'Mezclar con espinacas y condimentos',
      'Hornear 35 minutos a 180°C'
    ]
  },
  18: {
    ingredients: [
      '300g de pasta fettuccine',
      '200ml de nata para cocinar',
      '100g de queso parmesano',
      'Mantequilla',
      'Ajo',
      'Nuez moscada',
      'Sal y pimienta'
    ],
    steps: [
      'Cocinar la pasta al dente',
      'Calentar nata con mantequilla y ajo',
      'Agregar parmesano rallado',
      'Incorporar la pasta escurrida',
      'Mezclar bien y servir caliente'
    ]
  },
  19: {
    ingredients: [
      '100g de quinoa cocida',
      '1/2 aguacate',
      'Garbanzos tostados',
      'Zanahoria rallada',
      'Remolacha',
      'Semillas de sésamo',
      'Tahini para aliñar'
    ],
    steps: [
      'Cocinar la quinoa y dejar enfriar',
      'Preparar todos los vegetales',
      'Montar el bowl con quinoa de base',
      'Distribuir los ingredientes por secciones',
      'Aliñar con tahini y limón'
    ]
  },
  20: {
    ingredients: [
      '400g de garbanzos cocidos',
      '400ml de leche de coco',
      'Curry en polvo',
      'Tomate triturado',
      'Cebolla, ajo, jengibre',
      'Espinacas frescas',
      'Cilantro fresco'
    ],
    steps: [
      'Sofreír cebolla, ajo y jengibre',
      'Agregar curry y tostar especias',
      'Añadir tomate y leche de coco',
      'Incorporar garbanzos y cocinar 15 min',
      'Agregar espinacas al final',
      'Decorar con cilantro'
    ]
  },
  21: {
    ingredients: [
      '200g de lentejas cocidas',
      'Pan rallado',
      'Cebolla picada',
      '1 huevo (o sustituto vegano)',
      'Especias al gusto',
      'Pan de hamburguesa integral',
      'Lechuga y tomate'
    ],
    steps: [
      'Triturar lentejas con tenedor',
      'Mezclar con cebolla, pan rallado y especias',
      'Formar hamburguesas',
      'Cocinar a la plancha 5 min por lado',
      'Servir en pan con vegetales'
    ]
  },
  22: {
    ingredients: [
      '2 tazas de espinacas frescas',
      '1 plátano maduro',
      '1 manzana verde',
      '200ml de leche de almendras',
      '1 cucharada de semillas de chía',
      'Jengibre fresco',
      'Hielo'
    ],
    steps: [
      'Lavar bien las espinacas',
      'Pelar y cortar frutas',
      'Colocar todos los ingredientes en licuadora',
      'Licuar hasta textura suave',
      'Servir inmediatamente'
    ]
  },
  23: {
    ingredients: [
      '200g de fideos de arroz',
      '200g de tofu firme',
      'Brotes de soja',
      'Zanahoria, pimiento',
      'Salsa de tamarindo',
      'Cacahuetes triturados',
      'Lima y cilantro'
    ],
    steps: [
      'Remojar fideos según indicaciones',
      'Marinar y saltear el tofu',
      'Saltear vegetales en wok caliente',
      'Agregar fideos y salsa',
      'Incorporar tofu',
      'Servir con cacahuetes y lima'
    ]
  },
  24: {
    ingredients: [
      '200g de tofu firme',
      'Tortillas de maíz',
      '1 aguacate maduro',
      'Tomate, cebolla, cilantro',
      'Lima',
      'Especias mexicanas',
      'Salsa picante'
    ],
    steps: [
      'Marinar tofu con especias',
      'Cocinar tofu hasta dorar',
      'Preparar guacamole con aguacate',
      'Calentar tortillas',
      'Montar tacos con todos los ingredientes',
      'Servir con lima'
    ]
  },
  25: {
    ingredients: [
      '2 aguacates maduros',
      '2 huevos',
      '4 tiras de tocino',
      'Queso rallado',
      'Cebollino picado',
      'Sal y pimienta'
    ],
    steps: [
      'Cortar aguacates por la mitad y sacar hueso',
      'Ampliar hueco central',
      'Cocinar tocino hasta crujiente',
      'Cascas huevo en cada aguacate',
      'Hornear 15 min a 180°C',
      'Decorar con tocino y cebollino'
    ]
  },
  26: {
    ingredients: [
      '200g de filete de salmón',
      '3 cucharadas de mantequilla',
      '3 dientes de ajo',
      'Perejil fresco',
      'Limón',
      'Sal y pimienta'
    ],
    steps: [
      'Sazonar el salmón con sal y pimienta',
      'Derretir mantequilla con ajo picado',
      'Cocinar salmón en mantequilla 4 min por lado',
      'Bañar constantemente con la mantequilla',
      'Servir con jugo de limón y perejil'
    ]
  },
  27: {
    ingredients: [
      '4 huevos',
      '6 tiras de bacon',
      'Mantequilla',
      'Cebollino picado',
      'Sal y pimienta'
    ],
    steps: [
      'Cocinar bacon hasta crujiente',
      'Retirar bacon y reservar',
      'Batir huevos con sal y pimienta',
      'Cocinar huevos revueltos en mantequilla',
      'Servir con bacon y cebollino'
    ]
  },
  28: {
    ingredients: [
      '1 coliflor mediana',
      'Queso mozzarella',
      'Huevo',
      'Salsa de tomate sin azúcar',
      'Orégano',
      'Aceite de oliva'
    ],
    steps: [
      'Rallar coliflor y cocinar al vapor',
      'Escurrir bien y mezclar con huevo y queso',
      'Formar base de pizza y hornear 15 min',
      'Agregar salsa y toppings',
      'Hornear 10 min más hasta dorar'
    ]
  },
  29: {
    ingredients: [
      '4 chuletas de cerdo',
      'Espárragos frescos',
      'Aceite de oliva',
      'Romero y tomillo',
      'Ajo',
      'Sal y pimienta'
    ],
    steps: [
      'Sazonar chuletas con hierbas y ajo',
      'Cocinar a la plancha 6 min por lado',
      'Dejar reposar la carne',
      'Saltear espárragos en aceite',
      'Servir juntos'
    ]
  },
  30: {
    ingredients: [
      'Lechuga romana',
      '200g de pechuga de pollo',
      'Queso parmesano',
      'Aceite de oliva',
      'Ajo',
      'Anchoas',
      'Limón',
      'Sal y pimienta'
    ],
    steps: [
      'Cocinar pollo a la plancha y cortar',
      'Lavar y trocear lechuga',
      'Preparar aderezo con aceite, ajo y anchoas',
      'Mezclar lechuga con aderezo',
      'Agregar pollo y parmesano',
      'Servir inmediatamente'
    ]
  }
};
