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
    onion: 0.15,
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
    onion: 0.15,
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
    onion: 0.12,
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
    onion: 0.15,
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
    onion: 0.12,
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
    extras: ["лавровый лист", "чёрный перец", "уксус или лимон по желанию"]
  },
  kefir: {
    label: "кефирный маринад",
    extras: ["кефир", "чеснок", "укроп или кинза"]
  },
  spicy: {
    label: "острый маринад",
    extras: ["аджика", "копчёная паприка", "перец чили"]
  },
  dry: {
    label: "сухой руб",
    extras: ["паприка", "кориандр", "масло для обмазки"]
  }
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
  spices: { kcal: 280, protein: 10, fat: 9, carbs: 40 }
};

const heroSlides = document.querySelectorAll(".hero__media");
const form = document.querySelector("#plannerForm");
const quickButtons = document.querySelectorAll(".quick");
const cookDate = document.querySelector("#cookDate");
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
  if (styleKey === "kefir") return ingredientNutrition.kefir;
  if (recipe === recipes.lamb) return ingredientNutrition.pomegranate;
  if (recipe.type === "fish") return ingredientNutrition.lemonOil;
  if (recipe.baseName.includes("айран")) return ingredientNutrition.ayran;
  return ingredientNutrition.mineral;
}

function calculateNutrition({ recipe, styleKey, weight, onion, base, oil, spices }) {
  const total = { kcal: 0, protein: 0, fat: 0, carbs: 0 };
  addNutrition(total, recipe.nutrition, weight * 1000);
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
      input.checked = coreSpices.includes(id);

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
  const selected = new Set(new FormData(form).getAll("spice"));
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

  if (style === "custom") {
    plan[1] = `Собрать свой набор специй, смешать с солью и маслом, затем замариновать: ${start}; окно ${minHours}-${maxHours} ч.`;
  }

  if (recipe.type === "fish") {
    plan[1] = "Мариновать рыбу коротко: 30-120 минут перед жаркой, иначе кислота начнет менять текстуру.";
  }

  return plan;
}

function calculate() {
  const data = new FormData(form);
  const meat = data.get("meat");
  const styleKey = data.get("style");
  const weight = Math.max(0.3, Number(data.get("weight")) || 0.3);
  const targetDate = cookDate.value ? new Date(`${cookDate.value}T00:00:00`) : addDays(1);
  const recipe = recipes[meat];
  const style = styles[styleKey];
  const daysLeft = getDaysLeft(targetDate);
  const selectedSpices = getSelectedSpices(weight);

  const salt = recipe.salt * weight;
  const baseSpices = styleKey === "custom" ? 0 : recipe.spices * weight;
  const extraSpices = selectedSpices.reduce((total, spice) => total + spice.total, 0);
  const spices = baseSpices + extraSpices;
  const onion = recipe.onion * weight;
  const base = styleKey === "dry" || styleKey === "custom" ? 35 * weight : recipe.base * weight;
  const oil = styleKey === "dry" ? 35 * weight : 25 * weight;
  const dateLabel = formatDate(targetDate);
  const dayText = daysLeft === 0 ? "сегодня" : daysLeft > 0 ? `${daysLeft} ${pluralDays(daysLeft)}` : "в прошлом";

  output.headline.textContent = `${round(weight, 1)} кг ${recipe.name}`;
  output.daysLeft.textContent = dayText;
  output.marinateWindow.textContent = `${recipe.marinate[0]}-${recipe.marinate[1]} часов`;
  output.startTime.textContent = getStartText(daysLeft, recipe.marinate[1]);
  output.salt.textContent = `${Math.round(salt)} г`;
  output.spices.textContent = `${Math.round(spices)} г`;
  output.onion.textContent = formatWeight(onion);
  output.marinade.textContent = formatMl(base);

  const nutrition = calculateNutrition({ recipe, styleKey, weight, onion, base, oil, spices });
  output.calories.textContent = `${Math.round(nutrition.kcal)} ккал`;
  output.protein.textContent = `${Math.round(nutrition.protein)} г`;
  output.fat.textContent = `${Math.round(nutrition.fat)} г`;
  output.carbs.textContent = `${Math.round(nutrition.carbs)} г`;
  output.nutritionNote.textContent = `примерно на ${round(weight, 1)} кг мяса с маринадом`;

  const selectedSpiceLines = selectedSpices.map((spice) => `${Math.max(1, Math.round(spice.total))} г: ${spice.name}`);
  const spiceLines = styleKey === "custom"
    ? selectedSpiceLines
    : [`${Math.round(baseSpices)} г базовой смеси специй`, ...style.extras, ...selectedSpiceLines];
  const baseLine = styleKey === "dry"
    ? "масло для сухого руба"
    : styleKey === "custom"
      ? "масло, чтобы связать выбранные специи"
      : recipe.baseName;

  if (styleKey === "custom" && spiceLines.length === 0) {
    spiceLines.push("специи по вкусу: выберите чекбоксы в модуле специй");
  }

  const shopping = [
    `${formatWeight(weight)} ${recipe.name}`,
    `${Math.round(salt)} г соли`,
    `${formatWeight(onion)} лука`,
    `${formatMl(base)}: ${baseLine}`,
    `${formatMl(oil)} растительного масла`,
    ...spiceLines,
    "уголь, розжиг, шампуры или решётка",
    "овощи, зелень, лаваш и соус"
  ];

  renderList(output.shoppingList, shopping);
  renderList(output.stepsList, buildPlan(daysLeft, recipe, styleKey, dateLabel));

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
  form.querySelectorAll('input[name="spice"]').forEach((input) => {
    input.checked = coreSpices.includes(input.value);
  });
  calculate();
});

clearSpices.addEventListener("click", () => {
  form.querySelectorAll('input[name="spice"]').forEach((input) => {
    input.checked = false;
  });
  calculate();
});

form.addEventListener("input", () => {
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

renderSpiceOptions();
startHeroSlider();
cookDate.value = toInputDate(addDays(1));
calculate();
