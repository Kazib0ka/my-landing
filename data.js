const i18n = {
  ru: {
    logo: 'Batumi',
    nav_title: 'Разделы',
    nav_home: 'Главная',
    hero_eyebrow: 'Грузинская Кухня · Кулинарная книга',
    hero_title_line1: 'Рецепты ресторана',
    cat_flour: 'Мучной цех',
    cat_flour_desc: 'Хачапури, лобиани, пури',
    cat_khinkali: 'Хинкали',
    cat_khinkali_desc: 'Классические и авторские',
    cat_pastry: 'Кондитерский цех',
    cat_pastry_desc: 'Сладости и десерты',
    cat_cold: 'Холодный цех',
    cat_cold_desc: 'Закуски, салаты, пхали',
    cat_hot: 'Горячий цех',
    cat_hot_desc: 'Чакапули, харчо, сациви',
    cat_grill: 'Шашлык',
    cat_grill_desc: 'Мцвади и маринады',
    back: '← Назад',
    recipe_placeholder: 'Рецепт скоро',
    time_label: 'мин',
  },
  es: {
    logo: 'Batumi',
    nav_title: 'Secciones',
    nav_home: 'Inicio',
    hero_eyebrow: 'Cocina Georgiana · Libro de Recetas',
    hero_title_line1: 'Recetas del restaurante',
    cat_flour: 'Panadería',
    cat_flour_desc: 'Khachapuri, lobiani, puri',
    cat_khinkali: 'Khinkali',
    cat_khinkali_desc: 'Clásicos y variaciones',
    cat_pastry: 'Repostería',
    cat_pastry_desc: 'Dulces y postres',
    cat_cold: 'Platos Fríos',
    cat_cold_desc: 'Aperitivos, ensaladas, pkhali',
    cat_hot: 'Platos Calientes',
    cat_hot_desc: 'Chakapuli, khartcho, satsivi',
    cat_grill: 'Asados',
    cat_grill_desc: 'Mtsvadi y marinadas',
    back: '← Volver',
    recipe_placeholder: 'Próximamente',
    time_label: 'min',
  }
};

// Mock recipe data — add your real recipes here
const categories = {
  flour: {
    bg: 'bg-flour',
    icon: '🌾',
    name_ru: 'Мучной цех',
    name_es: 'Panadería',
    desc_ru: 'Хлеб, хачапури и традиционная выпечка',
    desc_es: 'Pan, khachapuri y panadería tradicional',
    recipes: [
      {
        name_ru: 'Лобиани', name_es: 'Lobiani',
        tag_ru: 'Выпечка', tag_es: 'Panadería', emoji: '🥙',
        ingredients_ru: [
          'Фасоль — 2 кг',
          'Сливочное масло — 250 г',
          'Репчатый лук — 300 г',
          'Кондари (чабер) — 6 г',
          'Кориандр — 6 г',
          'Черный перец — 8 г',
          'Красный перец — 2 г',
          'Уцхо-сунели — 7 г',
          'Чеснок — 5 г',
          'Соль — 25 г'
        ],
        ingredients_es: [
          'Judías — 2 kg',
          'Mantequilla — 250 g',
          'Cebolla — 300 g',
          'Ajedrea (kondari) — 6 g',
          'Cilantro — 6 g',
          'Pimienta negra — 8 g',
          'Pimiento rojo — 2 g',
          'Utskho suneli — 7 g',
          'Ajo — 5 g',
          'Sal — 25 g'
        ]
      },
      {
        name_ru: 'Тесто для хачапури и хлеба', name_es: 'Masa para khachapuri y pan',
        tag_ru: 'Тесто', tag_es: 'Masa', emoji: '🍞',
        ingredients_ru: [
          'Мука — 5 кг (и дополнительно для густоты)',
          'Молоко — 1,5 л',
          'Теплая вода — 2,5 л',
          'Растопленный маргарин — 400 г',
          'Сахар — 100 г',
          'Соль — 220 г',
          'Дрожжи — 3 упаковки'
        ],
        ingredients_es: [
          'Harina — 5 kg (y extra para espesar)',
          'Leche — 1,5 l',
          'Agua tibia — 2,5 l',
          'Margarina derretida — 400 g',
          'Azúcar — 100 g',
          'Sal — 220 g',
          'Levadura — 3 paquetes'
        ]
      },
      {
        name_ru: 'Кубдари', name_es: 'Kubdari',
        tag_ru: 'Выпечка', tag_es: 'Panadería', emoji: '🥖',
        ingredients_ru: [
          'Мясная основа:',
          'Говядина — 5 кг',
          'Свинина — 3 кг',
          'Сало — 500 г',
          'Репчатый лук — 1,5 кг',
          'Чеснок — 50 г',
          'Специи и добавки:',
          'Молотый кориандр — 75 г',
          'Имеретинский шафран — 20 г',
          'Уцхо-сунели — 75 г',
          'Зира — 20 г',
          'Сванская соль — 75 г',
          'Черный перец — 25 г',
          'Перец чили — 10 г',
          'Аджика — 100 г',
          'Соль — 100 г',
          'Пиво — 600 мл'
        ],
        ingredients_es: [
          'Base de carne:',
          'Res — 5 kg',
          'Cerdo — 3 kg',
          'Tocino — 500 g',
          'Cebolla — 1,5 kg',
          'Ajo — 50 g',
          'Especias y aditivos:',
          'Cilantro molido — 75 g',
          'Azafrán imereti — 20 g',
          'Utskho suneli — 75 g',
          'Comino — 20 g',
          'Sal svana — 75 g',
          'Pimienta negra — 25 g',
          'Chile — 10 g',
          'Adjika — 100 g',
          'Sal — 100 g',
          'Cerveza — 600 ml'
        ],
        steps_ru: [
          'Мелко нарезать говядину, свинину и сало небольшими кубиками.',
          'Мелко нарезать лук и измельчить чеснок.',
          'Смешать мясо с луком, чесноком и всеми специями: кориандром, шафраном, уцхо-сунели, зирой, сванской солью, чёрным перцем и чили.',
          'Добавить аджику и соль.',
          'Влить пиво и хорошо перемешать начинку.',
          'Оставить начинку на 12 часов, чтобы мясо пропиталось специями.'
        ],
        steps_es: [
          'Cortar finamente la res, el cerdo y el tocino en cubos pequeños.',
          'Cortar finamente la cebolla y picar el ajo.',
          'Mezclar la carne con la cebolla, el ajo y todas las especias: cilantro, azafrán, utskho suneli, comino, sal svana, pimienta negra y chile.',
          'Añadir la adjika y la sal.',
          'Verter la cerveza y mezclar bien el relleno.',
          'Dejar reposar el relleno 12 horas para que la carne se impregne de las especias.'
        ]
      }
    ]
  },
  khinkali: {
    bg: 'bg-khinkali',
    icon: '🥟',
    name_ru: 'Хинкали',
    name_es: 'Khinkali',
    desc_ru: 'Грузинские пельмени с различными начинками',
    desc_es: 'Dumlings georgianos con diferentes rellenos',
    recipes: [
      {
        name_ru: 'Хинкали «Микс»', name_es: 'Khinkali "Mix"',
        tag_ru: 'Классика', tag_es: 'Clásico', emoji: '🥟',
        ingredients_ru: [
          'Мясная основа:',
          'Говядина — 1 кг',
          'Свинина — 500 г',
          'Репчатый лук — 300 г',
          'Сало — 100 г',
          'Свежая кинза — 30 г',
          'Петрушка — 10 г',
          'Острый перец (свежий) — 25 г',
          'Специи:',
          'Зира — 5 г',
          'Молотый кориандр — 10 г',
          'Уцхо-сунели — 10 г',
          'Черный перец — 5 г',
          'Молотый чили — 1 г',
          'Соль — 10 г',
          'Бульон (для начинки):',
          'Вода — 1,8 л',
          'Бульонный порошок — 15 г'
        ],
        ingredients_es: [
          'Base de carne:',
          'Res — 1 kg',
          'Cerdo — 500 g',
          'Cebolla — 300 g',
          'Tocino — 100 g',
          'Cilantro fresco — 30 g',
          'Perejil — 10 g',
          'Chile fresco — 25 g',
          'Especias:',
          'Comino — 5 g',
          'Cilantro molido — 10 g',
          'Utskho suneli — 10 g',
          'Pimienta negra — 5 g',
          'Chile molido — 1 g',
          'Sal — 10 g',
          'Caldo (para el relleno):',
          'Agua — 1,8 l',
          'Caldo en polvo — 15 g'
        ]
      },
      {
        name_ru: 'Хинкали с бараниной', name_es: 'Khinkali de cordero',
        tag_ru: 'Классика', tag_es: 'Clásico', emoji: '🥟',
        ingredients_ru: [
          'Мясная основа:',
          'Баранина — 1 кг',
          'Говяжий жир — 100 г',
          'Репчатый лук — 200 г',
          'Свежая кинза — 40 г',
          'Петрушка — 20 г',
          'Острый перец (свежий) — 25 г',
          'Специи:',
          'Зира — 20 г',
          'Молотый кориандр — 15 г',
          'Уцхо-сунели — 10 г',
          'Черный перец — 5 г',
          'Молотый чили — 1 г',
          'Соль — 10 г',
          'Бульон (для начинки):',
          'Вода — 1,5 л',
          'Бульонный порошок — 10 г'
        ],
        ingredients_es: [
          'Base de carne:',
          'Cordero — 1 kg',
          'Grasa de res — 100 g',
          'Cebolla — 200 g',
          'Cilantro fresco — 40 g',
          'Perejil — 20 g',
          'Chile fresco — 25 g',
          'Especias:',
          'Comino — 20 g',
          'Cilantro molido — 15 g',
          'Utskho suneli — 10 g',
          'Pimienta negra — 5 g',
          'Chile molido — 1 g',
          'Sal — 10 g',
          'Caldo (para el relleno):',
          'Agua — 1,5 l',
          'Caldo en polvo — 10 g'
        ]
      },
      {
        name_ru: 'Хинкали с говядиной', name_es: 'Khinkali de Ternera',
        tag_ru: 'Классика', tag_es: 'Clásico', emoji: '🥟',
        ingredients_ru: [
          'Мясная основа:',
          'Говядина — 1 кг',
          'Репчатый лук — 200 г',
          'Свежая кинза — 30 г',
          'Петрушка — 10 г',
          'Острый перец (свежий) — 25 г',
          'Специи:',
          'Молотый кориандр — 10 г',
          'Зира — 5 г',
          'Черный перец — 5 г',
          'Уцхо-сунели — 10 г',
          'Молотый чили — 1 г',
          'Соль — 10 г',
          'Бульон (для начинки):',
          'Вода — 1,5 л',
          'Бульонный порошок — 10 г'
        ],
        ingredients_es: [
          'Base de carne:',
          'Res — 1 kg',
          'Cebolla — 200 g',
          'Cilantro fresco — 30 g',
          'Perejil — 10 g',
          'Chile fresco — 25 g',
          'Especias:',
          'Cilantro molido — 10 g',
          'Comino — 5 g',
          'Pimienta negra — 5 g',
          'Utskho suneli — 10 g',
          'Chile molido — 1 g',
          'Sal — 10 g',
          'Caldo (para el relleno):',
          'Agua — 1,5 l',
          'Caldo en polvo — 10 g'
        ]
      },
      {
        name_ru: 'Тесто для хинкали', name_es: 'Masa para khinkali',
        tag_ru: 'Тесто', tag_es: 'Masa', emoji: '🫙',
        ingredients_ru: [
          'Мука — 5 кг',
          'Соль — 120 г',
          'Очень холодная вода — 1,75 л',
          '⚠ Замешивать 20 минут. Вода должна быть очень холодной.'
        ],
        ingredients_es: [
          'Harina — 5 kg',
          'Sal — 120 g',
          'Agua muy fría — 1,75 l',
          '⚠ Amasar durante 20 minutos. El agua debe estar muy fría.'
        ]
      }
    ]
  },
  pastry: {
    bg: 'bg-pastry',
    icon: '🍰',
    name_ru: 'Кондитерский цех',
    name_es: 'Repostería',
    desc_ru: 'Грузинские десерты и сладости',
    desc_es: 'Postres y dulces georgianos',
    recipes: [
      {
        name_ru: 'Птичье молоко', name_es: 'Leche de pájaro',
        tag_ru: 'Десерт', tag_es: 'Postre', emoji: '🍰',
        ingredients_ru: [
          'Основа 1 (масляная):',
          'Сливочное масло — 170 г',
          'Сгущённое молоко — 250 г',
          'Крем-сыр — 2 ст. л.',
          'Ванилин — 1 щепотка',
          'Соль — 1 щепотка',
          'Основа 2 (белковая):',
          'Яичный белок — 7 шт.',
          'Сахар — 125 г',
          'Лимонная кислота — 1 щепотка',
          'Для стабилизации:',
          'Желатин — 20–25 г',
          'Вода — 200 мл'
        ],
        ingredients_es: [
          'Base 1 (mantequilla):',
          'Mantequilla — 170 g',
          'Leche condensada — 250 g',
          'Queso crema — 2 cda',
          'Vainillina — 1 pizca',
          'Sal — 1 pizca',
          'Base 2 (proteína):',
          'Clara de huevo — 7 uds',
          'Azúcar — 125 g',
          'Ácido cítrico — 1 pizca',
          'Para estabilizar:',
          'Gelatina — 20–25 g',
          'Agua — 200 ml'
        ]
      },
      {
        name_ru: 'Универсальный крем', name_es: 'Crema universal',
        tag_ru: 'Крем', tag_es: 'Crema', emoji: '🍮',
        ingredients_ru: [
          'Яйца — 7 шт.',
          'Сахар — 600 г',
          'Молоко — 3 л',
          'Сливочное масло — 250 г',
          'Мука — 550 г',
          'Ваниль — по вкусу',
          'Соль — 1 щепотка'
        ],
        ingredients_es: [
          'Huevos — 7 uds',
          'Azúcar — 600 g',
          'Leche — 3 l',
          'Mantequilla — 250 g',
          'Harina — 550 g',
          'Vainilla — al gusto',
          'Sal — 1 pizca'
        ],
        steps_ru: [
          'В кастрюлю налить 3 л молока, добавить сливочное масло и поставить на медленный огонь.',
          'В отдельной миске смешать сахар, соль, яйца, ваниль, 200 мл молока и муку до однородной массы без комочков.',
          'Когда молоко с маслом нагреется, постепенно влить в него подготовленную смесь, постоянно помешивая.',
          'Варить на медленном огне, непрерывно помешивая, пока крем не загустеет.',
          'Снять с огня и дать остыть.'
        ],
        steps_es: [
          'Verter 3 l de leche en una cacerola, añadir la mantequilla y poner a fuego lento.',
          'En un bol aparte, mezclar el azúcar, la sal, los huevos, la vainilla, 200 ml de leche y la harina hasta obtener una masa homogénea sin grumos.',
          'Cuando la leche con mantequilla esté caliente, verter poco a poco la mezcla preparada, removiendo constantemente.',
          'Cocinar a fuego lento, removiendo sin parar, hasta que la crema espese.',
          'Retirar del fuego y dejar enfriar.'
        ]
      },
      {
        name_ru: 'Торт «Згапари»', name_es: 'Pastel "Zgapari"',
        tag_ru: 'Торт', tag_es: 'Pastel', emoji: '🎂',
        ingredients_ru: [
          'Для теста:',
          'Яйца — 6 шт.',
          'Сахар — 400 г',
          'Сливочное масло — 250 г',
          'Молоко — 300 мл',
          'Мед — 200 г',
          'Какао-порошок — 8 больших ст. л.',
          'Пищевая сода — 15 г',
          'Уксус — 1 ст. л.',
          'Соль — 10 г',
          'Мука — 600 г',
          'Для крема:',
          'Готовый заварной крем — 1,5 кг',
          'Сливочное масло — 500 г',
          'Сгущенное молоко — 300 г',
          'Ваниль — 15 г'
        ],
        ingredients_es: [
          'Para la masa:',
          'Huevos — 6 uds',
          'Azúcar — 400 g',
          'Mantequilla — 250 g',
          'Leche — 300 ml',
          'Miel — 200 g',
          'Cacao en polvo — 8 cda grandes',
          'Bicarbonato de sodio — 15 g',
          'Vinagre — 1 cda',
          'Sal — 10 g',
          'Harina — 600 g',
          'Para la crema:',
          'Crema pastelera lista — 1,5 kg',
          'Mantequilla — 500 g',
          'Leche condensada — 300 g',
          'Vainilla — 15 g'
        ],
        steps_ru: [
          'Тесто: смешайте яйца с сахаром.',
          'Тесто: добавьте растопленное сливочное масло, молоко и мед.',
          'Тесто: добавьте какао-порошок и хорошо перемешайте.',
          'Тесто: соду погасите уксусом и добавьте в смесь, пока она шипит.',
          'Тесто: добавьте соль.',
          'Тесто: постепенно всыпайте муку и замесите однородное тесто. Выпекайте согласно рецепту до готовности.',
          'Крем: растопите сливочное масло и дайте ему немного остыть.',
          'Крем: смешайте готовый заварной крем со сгущенным молоком.',
          'Крем: добавьте ваниль и хорошо перемешайте.',
          'Крем: постепенно влейте растопленное сливочное масло, постоянно перемешивая до получения однородного крема.'
        ],
        steps_es: [
          'Masa: mezcle los huevos con el azúcar.',
          'Masa: añada la mantequilla derretida, la leche y la miel.',
          'Masa: añada el cacao en polvo y mezcle bien.',
          'Masa: apague el bicarbonato con vinagre y añádalo a la mezcla mientras burbujea.',
          'Masa: añada la sal.',
          'Masa: incorpore poco a poco la harina y amase hasta obtener una masa homogénea. Hornee según la receta hasta que esté lista.',
          'Crema: derrita la mantequilla y déjela enfriar un poco.',
          'Crema: mezcle la crema pastelera lista con la leche condensada.',
          'Crema: añada la vainilla y mezcle bien.',
          'Crema: vierta poco a poco la mantequilla derretida, removiendo constantemente hasta obtener una crema homogénea.'
        ]
      },
      {
        name_ru: 'Крем «Наполеон»', name_es: 'Crema "Napoleón"',
        tag_ru: 'Крем', tag_es: 'Crema', emoji: '🍰',
        ingredients_ru: [
          'Готовый заварной крем — 1,5 кг',
          'Сливки для взбивания — ± 300 г',
          'Сгущенное молоко — ± 250 г',
          'Ваниль — 10 г',
          'Соль — 5 г'
        ],
        ingredients_es: [
          'Crema pastelera lista — 1,5 kg',
          'Nata para montar — ± 300 g',
          'Leche condensada — ± 250 g',
          'Vainilla — 10 g',
          'Sal — 5 g'
        ],
        steps_ru: [
          'В готовый остывший заварной крем добавьте сливки.',
          'Добавьте сгущенное молоко, соль и ваниль, после чего хорошо перемешайте массу до однородности.'
        ],
        steps_es: [
          'A la crema pastelera ya fría, añada la nata.',
          'Añada la leche condensada, la sal y la vainilla, y mezcle bien hasta obtener una masa homogénea.'
        ]
      },
      {
        name_ru: 'Крем для Медовика', name_es: 'Crema para Medovik',
        tag_ru: 'Крем', tag_es: 'Crema', emoji: '🍯',
        ingredients_ru: [
          'Сливочный сыр — 1,3 кг',
          'Греческий йогурт — 1 кг',
          'Сливочное масло — 500 г',
          'Сахар — 400 г',
          'Мед — 300 г',
          'Ваниль — 10 г',
          'Соль — 1 щепотка'
        ],
        ingredients_es: [
          'Queso crema — 1,3 kg',
          'Yogur griego — 1 kg',
          'Mantequilla — 500 g',
          'Azúcar — 400 g',
          'Miel — 300 g',
          'Vainilla — 10 g',
          'Sal — 1 pizca'
        ],
        steps_ru: [
          'Взбить сливочный сыр, после чего добавить размягченное сливочное масло и греческий йогурт.',
          'Постепенно добавить сахар и продолжать взбивать массу.',
          'Добавить мед, ваниль и щепотку соли.',
          'Взбить все до получения однородного, гладкого крема.'
        ],
        steps_es: [
          'Batir el queso crema, luego añadir la mantequilla blanda y el yogur griego.',
          'Añadir poco a poco el azúcar y seguir batiendo la mezcla.',
          'Añadir la miel, la vainilla y una pizca de sal.',
          'Batir todo hasta obtener una crema homogénea y suave.'
        ]
      },
      {
        name_ru: 'Пахлава', name_es: 'Pajlava',
        tag_ru: 'Выпечка', tag_es: 'Pastelería', emoji: '🥮',
        ingredients_ru: [
          'Для теста:',
          'Мука — 650 г',
          'Холодное сливочное масло — 300 г',
          'Йогурт — 400 г',
          'Яичные желтки — 3 шт.',
          'Пищевая сода — 1 ч. л.',
          'Соль — 8 г',
          'Для начинки:',
          'Измельченные грецкие орехи — 300 г',
          'Сахар — 300 г',
          'Изюм — 150 г',
          'Яичные белки — 4 шт.',
          'Соль — 1 щепотка',
          'Для украшения и смазывания:',
          'Греческий йогурт — 50 г',
          'Яичный желток — 1 шт.',
          'Грецкие орехи (целые) — для украшения',
          'Мед — для поливки (по вкусу)'
        ],
        ingredients_es: [
          'Para la masa:',
          'Harina — 650 g',
          'Mantequilla fría — 300 g',
          'Yogur — 400 g',
          'Yemas de huevo — 3 uds',
          'Bicarbonato de sodio — 1 cdta',
          'Sal — 8 g',
          'Para el relleno:',
          'Nueces picadas — 300 g',
          'Azúcar — 300 g',
          'Pasas — 150 g',
          'Claras de huevo — 4 uds',
          'Sal — 1 pizca',
          'Para decorar y pintar:',
          'Yogur griego — 50 g',
          'Yema de huevo — 1 ud',
          'Nueces (enteras) — para decorar',
          'Miel — para rociar (al gusto)'
        ],
        steps_ru: [
          'Тесто: смешать муку и соль. Добавить холодное сливочное масло, натертое на терке, и перетереть все в рассыпчатую крошку.',
          'Тесто: добавить 3 желтка и слегка перемешать.',
          'Тесто: отдельно смешать йогурт с содой, влить в массу и замесить тесто (долго вымешивать не нужно).',
          'Тесто: убрать тесто в холодильник на 10 минут.',
          'Начинка: взбить 4 белка со щепоткой соли и сахаром.',
          'Начинка: аккуратно подмешать измельченные грецкие орехи и изюм.',
          'Начинка: разделить готовую начинку на 3 равные части.',
          'Сборка: разделить охлажденное тесто на 3 равные части и тонко раскатать их.',
          'Сборка: выложить первый пласт теста, распределить часть начинки и повторить слои, чередуя тесто и начинку.',
          'Сборка: нарезать сформированную пахлаву на порционные ромбики.',
          'Сборка: смешать 1 желток с 50 г греческого йогурта и смазать поверхность пахлавы.',
          'Сборка: на каждый кусочек по центру выложить по целому грецкому ореху.',
          'Сборка: выпекать в разогретой духовке при температуре 180°C в течение 30–35 минут.',
          'Сборка: горячую пахлаву сразу после выпечки полить медом.'
        ],
        steps_es: [
          'Masa: mezclar la harina y la sal. Añadir la mantequilla fría rallada y desmenuzar todo hasta obtener una textura de migas.',
          'Masa: añadir 3 yemas y mezclar ligeramente.',
          'Masa: por separado, mezclar el yogur con el bicarbonato, incorporarlo a la masa y amasar (sin trabajar demasiado).',
          'Masa: dejar la masa en el refrigerador durante 10 minutos.',
          'Relleno: batir las 4 claras con una pizca de sal y el azúcar.',
          'Relleno: incorporar con cuidado las nueces picadas y las pasas.',
          'Relleno: dividir el relleno en 3 partes iguales.',
          'Montaje: dividir la masa fría en 3 partes iguales y estirarlas finamente.',
          'Montaje: colocar la primera capa de masa, distribuir parte del relleno y repetir las capas alternando masa y relleno.',
          'Montaje: cortar la pajlava formada en rombos individuales.',
          'Montaje: mezclar 1 yema con 50 g de yogur griego y pintar la superficie de la pajlava.',
          'Montaje: colocar una nuez entera en el centro de cada pieza.',
          'Montaje: hornear en el horno precalentado a 180°C durante 30–35 minutos.',
          'Montaje: rociar la pajlava caliente con miel justo después de hornear.'
        ]
      }
    ]
  },
  cold: {
    bg: 'bg-cold',
    icon: '🥗',
    name_ru: 'Холодный цех',
    name_es: 'Platos Fríos',
    desc_ru: 'Закуски, салаты и холодные блюда',
    desc_es: 'Aperitivos, ensaladas y platos fríos',
    recipes: []
  },
  hot: {
    bg: 'bg-hot',
    icon: '🔥',
    name_ru: 'Горячий цех',
    name_es: 'Platos Calientes',
    desc_ru: 'Супы, рагу и горячие блюда',
    desc_es: 'Sopas, guisos y platos calientes',
    recipes: []
  },
  grill: {
    bg: 'bg-grill',
    icon: '🍖',
    name_ru: 'Шашлык',
    name_es: 'Asados',
    desc_ru: 'Мцвади, маринады и блюда на огне',
    desc_es: 'Mtsvadi, marinadas y cocina al fuego',
    recipes: []
  }
};
