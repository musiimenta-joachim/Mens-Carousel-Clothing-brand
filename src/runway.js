// Embedded catalog data (rewritten with absolute asset URLs)
const CATALOG = {
  source: 'https://nike-makknzjs.myshopify.com/pages/runway',
  looks: [
    {
      name: 'The City Edit',
      description: 'A charcoal knit and easy denim.',
      image: 'https://reel-ref-try-the-look.vercel.app/assets/original-look-1.webp',
      products: ['tatum-5-orbit-copy', 'tshirt', 'sweatshirt'],
    },
    {
      name: 'Gallery Opening',
      description: 'A clean white tee and relaxed denim.',
      image: 'https://reel-ref-try-the-look.vercel.app/assets/original-look-5.webp',
      products: ['tatum-5-orbit', 'hoodie-black', 'tshirt'],
    },
    {
      name: 'Gallery Opening',
      description: 'Olive knitwear. A grounded palette.',
      image: 'https://reel-ref-try-the-look.vercel.app/assets/original-look-4.webp',
      products: ['sweatshirt-plus', 'tatum-5-orbit', 'tshirt'],
    },
    {
      name: 'Studio Day',
      description: 'Black, white and laid-back denim.',
      image: 'https://reel-ref-try-the-look.vercel.app/assets/original-look-6.webp',
      products: ['hoodie-black', 'tatum-5-orbit-copy', 'tshirt'],
    },
    {
      name: 'Studio Day',
      description: 'Burgundy layers. A tailored perspective.',
      image: 'https://reel-ref-try-the-look.vercel.app/assets/original-look-3.webp',
      products: ['sweatshirt', 'tatum-5-orbit', 'tshirt'],
    },
    {
      name: 'Studio Day',
      description: 'A grey crew and your favourite denim.',
      image: 'https://reel-ref-try-the-look.vercel.app/assets/original-look-2.webp',
      products: ['hoodie', 'air-jordan-12-retro-copy', 'tshirt'],
    },
  ],
  items: [
    {
      id: 'tatum-5-orbit-copy',
      name: 'Air Jordan 12 Retro',
      type: 'From the original lookbook',
      price: 149.0,
      image: 'https://reel-ref-try-the-look.vercel.app/assets/source-tatum-5-orbit-copy.webp',
      sizes: ['40', '41', '42', '43', '44', '45', '46'],
      variants: [
        { id: 57015167025457, a: true, o: ['40'] },
        { id: 57015167058225, a: true, o: ['41'] },
        { id: 57015167090993, a: true, o: ['42'] },
        { id: 57015167123761, a: true, o: ['43'] },
        { id: 57015167156529, a: true, o: ['44'] },
        { id: 57015167189297, a: true, o: ['45'] },
        { id: 57015167222065, a: true, o: ['46'] },
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/tatum-5-orbit-copy',
    },
    {
      id: 'tshirt',
      name: 'Tshirt',
      type: 'From the original lookbook',
      price: 199.0,
      image: 'https://reel-ref-try-the-look.vercel.app/assets/source-tshirt.webp',
      sizes: ['S', 'L', 'M', 'XL'],
      variants: [
        { id: 56835911582001, a: true, o: ['S'] },
        { id: 56835911614769, a: true, o: ['L'] },
        { id: 56835911647537, a: true, o: ['M'] },
        { id: 56835911680305, a: true, o: ['XL'] },
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/tshirt',
    },
    {
      id: 'sweatshirt',
      name: 'Sweatshirt',
      type: 'From the original lookbook',
      price: 199.0,
      image: 'https://reel-ref-try-the-look.vercel.app/assets/source-sweatshirt.webp',
      sizes: ['S', 'L', 'M', 'XL'],
      variants: [
        { id: 56835806396721, a: true, o: ['S'] },
        { id: 56835806429489, a: true, o: ['L'] },
        { id: 56835806462257, a: true, o: ['M'] },
        { id: 56835806495025, a: true, o: ['XL'] },
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/sweatshirt',
    },
    {
      id: 'tatum-5-orbit',
      name: 'Tatum 5 Orbit',
      type: 'From the original lookbook',
      price: 149.0,
      image: 'https://reel-ref-try-the-look.vercel.app/assets/source-tatum-5-orbit.webp',
      sizes: ['40', '41', '42', '43', '44', '45', '46'],
      variants: [
        { id: 57015166730545, a: true, o: ['40'] },
        { id: 57015166763313, a: true, o: ['41'] },
        { id: 57015166796081, a: true, o: ['42'] },
        { id: 57015166828849, a: true, o: ['43'] },
        { id: 57015166861617, a: true, o: ['44'] },
        { id: 57015166894385, a: true, o: ['45'] },
        { id: 57015166927153, a: true, o: ['46'] },
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/tatum-5-orbit',
    },
    {
      id: 'hoodie-black',
      name: 'Hoodie Black',
      type: 'From the original lookbook',
      price: 199.0,
      image: 'https://reel-ref-try-the-look.vercel.app/assets/source-hoodie-black.webp',
      sizes: ['S', 'L', 'M', 'XL'],
      variants: [
        { id: 56836251681073, a: true, o: ['S'] },
        { id: 56836251713841, a: true, o: ['L'] },
        { id: 56836251746609, a: true, o: ['M'] },
        { id: 56836251779377, a: true, o: ['XL'] },
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/hoodie-black',
    },
    {
      id: 'sweatshirt-plus',
      name: 'Sweatshirt Plus',
      type: 'From the original lookbook',
      price: 199.0,
      image: 'https://reel-ref-try-the-look.vercel.app/assets/source-sweatshirt-plus.webp',
      sizes: ['S', 'L', 'M', 'XL'],
      variants: [
        { id: 56836143743281, a: true, o: ['S'] },
        { id: 56836143776049, a: true, o: ['L'] },
        { id: 56836143808817, a: true, o: ['M'] },
        { id: 56836143841585, a: true, o: ['XL'] },
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/sweatshirt-plus',
    },
    {
      id: 'hoodie',
      name: 'Hoodie',
      type: 'From the original lookbook',
      price: 199.0,
      image: 'https://reel-ref-try-the-look.vercel.app/assets/source-hoodie.webp',
      sizes: ['S', 'L', 'M', 'XL'],
      variants: [
        { id: 56836002185521, a: true, o: ['S'] },
        { id: 56836002218289, a: true, o: ['L'] },
        { id: 56836002251057, a: true, o: ['M'] },
        { id: 56836002283825, a: true, o: ['XL'] },
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/hoodie',
    },
    {
      id: 'air-jordan-12-retro-copy',
      name: 'Luka 5',
      type: 'From the original lookbook',
      price: 149.0,
      image: 'https://reel-ref-try-the-look.vercel.app/assets/source-air-jordan-12-retro-copy.webp',
      sizes: ['40', '41', '42', '43', '44', '45', '46'],
      variants: [
        { id: 57015176364337, a: true, o: ['40'] },
        { id: 57015176397105, a: true, o: ['41'] },
        { id: 57015176429873, a: true, o: ['42'] },
        { id: 57015176462641, a: true, o: ['43'] },
        { id: 57015176495409, a: true, o: ['44'] },
        { id: 57015176528177, a: true, o: ['45'] },
        { id: 57015176560945, a: true, o: ['46'] },
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/air-jordan-12-retro-copy',
    },
  ],
};

// Styling Bag Manager
const BAG_KEY = 'runway-styling-bag-v3';
const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

function validateCatalog(data) {
  if (!data || !Array.isArray(data.items)) {
    throw new Error('The product list could not load.');
  }
  const byVariant = new Map();
  for (const item of data.items) {
    if (
      !item ||
      typeof item.id !== 'string' ||
      typeof item.name !== 'string' ||
      typeof item.price !== 'number' ||
      !Number.isFinite(item.price) ||
      item.price < 0 ||
      !Array.isArray(item.variants)
    ) {
      throw new Error('The product list is unavailable.');
    }
    for (const v of item.variants) {
      if (
        !v ||
        !Number.isSafeInteger(v.id) ||
        typeof v.a !== 'boolean' ||
        !Array.isArray(v.o) ||
        v.o.some((x) => typeof x !== 'string')
      ) {
        throw new Error('The product list is unavailable.');
      }
      byVariant.set(v.id, { item, variant: v });
    }
  }
  return byVariant;
}

class StylingBag {
  constructor() {
    this.variantMap = validateCatalog(CATALOG);
    this.entries = this.load();
    this.toastTimer = 0;

    this.dialog = document.getElementById('bag-dialog');
    this.itemsEl = document.getElementById('bag-items');
    this.totalEl = document.getElementById('bag-total');
    this.exportBtn = document.getElementById('export-bag');
    this.statusEl = document.getElementById('bag-status');
    this.openBtn = document.getElementById('open-bag');
    this.closeBtn = document.getElementById('close-bag');

    this.bindUI();
    this.updateCount();
  }

  load() {
    try {
      const raw = localStorage.getItem(BAG_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed
        .filter(
          (e) =>
            e &&
            Number.isSafeInteger(e.id) &&
            Number.isSafeInteger(e.quantity) &&
            e.quantity >= 1 &&
            e.quantity <= 20
        )
        .slice(0, 50)
        .map((e) => ({ id: e.id, quantity: e.quantity }));
    } catch {
      return [];
    }
  }

  save() {
    try {
      localStorage.setItem(BAG_KEY, JSON.stringify(this.entries));
    } catch {
      // Ignore storage failures
    }
  }

  updateCount() {
    const totalQty = this.entries.reduce((sum, e) => sum + e.quantity, 0);
    document.querySelectorAll('[data-cart-count]').forEach((el) => {
      el.textContent = String(totalQty);
    });
  }

  toast(message) {
    if (!this.statusEl) return;
    clearTimeout(this.toastTimer);
    this.statusEl.textContent = message;
    this.statusEl.classList.add('is-on');
    this.toastTimer = window.setTimeout(() => {
      this.statusEl.classList.remove('is-on');
    }, 2500);
  }

  add(items) {
    if (!Array.isArray(items) || !items.length) {
      throw new Error('Please choose an available size.');
    }
    for (const req of items) {
      const match = this.variantMap.get(Number(req.id));
      if (!match || !match.variant.a) {
        throw new Error('Please choose an available size.');
      }
    }
    for (const req of items) {
      const id = Number(req.id);
      const qty = Math.max(1, Math.min(20, Number(req.quantity) || 1));
      const existing = this.entries.find((e) => e.id === id);
      if (existing) {
        existing.quantity = Math.min(20, existing.quantity + qty);
      } else if (this.entries.length < 50) {
        this.entries.push({ id, quantity: qty });
      }
    }
    this.save();
    this.updateCount();
    this.render();
    this.toast(items.length === 1 ? 'Piece saved to your styling bag' : 'Look saved to your styling bag');
  }

  remove(id) {
    this.entries = this.entries.filter((e) => e.id !== id);
    this.save();
    this.updateCount();
    this.render();
  }

  render() {
    if (!this.itemsEl || !this.totalEl || !this.exportBtn) return;
    this.itemsEl.replaceChildren();

    if (!this.entries.length) {
      const empty = document.createElement('p');
      empty.className = 'bag-note';
      empty.textContent = 'Your styling bag is empty. Choose a size beside a piece to save it.';
      this.itemsEl.appendChild(empty);
      this.totalEl.textContent = '';
      this.exportBtn.disabled = true;
      return;
    }

    let subtotal = 0;
    for (const entry of this.entries) {
      const resolved = this.variantMap.get(entry.id);
      if (!resolved) continue;
      const { item, variant } = resolved;

      let parsedUrl;
      try {
        parsedUrl = new URL(item.url);
      } catch {
        throw new Error('Invalid product URL');
      }
      if (parsedUrl.hostname !== 'nike-makknzjs.myshopify.com') {
        throw new Error('Invalid product host');
      }

      subtotal += item.price * entry.quantity;
      const size = variant.o[0] || '';

      const row = document.createElement('div');
      row.className = 'bag-row';

      const img = document.createElement('img');
      img.src = item.image;
      img.width = 60;
      img.height = 80;
      img.alt = item.name;
      img.loading = 'lazy';
      img.decoding = 'async';

      const details = document.createElement('div');
      const h3 = document.createElement('h3');
      h3.textContent = item.name;

      const meta = document.createElement('p');
      meta.textContent = `Size ${size} · Quantity ${entry.quantity} · ${usd.format(item.price)}`;

      const link = document.createElement('a');
      link.href = parsedUrl.href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'View original piece ↗';

      details.append(h3, meta, link);

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'bag-remove';
      removeBtn.setAttribute('aria-label', `Remove ${item.name}`);
      removeBtn.textContent = '×';
      removeBtn.addEventListener('click', () => this.remove(entry.id));

      row.append(img, details, removeBtn);
      this.itemsEl.appendChild(row);
    }

    this.totalEl.textContent = `Reference subtotal ${usd.format(subtotal)}`;
    this.exportBtn.disabled = false;
  }

  exportShortlist() {
    if (!this.entries.length) return;
    const lines = [];
    for (const entry of this.entries) {
      const resolved = this.variantMap.get(entry.id);
      if (!resolved) continue;
      const { item, variant } = resolved;
      const size = variant.o[0] || '';
      lines.push(`${item.name} · Size ${size} · Quantity ${entry.quantity}\n${item.url}`);
    }
    const parts = [
      'RUNWAY — STYLING SHORTLIST',
      'Reference prices; no order or payment has been placed.',
      '',
      ...lines,
    ];
    const blob = new Blob([parts.join('\n\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'runway-outfit-shortlist.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  bindUI() {
    if (this.openBtn && this.dialog) {
      this.openBtn.addEventListener('click', () => {
        this.render();
        if (typeof this.dialog.showModal === 'function') {
          this.dialog.showModal();
        }
      });
    }
    if (this.closeBtn && this.dialog) {
      this.closeBtn.addEventListener('click', () => this.dialog.close());
    }
    if (this.dialog) {
      this.dialog.addEventListener('click', (e) => {
        if (e.target !== this.dialog) return;
        const rect = this.dialog.getBoundingClientRect();
        const inside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
        if (!inside) this.dialog.close();
      });
    }
    if (this.exportBtn) {
      this.exportBtn.addEventListener('click', () => this.exportShortlist());
    }
  }
}

const bag = new StylingBag();

// Helpers
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const wrapN = (v, n) => ((v % n) + n) % n;

function decodeImage(img) {
  if (!img) return;
  const mark = () => {
    if (img.naturalWidth) img.classList.add('is-decoded');
  };
  if (img.complete && img.naturalWidth) {
    if (typeof img.decode === 'function') {
      img.decode().then(mark, mark);
    } else {
      mark();
    }
    return;
  }
  img.addEventListener(
    'load',
    () => {
      if (typeof img.decode === 'function') {
        img.decode().then(mark, mark);
      } else {
        mark();
      }
    },
    { once: true }
  );
}

class RunwaySection extends HTMLElement {
  connectedCallback() {
    if (this._init) return;
    this._init = true;

    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.hoverCapable = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    this.stage = this.querySelector('[data-rw-stage]');
    this.actorsEl = this.querySelector('[data-rw-actors]');
    this.heroesEl = this.querySelector('[data-rw-heroes]');
    this.cursorEl = this.querySelector('[data-rw-cursor]');
    this.liveEl = this.querySelector('[data-rw-live]');
    this.piecesEl = this.querySelector('[data-rw-pieces]');
    this.panelEl = this.querySelector('.rw__panel');
    this.lbEl = this.querySelector('[data-rw-lb]');
    this.lbStage = this.querySelector('[data-rw-lb-stage]');
    this.lbKicker = this.querySelector('[data-rw-lb-kicker]');
    this.lbName = this.querySelector('[data-rw-lb-name]');
    this.lbClose = this.querySelector('[data-rw-zoom-close]');
    this.autoBtn = this.querySelector('[data-rw-auto]');

    this.ticks = Array.from(this.querySelectorAll('[data-rw-tick]'));
    this.heroes = Array.from(this.querySelectorAll('[data-rw-hero]'));
    this.panels = Array.from(this.querySelectorAll('[data-rw-panel]'));

    this.n = this.heroes.length; // 6
    this.N = this.n * Math.ceil(8 / this.n); // 12

    // Clone bodies 0..5 into 6..11
    const origBodies = Array.from(this.actorsEl.querySelectorAll('[data-rw-model]'));
    for (let i = 0; i < this.n; i++) {
      const clone = origBodies[i].cloneNode(true);
      clone.setAttribute('data-rw-clone', '');
      clone.querySelectorAll('img').forEach((im) => {
        im.loading = 'lazy';
        im.classList.remove('is-decoded');
      });
      this.actorsEl.appendChild(clone);
    }

    this.allBodies = Array.from(this.actorsEl.querySelectorAll('[data-rw-model]'));
    this.bodies = this.allBodies.map((el, a) => ({
      el,
      a,
      look: a % this.n,
      hit: el.querySelector('[data-rw-go]'),
      w: 0,
      lastBlur: '',
      x: a,
      g: a,
      vel: 0,
      goal: a,
      from: a,
      trip: false,
    }));

    // Decode all model images
    this.querySelectorAll('[data-model-image]').forEach(decodeImage);

    // Carousel physics & state
    this.K = 95;
    this.C = 2 * Math.sqrt(this.K);
    this.speedMs = parseInt(this.dataset.speed || '5000', 10) || 5000;
    this.autoplayEnabled = this.dataset.autoplay === 'true';

    this.index = 0;
    this.target = 0;
    const startOffset = this.reducedMotion ? 0 : 1.15;
    this.cur = -startOffset;
    this.vel = 0;

    // Classic initial positions
    for (const s of this.bodies) {
      s.goal = s.a;
      s.g = s.a;
      s.x = s.a + startOffset;
      s.vel = 0;
      s.from = s.x;
      s.trip = false;
    }

    this.still = false;
    this.visible = true;
    this.dragging = false;
    this.suppressClickUntil = 0;
    this.playing = false;
    this.engaged = false;
    this.panelHover = false;
    this.zoomed = false;
    this.autoTimer = 0;
    this.rafId = 0;
    this.lastTime = 0;
    this.lbTimer = 0;
    this.lbReturnFocus = false;

    this.W = 0;
    this.H = 0;
    this.vhLatched = 0;
    this.lastWinW = 0;
    this.isMobile = window.innerWidth < 750;
    this.mode = this.isMobile ? 'classic' : 'ring';
    this.unit = 300;
    this.fs = 1.08;

    // Cursor state
    this.cursorState = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
      entered: false,
      raf: 0,
    };
    if (!this.hoverCapable && this.cursorEl) {
      this.cursorEl.remove();
      this.cursorEl = null;
    } else if (this.cursorEl) {
      this.classList.add('rw--cursor');
    }

    // Sheet host for mobile
    this.sheetHost = null;
    this.activeSheetPicker = null;
    this.activeSheetCard = null;
    this.activeSheetAnchor = null;

    // Initialize pickers' selected variant from checked radio (without setting touched)
    this.initPickers();

    // Class rw--js + intro reveal
    this.classList.add('rw--js');
    this.setupReveal();

    // Measure, feet detection, observers, listeners
    this.measure();
    this.detectFeet();
    this.bindEvents();

    // Initial silent index
    this.setIndex(0, true);
    if (this.reducedMotion) {
      this.cur = 0;
      this.vel = 0;
      this.setStill(true);
    }
    this.renderAll();
    this.kick();

    if (this.autoplayEnabled && !this.reducedMotion) {
      this.play(true);
    }
  }

  initPickers() {
    this.querySelectorAll('.rw__item').forEach((card) => {
      this.syncCardVariant(card, false);
    });
  }

  getVariants(card) {
    if (card._variants) return card._variants;
    const script = card.querySelector('[data-rw-variants]');
    if (!script) return [];
    try {
      card._variants = JSON.parse(script.textContent || '[]');
    } catch {
      card._variants = [];
    }
    return card._variants;
  }

  syncCardVariant(card, markTouched) {
    const picker = this.getCardPicker(card);
    if (!picker) return;
    const variants = this.getVariants(card);
    const checked = picker.querySelector('input[data-rw-option="0"]:checked');
    const selectedVal = checked ? checked.value : '';

    // Update availability per pill
    picker.querySelectorAll('.rw__pill').forEach((pill) => {
      const input = pill.querySelector('input');
      const val = input ? input.value : '';
      const hasAvail = variants.some((v) => v.a && v.o[0] === val);
      pill.classList.toggle('is-unavailable', !hasAvail);
    });

    const match = variants.find((v) => v.o[0] === selectedVal);
    const confirmBtn = picker.querySelector('[data-rw-confirm]');
    const confirmLabel = picker.querySelector('[data-rw-confirm-label]');
    if (match && match.a) {
      card.dataset.selected = String(match.id);
      if (confirmBtn) confirmBtn.disabled = false;
      if (confirmLabel) confirmLabel.textContent = confirmLabel.dataset.add || 'Add to bag';
    } else {
      delete card.dataset.selected;
      if (confirmBtn) confirmBtn.disabled = true;
      if (confirmLabel) confirmLabel.textContent = this.dataset.msgSoldout || 'Sold out';
    }

    if (markTouched) {
      card.dataset.touched = '1';
    }
  }

  getCardPicker(card) {
    if (this.activeSheetCard === card && this.activeSheetPicker) {
      return this.activeSheetPicker;
    }
    return card.querySelector('[data-rw-picker]');
  }

  setupReveal() {
    if (this.reducedMotion) {
      this.classList.add('is-revealed');
      return;
    }
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                this.classList.add('is-revealed');
              });
            });
            this.revealObserver.disconnect();
            this.revealObserver = null;
          }
        }
      },
      { threshold: 0, rootMargin: '0px 0px -22% 0px' }
    );
    this.revealObserver.observe(this);
  }

  measure() {
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const prevMode = this.mode;
    this.isMobile = winW < 750;
    this.mode = this.isMobile ? 'classic' : 'ring';

    if (prevMode !== this.mode && !this.isMobile) {
      this.dockAllSheets();
    }

    let frameH;
    if (!this.isMobile) {
      let headerH = 0;
      document
        .querySelectorAll('.shopify-section-group-header-group, #shopify-section-header, #shopify-section-announcement-bar')
        .forEach((el) => {
          if (el.contains(this)) return;
          const r = el.getBoundingClientRect();
          if (r.height > 0 && getComputedStyle(el).display !== 'none') {
            headerH += r.height;
          }
        });
      frameH = Math.max(380, winH - headerH);
    } else {
      if (!this.vhLatched || winW !== this.lastWinW || Math.abs(winH - this.vhLatched) >= 160) {
        this.vhLatched = winH;
        this.lastWinW = winW;
      }
      const pct = clamp(parseFloat(this.dataset.mheightVh || '109'), 50, 120);
      frameH = (this.vhLatched * pct) / 100;
    }

    this.style.setProperty('--rw-frame-h', `${Math.round(frameH)}px`);

    const rect = this.stage.getBoundingClientRect();
    this.W = rect.width;
    this.H = rect.height;

    this.fs = this.mode === 'ring' ? 1.08 : 1;
    this.stage.style.setProperty('--rw-fs', String(this.fs));

    let modelH;
    if (this.mode === 'ring') {
      modelH = Math.max(200, Math.round((this.H - 34 - 18) / 1.08));
    } else {
      modelH = Math.max(200, Math.round(this.H - (this.isMobile ? 24 : 36) - 18));
    }
    this.style.setProperty('--rw-model-h', `${modelH}px`);

    const hx = this.mode === 'ring' ? 0.5 * this.W : (this.isMobile ? 0.3 * this.W : 0.4 * this.W);
    const hy = this.mode === 'ring' ? 34 : (this.isMobile ? 22 : 36);
    this.stage.style.setProperty('--rw-hx', `${hx}px`);
    this.stage.style.setProperty('--rw-hy', `${hy}px`);
    this.style.setProperty('--rw-ax', `${(this.W > 0 ? (hx / this.W) * 100 : 40).toFixed(2)}%`);

    if (this.mode === 'ring') {
      this.unit = Math.max(this.isMobile ? 90 : 120, 0.3 * this.W);
    } else {
      this.unit = Math.max(90, this.W * 0.32 * 1.6);
    }

    for (const s of this.bodies) {
      s.w = s.el.offsetWidth || Math.round(modelH * 0.5625);
    }

    if (this.zoomed && this.lbStage) {
      this.sizeLightboxModel();
    }

    if (prevMode !== this.mode) {
      if (this.mode === 'classic') {
        const base = Math.round(this.target);
        this.target = base;
        this.cur = base;
        for (const s of this.bodies) {
          const g = wrapN(s.a - this.target, this.N);
          s.goal = g;
          s.g = g;
          s.x = g;
          s.vel = 0;
          s.trip = false;
        }
      } else {
        this.cur = this.target;
        this.vel = 0;
      }
      this.setStill(true);
    }

    this.renderAll();
  }

  detectFeet() {
    this.heroes.forEach((hero, lookIdx) => {
      const url = hero.getAttribute('data-probe');
      if (!url) return;
      const probe = new Image();
      probe.crossOrigin = 'anonymous';
      probe.onload = () => {
        try {
          const w = 48;
          const h = Math.max(1, Math.round((w * probe.naturalHeight) / probe.naturalWidth));
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          if (!ctx) return;
          ctx.drawImage(probe, 0, 0, w, h);
          const data = ctx.getImageData(0, 0, w, h).data;
          let lastRow = h - 1;
          let found = false;
          for (let y = h - 1; y >= 0; y--) {
            const rowStart = y * w * 4;
            for (let x = 0; x < w; x++) {
              if (data[rowStart + x * 4 + 3] > 40) {
                lastRow = y;
                found = true;
                break;
              }
            }
            if (found) break;
          }
          if (found) {
            const foot = clamp((h - 1 - lastRow) / h, 0, 0.4);
            const val = foot.toFixed(4);
            hero.style.setProperty('--rw-foot', val);
            for (const s of this.bodies) {
              if (s.look === lookIdx) {
                s.el.style.setProperty('--rw-foot', val);
              }
            }
          }
        } catch {
          // Silently keep offset 0 on tainted canvas
        }
      };
      probe.src = url;
    });
  }

  setStill(isStill) {
    if (this.still === isStill) return;
    this.still = isStill;
    this.classList.toggle('rw--still', isStill);
  }

  put(s, x, bottom, scale, opacity, blur, z) {
    const halfW = (s.w * scale) / 2;
    if (x + halfW < -4 || x - halfW > this.W + 4) {
      opacity = 0;
    }
    opacity = clamp(opacity, 0, 1);

    const el = s.el;
    el.style.transform = `translate3d(${x.toFixed(2)}px, ${(-bottom).toFixed(2)}px, 0) translateX(-50%) scale(${scale.toFixed(4)})`;
    el.style.opacity = opacity.toFixed(3);
    el.style.zIndex = String(z);
    el.style.visibility = opacity < 0.01 ? 'hidden' : 'visible';
    el.style.pointerEvents = opacity < 0.5 ? 'none' : 'auto';

    if (this.dataset.blur === 'true') {
      const b = Math.round(blur * 10) / 10;
      const nextFilter = b <= 0.05 ? '' : `blur(${b.toFixed(1)}px)`;
      if (s.lastBlur !== nextFilter) {
        s.lastBlur = nextFilter;
        el.style.filter = nextFilter;
      }
    }
  }

  renderAll() {
    if (!this.W || !this.H) return;

    if (this.mode === 'ring') {
      const W = this.W;
      const H = this.H;
      const cx = 0.5 * W;
      const R = (this.isMobile ? 0.72 : 0.62) * W;
      const P = (this.isMobile ? 1.9 : 1.65) * W;
      const floor = H - 34;
      const horizon = 0.36 * H;
      const step = (2 * Math.PI) / this.N;

      for (const s of this.bodies) {
        let phi = ((s.a - this.cur) * step) % (2 * Math.PI);
        if (phi > Math.PI) phi -= 2 * Math.PI;
        if (phi <= -Math.PI) phi += 2 * Math.PI;

        const zDepth = R * (1 - Math.cos(phi));
        const persp = P / (P + zDepth);
        const sl = Math.abs(phi) / step;
        const scale = persp * (1 + (this.fs - 1) * clamp(1 - sl, 0, 1));
        const x = cx + R * Math.sin(phi) * persp;
        const feet = horizon + (floor - horizon) * persp;
        const bottom = H - feet;
        const blur = sl <= 1 ? 1.8 * sl : Math.min(1.8 + (sl - 1) * 2, 6.5);
        let opacity = clamp((Math.cos(phi) + 0.55) / 0.3, 0, 1);
        if (this.still && sl < 0.02) {
          opacity = 0;
        }
        const z = Math.round(scale * 1000);
        this.put(s, x, bottom, scale, opacity, blur, z);
      }
    } else {
      // Classic mode (phones)
      const W = this.W;
      const ax = 0.3;
      const ay = 22;
      const sx = 0.32;
      const sy = 22;
      const sr = 0.76;
      const ex = 0.55;
      const d = 4;

      for (const s of this.bodies) {
        let k = s.x;
        let e = -1;

        if (s.trip && Math.abs(s.goal - s.from) > 0.0001) {
          const u = clamp(Math.abs(s.x - s.from) / Math.abs(s.goal - s.from), 0, 1);
          if (s.goal > s.from) {
            if (u < 0.5) {
              e = 2 * u * 1.4;
            } else {
              k = s.goal + 2 * (1 - u);
            }
          } else {
            if (u < 0.5) {
              k = s.from + 2 * u;
            } else {
              e = 2 * (1 - u) * 1.4;
            }
          }
        } else if (k < 0) {
          e = Math.min(-k, 1.4);
        }

        if (e >= 0) {
          const x = W * (ax - ex * e);
          const bottom = ay - 22 * e;
          const scale = 1 + 0.14 * e;
          const opacity = Math.max(0, 1 - 1.05 * e);
          const blur = 4 * Math.min(e, 1);
          this.put(s, x, bottom, scale, opacity, blur, 1100);
        } else {
          const x = W * (ax + sx * k);
          const bottom = ay + sy * k;
          const scale = Math.pow(sr, k);
          let opacity = k <= d - 1 ? 1 - 0.13 * k : Math.max(0, 0.61 * (4 - k));
          const blur = Math.min(0.9 * k, 3.2);
          const z = 1000 - Math.round(10 * k);
          if (this.still && k < 0.02) {
            opacity = 0;
          }
          this.put(s, x, bottom, scale, opacity, blur, z);
        }
      }
    }
  }

  kick() {
    if (!this.visible || document.hidden || this.rafId) return;
    this.lastTime = 0;
    const step = (now) => {
      this.rafId = 0;
      if (!this.visible || document.hidden) return;

      const dt = this.lastTime ? Math.min(0.034, (now - this.lastTime) / 1000) : 1 / 60;
      this.lastTime = now;

      let settled = true;

      if (this.mode === 'ring') {
        if (this.dragging || this.reducedMotion) {
          this.cur = this.target;
          this.vel = 0;
          settled = !this.dragging;
        } else {
          const h = dt / 3;
          for (let j = 0; j < 3; j++) {
            const acc = -this.K * (this.cur - this.target) - this.C * this.vel;
            this.vel += acc * h;
            this.cur += this.vel * h;
          }
          if (Math.abs(this.cur - this.target) <= 0.0005 && Math.abs(this.vel) <= 0.0005) {
            this.cur = this.target;
            this.vel = 0;
            settled = true;
          } else {
            settled = false;
          }
        }
      } else {
        // Classic per-body springs
        this.cur = this.target;
        for (const s of this.bodies) {
          const newGoal = wrapN(s.a - this.target, this.N);
          if (Math.abs(newGoal - s.goal) > this.N / 2) {
            s.trip = true;
            s.from = s.x;
          }
          s.goal = newGoal;

          if (this.reducedMotion) {
            s.g = s.goal;
            s.x = s.goal;
            s.vel = 0;
            s.trip = false;
            continue;
          }

          const tau = this.dragging
            ? 0.016
            : s.trip
              ? 0.1
              : 0.03 + 0.04 * Math.min(s.goal, 4);
          s.g += (s.goal - s.g) * (1 - Math.exp(-dt / tau));

          const h = dt / 3;
          for (let j = 0; j < 3; j++) {
            const acc = -this.K * (s.x - s.g) - this.C * s.vel;
            s.vel += acc * h;
            s.x += s.vel * h;
          }

          if (s.trip && Math.abs(s.x - s.goal) < 0.02) {
            s.trip = false;
          }

          if (Math.abs(s.x - s.goal) <= 0.0006 && Math.abs(s.vel) <= 0.0006 && !s.trip) {
            s.x = s.goal;
            s.g = s.goal;
            s.vel = 0;
          } else {
            settled = false;
          }
        }
        if (this.dragging) settled = false;
      }

      if (!settled) {
        this.setStill(false);
        this.renderAll();
        this.rafId = requestAnimationFrame(step);
      } else {
        this.setStill(true);
        this.renderAll();
      }
    };
    this.rafId = requestAnimationFrame(step);
  }

  getBodyRank(s) {
    if (this.mode === 'ring') {
      let k = Math.round(s.a - this.target) % this.N;
      if (k > this.N / 2) k -= this.N;
      if (k <= -this.N / 2) k += this.N;
      return k;
    }
    return Math.round(wrapN(s.a - this.target, this.N));
  }

  updateBodyA11y() {
    for (const s of this.bodies) {
      const k = this.getBodyRank(s);
      const reachable =
        this.mode === 'ring' ? k !== 0 && Math.abs(k) <= 2 : k !== 0 && Math.abs(k) <= 3;
      if (reachable) {
        s.el.removeAttribute('aria-hidden');
        if (s.hit) s.hit.tabIndex = 0;
      } else {
        s.el.setAttribute('aria-hidden', 'true');
        if (s.hit) s.hit.tabIndex = -1;
      }
    }
  }

  setIndex(i, silent = false) {
    const nextIdx = ((i % this.n) + this.n) % this.n;
    const prevIdx = this.index;
    this.index = nextIdx;
    this.updateBodyA11y();
    this.kick();

    this.style.setProperty('--rw-progress', ((nextIdx + 1) / this.n).toFixed(3));

    if (silent || nextIdx === prevIdx) {
      this.restartAutoBar();
      return;
    }

    if (this.zoomed) this.closeLightbox();
    this.dockAllSheets();

    this.heroes.forEach((hero, idx) => {
      const isOn = idx === nextIdx;
      const was = idx === prevIdx && prevIdx !== nextIdx;
      hero.classList.toggle('is-on', isOn);
      hero.classList.toggle('was', was);
      hero.setAttribute('aria-hidden', isOn ? 'false' : 'true');
      const zoomBtn = hero.querySelector('[data-rw-zoom]');
      if (zoomBtn) zoomBtn.tabIndex = isOn ? 0 : -1;
    });

    if (!this.reducedMotion) {
      this.stage.classList.remove('is-sweep');
      void this.stage.offsetWidth;
      this.stage.classList.add('is-sweep');
    }

    const activeHero = this.heroes[nextIdx];
    if (this.liveEl && activeHero) {
      this.liveEl.textContent = activeHero.dataset.label || '';
    }

    this.ticks.forEach((tick, idx) => {
      tick.setAttribute('aria-current', idx === nextIdx ? 'true' : 'false');
      tick.classList.toggle('is-past', idx < nextIdx);
    });

    this.panels.forEach((panel, idx) => {
      const show = idx === nextIdx;
      panel.hidden = !show;
      panel.classList.remove('is-in');
    });

    const activePanel = this.panels[nextIdx];
    if (activePanel) {
      void activePanel.offsetWidth;
      activePanel.classList.add('is-in');
      const tpl = activePanel.querySelector('[data-rw-pieces-text]');
      if (this.piecesEl && tpl) {
        this.piecesEl.textContent = tpl.textContent || '';
        this.piecesEl.classList.remove('is-swap');
        void this.piecesEl.offsetWidth;
        this.piecesEl.classList.add('is-swap');
      }
    }

    this.clearHot();
    this.restartAutoBar();
  }

  moveTo(T) {
    this.target = T;
    this.setStill(false);
    this.setIndex(((T % this.n) + this.n) % this.n, false);
  }

  next() {
    this.moveTo(Math.round(this.target) + 1);
  }

  prev() {
    this.moveTo(Math.round(this.target) - 1);
  }

  go(i) {
    let d = (((i - this.index) % this.n) + this.n) % this.n;
    if (d > this.n / 2) d -= this.n;
    this.moveTo(Math.round(this.target) + d);
  }

  play(on) {
    this.playing = Boolean(on);
    this.classList.toggle('is-playing', this.playing);
    if (this.autoBtn) {
      this.autoBtn.setAttribute('aria-pressed', this.playing ? 'true' : 'false');
    }
    this.restartAutoBar();
  }

  engage() {
    this.engaged = true;
    if (this.playing) this.play(false);
  }

  restartAutoBar() {
    clearTimeout(this.autoTimer);
    this.ticks.forEach((t) => t.classList.remove('is-run'));
    if (!this.playing) return;

    const currentTick = this.ticks[this.index];
    if (currentTick) {
      void currentTick.offsetWidth;
      currentTick.classList.add('is-run');
    }

    this.autoTimer = window.setTimeout(() => {
      if (
        this.playing &&
        this.visible &&
        !this.dragging &&
        !document.hidden &&
        !this.panelHover &&
        !this.zoomed &&
        !this.engaged
      ) {
        this.next();
      } else if (this.playing) {
        this.restartAutoBar();
      }
    }, this.speedMs);
  }

  clearHot() {
    this.querySelectorAll('.is-hot').forEach((el) => el.classList.remove('is-hot'));
  }

  hot(n, scroll = false) {
    this.clearHot();
    if (!n) return;
    const pinContainer = this.zoomed ? this.lbEl : this.heroes[this.index];
    if (pinContainer) {
      const pin = pinContainer.querySelector(`[data-rw-pin="${n}"]`);
      if (pin) pin.classList.add('is-hot');
    }

    const panel = this.panels[this.index];
    if (!panel) return;
    const card = panel.querySelector(`[data-rw-card="${n}"]`);
    if (!card) return;
    card.classList.add('is-hot');

    if (scroll) {
      const behavior = this.reducedMotion ? 'auto' : 'smooth';
      const list = panel.querySelector('.rw__items');
      if (list && list.scrollWidth > list.clientWidth + 2) {
        const cr = card.getBoundingClientRect();
        const lr = list.getBoundingClientRect();
        list.scrollTo({ left: list.scrollLeft + (cr.left - lr.left) - 20, behavior });
      } else if (list && list.scrollHeight > list.clientHeight + 2) {
        list.scrollTo({ top: card.offsetTop - list.offsetTop - 12, behavior });
      } else {
        const cr = card.getBoundingClientRect();
        if (cr.top < 0 || cr.bottom > window.innerHeight - 140) {
          window.scrollBy({ top: cr.top - 0.3 * window.innerHeight, behavior });
        }
      }
    }
  }

  // Size picker & mobile sheet
  openPicker(card) {
    const picker = this.getCardPicker(card);
    if (!picker) return;

    if (this.isMobile) {
      this.openSheet(card, picker);
      return;
    }

    picker.hidden = false;
    card.classList.add('is-picking');
    const addBtn = card.querySelector('[data-rw-add]');
    if (addBtn) addBtn.setAttribute('aria-expanded', 'true');
    const checked = picker.querySelector('input:checked');
    if (checked) checked.focus({ preventScroll: true });
    card.scrollIntoView({ behavior: this.reducedMotion ? 'auto' : 'nearest', block: 'nearest' });
  }

  closePicker(card) {
    if (this.activeSheetCard === card) {
      this.dockAllSheets();
      return;
    }
    const picker = card.querySelector('[data-rw-picker]');
    if (picker) picker.hidden = true;
    card.classList.remove('is-picking');
    const addBtn = card.querySelector('[data-rw-add]');
    if (addBtn) addBtn.setAttribute('aria-expanded', 'false');
  }

  togglePicker(card) {
    if (card.classList.contains('is-added')) return;
    if (card.classList.contains('is-picking')) {
      this.closePicker(card);
    } else {
      this.openPicker(card);
    }
  }

  openSheet(card, picker) {
    this.dockAllSheets();

    const host = document.createElement('div');
    host.className = 'rw-sheet-host';

    const cs = getComputedStyle(this);
    const props = [
      '--rw-panel',
      '--rw-text',
      '--rw-muted',
      '--rw-line',
      '--rw-accent',
      '--rw-on-accent',
      '--rw-btn-bg',
      '--rw-btn-fg',
      '--rw-btn-radius',
      '--rw-pill-radius',
      '--rw-bar-r',
      '--rw-thumb-radius',
      '--rw-pt-size',
      '--rw-price',
      '--rw-opt',
      '--rw-ease',
      '--rw-ease-sheet',
      '--rw-ease-spring',
    ];
    for (const p of props) {
      host.style.setProperty(p, cs.getPropertyValue(p));
    }
    host.style.fontFamily = cs.fontFamily;
    host.style.color = cs.color;

    const scrim = document.createElement('button');
    scrim.type = 'button';
    scrim.className = 'rw__pick-scrim';
    scrim.setAttribute('data-rw-pick-close', '');
    scrim.tabIndex = -1;
    scrim.setAttribute('aria-hidden', 'true');
    host.appendChild(scrim);

    const anchor = document.createComment('rw-picker-anchor');
    picker.parentNode.insertBefore(anchor, picker);

    picker.hidden = false;
    host.appendChild(picker);
    document.body.appendChild(host);

    this.sheetHost = host;
    this.activeSheetPicker = picker;
    this.activeSheetCard = card;
    this.activeSheetAnchor = anchor;

    card.classList.add('is-picking');
    this.classList.add('rw--picking');
    const addBtn = card.querySelector('[data-rw-add]');
    if (addBtn) addBtn.setAttribute('aria-expanded', 'true');

    requestAnimationFrame(() => {
      host.classList.add('is-open');
    });

    const checked = picker.querySelector('input:checked');
    if (checked) checked.focus({ preventScroll: true });

    host.addEventListener('click', (e) => this.handleActionClick(e));
    host.addEventListener('change', (e) => {
      const input = e.target.closest('input[data-rw-option]');
      if (!input) return;
      this.engage();
      this.syncCardVariant(card, true);
    });
    host.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        const returnTo = card.querySelector('[data-rw-add]');
        this.dockAllSheets();
        if (returnTo) returnTo.focus();
      }
    });
  }

  dockAllSheets() {
    if (!this.sheetHost) return;
    const card = this.activeSheetCard;
    const picker = this.activeSheetPicker;
    const anchor = this.activeSheetAnchor;

    if (picker && anchor && anchor.parentNode) {
      picker.hidden = true;
      anchor.parentNode.insertBefore(picker, anchor);
      anchor.remove();
    }
    if (card) {
      card.classList.remove('is-picking');
      const addBtn = card.querySelector('[data-rw-add]');
      if (addBtn) addBtn.setAttribute('aria-expanded', 'false');
    }
    this.sheetHost.remove();
    this.sheetHost = null;
    this.activeSheetPicker = null;
    this.activeSheetCard = null;
    this.activeSheetAnchor = null;
    this.classList.remove('rw--picking');
  }

  confirmCard(card) {
    if (card.classList.contains('is-added') || card.classList.contains('is-loading')) return;
    const panel = card.closest('[data-rw-panel]');
    const msgEl = panel ? panel.querySelector('[data-rw-msg]') : null;
    if (msgEl) msgEl.textContent = '';

    this.syncCardVariant(card, true);
    const variantId = Number(card.dataset.selected);
    if (!variantId) {
      if (msgEl) msgEl.textContent = this.dataset.msgError || 'Couldn’t add to bag. Please try again.';
      return;
    }

    card.classList.add('is-loading');
    try {
      bag.add([{ id: variantId, quantity: 1 }]);
      card.classList.remove('is-loading');
      this.markCardAdded(card);
      this.closePicker(card);
      if (this.isMobile && navigator.vibrate && !this.reducedMotion) {
        try {
          navigator.vibrate(12);
        } catch {
          // ignore
        }
      }
      if (panel) this.checkPanelComplete(panel);
    } catch {
      card.classList.remove('is-loading');
      if (msgEl) msgEl.textContent = this.dataset.msgError || 'Couldn’t add to bag. Please try again.';
    }
  }

  markCardAdded(card) {
    card.classList.add('is-added');
    const btn = card.querySelector('[data-rw-add]');
    if (btn) {
      if (btn.dataset.addedLabel) btn.setAttribute('aria-label', btn.dataset.addedLabel);
      btn.removeAttribute('aria-expanded');
    }
  }

  checkPanelComplete(panel) {
    const cards = Array.from(panel.querySelectorAll('.rw__item'));
    if (cards.length >= 2 && cards.every((c) => c.classList.contains('is-added'))) {
      panel.classList.add('is-complete');
      const msgEl = panel.querySelector('[data-rw-msg]');
      if (msgEl) msgEl.textContent = '';
    }
  }

  addFullLook(panel) {
    if (!panel || panel.classList.contains('is-complete')) return;
    const cta = panel.querySelector('[data-rw-all]');
    if (!cta || cta.classList.contains('is-loading')) return;

    const msgEl = panel.querySelector('[data-rw-msg]');
    if (msgEl) msgEl.textContent = '';

    const unadded = Array.from(panel.querySelectorAll('.rw__item')).filter(
      (c) => !c.classList.contains('is-added')
    );

    const ready = [];
    const pending = [];

    for (const card of unadded) {
      const directId = card.dataset.variantId ? Number(card.dataset.variantId) : 0;
      const selectedId = card.dataset.selected ? Number(card.dataset.selected) : 0;
      const touched = card.dataset.touched === '1';

      if (directId) {
        ready.push({ card, id: directId });
      } else if (touched && selectedId) {
        ready.push({ card, id: selectedId });
      } else {
        pending.push(card);
      }
    }

    if (ready.length) {
      cta.classList.add('is-loading');
      for (const r of ready) r.card.classList.add('is-loading');
      try {
        bag.add(ready.map((r) => ({ id: r.id, quantity: 1 })));
        for (const r of ready) {
          r.card.classList.remove('is-loading');
          this.markCardAdded(r.card);
          this.closePicker(r.card);
        }
        cta.classList.remove('is-loading');
        this.checkPanelComplete(panel);
      } catch {
        for (const r of ready) r.card.classList.remove('is-loading');
        cta.classList.remove('is-loading');
        if (msgEl) msgEl.textContent = this.dataset.msgError || 'Couldn’t add to bag. Please try again.';
        return;
      }
    }

    if (pending.length) {
      if (this.isMobile) {
        this.openPicker(pending[0]);
      } else {
        for (const card of pending) {
          this.openPicker(card);
        }
        pending[0].scrollIntoView({
          behavior: this.reducedMotion ? 'auto' : 'smooth',
          block: 'nearest',
        });
      }
      const names = pending.map((c) => c.dataset.title || '').filter(Boolean).join(', ');
      const tpl = this.dataset.msgChoose || 'Pick a size for: [items]';
      if (msgEl) msgEl.textContent = tpl.replace('[items]', names);
    }
  }

  // Lightbox / View look popup
  sizeLightboxModel() {
    const modelWrap = this.lbStage.querySelector('.rw__lb-model');
    if (!modelWrap) return;
    const sr = this.lbStage.getBoundingClientRect();
    const h = Math.max(160, Math.min(sr.height, sr.width / 0.5625));
    modelWrap.style.setProperty('--rw-model-h', `${Math.round(h)}px`);
    const sizesVal = `${Math.round(h * 0.5625)}px`;
    modelWrap.querySelectorAll('img[data-model-image]').forEach((im) => {
      im.sizes = sizesVal;
    });
  }

  openLightbox() {
    if (this.zoomed) return;
    const hero = this.heroes[this.index];
    if (!hero || !this.lbEl || !this.lbStage) return;

    this.engage();
    this.clearHot();
    clearTimeout(this.lbTimer);

    const runwayFig = hero.querySelector('.rw__figure');
    const a = runwayFig ? runwayFig.getBoundingClientRect() : null;

    const wrap = document.createElement('div');
    wrap.className = 'rw__lb-model';
    const foot = hero.style.getPropertyValue('--rw-foot');
    if (foot) wrap.style.setProperty('--rw-foot', foot);

    const shadow = hero.querySelector('.rw__shadow');
    if (shadow) wrap.appendChild(shadow.cloneNode(true));
    if (runwayFig) {
      const figClone = runwayFig.cloneNode(true);
      const zoomBtn = figClone.querySelector('[data-rw-zoom]');
      if (zoomBtn) zoomBtn.remove();
      figClone.querySelectorAll('[data-rw-pin]').forEach((pin) => {
        pin.tabIndex = 0;
      });
      figClone.querySelectorAll('img[data-model-image]').forEach((im) => {
        im.loading = 'eager';
        im.classList.remove('is-decoded');
        decodeImage(im);
      });
      wrap.appendChild(figClone);
    }

    this.lbStage.replaceChildren(wrap);
    this.sizeLightboxModel();

    const word = this.lbEl.dataset.word || 'Look';
    const numStr = String(this.index + 1).padStart(2, '0');
    if (this.lbKicker) this.lbKicker.textContent = `${word} ${numStr}`;
    if (this.lbName) this.lbName.textContent = hero.dataset.name || '';

    const lbFig = wrap.querySelector('.rw__figure');
    const b = lbFig ? lbFig.getBoundingClientRect() : null;

    if (!this.reducedMotion && a && b && b.height > 0) {
      wrap.style.transformOrigin = '0 100%';
      wrap.style.transition = 'none';
      wrap.style.transform = `translate3d(${(a.left - b.left).toFixed(2)}px, ${(a.bottom - b.bottom).toFixed(2)}px, 0) scale(${(a.height / b.height).toFixed(5)})`;
      void wrap.offsetWidth;
      wrap.style.transition = '';
    }

    this.zoomed = true;
    this.classList.add('rw--zoom');
    this.lbEl.setAttribute('aria-hidden', 'false');

    if (!this.reducedMotion && a && b && b.height > 0) {
      wrap.style.transform = '';
    }

    if (this.lbClose) {
      this.lbClose.focus({ preventScroll: true });
    }
  }

  closeLightbox() {
    if (!this.zoomed) return;
    this.zoomed = false;
    this.clearHot();
    const focusInside = this.lbEl && this.lbEl.contains(document.activeElement);

    const wrap = this.lbStage ? this.lbStage.querySelector('.rw__lb-model') : null;
    const hero = this.heroes[this.index];
    const runwayFig = hero ? hero.querySelector('.rw__figure') : null;
    const lbFig = wrap ? wrap.querySelector('.rw__figure') : null;

    if (!this.reducedMotion && wrap && runwayFig && lbFig) {
      const a = runwayFig.getBoundingClientRect();
      const b = lbFig.getBoundingClientRect();
      if (b.height > 0) {
        wrap.style.transformOrigin = '0 100%';
        wrap.style.transform = `translate3d(${(a.left - b.left).toFixed(2)}px, ${(a.bottom - b.bottom).toFixed(2)}px, 0) scale(${(a.height / b.height).toFixed(5)})`;
      }
    }

    this.classList.remove('rw--zoom');
    if (this.lbEl) this.lbEl.setAttribute('aria-hidden', 'true');

    clearTimeout(this.lbTimer);
    const delay = this.reducedMotion ? 0 : 950;
    this.lbTimer = window.setTimeout(() => {
      if (!this.zoomed && this.lbStage) {
        this.lbStage.replaceChildren();
      }
    }, delay);

    if (focusInside && this.stage) {
      this.stage.focus({ preventScroll: true });
    }
  }

  handleActionClick(e) {
    if (Date.now() < this.suppressClickUntil) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    const t = e.target;

    // 1. pick-close
    if (t.closest('[data-rw-pick-close]')) {
      const sheetCard = this.activeSheetCard;
      this.dockAllSheets();
      const card = t.closest('.rw__item');
      if (card) this.closePicker(card);
      if (sheetCard) {
        const addBtn = sheetCard.querySelector('[data-rw-add]');
        if (addBtn) addBtn.focus({ preventScroll: true });
      }
      return;
    }

    // 2. popup close button
    if (t.closest('[data-rw-zoom-close]')) {
      this.closeLightbox();
      return;
    }

    // 3. click on popup backdrop or popup stage (beside the model)
    if (this.zoomed && this.lbEl && (t === this.lbEl || t === this.lbStage)) {
      this.closeLightbox();
      return;
    }

    // 4. [data-rw-zoom]
    if (t.closest('[data-rw-zoom]')) {
      this.openLightbox();
      return;
    }

    // 5. next
    if (t.closest('[data-rw-next]')) {
      this.next();
      return;
    }

    // 6. prev
    if (t.closest('[data-rw-prev]')) {
      this.prev();
      return;
    }

    // 7. tick
    const tickBtn = t.closest('[data-rw-tick]');
    if (tickBtn) {
      this.go(parseInt(tickBtn.dataset.rwTick || '0', 10));
      return;
    }

    // 8. autoplay toggle
    if (t.closest('[data-rw-auto]')) {
      if (!this.playing) this.engaged = false;
      this.play(!this.playing);
      return;
    }

    // 9. pin
    const pinBtn = t.closest('[data-rw-pin]');
    if (pinBtn) {
      this.engage();
      this.hot(pinBtn.dataset.rwPin, true);
      return;
    }

    // 10. queue body [data-rw-go]
    const goBtn = t.closest('[data-rw-go]');
    if (goBtn) {
      const bodyEl = goBtn.closest('[data-rw-model]');
      const s = this.bodies.find((b) => b.el === bodyEl);
      if (s) {
        const k = this.getBodyRank(s);
        if (k === 0) {
          this.openLightbox();
        } else if (Math.abs(k) < this.n) {
          this.moveTo(Math.round(this.target) + k);
        }
      }
      return;
    }

    // 11. size confirm
    const confirmBtn = t.closest('[data-rw-confirm]');
    if (confirmBtn) {
      const card = confirmBtn.closest('.rw__item') || this.activeSheetCard;
      if (card) this.confirmCard(card);
      return;
    }

    // 12. plus button
    const addBtn = t.closest('[data-rw-add]');
    if (addBtn) {
      const card = addBtn.closest('.rw__item');
      if (card) this.togglePicker(card);
      return;
    }

    // 13. add full look
    const allBtn = t.closest('[data-rw-all]');
    if (allBtn) {
      const panel = allBtn.closest('[data-rw-panel]');
      if (panel) this.addFullLook(panel);
    }
  }

  bindEvents() {
    this._onResize = () => {
      clearTimeout(this._resizeTimer);
      this._resizeTimer = window.setTimeout(() => this.measure(), 120);
    };
    window.addEventListener('resize', this._onResize);

    if (typeof ResizeObserver !== 'undefined') {
      this._ro = new ResizeObserver(() => this.measure());
      this._ro.observe(this.stage);
    }

    this._io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          this.visible = entry.isIntersecting;
          if (this.visible) this.kick();
        }
      },
      { threshold: 0 }
    );
    this._io.observe(this);

    this._onVisibility = () => {
      if (!document.hidden) {
        this.kick();
        if (this.playing) this.restartAutoBar();
      }
    };
    document.addEventListener('visibilitychange', this._onVisibility);

    // Delegated click (with capture suppression check)
    this._onCaptureClick = (e) => {
      if (Date.now() < this.suppressClickUntil) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    this.addEventListener('click', this._onCaptureClick, true);

    this._onClick = (e) => this.handleActionClick(e);
    this.addEventListener('click', this._onClick);

    // Panel engage & hover
    if (this.panelEl) {
      this._onPanelEnter = (e) => {
        if (e.pointerType === 'mouse') {
          this.panelHover = true;
        }
      };
      this._onPanelLeave = (e) => {
        if (e.pointerType === 'mouse') {
          this.panelHover = false;
          if (this.playing) this.restartAutoBar();
        }
      };
      this._onPanelClick = (e) => {
        if (e.target.closest('button, a, input, select, label')) {
          this.engage();
        }
      };
      this._onPanelChange = (e) => {
        this.engage();
        const input = e.target.closest('input[data-rw-option]');
        if (input) {
          const card = input.closest('.rw__item');
          if (card) this.syncCardVariant(card, true);
        }
      };
      this._onPanelPointerOver = (e) => {
        if (e.pointerType !== 'mouse') return;
        const card = e.target.closest('.rw__item');
        if (card) this.hot(card.dataset.rwCard, false);
      };
      this._onPanelPointerOut = (e) => {
        if (e.pointerType !== 'mouse') return;
        const card = e.target.closest('.rw__item');
        if (card && (!e.relatedTarget || !card.contains(e.relatedTarget))) {
          this.clearHot();
        }
      };

      this.panelEl.addEventListener('pointerenter', this._onPanelEnter);
      this.panelEl.addEventListener('pointerleave', this._onPanelLeave);
      this.panelEl.addEventListener('click', this._onPanelClick);
      this.panelEl.addEventListener('change', this._onPanelChange);
      this.panelEl.addEventListener('pointerover', this._onPanelPointerOver);
      this.panelEl.addEventListener('pointerout', this._onPanelPointerOut);
    }

    // Keyboard
    this._onStageKey = (e) => {
      if (e.target !== this.stage) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.prev();
      }
    };
    this.stage.addEventListener('keydown', this._onStageKey);

    this._onKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (this.activeSheetCard) {
          e.preventDefault();
          const addBtn = this.activeSheetCard.querySelector('[data-rw-add]');
          this.dockAllSheets();
          if (addBtn) addBtn.focus({ preventScroll: true });
          return;
        }
        const openInline = this.querySelector('.rw__item.is-picking');
        if (openInline) {
          e.preventDefault();
          const addBtn = openInline.querySelector('[data-rw-add]');
          this.closePicker(openInline);
          if (addBtn) addBtn.focus({ preventScroll: true });
          return;
        }
        if (this.zoomed) {
          e.preventDefault();
          this.closeLightbox();
        }
      }
    };
    this.addEventListener('keydown', this._onKeyDown);

    // Trackpad horizontal wheel
    let wheelAcc = 0;
    let wheelLockedUntil = 0;
    this._onWheel = (e) => {
      if (this.zoomed) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        const now = Date.now();
        if (now < wheelLockedUntil) return;
        wheelAcc += e.deltaX;
        if (Math.abs(wheelAcc) > 45) {
          if (wheelAcc > 0) this.next();
          else this.prev();
          wheelAcc = 0;
          wheelLockedUntil = now + 520;
        }
      }
    };
    this.stage.addEventListener('wheel', this._onWheel, { passive: false });

    // Pointer drag / swipe
    let dragState = null;
    this._onPointerDown = (e) => {
      if (this.zoomed) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      dragState = {
        id: e.pointerId,
        type: e.pointerType,
        startX: e.clientX,
        startY: e.clientY,
        t: this.target,
        active: false,
        abandoned: false,
        samples: [{ x: e.clientX, time: performance.now() }],
      };
    };

    this._onPointerMove = (e) => {
      // Custom cursor update
      if (this.cursorEl && e.pointerType === 'mouse') {
        const sr = this.stage.getBoundingClientRect();
        this.cursorState.tx = e.clientX - sr.left;
        this.cursorState.ty = e.clientY - sr.top;

        if (!this.cursorState.entered) {
          this.cursorState.entered = true;
          this.cursorState.x = this.cursorState.tx;
          this.cursorState.y = this.cursorState.ty;
          this.cursorEl.style.transform = `translate3d(${this.cursorState.x.toFixed(2)}px, ${this.cursorState.y.toFixed(2)}px, 0)`;
          this.cursorEl.classList.add('is-on');
        }

        const isZoom = Boolean(e.target.closest('.rw__zoom')) && !this.dragging;
        const isLink =
          Boolean(e.target.closest('.rw__pin, .rw__hit')) && !this.dragging;
        this.cursorEl.classList.toggle('is-view', isZoom);
        this.cursorEl.classList.toggle('is-link', isLink);
        this.startCursorLoop();
      }

      if (!dragState || e.pointerId !== dragState.id || dragState.abandoned) return;
      if (e.pointerType === 'mouse' && (e.buttons & 1) === 0) {
        this.finishDrag(dragState, e);
        dragState = null;
        return;
      }

      const dx = e.clientX - dragState.startX;
      const dy = e.clientY - dragState.startY;

      if (!dragState.active) {
        if (Math.abs(dy) > 10 && Math.abs(dy) >= Math.abs(dx)) {
          dragState.abandoned = true;
          return;
        }
        if (Math.abs(dx) > 8 && Math.abs(dx) > 1.2 * Math.abs(dy)) {
          dragState.active = true;
          this.dragging = true;
          this.classList.add('is-dragging');
          try {
            this.stage.setPointerCapture(dragState.id);
          } catch {
            // ignore
          }
        } else {
          return;
        }
      }

      dragState.samples.push({ x: e.clientX, time: performance.now() });
      if (dragState.samples.length > 6) dragState.samples.shift();

      this.target = dragState.t - dx / this.unit;
      this.setStill(false);
      this.kick();
    };

    this._onPointerUp = (e) => {
      if (!dragState || e.pointerId !== dragState.id) return;
      this.finishDrag(dragState, e);
      dragState = null;
    };

    this._onStageLeave = (e) => {
      if (this.cursorEl && e.pointerType === 'mouse') {
        this.cursorState.entered = false;
        this.cursorEl.classList.remove('is-on', 'is-link', 'is-view');
      }
    };

    this.stage.addEventListener('pointerdown', this._onPointerDown);
    this.stage.addEventListener('pointermove', this._onPointerMove);
    this.stage.addEventListener('pointerup', this._onPointerUp);
    this.stage.addEventListener('pointercancel', this._onPointerUp);
    this.stage.addEventListener('pointerleave', this._onStageLeave);
  }

  finishDrag(dragState, e) {
    if (!dragState.active) return;
    this.dragging = false;
    this.classList.remove('is-dragging');
    this.suppressClickUntil = Date.now() + 60;
    try {
      if (this.stage.hasPointerCapture(dragState.id)) {
        this.stage.releasePointerCapture(dragState.id);
      }
    } catch {
      // ignore
    }

    const dx = e.clientX - dragState.startX;
    const samples = dragState.samples;
    const first = samples[0];
    const last = samples[samples.length - 1];
    const dtMs = last.time - first.time;
    const vx = dtMs > 0 ? (last.x - first.x) / dtMs : 0;
    const sign = -1;
    const from = Math.round(dragState.t);

    if (this.isMobile) {
      if (Math.abs(dx) > 30 || Math.abs(vx) > 0.3) {
        const dir = dx > 0 ? 1 : -1;
        this.moveTo(from + sign * dir);
      } else {
        this.moveTo(from);
      }
    } else {
      let i = Math.round(this.target + (sign * vx * 160) / this.unit);
      if (i === from && Math.abs(vx) > 0.3) {
        i = from + sign * (vx > 0 ? 1 : -1);
      }
      i = clamp(i, from - 2, from + 2);
      this.moveTo(i);
    }
  }

  startCursorLoop() {
    if (!this.cursorEl || this.cursorState.raf) return;
    const tick = () => {
      this.cursorState.raf = 0;
      const cs = this.cursorState;
      const factor = this.reducedMotion ? 1 : 0.18;
      cs.x += (cs.tx - cs.x) * factor;
      cs.y += (cs.ty - cs.y) * factor;
      this.cursorEl.style.transform = `translate3d(${cs.x.toFixed(2)}px, ${cs.y.toFixed(2)}px, 0)`;

      if (Math.hypot(cs.tx - cs.x, cs.ty - cs.y) >= 0.2) {
        this.cursorState.raf = requestAnimationFrame(tick);
      } else {
        cs.x = cs.tx;
        cs.y = cs.ty;
        this.cursorEl.style.transform = `translate3d(${cs.x.toFixed(2)}px, ${cs.y.toFixed(2)}px, 0)`;
      }
    };
    this.cursorState.raf = requestAnimationFrame(tick);
  }

  disconnectedCallback() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (this.cursorState && this.cursorState.raf) cancelAnimationFrame(this.cursorState.raf);
    clearTimeout(this.autoTimer);
    clearTimeout(this.lbTimer);
    clearTimeout(this._resizeTimer);

    if (this._ro) this._ro.disconnect();
    if (this._io) this._io.disconnect();
    if (this.revealObserver) this.revealObserver.disconnect();

    window.removeEventListener('resize', this._onResize);
    document.removeEventListener('visibilitychange', this._onVisibility);
    this.removeEventListener('click', this._onCaptureClick, true);
    this.removeEventListener('click', this._onClick);
    this.removeEventListener('keydown', this._onKeyDown);

    if (this.panelEl) {
      this.panelEl.removeEventListener('pointerenter', this._onPanelEnter);
      this.panelEl.removeEventListener('pointerleave', this._onPanelLeave);
      this.panelEl.removeEventListener('click', this._onPanelClick);
      this.panelEl.removeEventListener('change', this._onPanelChange);
      this.panelEl.removeEventListener('pointerover', this._onPanelPointerOver);
      this.panelEl.removeEventListener('pointerout', this._onPanelPointerOut);
    }

    if (this.stage) {
      this.stage.removeEventListener('keydown', this._onStageKey);
      this.stage.removeEventListener('wheel', this._onWheel);
      this.stage.removeEventListener('pointerdown', this._onPointerDown);
      this.stage.removeEventListener('pointermove', this._onPointerMove);
      this.stage.removeEventListener('pointerup', this._onPointerUp);
      this.stage.removeEventListener('pointercancel', this._onPointerUp);
      this.stage.removeEventListener('pointerleave', this._onStageLeave);
    }

    this.dockAllSheets();
  }
}

customElements.define('runway-section', RunwaySection);
