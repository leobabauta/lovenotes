(function () {
  // --- State ---
  let readIds = JSON.parse(localStorage.getItem('coco_read') || '[]');
  let currentIndex = 0;
  let queue = [];
  let isAnimating = false;

  // Fun facts about Chloe
  const FUN_FACTS = [
    "Chloe was a fourth-generation reporter \u2014 journalism runs deep in the family!",
    "Chloe has worn lots of hats professionally: news reporter, English teacher, freelance writer/blogger, editor, and marketing manager.",
    "Chloe has founded Maga\u2019h\u00e5ga Rising, Heroine Addict, and Lovescrewed in her creative past.",
    "While at the PDN, Chloe notably launched the publication\u2019s first ever daily vlog series, which was very popular.",
    "Chloe\u2019s handle @ate.chloe comes from \u201Cate\u201D (pronounced ah-teh), the Filipino term of respect for an older sister \u2014 a sweet nod to her identity and her role in the family.",
    "Chloe was born on a Monday, is of the Millennial generation, and her star sign is Pisces (Chinese zodiac: Rooster).",
    "Chloe shares a birthday with will.i.am and Eva Longoria.",
    "Top 4 songs on March 15, 1993: Snow \u2013 Informer, Dr. Dre \u2013 Nuthin\u2019 But A G Thang, Silk \u2013 Freak Me, Peabo Bryson & Regina Bell \u2013 A Whole New World.",
    "Two of her favorite beings in the world are Kira and Kobe, her cat babies.",
    "Chloe once convinced her sister Maia, as a prank, that Chloe had a twin sister.",
    "Chloe was once the cutest ballerina at BodyArts school in Guam.",
    "Chloe is a talented art journaler and loves to create art. She's also been journaling since she was a kid."
  ];

  function showRandomFact(el) {
    el.textContent = FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)];
  }

  // Darker heart colors
  const HEART_COLORS = [
    '#b53a5a', '#c4456b', '#a83255', '#b8476a',
    '#9e2a4a', '#c75070', '#a63d5c', '#be4262',
    '#a0354f', '#b44d68', '#993258', '#c44a65'
  ];

  // --- DOM refs ---
  const homeView     = document.getElementById('home-view');
  const noteView     = document.getElementById('note-view');
  const completeView = document.getElementById('complete-view');
  const heartsPile   = document.getElementById('hearts-pile');
  const completeGrid = document.getElementById('complete-grid');
  const heartNote    = document.getElementById('heart-note');
  const noteFrom     = document.getElementById('note-from');
  const noteBody     = document.getElementById('note-body');
  const noteCounter  = document.getElementById('note-counter');
  const prevBtn      = document.getElementById('prev-note');
  const nextBtn      = document.getElementById('next-note');
  const backBtn      = document.getElementById('back-home');
  const resetBtn     = document.getElementById('reset-btn');
  const funFactHome  = document.getElementById('fun-fact-home');

  funFactHome.addEventListener('click', () => showRandomFact(funFactHome));
  const photosLeft   = document.getElementById('photos-left');
  const photosRight  = document.getElementById('photos-right');

  // --- Helpers ---
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function saveRead() {
    localStorage.setItem('coco_read', JSON.stringify(readIds));
  }

  function getNoteById(id) {
    return NOTES.find(n => n.id === id);
  }

  function pickColor(index) {
    return HEART_COLORS[index % HEART_COLORS.length];
  }

  function switchView(view) {
    [homeView, noteView, completeView].forEach(v => v.classList.remove('active'));
    view.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (view === homeView) showRandomFact(funFactHome);
  }

  function buildQueue() {
    queue = NOTES.map(n => n.id);
    currentIndex = 0;
  }

  // --- Render photo frames ---
  function renderPhotos(note) {
    photosLeft.innerHTML = '';
    photosRight.innerHTML = '';

    if (!note.photos || !note.photos.length) return;

    const rotations = [-3, 2, -2, 3];
    note.photos.forEach((photo, i) => {
      const frame = document.createElement('div');
      frame.className = 'photo-frame';
      frame.style.setProperty('--photo-rot', rotations[i] + 'deg');
      frame.innerHTML = `
        <img src="${photo.src}" alt="" onerror="this.parentElement.style.display='none'">
        ${photo.caption ? `<div class="photo-caption">${photo.caption}</div>` : ''}
      `;
      if (i < 2) photosLeft.appendChild(frame);
      else photosRight.appendChild(frame);
    });
  }

  // --- Render pile (home page, no labels) ---
  function renderPile() {
    heartsPile.innerHTML = '';
    const heartW = window.innerWidth <= 500 ? 160 : 200;
    const cx = (heartsPile.offsetWidth || 340) / 2 - heartW / 2;
    const cy = 80;
    const indices = shuffle(NOTES.map((_, i) => i));

    indices.forEach((i, z) => {
      const color = pickColor(i);
      const ox = (Math.random() - 0.5) * 80;
      const oy = (Math.random() - 0.5) * 70;
      const rot = (Math.random() - 0.5) * 50;

      const el = document.createElement('div');
      el.className = 'pile-heart';
      el.style.cssText = `
        left: ${cx + ox}px;
        top: ${cy + oy}px;
        z-index: ${z + 1};
        background: ${color};
        transform: rotate(${rot}deg);
        --base-rot: rotate(${rot}deg);
      `;
      heartsPile.appendChild(el);
    });
  }

  heartsPile.addEventListener('click', () => {
    if (!queue.length) buildQueue();
    showNote(queue[currentIndex]);
  });

  // --- Render spread hearts (complete view, with names) ---
  function renderSpread() {
    completeGrid.innerHTML = '';
    NOTES.forEach((note, i) => {
      const el = document.createElement('div');
      el.className = 'spread-heart';
      el.style.background = pickColor(i);
      el.innerHTML = `<span class="heart-label">${note.from.replace('From ', '')}</span>`;
      el.addEventListener('click', () => {
        queue = NOTES.map(n => n.id);
        currentIndex = i;
        showNote(queue[currentIndex]);
      });
      completeGrid.appendChild(el);
    });
  }

  // --- Animation helpers ---
  function clearAnimClasses() {
    heartNote.classList.remove('heart-shrink-off', 'heart-hop-in', 'heart-expand-in');
  }

  function populateNote(note) {
    const noteIndex = NOTES.findIndex(n => n.id === note.id);
    const color = pickColor(noteIndex);
    heartNote.style.setProperty('--heart-color', color);
    noteView.style.setProperty('--heart-color', color);
    noteFrom.textContent = note.from;
    noteBody.textContent = note.body;
    renderPhotos(note);
  }

  function showNote(id) {
    const note = getNoteById(id);
    if (!note) return;

    if (!readIds.includes(id)) {
      readIds.push(id);
      saveRead();
    }

    populateNote(note);
    updateNav();
    switchView(noteView);

    clearAnimClasses();
    void heartNote.offsetWidth;
    heartNote.classList.add('heart-expand-in');
  }

  function transitionToNote(id) {
    if (isAnimating) return;
    isAnimating = true;

    clearAnimClasses();
    void heartNote.offsetWidth;
    heartNote.classList.add('heart-shrink-off');

    heartNote.addEventListener('animationend', function handler() {
      heartNote.removeEventListener('animationend', handler);

      const note = getNoteById(id);
      if (!note) { isAnimating = false; return; }

      if (!readIds.includes(id)) {
        readIds.push(id);
        saveRead();
      }

      populateNote(note);
      noteBody.scrollTop = 0;
      updateNav();

      clearAnimClasses();
      void heartNote.offsetWidth;
      heartNote.classList.add('heart-hop-in');

      heartNote.addEventListener('animationend', function handler2() {
        heartNote.removeEventListener('animationend', handler2);
        isAnimating = false;
      });
    });
  }

  function updateNav() {
    noteCounter.textContent = `${currentIndex + 1} / ${queue.length}`;
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = false;
  }

  function goNext() {
    if (isAnimating) return;
    if (currentIndex < queue.length - 1) {
      currentIndex++;
      transitionToNote(queue[currentIndex]);
    } else {
      renderSpread();
      switchView(completeView);
    }
  }

  function goPrev() {
    if (isAnimating) return;
    if (currentIndex > 0) {
      currentIndex--;
      transitionToNote(queue[currentIndex]);
    }
  }

  nextBtn.addEventListener('click', goNext);
  prevBtn.addEventListener('click', goPrev);

  document.addEventListener('keydown', (e) => {
    if (!noteView.classList.contains('active')) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goPrev(); }
  });

  backBtn.addEventListener('click', () => {
    renderPile();
    switchView(homeView);
  });

  resetBtn.addEventListener('click', () => {
    readIds = [];
    saveRead();
    buildQueue();
    renderPile();
    switchView(homeView);
  });

  function init() {
    buildQueue();
    renderPile();
    switchView(homeView);
  }

  init();

  // --- Header heart click: press + flying hearts ---
  document.querySelectorAll('.header-image-wrap').forEach(wrap => {
    wrap.addEventListener('click', (e) => {
      const img = wrap.querySelector('.header-image');
      img.classList.add('pressed');
      setTimeout(() => img.classList.remove('pressed'), 200);
      showRandomFact(funFactHome);

      const rect = wrap.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const hearts = ['\u2764', '\u2665', '\u2763'];
      const colors = ['#c2185b', '#e8476c', '#b53a5a', '#e57397', '#d4456a', '#f06292'];

      for (let i = 0; i < 12; i++) {
        const el = document.createElement('span');
        el.className = 'flying-heart';
        el.textContent = hearts[i % hearts.length];
        const angle = (Math.PI * 2 * i) / 12 + (Math.random() - 0.5) * 0.5;
        const dist = 240 + Math.random() * 240;
        const flyX = Math.cos(angle) * dist;
        const flyY = Math.sin(angle) * dist - 40;
        const rot = (Math.random() - 0.5) * 60;
        const dur = 0.7 + Math.random() * 0.5;
        el.style.cssText = `
          left: ${cx}px; top: ${cy}px;
          --fly-x: ${flyX}px; --fly-y: ${flyY}px;
          --fly-rot: ${rot}deg; --fly-duration: ${dur}s;
          --heart-clr: ${colors[i % colors.length]};
          font-size: ${1.2 + Math.random() * 1.2}rem;
        `;
        wrap.appendChild(el);
        setTimeout(() => el.remove(), dur * 1000 + 50);
      }
    });
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (homeView.classList.contains('active')) renderPile();
      else if (completeView.classList.contains('active')) renderSpread();
    }, 250);
  });
})();
