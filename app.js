const translations = {
  sq: {
    pageTitle: "Rina Glamour | Cakto Terminin",
    languageAria: "Zgjedhja e gjuhës",
    serviceCategoriesAria: "Kategoritë e shërbimeve",
    appointmentCalendarAria: "Kalendari i termineve",
    home: {
      phoneAria: "Telefono Rina Glamour",
      welcome: "Mirësevini në",
      tagline:
        "Rina Glamour ofron shërbime profesionale për qerpikë, thonj, lash lift dhe vetulla në një ambient elegant dhe relaksues.\nRezervo termin tani dhe ndihu më e bukur me Rina Glamour.",
      cta: "Cakto termin",
      powered: "Mundësuar nga"
    },
    steps: {
      location: "Hapi 1 / 4",
      service: "Hapi 2 / 4",
      datetime: "Hapi 3 / 4",
      info: "Hapi 4 / 4"
    },
    titles: {
      location: "Zgjidh lokacionin",
      service: "Zgjidh shërbimin",
      datetime: "Zgjidh datën",
      info: "Informacionet tuaja"
    },
    actions: {
      back: "Kthehu",
      prevMonth: "Muaji i kaluar",
      nextMonth: "Muaji tjetër",
      submit: "Cakto terminin",
      restart: "Kthehu në fillim"
    },
    locations: {
      vushtrri: {
        name: "Vushtrri",
        address: "Rr. Zenullah Begu 11, afër \"te illka\"",
        mapsLabel: "Hap në Google Maps",
        mapsUrl: "https://maps.app.goo.gl/q5RStqyTt37rSdrc8"
      }
    },
    categories: {
      lashes: "Qerpikë",
      nails: "Thonjtë",
      brows: "Brows"
    },
    services: {
      lashes: [
        { id: "lash-volume", name: "Qerpikë Volume", duration: "2 orë" },
        { id: "lash-mix", name: "Qerpikë Mix", duration: "1 orë 40 min." },
        { id: "lash-classic", name: "Qerpikë Classic", duration: "1 orë 40 min." },
        { id: "lash-fill", name: "Mbushje e qerpikëve", duration: "40 min." },
        { id: "lash-lift", name: "Lash Lift", duration: "40 min." }
      ],
      nails: [
        { id: "nails-gel", name: "Thonjtë me gel", duration: "35 min." },
        { id: "nails-extensions", name: "Mbjellja e thonjëve", duration: "1 orë" },
        { id: "nails-refill", name: "Riparim", duration: "1 orë 10 min." },
        { id: "nails-pedicure", name: "Pedikyr klasik", duration: "45 min." },
        { id: "nails-french", name: "French", duration: "1 orë 15 min." },
        { id: "nails-ombre", name: "Ombre", duration: "1 orë 15 min." },
        { id: "nails-designs", name: "Dizajne", duration: "1 orë 20 min." }
      ],
      brows: [
        { id: "brows-shaping", name: "Rregullim vetullash", duration: "20 min." },
        { id: "brows-tint", name: "Ngjyrosje vetullash", duration: "25 min." },
        { id: "brows-lamination", name: "Brow Lamination", duration: "45 min." }
      ]
    },
    calendar: {
      months: [
        "Janar",
        "Shkurt",
        "Mars",
        "Prill",
        "Maj",
        "Qershor",
        "Korrik",
        "Gusht",
        "Shtator",
        "Tetor",
        "Nëntor",
        "Dhjetor"
      ],
      weekdaysShort: ["Hë", "Ma", "Më", "En", "Pr", "Sh", "Di"],
      weekdaysLong: ["E Diel", "E Hënë", "E Martë", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"],
      timeTitle: "Zgjidh një hapësirë kohore",
      dateLabel: ({ weekday, month, day, year, time }) => `${weekday}, ${day} ${month} ${year} në ${time}`
    },
    form: {
      firstName: "Emri",
      firstPlaceholder: "Filan",
      lastName: "Mbiemri",
      lastPlaceholder: "Fisteku",
      phone: "Numri i telefonit",
      countryAria: "Kodi telefonik i Kosovës",
      phoneDefault: "+383 ",
      email: "Zbritje dhe oferta promocionale përmes email",
      emailPlaceholder: "email@example.com",
      terms: "Duke klikuar butonin më sipër, ju pranoni Kushtet e përdorimit dhe Politikën e privatësisë"
    },
    confirmation: {
      title: "Termini u regjistrua",
      defaultName: "Kliente",
      copy: ({ name, service, location, date }) => `${name}, termini juaj për ${service} në ${location} është ${date}.`
    },
    whatsapp: {
      message: ({ firstName, lastName, phone, email, service, location, date }) =>
        `Përshëndetje Rina Glamour! Dua të caktoj një termin.\n\nEmri: ${firstName} ${lastName}\nTelefoni: ${phone}${email ? `\nEmail: ${email}` : ""}\nLokacioni: ${location}\nShërbimi: ${service}\nData/Ora: ${date}`
    }
  },
  en: {
    pageTitle: "Rina Glamour | Book Appointment",
    languageAria: "Language selection",
    serviceCategoriesAria: "Service categories",
    appointmentCalendarAria: "Appointment calendar",
    home: {
      phoneAria: "Call Rina Glamour",
      welcome: "Welcome to",
      tagline:
        "Rina Glamour offers professional services for lashes, nails, lash lifts, and brows in an elegant and relaxing space.\nBook your appointment now and feel more beautiful with Rina Glamour.",
      cta: "Book appointment",
      powered: "Powered by"
    },
    steps: {
      location: "Step 1 / 4",
      service: "Step 2 / 4",
      datetime: "Step 3 / 4",
      info: "Step 4 / 4"
    },
    titles: {
      location: "Choose location",
      service: "Choose service",
      datetime: "Choose date",
      info: "Your details"
    },
    actions: {
      back: "Back",
      prevMonth: "Previous month",
      nextMonth: "Next month",
      submit: "Book appointment",
      restart: "Back to start"
    },
    locations: {
      vushtrri: {
        name: "Vushtrri",
        address: "Zenullah Begu St. 11, near \"te illka\"",
        mapsLabel: "Open in Google Maps",
        mapsUrl: "https://maps.app.goo.gl/q5RStqyTt37rSdrc8"
      }
    },
    categories: {
      lashes: "Lashes",
      nails: "Nails",
      brows: "Brows"
    },
    services: {
      lashes: [
        { id: "lash-volume", name: "Volume Lashes", duration: "2 hrs" },
        { id: "lash-mix", name: "Mixed Lashes", duration: "1 hr 40 min" },
        { id: "lash-classic", name: "Classic Lashes", duration: "1 hr 40 min" },
        { id: "lash-fill", name: "Lash Fill", duration: "40 min" },
        { id: "lash-lift", name: "Lash Lift", duration: "40 min" }
      ],
      nails: [
        { id: "nails-gel", name: "Gel Nails", duration: "35 min" },
        { id: "nails-extensions", name: "Nail Extensions", duration: "1 hr" },
        { id: "nails-refill", name: "Repair", duration: "1 hr 10 min" },
        { id: "nails-pedicure", name: "Classic Pedicure", duration: "45 min" },
        { id: "nails-french", name: "French", duration: "1 hr 15 min" },
        { id: "nails-ombre", name: "Ombre", duration: "1 hr 15 min" },
        { id: "nails-designs", name: "Designs", duration: "1 hr 20 min" }
      ],
      brows: [
        { id: "brows-shaping", name: "Brow Shaping", duration: "20 min" },
        { id: "brows-tint", name: "Brow Tint", duration: "25 min" },
        { id: "brows-lamination", name: "Brow Lamination", duration: "45 min" }
      ]
    },
    calendar: {
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      weekdaysShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      weekdaysLong: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      timeTitle: "Choose a time slot",
      dateLabel: ({ weekday, month, day, year, time }) => `${weekday}, ${month} ${day}, ${year} at ${time}`
    },
    form: {
      firstName: "First name",
      firstPlaceholder: "Emma",
      lastName: "Last name",
      lastPlaceholder: "Muller",
      phone: "Phone number",
      countryAria: "Kosovo dialing code",
      phoneDefault: "+383 ",
      email: "Optional: discounts and promotional offers by email",
      emailPlaceholder: "email@example.com",
      terms: "By tapping the button above, you agree to the Terms of Use and Privacy Policy"
    },
    confirmation: {
      title: "Appointment booked",
      defaultName: "Client",
      copy: ({ name, service, location, date }) => `${name}, your appointment for ${service} in ${location} is ${date}.`
    },
    whatsapp: {
      message: ({ firstName, lastName, phone, email, service, location, date }) =>
        `Hello Rina Glamour! I would like to book an appointment.\n\nName: ${firstName} ${lastName}\nPhone: ${phone}${email ? `\nEmail: ${email}` : ""}\nLocation: ${location}\nService: ${service}\nDate/Time: ${date}`
    }
  },
  de: {
    pageTitle: "Rina Glamour | Termin buchen",
    languageAria: "Sprachauswahl",
    serviceCategoriesAria: "Servicekategorien",
    appointmentCalendarAria: "Terminkalender",
    home: {
      phoneAria: "Rina Glamour anrufen",
      welcome: "Willkommen bei",
      tagline:
        "Rina Glamour bietet professionelle Services für Wimpern, Nägel, Lash Lift und Augenbrauen in einem eleganten und entspannenden Ambiente.\nBuche jetzt deinen Termin und fühle dich schöner mit Rina Glamour.",
      cta: "Termin buchen",
      powered: "Bereitgestellt von"
    },
    steps: {
      location: "Schritt 1 / 4",
      service: "Schritt 2 / 4",
      datetime: "Schritt 3 / 4",
      info: "Schritt 4 / 4"
    },
    titles: {
      location: "Standort wählen",
      service: "Service wählen",
      datetime: "Datum wählen",
      info: "Deine Angaben"
    },
    actions: {
      back: "Zurück",
      prevMonth: "Vorheriger Monat",
      nextMonth: "Nächster Monat",
      submit: "Termin buchen",
      restart: "Zurück zum Start"
    },
    locations: {
      vushtrri: {
        name: "Vushtrri",
        address: "Zenullah-Begu-Straße 11, nahe \"te illka\"",
        mapsLabel: "In Google Maps öffnen",
        mapsUrl: "https://maps.app.goo.gl/q5RStqyTt37rSdrc8"
      }
    },
    categories: {
      lashes: "Wimpern",
      nails: "Nägel",
      brows: "Augenbrauen"
    },
    services: {
      lashes: [
        { id: "lash-volume", name: "Volumenwimpern", duration: "2 Std." },
        { id: "lash-mix", name: "Mix-Wimpern", duration: "1 Std. 40 Min." },
        { id: "lash-classic", name: "Classic-Wimpern", duration: "1 Std. 40 Min." },
        { id: "lash-fill", name: "Wimpern auffüllen", duration: "40 Min." },
        { id: "lash-lift", name: "Lash Lift", duration: "40 Min." }
      ],
      nails: [
        { id: "nails-gel", name: "Gelnägel", duration: "35 Min." },
        { id: "nails-extensions", name: "Nagelmodellage", duration: "1 Std." },
        { id: "nails-refill", name: "Reparatur", duration: "1 Std. 10 Min." },
        { id: "nails-pedicure", name: "Klassische Pediküre", duration: "45 Min." },
        { id: "nails-french", name: "French", duration: "1 Std. 15 Min." },
        { id: "nails-ombre", name: "Ombre", duration: "1 Std. 15 Min." },
        { id: "nails-designs", name: "Designs", duration: "1 Std. 20 Min." }
      ],
      brows: [
        { id: "brows-shaping", name: "Augenbrauen formen", duration: "20 Min." },
        { id: "brows-tint", name: "Augenbrauen färben", duration: "25 Min." },
        { id: "brows-lamination", name: "Brow Lamination", duration: "45 Min." }
      ]
    },
    calendar: {
      months: [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
      ],
      weekdaysShort: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
      weekdaysLong: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
      timeTitle: "Wähle eine Uhrzeit",
      dateLabel: ({ weekday, month, day, year, time }) => `${weekday}, ${day}. ${month} ${year} um ${time}`
    },
    form: {
      firstName: "Vorname",
      firstPlaceholder: "Emma",
      lastName: "Nachname",
      lastPlaceholder: "Müller",
      phone: "Telefonnummer",
      countryAria: "Kosovo Vorwahl",
      phoneDefault: "+383 ",
      email: "Optional: Rabatte und Angebote per E-Mail",
      emailPlaceholder: "email@example.com",
      terms: "Mit dem Tippen auf den Button akzeptierst du die Nutzungsbedingungen und die Datenschutzerklärung"
    },
    confirmation: {
      title: "Termin gebucht",
      defaultName: "Kundin",
      copy: ({ name, service, location, date }) => `${name}, dein Termin für ${service} in ${location} ist ${date}.`
    },
    whatsapp: {
      message: ({ firstName, lastName, phone, email, service, location, date }) =>
        `Hallo Rina Glamour! Ich möchte einen Termin buchen.\n\nName: ${firstName} ${lastName}\nTelefon: ${phone}${email ? `\nE-Mail: ${email}` : ""}\nStandort: ${location}\nService: ${service}\nDatum/Uhrzeit: ${date}`
    }
  }
};

const timeSlots = Array.from({ length: 16 }, (_, index) => `${String(index + 7).padStart(2, "0")}:00`);
const whatsappNumber = "38345689704";

const state = {
  screen: "home",
  lang: "sq",
  locationId: "vushtrri",
  category: "nails",
  serviceId: "nails-gel",
  viewDate: new Date(2026, 4, 1),
  selectedDate: new Date(2026, 4, 4),
  selectedTime: "07:00"
};

const screens = document.querySelectorAll(".screen");
const locationList = document.querySelector("[data-location-list]");
const serviceList = document.querySelector("[data-service-list]");
const categoryTitle = document.querySelector("[data-category-title]");
const calendarGrid = document.querySelector("[data-calendar-grid]");
const monthLabel = document.querySelector("[data-month-label]");
const weekdayGrid = document.querySelector("[data-weekday-grid]");
const timeTitle = document.querySelector("[data-time-title]");
const timeList = document.querySelector("[data-time-list]");
const bookingForm = document.querySelector("[data-booking-form]");
const confirmation = document.querySelector("[data-confirmation]");
const confirmationCopy = document.querySelector("[data-confirmation-copy]");

function currentCopy() {
  return translations[state.lang];
}

function showScreen(name) {
  state.screen = name;
  if (name === "home") {
    resetBooking();
  }
  screens.forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetBooking() {
  Object.assign(state, {
    locationId: "vushtrri",
    category: "nails",
    serviceId: "nails-gel",
    viewDate: new Date(2026, 4, 1),
    selectedDate: new Date(2026, 4, 4),
    selectedTime: "07:00"
  });
  bookingForm.hidden = false;
  confirmation.hidden = true;
  bookingForm.reset();
  bookingForm.elements.phone.value = currentCopy().form.phoneDefault;
  renderAll();
}

function renderStaticText() {
  const copy = currentCopy();
  document.documentElement.lang = state.lang;
  document.title = copy.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getPath(copy, node.dataset.i18n);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const value = getPath(copy, node.dataset.i18nAria);
    if (typeof value === "string") {
      node.setAttribute("aria-label", value);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const value = getPath(copy, node.dataset.i18nPlaceholder);
    if (typeof value === "string") {
      node.setAttribute("placeholder", value);
    }
  });

  document.querySelectorAll("[data-lang]").forEach((node) => {
    const isSelected = node.dataset.lang === state.lang;
    node.classList.toggle("is-selected", isSelected);
    node.setAttribute("aria-pressed", String(isSelected));
  });
}

function renderLocations() {
  const copy = currentCopy();
  locationList.innerHTML = Object.entries(copy.locations)
    .map(
      ([id, location]) => `
        <article class="location-card">
          <button class="location-choice location-main" type="button" data-location-id="${id}">
            <span>
              <strong>${location.name}</strong>
              <small>${location.address}</small>
            </span>
            <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
          <a class="map-link" href="${location.mapsUrl}" target="_blank" rel="noopener">${location.mapsLabel}</a>
        </article>
      `
    )
    .join("");
}

function buildWhatsappUrl() {
  const copy = currentCopy();
  const data = new FormData(bookingForm);
  const firstName = String(data.get("firstName") || "").trim();
  const lastName = String(data.get("lastName") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = copy.whatsapp.message({
    firstName,
    lastName,
    phone,
    email,
    service: getSelectedService().name,
    location: copy.locations[state.locationId].name,
    date: formatSelectedDate()
  });

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function renderSummaries() {
  const copy = currentCopy();
  document.querySelectorAll('[data-summary="location"]').forEach((node) => {
    node.textContent = copy.locations[state.locationId].name;
  });
  document.querySelectorAll('[data-summary="service"]').forEach((node) => {
    node.textContent = getSelectedService().name;
  });
  document.querySelectorAll('[data-summary="date"]').forEach((node) => {
    node.textContent = formatSelectedDate();
  });
}

function renderTabs() {
  const copy = currentCopy();
  document.querySelectorAll("[data-category]").forEach((node) => {
    node.textContent = copy.categories[node.dataset.category];
    node.classList.toggle("is-selected", node.dataset.category === state.category);
  });
}

function renderServices() {
  const copy = currentCopy();
  const services = copy.services[state.category];
  categoryTitle.textContent = copy.categories[state.category];
  serviceList.innerHTML = services
    .map(
      (service) => `
        <button class="choice-card service-choice" type="button" data-service-id="${service.id}">
          <span>
            <strong>${service.name}</strong>
            <span class="duration">
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
              ${service.duration}
            </span>
          </span>
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      `
    )
    .join("");
}

function renderCalendar() {
  const copy = currentCopy();
  const year = state.viewDate.getFullYear();
  const month = state.viewDate.getMonth();
  monthLabel.textContent = `${copy.calendar.months[month]} ${year}`;
  weekdayGrid.innerHTML = copy.calendar.weekdaysShort.map((day) => `<span>${day}</span>`).join("");

  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const mondayOffset = (firstDay.getDay() + 6) % 7;
  const today = new Date(2026, 4, 2);
  const cells = [];

  for (let i = 0; i < mondayOffset; i += 1) {
    cells.push('<div class="day-cell"></div>');
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    const isPast = stripTime(date) < stripTime(today);
    const disabled = isPast;
    const isToday = sameDate(date, today);
    const isSelected = sameDate(date, state.selectedDate);

    cells.push(`
      <div class="day-cell">
        <button
          class="day-button ${disabled ? "is-muted" : ""} ${isToday ? "is-today" : ""} ${isSelected ? "is-selected" : ""}"
          type="button"
          data-date="${dateKey(date)}"
          ${disabled ? "disabled" : ""}
          aria-label="${day} ${copy.calendar.months[month]} ${year}"
        >
          ${day}
        </button>
      </div>
    `);
  }

  calendarGrid.innerHTML = cells.join("");
}

function renderTimes() {
  timeTitle.textContent = currentCopy().calendar.timeTitle;
  if (!timeSlots.includes(state.selectedTime)) {
    state.selectedTime = timeSlots[0];
  }
  timeList.innerHTML = timeSlots
    .map(
      (time) => `
        <button class="time-button ${time === state.selectedTime ? "is-selected" : ""}" type="button" data-time="${time}">
          ${time}
        </button>
      `
    )
    .join("");
}

function renderConfirmation() {
  if (confirmation.hidden) {
    return;
  }
  const copy = currentCopy();
  const data = new FormData(bookingForm);
  const firstName = data.get("firstName") || copy.confirmation.defaultName;
  confirmationCopy.textContent = copy.confirmation.copy({
    name: firstName,
    service: getSelectedService().name,
    location: copy.locations[state.locationId].name,
    date: formatSelectedDate()
  });
}

function getSelectedService() {
  const services = Object.values(currentCopy().services).flat();
  return services.find((service) => service.id === state.serviceId) || currentCopy().services[state.category][0];
}

function formatSelectedDate() {
  const copy = currentCopy();
  return copy.calendar.dateLabel({
    weekday: copy.calendar.weekdaysLong[state.selectedDate.getDay()],
    month: copy.calendar.months[state.selectedDate.getMonth()],
    day: state.selectedDate.getDate(),
    year: state.selectedDate.getFullYear(),
    time: state.selectedTime
  });
}

function getPath(source, path) {
  return path.split(".").reduce((value, key) => (value ? value[key] : undefined), source);
}

function sameDate(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDateKey(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function stripTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}

function renderAll() {
  renderStaticText();
  renderLocations();
  renderSummaries();
  renderTabs();
  renderServices();
  renderCalendar();
  renderTimes();
  renderConfirmation();
}

document.addEventListener("click", (event) => {
  const languageButton = event.target.closest("[data-lang]");
  if (languageButton) {
    state.lang = languageButton.dataset.lang;
    renderAll();
    return;
  }

  const goButton = event.target.closest("[data-go]");
  if (goButton) {
    showScreen(goButton.dataset.go);
    return;
  }

  const backButton = event.target.closest("[data-back]");
  if (backButton) {
    showScreen(backButton.dataset.back);
    return;
  }

  const locationButton = event.target.closest(".location-choice");
  if (locationButton) {
    state.locationId = locationButton.dataset.locationId;
    renderSummaries();
    showScreen("service");
    return;
  }

  const tab = event.target.closest("[data-category]");
  if (tab) {
    state.category = tab.dataset.category;
    renderTabs();
    renderServices();
    return;
  }

  const serviceButton = event.target.closest(".service-choice");
  if (serviceButton) {
    state.serviceId = serviceButton.dataset.serviceId;
    renderSummaries();
    showScreen("datetime");
    return;
  }

  const monthButton = event.target.closest("[data-month]");
  if (monthButton) {
    state.viewDate.setMonth(state.viewDate.getMonth() + (monthButton.dataset.month === "next" ? 1 : -1));
    renderCalendar();
    return;
  }

  const dayButton = event.target.closest("[data-date]");
  if (dayButton) {
    state.selectedDate = parseDateKey(dayButton.dataset.date);
    renderCalendar();
    renderTimes();
    renderSummaries();
    return;
  }

  const timeButton = event.target.closest("[data-time]");
  if (timeButton) {
    state.selectedTime = timeButton.dataset.time;
    renderTimes();
    renderSummaries();
    setTimeout(() => showScreen("info"), 150);
  }
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = buildWhatsappUrl();
});

renderAll();
