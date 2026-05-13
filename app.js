const recipes = {
  pork: {
    name: "свинины",
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
    salt: 16,
    spices: 6,
    onion: 0.35,
    base: 90,
    baseName: "кефир или йогурт",
    marinate: [4, 10],
    heat: "средний жар, 12-16 минут"
  },
  beef: {
    name: "говядины",
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
    salt: 18,
    spices: 8,
    onion: 0.55,
    base: 80,
    baseName: "гранатовый сок",
    marinate: [10, 18],
    heat: "сильный жар, 12-18 минут"
  },
  fish: {
    name: "рыбы",
    salt: 14,
    spices: 5,
    onion: 0.15,
    base: 45,
    baseName: "лимонный сок и масло",
    marinate: [0.5, 2],
    heat: "умеренный жар, 6-10 минут"
  }
};

const styles = {
  custom: {
    label: "собственный маринад",
    extras: []
  },
  classic: {
    label: "классический маринад",
    extras: ["лавровый лист", "черный перец", "уксус или лимон по желанию"]
  },
  kefir: {
    label: "кефирный маринад",
    extras: ["кефир", "чеснок", "укроп или кинза"]
  },
  spicy: {
    label: "острый маринад",
    extras: ["аджика", "копченая паприка", "перец чили"]
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
      ["black-pepper", "Черный перец", 1.2],
      ["white-pepper", "Белый перец", 0.8],
      ["pink-pepper", "Розовый перец", 0.7],
      ["allspice", "Душистый перец", 0.7],
      ["sweet-paprika", "Сладкая паприка", 2.5],
      ["smoked-paprika", "Копченая паприка", 2],
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
      ["mint", "Мята сушеная", 0.45],
      ["dill-seed", "Семена укропа", 0.7]
    ]
  },
  {
    category: "Овощная сухая база",
    items: [
      ["garlic", "Сушеный чеснок", 2],
      ["onion-powder", "Луковый порошок", 1.7],
      ["mustard", "Горчичный порошок", 1.2],
      ["celery", "Сельдерей сушеный", 0.8],
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

function renderList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.append(li);
  });
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
    `Купить продукты и нарезать мясо ровными кусками за ${daysLeft > 1 ? "день до маринада" : "пару часов до маринада"}.`,
    `Замариновать: ${start}; оптимальное окно ${minHours}-${maxHours} ч.`,
    `В день готовки (${dateLabel}) достать мясо за 40-60 минут до жара.`,
    `Жарить: ${recipe.heat}. Соленый маринад не выливать на угли.`
  ];

  if (style === "dry") {
    plan[1] = `Натереть специями и маслом: ${start}; держать закрытым ${minHours}-${maxHours} ч.`;
  }

  if (style === "custom") {
    plan[1] = `Собрать свой набор специй, смешать с солью и маслом, затем замариновать: ${start}; окно ${minHours}-${maxHours} ч.`;
  }

  if (recipe === recipes.fish) {
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

  const selectedSpiceLines = selectedSpices.map((spice) => `${Math.max(1, Math.round(spice.total))} г: ${spice.name}`);
  const spiceLines = styleKey === "custom"
    ? selectedSpiceLines
    : [`${Math.round(baseSpices)} г базовой смеси специй`, ...style.extras, ...selectedSpiceLines];
  const baseLine = styleKey === "dry"
    ? "масло для сухого руба"
    : styleKey === "custom"
      ? "масло для связки выбранных специй"
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
    "уголь, розжиг, шампуры или решетка",
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
cookDate.value = toInputDate(addDays(1));
calculate();
