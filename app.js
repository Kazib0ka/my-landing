// ── STATE ──────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'ru';

// ── ANALYTICS (add your script) ────────────────────────────────────
function trackEvent(name, params) {
  // Replace with: gtag('event', name, params); or ym(XXXXXX, 'reachGoal', name);
  console.log('[analytics]', name, params);
}
trackEvent('page_view', { device: window.innerWidth < 768 ? 'mobile' : 'desktop', path: location.pathname });

// ── LANG ───────────────────────────────────────────────────────────
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.getElementById('langRu').classList.toggle('active', lang === 'ru');
  document.getElementById('langEs').classList.toggle('active', lang === 'es');
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
  });

  // Re-render recipe grid if present on this page (keeps card text translated)
  if (typeof renderSectionPage === 'function' && document.getElementById('recipeGrid')) {
    renderSectionPage();
  }

  trackEvent('lang_switch', { lang });
}

function applyStoredLang() {
  if (currentLang === 'es') {
    document.getElementById('langRu').classList.remove('active');
    document.getElementById('langEs').classList.add('active');
    document.documentElement.lang = 'es';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (i18n.es[key] !== undefined) el.innerHTML = i18n.es[key];
    });
  }
}

// ── SIDEBAR ────────────────────────────────────────────────────────
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
  document.getElementById('burgerBtn').classList.remove('open');
  document.getElementById('burgerBtn').setAttribute('aria-expanded', 'false');
}

document.getElementById('burgerBtn').addEventListener('click', () => {
  const open = document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open', open);
  document.getElementById('burgerBtn').classList.toggle('open', open);
  document.getElementById('burgerBtn').setAttribute('aria-expanded', open);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeSidebar(); closeRecipe(); }
});

// ── RECIPE MODAL ───────────────────────────────────────────────────
function openRecipe(catId, idx) {
  const cat = categories[catId];
  const r = cat.recipes[idx];
  const lang = currentLang;
  const ingredients = r['ingredients_' + lang] || [];

  const isSubHeader = (line) => line.trim().endsWith(':');

  const listItems = ingredients.map(line =>
    isSubHeader(line)
      ? `<li class="sub-header">${line}</li>`
      : `<li>${line}</li>`
  ).join('');

  const steps = r['steps_' + lang] || [];
  const stepsHtml = steps.length ? `
    <p class="modal-section-label">${lang === 'ru' ? 'Приготовление' : 'Preparación'}</p>
    <ol class="modal-steps-list">${steps.map(s => {
      const m = s.match(/^([^:]{2,15}):\s*(.*)$/);
      const formatted = m ? `<span class="step-prefix">${m[1]}:</span> ${m[2]}` : s;
      return `<li>${formatted}</li>`;
    }).join('')}</ol>
  ` : '';

  document.getElementById('recipeModalBody').innerHTML = `
    <div class="modal-emoji">${r.emoji}</div>
    <h2 class="modal-title" id="recipeModalTitle">${r['name_' + lang]}</h2>
    <span class="modal-tag">${r['tag_' + lang]}</span>
    <p class="modal-section-label">${lang === 'ru' ? 'Ингредиенты' : 'Ingredientes'}</p>
    <ul class="modal-ing-list">${listItems}</ul>
    ${stepsHtml}
  `;

  document.getElementById('recipeOverlay').classList.add('open');
  document.getElementById('recipeModal').classList.add('open');
  trackEvent('recipe_open', { category: catId, recipe: r['name_' + lang], lang });
}

function closeRecipe() {
  document.getElementById('recipeOverlay').classList.remove('open');
  document.getElementById('recipeModal').classList.remove('open');
}

// ── SECTION PAGE RENDER (called on each category page, e.g. khinkali.html) ──
// Expects a global `CATEGORY_ID` to be defined in the page's inline script.
function renderSectionPage() {
  if (typeof CATEGORY_ID === 'undefined') return;
  const cat = categories[CATEGORY_ID];
  const lang = currentLang;

  const recipes = cat.recipes.length ? cat.recipes.map((r, i) => `
    <article class="recipe-card" style="animation-delay:${0.05 + i * 0.05}s"
             role="button" tabindex="0" aria-label="${r['name_' + lang]}"
             onclick="openRecipe('${CATEGORY_ID}', ${i})" onkeydown="if(event.key==='Enter')openRecipe('${CATEGORY_ID}', ${i})">
      <div class="card-img">
        <span class="card-placeholder-text">${r.emoji}</span>
      </div>
      <div class="card-body">
        <p class="card-name">${r['name_' + lang]}</p>
        <span class="card-tag">${r['tag_' + lang]}</span>
      </div>
    </article>
  `).join('') : `
    <div style="grid-column: 1/-1; text-align:center; padding: 48px 16px; color: var(--text-muted);">
      <p style="font-size:14px; font-weight:300;">${lang === 'ru' ? 'Рецепты скоро появятся здесь' : 'Las recetas aparecerán aquí pronto'}</p>
    </div>
  `;

  document.getElementById('recipeGrid').innerHTML = recipes;

  const titleEl = document.getElementById('sectionTitle');
  const descEl = document.getElementById('sectionDesc');
  if (titleEl) titleEl.innerHTML = `${cat.icon} <em>${cat['name_' + lang]}</em>`;
  if (descEl) descEl.textContent = cat['desc_' + lang];

  trackEvent('section_open', { section: CATEGORY_ID, lang });
}

document.addEventListener('DOMContentLoaded', () => {
  applyStoredLang();
  renderSectionPage();
});
