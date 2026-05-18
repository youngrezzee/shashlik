const recipes = {
  pork: {
    name: "свинины",
    nutrition: { kcal: 259, protein: 16, fat: 21.6, carbs: 0 },
    salt: 18,
    spices: 7,
    onion: 0.5,
    base: 120,
    baseName: "минеральная вода или айран",
    marinate: [12, 18],
    heat: "средне-сильный жар, 14-18 минут"
  },
  chicken: {
    name: "курицы",
    nutrition: { kcal: 190, protein: 18.2, fat: 12, carbs: 0 },
    salt: 16,
    spices: 6,
    onion: 0.35,
    base: 90,
    baseName: "кефир или йогурт",
    marinate: [4, 10],
    heat: "средний жар, 12-16 минут"
  },
  turkey: {
    name: "индейки",
    nutrition: { kcal: 144, protein: 21.6, fat: 5.6, carbs: 0 },
    salt: 16,
    spices: 6,
    onion: 0.3,
    base: 95,
    baseName: "кефир или йогурт",
    marinate: [6, 12],
    heat: "средний жар, 14-18 минут"
  },
  beef: {
    name: "говядины",
    nutrition: { kcal: 218, protein: 18.6, fat: 16, carbs: 0 },
    salt: 19,
    spices: 8,
    onion: 0.45,
    base: 110,
    baseName: "минеральная вода",
    marinate: [18, 30],
    heat: "сильный жар, затем мягче, 16-22 минуты"
  },
  lamb: {
    name: "баранины",
    nutrition: { kcal: 209, protein: 15.6, fat: 16.3, carbs: 0 },
    salt: 18,
    spices: 8,
    onion: 0.55,
    base: 80,
    baseName: "гранатовый сок",
    marinate: [10, 18],
    heat: "сильный жар, 12-18 минут"
  },
  salmon: {
    name: "лосося",
    type: "fish",
    nutrition: { kcal: 208, protein: 20, fat: 13, carbs: 0 },
    salt: 14,
    spices: 5,
    onion: 0,
    base: 45,
    baseName: "лимонный сок и масло",
    marinate: [0.5, 2],
    heat: "умеренный жар, 7-10 минут"
  },
  trout: {
    name: "форели",
    type: "fish",
    nutrition: { kcal: 148, protein: 20.5, fat: 6.6, carbs: 0 },
    salt: 14,
    spices: 5,
    onion: 0,
    base: 45,
    baseName: "лимонный сок и масло",
    marinate: [0.5, 2],
    heat: "умеренный жар, 7-10 минут"
  },
  cod: {
    name: "трески",
    type: "fish",
    nutrition: { kcal: 82, protein: 17.9, fat: 0.7, carbs: 0 },
    salt: 13,
    spices: 4,
    onion: 0,
    base: 40,
    baseName: "лимонный сок и масло",
    marinate: [0.3, 1.5],
    heat: "мягкий жар, 5-8 минут"
  },
  mackerel: {
    name: "скумбрии",
    type: "fish",
    nutrition: { kcal: 191, protein: 18, fat: 13.2, carbs: 0 },
    salt: 14,
    spices: 6,
    onion: 0,
    base: 45,
    baseName: "лимонный сок и масло",
    marinate: [0.5, 2],
    heat: "умеренный жар, 8-12 минут"
  },
  pikeperch: {
    name: "судака",
    type: "fish",
    nutrition: { kcal: 84, protein: 18.4, fat: 1.1, carbs: 0 },
    salt: 13,
    spices: 4,
    onion: 0,
    base: 40,
    baseName: "лимонный сок и масло",
    marinate: [0.3, 1.5],
    heat: "мягкий жар, 5-8 минут"
  }
};

const styles = {
  custom: {
    label: "собственный маринад",
    extras: []
  },
  classic: {
    label: "классический маринад",
    extras: ["уксус или лимон по желанию"],
    presetSpices: ["black-pepper", "bay-leaf", "allspice", "coriander"]
  },
  kefir: {
    label: "кефирный маринад",
    extras: ["кефир", "укроп или кинза"],
    presetSpices: ["garlic", "black-pepper", "coriander", "sweet-paprika"]
  },
  spicy: {
    label: "острый маринад",
    extras: ["аджика"],
    presetSpices: ["smoked-paprika", "chili-flakes", "cayenne", "garlic", "coriander"]
  },
  dry: {
    label: "сухой руб",
    extras: ["масло для обмазки"],
    presetSpices: ["sweet-paprika", "smoked-paprika", "coriander", "garlic", "black-pepper"],
    baseName: "масло для сухого руба",
    basePerKg: 35,
    oilPerKg: 35
  },
  "fish-lemon": {
    label: "лимонно-травяной маринад",
    extras: ["лимон", "укроп", "петрушка", "оливковое масло"],
    presetSpices: ["white-pepper", "lemon-pepper", "dill-seed", "oregano"],
    baseName: "лимонный сок и оливковое масло",
    basePerKg: 45,
    oilPerKg: 20,
    nutrition: "lemonOil"
  },
  "fish-soy": {
    label: "соево-имбирный маринад",
    extras: ["соевый соус", "имбирь", "чеснок", "кунжутное масло"],
    presetSpices: ["ginger", "garlic", "sesame", "white-pepper"],
    baseName: "соевый соус с имбирём",
    basePerKg: 55,
    oilPerKg: 15,
    nutrition: "soyGinger"
  },
  "fish-mustard": {
    label: "горчично-медовый маринад",
    extras: ["дижонская горчица", "мёд", "лимонный сок"],
    presetSpices: ["mustard", "white-pepper", "lemon-pepper", "dill-seed"],
    baseName: "горчица, мёд и лимон",
    basePerKg: 40,
    oilPerKg: 15,
    nutrition: "mustardHoney"
  },
  "fish-dry": {
    label: "сухой рыбный руб",
    extras: ["лимонная цедра", "немного масла"],
    presetSpices: ["white-pepper", "lemon-pepper", "dill-seed", "thyme"],
    baseName: "масло для рыбного руба",
    basePerKg: 25,
    oilPerKg: 25,
    nutrition: "oil"
  }
};

const cutCatalog = {
  pork: [
    { value: "pork-neck", label: "Шея", note: "самый сочный вариант", nutrition: { kcal: 267, protein: 16, fat: 22, carbs: 0 } },
    { value: "pork-shoulder", label: "Лопатка", note: "мягкая, если нарезать средне", nutrition: { kcal: 257, protein: 16, fat: 21, carbs: 0 } },
    { value: "pork-tenderloin", label: "Вырезка", note: "не передерживать на жаре", nutrition: { kcal: 143, protein: 19.4, fat: 7.1, carbs: 0 } },
    { value: "pork-loin", label: "Корейка без кости", note: "лучше с маслом в маринаде", nutrition: { kcal: 242, protein: 17, fat: 19, carbs: 0 } }
  ],
  chicken: [
    { value: "chicken-thigh", label: "Филе бедра", note: "лучше всего для шашлыка", nutrition: { kcal: 185, protein: 18.5, fat: 11.8, carbs: 0 } },
    { value: "chicken-drumstick", label: "Голень", note: "жарить чуть дольше", nutrition: { kcal: 172, protein: 18, fat: 10.5, carbs: 0 } },
    { value: "chicken-wing", label: "Крылья", note: "быстро подрумяниваются", nutrition: { kcal: 222, protein: 18.3, fat: 16, carbs: 0 } },
    { value: "chicken-breast", label: "Грудка", note: "мариновать мягко и не сушить", nutrition: { kcal: 113, protein: 23.6, fat: 1.9, carbs: 0 } }
  ],
  turkey: [
    { value: "turkey-thigh", label: "Филе бедра", note: "самый сочный вариант", nutrition: { kcal: 144, protein: 19.5, fat: 6.8, carbs: 0 } },
    { value: "turkey-breast", label: "Грудка", note: "лучше кефирный или масляный маринад", nutrition: { kcal: 104, protein: 23, fat: 1.5, carbs: 0 } },
    { value: "turkey-tenderloin", label: "Малая вырезка", note: "не передерживать", nutrition: { kcal: 110, protein: 24, fat: 1.6, carbs: 0 } }
  ],
  beef: [
    { value: "beef-tenderloin", label: "Вырезка", note: "мягкая, быстро жарится", nutrition: { kcal: 158, protein: 20.5, fat: 8, carbs: 0 } },
    { value: "beef-ribeye", label: "Толстый край", note: "сочный вариант с жирком", nutrition: { kcal: 260, protein: 18.8, fat: 20.5, carbs: 0 } },
    { value: "beef-striploin", label: "Тонкий край", note: "нарезать поперёк волокон", nutrition: { kcal: 214, protein: 20, fat: 14.5, carbs: 0 } },
    { value: "beef-sirloin", label: "Оковалок", note: "мариновать дольше", nutrition: { kcal: 187, protein: 20.2, fat: 11.5, carbs: 0 } }
  ],
  lamb: [
    { value: "lamb-leg", label: "Задняя нога", note: "классика для баранины", nutrition: { kcal: 209, protein: 18, fat: 15, carbs: 0 } },
    { value: "lamb-shoulder", label: "Лопатка", note: "сочная и ароматная", nutrition: { kcal: 234, protein: 17.5, fat: 18, carbs: 0 } },
    { value: "lamb-loin", label: "Корейка", note: "быстро жарится", nutrition: { kcal: 287, protein: 16.5, fat: 24, carbs: 0 } },
    { value: "lamb-ribs", label: "Рёбрышки", note: "хороши на решётке", nutrition: { kcal: 294, protein: 16, fat: 25, carbs: 0 } }
  ],
  salmon: [
    { value: "salmon-steak", label: "Стейк", note: "держит форму на решётке", nutrition: { kcal: 208, protein: 20, fat: 13, carbs: 0 } },
    { value: "salmon-fillet", label: "Филе на коже", note: "жарить кожей вниз", nutrition: { kcal: 206, protein: 20.4, fat: 13.4, carbs: 0 } }
  ],
  trout: [
    { value: "trout-steak", label: "Стейк", note: "удобно жарить на решётке", nutrition: { kcal: 148, protein: 20.5, fat: 6.6, carbs: 0 } },
    { value: "trout-fillet", label: "Филе на коже", note: "не пересушивать", nutrition: { kcal: 141, protein: 20, fat: 6, carbs: 0 } }
  ],
  cod: [
    { value: "cod-loin", label: "Спинка", note: "плотнее обычного филе", nutrition: { kcal: 82, protein: 18, fat: 0.7, carbs: 0 } },
    { value: "cod-fillet", label: "Филе", note: "лучше на решётке или в фольге", nutrition: { kcal: 78, protein: 17.5, fat: 0.6, carbs: 0 } }
  ],
  mackerel: [
    { value: "mackerel-whole", label: "Целая тушка", note: "хороша на решётке", nutrition: { kcal: 191, protein: 18, fat: 13.2, carbs: 0 } },
    { value: "mackerel-steak", label: "Стейки", note: "быстро маринуются", nutrition: { kcal: 191, protein: 18, fat: 13.2, carbs: 0 } }
  ],
  pikeperch: [
    { value: "pikeperch-fillet", label: "Филе", note: "нежное, нужен мягкий жар", nutrition: { kcal: 84, protein: 18.4, fat: 1.1, carbs: 0 } },
    { value: "pikeperch-steak", label: "Стейки", note: "лучше держат форму", nutrition: { kcal: 84, protein: 18.4, fat: 1.1, carbs: 0 } }
  ]
};

const spiceCatalog = [
  {
    category: "Перцы и паприка",
    items: [
      ["black-pepper", "Чёрный перец", 1.2],
      ["white-pepper", "Белый перец", 0.8],
      ["pink-pepper", "Розовый перец", 0.7],
      ["allspice", "Душистый перец", 0.7],
      ["sweet-paprika", "Сладкая паприка", 2.5],
      ["smoked-paprika", "Копчёная паприка", 2],
      ["hot-paprika", "Острая паприка", 1],
      ["chili-flakes", "Хлопья чили", 0.6],
      ["cayenne", "Кайенский перец", 0.35]
    ]
  },
  {
    category: "Восточная база",
    items: [
      ["coriander", "Кориандр", 2],
      ["cumin", "Зира", 1.4],
      ["turmeric", "Куркума", 1],
      ["fenugreek", "Пажитник", 0.8],
      ["sumac", "Сумах", 1.8],
      ["barberry", "Барбарис", 1.2],
      ["saffron", "Шафран", 0.05],
      ["cardamom", "Кардамон", 0.25],
      ["cinnamon", "Корица", 0.25],
      ["clove", "Гвоздика", 0.12],
      ["nutmeg", "Мускатный орех", 0.18]
    ]
  },
  {
    category: "Травы",
    items: [
      ["oregano", "Орегано", 1],
      ["thyme", "Тимьян", 0.9],
      ["rosemary", "Розмарин", 0.8],
      ["basil", "Базилик", 0.8],
      ["marjoram", "Майоран", 0.7],
      ["tarragon", "Эстрагон", 0.7],
      ["savory", "Чабер", 0.7],
      ["mint", "Мята сушёная", 0.45],
      ["dill-seed", "Семена укропа", 0.7]
    ]
  },
  {
    category: "Овощная сухая база",
    items: [
      ["garlic", "Сушёный чеснок", 2],
      ["onion-powder", "Луковый порошок", 1.7],
      ["mustard", "Горчичный порошок", 1.2],
      ["celery", "Сельдерей сушёный", 0.8],
      ["tomato", "Томатный порошок", 2],
      ["ginger", "Имбирь", 0.7],
      ["lemon-pepper", "Лимонный перец", 1.5]
    ]
  },
  {
    category: "Смеси",
    items: [
      ["khmeli", "Хмели-сунели", 2.2],
      ["adjika-dry", "Сухая аджика", 2],
      ["curry", "Карри", 1.5],
      ["garam", "Гарам масала", 1.2],
      ["tandoori", "Тандури масала", 2],
      ["provencal", "Прованские травы", 1.2]
    ]
  },
  {
    category: "Ароматы и акценты",
    items: [
      ["bay-leaf", "Лавровый лист", 0.25],
      ["juniper", "Можжевельник", 0.35],
      ["sesame", "Кунжут", 2],
      ["fennel", "Фенхель", 0.7],
      ["star-anise", "Бадьян", 0.12],
      ["anise", "Анис", 0.25]
    ]
  }
];

const coreSpices = ["black-pepper", "sweet-paprika", "coriander", "garlic", "onion-powder"];

const ingredientNutrition = {
  onion: { kcal: 40, protein: 1.1, fat: 0.1, carbs: 9.3 },
  oil: { kcal: 899, protein: 0, fat: 99.9, carbs: 0 },
  kefir: { kcal: 53, protein: 3, fat: 2.5, carbs: 4 },
  yogurt: { kcal: 61, protein: 3.5, fat: 3.3, carbs: 4.7 },
  ayran: { kcal: 27, protein: 1.1, fat: 1.5, carbs: 2.5 },
  mineral: { kcal: 0, protein: 0, fat: 0, carbs: 0 },
  pomegranate: { kcal: 64, protein: 0.3, fat: 0, carbs: 14.5 },
  lemonOil: { kcal: 300, protein: 0, fat: 30, carbs: 6 },
  soyGinger: { kcal: 70, protein: 6, fat: 1, carbs: 8 },
  mustardHoney: { kcal: 180, protein: 4, fat: 5, carbs: 28 },
  spices: { kcal: 280, protein: 10, fat: 9, carbs: 40 }
};

const heroSlides = document.querySelectorAll(".hero__media");
const form = document.querySelector("#plannerForm");
const quickButtons = document.querySelectorAll(".quick");
const cookDate = document.querySelector("#cookDate");
const meatSelect = document.querySelector("#meat");
const cutSelect = document.querySelector("#cut");
const styleSelect = document.querySelector("#style");
const copyButton = document.querySelector("#copyButton");
const spiceOptions = document.querySelector("#spiceOptions");
const selectCoreSpices = document.querySelector("#selectCoreSpices");
const clearSpices = document.querySelector("#clearSpices");

const output = {
  headline: document.querySelector("#headline"),
  daysLeft: document.querySelector("#daysLeft"),
  marinateWindow: document.querySelector("#marinateWindow"),
  startTime: document.querySelector("#startTime"),
  salt: document.querySelector("#salt"),
  spices: document.querySelector("#spices"),
  onion: document.querySelector("#onion"),
  marinade: document.querySelector("#marinade"),
  calories: document.querySelector("#calories"),
  protein: document.querySelector("#protein"),
  fat: document.querySelector("#fat"),
  carbs: document.querySelector("#carbs"),
  nutritionNote: document.querySelector("#nutritionNote"),
  warningMessage: document.querySelector("#warningMessage"),
  shoppingList: document.querySelector("#shoppingList"),
  stepsList: document.querySelector("#stepsList")
};

function dateOnly(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(days) {
  const date = dateOnly(new Date());
  date.setDate(date.getDate() + days);
  return date;
}

function toInputDate(date) {
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    weekday: "short"
  }).format(date);
}

function pluralDays(value) {
  const abs = Math.abs(value);
  if (abs % 10 === 1 && abs % 100 !== 11) return "день";
  if ([2, 3, 4].includes(abs % 10) && ![12, 13, 14].includes(abs % 100)) return "дня";
  return "дней";
}

function round(value, digits = 0) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function formatWeight(value) {
  return value >= 1 ? `${round(value, 1)} кг` : `${Math.round(value * 1000)} г`;
}

function formatMl(value) {
  return value >= 1000 ? `${round(value / 1000, 1)} л` : `${Math.round(value)} мл`;
}

function addNutrition(total, nutrition, grams) {
  const factor = grams / 100;
  total.kcal += nutrition.kcal * factor;
  total.protein += nutrition.protein * factor;
  total.fat += nutrition.fat * factor;
  total.carbs += nutrition.carbs * factor;
}

function getBaseNutrition(styleKey, recipe) {
  const style = styles[styleKey];
  if (style?.nutrition) return ingredientNutrition[style.nutrition];
  if (styleKey === "kefir") return ingredientNutrition.kefir;
  if (recipe === recipes.lamb) return ingredientNutrition.pomegranate;
  if (recipe.type === "fish") return ingredientNutrition.lemonOil;
  if (recipe.baseName.includes("айран")) return ingredientNutrition.ayran;
  return ingredientNutrition.mineral;
}

function calculateNutrition({ recipe, cut, styleKey, weight, onion, base, oil, spices }) {
  const total = { kcal: 0, protein: 0, fat: 0, carbs: 0 };
  addNutrition(total, cut?.nutrition ?? recipe.nutrition, weight * 1000);
  addNutrition(total, ingredientNutrition.onion, onion * 1000);
  addNutrition(total, ingredientNutrition.oil, oil);
  addNutrition(total, getBaseNutrition(styleKey, recipe), base);
  addNutrition(total, ingredientNutrition.spices, spices);
  return total;
}

function renderList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.append(li);
  });
}

function renderTooMuchWarning() {
  output.headline.textContent = "Слишком много шашлыка";
  output.warningMessage.hidden = false;
  output.daysLeft.textContent = "не считаю";
  output.marinateWindow.textContent = "не считаю";
  output.startTime.textContent = "не считаю";
  output.salt.textContent = "0 г";
  output.spices.textContent = "0 г";
  output.onion.textContent = "0 г";
  output.marinade.textContent = "0 мл";
  output.calories.textContent = "0 ккал";
  output.protein.textContent = "0 г";
  output.fat.textContent = "0 г";
  output.carbs.textContent = "0 г";
  output.nutritionNote.textContent = "расчет остановлен";
  renderList(output.shoppingList, []);
  renderList(output.stepsList, []);
}

function clearSpiceChecks() {
  form.querySelectorAll('input[name="spice"]').forEach((input) => {
    input.checked = false;
    input.disabled = false;
    input.closest(".spice-check")?.classList.remove("is-locked");
  });
}

function applyStylePresetSpices() {
  const style = styles[styleSelect.value];
  const preset = new Set(style?.presetSpices ?? []);

  form.querySelectorAll('input[name="spice"]').forEach((input) => {
    const locked = styleSelect.value !== "custom" && preset.has(input.value);
    input.checked = locked;
    input.disabled = locked;
    input.closest(".spice-check")?.classList.toggle("is-locked", locked);
  });
}

function isStyleAllowedForRecipe(styleKey, recipe) {
  const option = styleSelect.querySelector(`option[value="${styleKey}"]`);
  if (!option) return false;
  const kind = option.dataset.kind;
  if (kind === "all") return true;
  return recipe.type === "fish" ? kind === "fish" : kind === "meat";
}

function updateStyleOptions({ resetInvalid = true } = {}) {
  const recipe = recipes[meatSelect.value];
  const isFish = recipe.type === "fish";

  Array.from(styleSelect.options).forEach((option) => {
    const kind = option.dataset.kind;
    const visible = kind === "all" || (isFish ? kind === "fish" : kind === "meat");
    option.hidden = !visible;
    option.disabled = !visible;
  });

  if (resetInvalid && !isStyleAllowedForRecipe(styleSelect.value, recipe)) {
    styleSelect.value = isFish ? "fish-lemon" : "classic";
    applyStylePresetSpices();
  }
}

function updateCutOptions() {
  const cuts = cutCatalog[meatSelect.value] ?? [];
  const current = cutSelect.value;
  cutSelect.innerHTML = "";

  cuts.forEach((cut) => {
    const option = document.createElement("option");
    option.value = cut.value;
    option.textContent = cut.label;
    option.dataset.note = cut.note;
    cutSelect.append(option);
  });

  if (cuts.some((cut) => cut.value === current)) {
    cutSelect.value = current;
  }
}

function getSelectedCut() {
  const cuts = cutCatalog[meatSelect.value] ?? [];
  return cuts.find((cut) => cut.value === cutSelect.value) ?? cuts[0];
}

function startHeroSlider() {
  if (heroSlides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let activeSlide = 0;
  setInterval(() => {
    heroSlides[activeSlide].classList.remove("is-active");
    activeSlide = (activeSlide + 1) % heroSlides.length;
    heroSlides[activeSlide].classList.add("is-active");
  }, 6500);
}

function flattenSpices() {
  return spiceCatalog.flatMap((group) =>
    group.items.map(([id, name, grams]) => ({
      id,
      name,
      grams,
      category: group.category
    }))
  );
}

function renderSpiceOptions() {
  spiceOptions.innerHTML = "";
  spiceCatalog.forEach((group) => {
    const section = document.createElement("section");
    section.className = "spice-category";

    const title = document.createElement("h4");
    title.textContent = group.category;

    const list = document.createElement("div");
    list.className = "spice-list";

    group.items.forEach(([id, name, grams]) => {
      const label = document.createElement("label");
      label.className = "spice-check";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = "spice";
      input.value = id;
      input.checked = false;

      const text = document.createElement("span");
      text.textContent = name;

      const dose = document.createElement("span");
      dose.className = "spice-dose";
      dose.textContent = `${grams} г/кг`;

      label.append(input, text, dose);
      list.append(label);
    });

    section.append(title, list);
    spiceOptions.append(section);
  });
}

function getSelectedSpices(weight) {
  const selected = new Set(
    Array.from(form.querySelectorAll('input[name="spice"]:checked')).map((input) => input.value)
  );
  return flattenSpices()
    .filter((spice) => selected.has(spice.id))
    .map((spice) => ({
      ...spice,
      total: spice.grams * weight
    }));
}

function getDaysLeft(targetDate) {
  const today = dateOnly(new Date());
  const target = dateOnly(targetDate);
  return Math.round((target - today) / 86400000);
}

function getStartText(daysLeft, hours) {
  if (daysLeft < 0) return "дата уже прошла";
  if (daysLeft === 0) return hours <= 2 ? "сейчас, без долгого маринада" : "с утра или днем";
  if (daysLeft === 1) return "сегодня вечером";
  if (daysLeft === 2) return "завтра вечером";
  return `за ${Math.ceil(hours / 24)} ${pluralDays(Math.ceil(hours / 24))} до готовки`;
}

function buildPlan(daysLeft, recipe, style, dateLabel) {
  const [minHours, maxHours] = recipe.marinate;
  const start = getStartText(daysLeft, maxHours);
  const plan = [
    `Купить продукты и нарезать мясо ровными кусками за ${daysLeft > 1 ? "день до маринования" : "пару часов до маринования"}.`,
    `Замариновать: ${start}; оптимальное окно ${minHours}-${maxHours} ч.`,
    `В день готовки (${dateLabel}) достать мясо за 40-60 минут до жара.`,
    `Жарить: ${recipe.heat}. Солёный маринад не выливать на угли.`
  ];

  if (style === "dry") {
    plan[1] = `Натереть специями и маслом: ${start}; держать закрытым ${minHours}-${maxHours} ч.`;
  }

  if (style === "fish-dry") {
    plan[1] = `Натереть рыбу сухими специями и небольшим количеством масла: ${start}; держать ${minHours}-${maxHours} ч.`;
  }

  if (style === "custom") {
    plan[1] = `Собрать свой набор специй, смешать с солью и маслом, затем замариновать: ${start}; окно ${minHours}-${maxHours} ч.`;
  }

  if (recipe.type === "fish" && style !== "fish-dry") {
    plan[1] = "Мариновать рыбу коротко: 30-120 минут перед жаркой, иначе кислота начнет менять текстуру.";
  }

  return plan;
}

function calculate() {
  const data = new FormData(form);
  const meat = data.get("meat");
  const styleKey = data.get("style");
  const rawWeight = Number(data.get("weight"));
  if (rawWeight >= 300) {
    renderTooMuchWarning();
    return {
      headline: output.headline.textContent,
      dateLabel: "",
      style: "",
      shopping: [],
      plan: []
    };
  }

  output.warningMessage.hidden = true;

  const weight = Math.max(0.3, rawWeight || 0.3);
  const targetDate = cookDate.value ? new Date(`${cookDate.value}T00:00:00`) : addDays(1);
  const recipe = recipes[meat];
  const cut = getSelectedCut();
  const style = styles[styleKey];
  const daysLeft = getDaysLeft(targetDate);
  const selectedSpices = getSelectedSpices(weight);

  const salt = recipe.salt * weight;
  const spices = selectedSpices.reduce((total, spice) => total + spice.total, 0);
  const onion = recipe.onion * weight;
  const base = (style.basePerKg ?? (styleKey === "custom" ? 35 : recipe.base)) * weight;
  const oil = (style.oilPerKg ?? 25) * weight;
  const dateLabel = formatDate(targetDate);
  const dayText = daysLeft === 0 ? "сегодня" : daysLeft > 0 ? `${daysLeft} ${pluralDays(daysLeft)}` : "в прошлом";

  output.headline.textContent = `${round(weight, 1)} кг ${recipe.name}${cut ? `, ${cut.label.toLowerCase()}` : ""}`;
  output.daysLeft.textContent = dayText;
  output.marinateWindow.textContent = `${recipe.marinate[0]}-${recipe.marinate[1]} часов`;
  output.startTime.textContent = getStartText(daysLeft, recipe.marinate[1]);
  output.salt.textContent = `${Math.round(salt)} г`;
  output.spices.textContent = `${Math.round(spices)} г`;
  output.onion.textContent = onion > 0 ? formatWeight(onion) : "не нужен";
  output.marinade.textContent = formatMl(base);

  const nutrition = calculateNutrition({ recipe, cut, styleKey, weight, onion, base, oil, spices });
  output.calories.textContent = `${Math.round(nutrition.kcal)} ккал`;
  output.protein.textContent = `${Math.round(nutrition.protein)} г`;
  output.fat.textContent = `${Math.round(nutrition.fat)} г`;
  output.carbs.textContent = `${Math.round(nutrition.carbs)} г`;
  output.nutritionNote.textContent = `примерно на ${round(weight, 1)} кг мяса с маринадом`;

  const selectedSpiceLines = selectedSpices.map((spice) => `${Math.max(1, Math.round(spice.total))} г: ${spice.name}`);
  const spiceLines = [...style.extras, ...selectedSpiceLines];
  const baseLine = styleKey === "custom"
      ? "масло, чтобы связать выбранные специи"
      : style.baseName ?? recipe.baseName;

  if (styleKey === "custom" && spiceLines.length === 0) {
    spiceLines.push("специи по вкусу: выберите чекбоксы в модуле специй");
  }

  const shopping = [
    `${formatWeight(weight)} ${recipe.name}${cut ? `: ${cut.label.toLowerCase()}` : ""}`,
    `${Math.round(salt)} г соли`,
    ...(onion > 0 ? [`${formatWeight(onion)} лука`] : []),
    `${formatMl(base)}: ${baseLine}`,
    `${formatMl(oil)} растительного масла`,
    ...spiceLines,
    "уголь, розжиг, шампуры или решётка",
    "овощи, зелень, лаваш и соус"
  ];

  renderList(output.shoppingList, shopping);
  const plan = buildPlan(daysLeft, recipe, styleKey, dateLabel);
  if (cut?.note) {
    plan.splice(1, 0, `Часть: ${cut.label.toLowerCase()} — ${cut.note}.`);
  }
  renderList(output.stepsList, plan);

  return {
    headline: output.headline.textContent,
    dateLabel,
    style: style.label,
    shopping,
    plan: Array.from(output.stepsList.children).map((item) => item.textContent)
  };
}

function setQuickDate(offset, activeButton) {
  cookDate.value = toInputDate(addDays(offset));
  quickButtons.forEach((button) => button.classList.toggle("active", button === activeButton));
  calculate();
}

quickButtons.forEach((button) => {
  button.addEventListener("click", () => setQuickDate(Number(button.dataset.offset), button));
});

selectCoreSpices.addEventListener("click", () => {
  if (styleSelect.value !== "custom") {
    clearSpiceChecks();
    applyStylePresetSpices();
    calculate();
    return;
  }

  form.querySelectorAll('input[name="spice"]').forEach((input) => {
    input.checked = coreSpices.includes(input.value);
  });
  calculate();
});

clearSpices.addEventListener("click", () => {
  clearSpiceChecks();
  if (styleSelect.value !== "custom") {
    applyStylePresetSpices();
  }
  calculate();
});

meatSelect.addEventListener("change", () => {
  updateCutOptions();
  updateStyleOptions();
  quickButtons.forEach((button) => button.classList.remove("active"));
  calculate();
});

cutSelect.addEventListener("change", () => {
  quickButtons.forEach((button) => button.classList.remove("active"));
  calculate();
});

styleSelect.addEventListener("change", () => {
  clearSpiceChecks();
  if (styleSelect.value !== "custom") applyStylePresetSpices();
  calculate();
});

form.addEventListener("input", (event) => {
  if (event.target === meatSelect || event.target === cutSelect || event.target === styleSelect) return;
  quickButtons.forEach((button) => button.classList.remove("active"));
  calculate();
});

copyButton.addEventListener("click", async () => {
  const result = calculate();
  const text = [
    `План: ${result.headline}`,
    `Дата: ${result.dateLabel}`,
    `Маринад: ${result.style}`,
    `КБЖУ: ${output.calories.textContent}, белки ${output.protein.textContent}, жиры ${output.fat.textContent}, углеводы ${output.carbs.textContent}`,
    "",
    "Покупки:",
    ...result.shopping.map((item) => `- ${item}`),
    "",
    "План действий:",
    ...result.plan.map((item, index) => `${index + 1}. ${item}`)
  ].join("\n");

  try {
    await navigator.clipboard.writeText(text);
    copyButton.title = "Скопировано";
    setTimeout(() => {
      copyButton.title = "Скопировать список";
    }, 1200);
  } catch {
    window.prompt("Скопируйте список:", text);
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      // The app still works online if registration is blocked by the browser.
    });
  });
}

renderSpiceOptions();
updateCutOptions();
updateStyleOptions({ resetInvalid: false });
applyStylePresetSpices();
startHeroSlider();
cookDate.value = toInputDate(addDays(1));
calculate();
