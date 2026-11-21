export const business = {
  "name": "Принтех",
  "slug": "printeh",
  "products": [
    {
      "id": "p1",
      "oldIndex": 0,
      "name": "Флексографическая печать",
      "detail": "Полноцветная печать на рулонных материалах",
      "group": "Рулонная продукция",
      "photo": "",
      "url": "",
      "imageAlt": "Флексографическая печать"
    },
    {
      "id": "p2",
      "oldIndex": 1,
      "name": "Кашированная фольга",
      "detail": "Три или четыре слоя. Материал для масла, мороженого и других продуктов",
      "group": "Рулонная продукция",
      "photo": "",
      "url": "",
      "imageAlt": "Кашированная фольга"
    },
    {
      "id": "p3",
      "oldIndex": 2,
      "name": "Триплекс и буфлен",
      "detail": "Рулонные материалы для упаковки специй, чая, кофе, приправ и семян.",
      "group": "Рулонные материалы",
      "photo": "",
      "url": "https://printehnn.ru/",
      "imageAlt": "Триплекс и буфлен"
    },
    {
      "id": "p4",
      "oldIndex": 3,
      "name": "Бумажные материалы",
      "detail": "Пергамент, эколин и ламинированная бумага",
      "group": "Рулонная продукция",
      "photo": "",
      "url": "",
      "imageAlt": "Бумажные материалы"
    },
    {
      "id": "p5",
      "oldIndex": 4,
      "name": "Резка и перемотка",
      "detail": "Переработка материала из рулона в рулон",
      "group": "Рулонная продукция",
      "photo": "",
      "url": "",
      "imageAlt": "Резка и перемотка"
    },
    {
      "id": "p6",
      "oldIndex": 5,
      "name": "Дизайн и маркировка",
      "detail": "Разработка дизайна упаковки и нанесение кодов «Честный знак»",
      "group": "Рулонная продукция",
      "photo": "",
      "url": "",
      "imageAlt": "Дизайн и маркировка"
    },
    {
      "id": "p7",
      "oldIndex": null,
      "name": "Ламинированная бумага",
      "detail": "Вариант для специй, порционных продуктов и одноразовых комплектующих.",
      "group": "Рулонные материалы",
      "photo": "",
      "url": "https://printehnn.ru/",
      "imageAlt": "Ламинированная бумага"
    },
    {
      "id": "p8",
      "oldIndex": null,
      "name": "Эколин",
      "detail": "Бумажный упаковочный материал для масла, спредов и творожной продукции.",
      "group": "Рулонные материалы",
      "photo": "",
      "url": "https://printehnn.ru/",
      "imageAlt": "Эколин"
    },
    {
      "id": "p9",
      "oldIndex": null,
      "name": "Пергамент",
      "detail": "Используют для фасовки масла и творога. Стоимость материала уточняется по заявке.",
      "group": "Рулонные материалы",
      "photo": "",
      "url": "https://printehnn.ru/",
      "imageAlt": "Пергамент"
    },
    {
      "id": "p10",
      "oldIndex": null,
      "name": "Микспап",
      "detail": "Для порционных соусов, джемов, плавленых сыров и других продуктов. Единицу расчёта уточняют по проекту.",
      "group": "Рулонные материалы",
      "photo": "",
      "url": "https://printehnn.ru/",
      "imageAlt": "Микспап"
    }
  ],
  "tariffs": [
    {
      "id": "t1",
      "product": "p2",
      "productLabel": "Кашированная фольга",
      "label": "Трёх- или четырёхслойная",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 520 ₽/кг",
      "rules": "Стартовая цена на сайте. Состав материала и параметры рулона согласуются.",
      "url": "https://printehnn.ru/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t2",
      "product": "p3",
      "productLabel": "Триплекс и буфлен",
      "label": "Рулонный материал",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 430 ₽/кг",
      "rules": "Стартовая цена на сайте. Уточните стоимость материала и объём партии.",
      "url": "https://printehnn.ru/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t3",
      "product": "p8",
      "productLabel": "Эколин",
      "label": "Упаковочный материал",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 475 ₽/кг",
      "rules": "Стартовая цена на сайте. Итог зависит от согласованной спецификации.",
      "url": "https://printehnn.ru/",
      "amount": null,
      "mode": "reference",
      "apply": false
    },
    {
      "id": "t4",
      "product": "p7",
      "productLabel": "Ламинированная бумага",
      "label": "Для порционной упаковки",
      "quantity": null,
      "displayQuantity": null,
      "price": "от 400 ₽/кг",
      "rules": "Стартовая цена на сайте. Уточните назначение материала при обращении.",
      "url": "https://printehnn.ru/",
      "amount": null,
      "mode": "reference",
      "apply": false
    }
  ],
  "fields": [
    {
      "key": "material",
      "label": "Материал",
      "type": "select",
      "options": [
        "Кашированная фольга",
        "Триплекс или буфлен",
        "Микспап",
        "Пергамент",
        "Эколин",
        "Ламинированная бумага",
        "Нужна консультация"
      ],
      "applies": null
    },
    {
      "key": "width",
      "label": "Ширина полотна, мм",
      "type": "number",
      "applies": null
    },
    {
      "key": "weight",
      "label": "Тираж, кг",
      "type": "number",
      "applies": null
    },
    {
      "key": "marking",
      "label": "Маркировка «Честный знак»",
      "type": "select",
      "options": [
        "Нужна",
        "Не требуется",
        "Уточню с менеджером"
      ],
      "applies": null
    },
    {
      "key": "deadline",
      "label": "Желаемая дата поставки",
      "type": "date",
      "applies": null
    }
  ],
  "fileLabel": "Макет или техническое задание"
};
