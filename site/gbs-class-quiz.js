/* ==========================================================
   Class readiness quiz — opens from ANY element with
   data-quiz-trigger="training" (every "Book a class" / class
   "Book now" button on the site). Three questions; all must
   match to continue to class booking. Otherwise → Care Navigation Call.
   Booking links are intentionally dead (#) until real URLs arrive:
   set CLASS_BOOKING_URL and CARE_NAV_URL below.
   ========================================================== */
(function () {
  var CLASS_BOOKING_URL = '#';   // TODO: class booking page (Offering Tree)
  var CARE_NAV_URL = '#';        // TODO: Care Navigation Call booking page

  var QUESTIONS = [
    { q: 'Can your dog take treats and focus on you when other dogs and people are around?', pass: 'yes' },
    { q: 'Does your dog bark at new people or dogs?', pass: 'no' },
    { q: 'Not counting normal puppy biting: since 6 months of age, has your dog ever bitten a person or another dog?', pass: 'no' }
  ];

  var overlay, card, lastFocus, step = 0, answers = [];

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function build() {
    overlay = el('div', 'cq-overlay');
    overlay.setAttribute('hidden', '');
    card = el('div', 'cq-card');
    card.setAttribute('role', 'dialog');
    card.setAttribute('aria-modal', 'true');
    card.setAttribute('aria-labelledby', 'cq-title');
    overlay.appendChild(card);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    document.addEventListener('keydown', function (e) {
      if (overlay.hasAttribute('hidden')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'Tab') trap(e);
    });
  }

  function trap(e) {
    var f = card.querySelectorAll('button, a[href]');
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function closeBtn() {
    var b = el('button', 'cq-close', '<span aria-hidden="true">&times;</span>');
    b.type = 'button';
    b.setAttribute('aria-label', 'Close');
    b.addEventListener('click', close);
    return b;
  }

  function progress() {
    var p = el('div', 'cq-progress');
    for (var i = 0; i < QUESTIONS.length; i++) {
      p.appendChild(el('span', i < step ? 'done' : (i === step ? 'on' : '')));
    }
    return p;
  }

  function renderQuestion() {
    card.innerHTML = '';
    card.appendChild(closeBtn());
    card.appendChild(el('div', 'cq-tag', 'Before you book'));
    card.appendChild(progress());
    card.appendChild(el('div', 'cq-count', 'Question ' + (step + 1) + ' of ' + QUESTIONS.length));
    var h = el('h2', 'cq-q', QUESTIONS[step].q);
    h.id = 'cq-title';
    card.appendChild(h);
    var row = el('div', 'cq-answers');
    ['yes', 'no'].forEach(function (v) {
      var b = el('button', 'cq-answer', v === 'yes' ? 'Yes' : 'No');
      b.type = 'button';
      b.addEventListener('click', function () { answer(v); });
      row.appendChild(b);
    });
    card.appendChild(row);
    if (step === 0) {
      card.appendChild(el('p', 'cq-note', 'Three quick questions help us make sure group class is the right fit for your dog.'));
    } else {
      var back = el('button', 'cq-back', '&larr; Back');
      back.type = 'button';
      back.addEventListener('click', function () { step--; answers.pop(); renderQuestion(); });
      card.appendChild(back);
    }
    h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true });
  }

  function answer(v) {
    answers[step] = v;
    step++;
    if (step < QUESTIONS.length) renderQuestion(); else renderResult();
  }

  function deadLink(a) {
    if (a.getAttribute('href') === '#') {
      a.addEventListener('click', function (e) { e.preventDefault(); });
      a.setAttribute('aria-disabled', 'true');
      a.title = 'Booking link coming soon';
    }
  }

  function renderResult() {
    var ready = QUESTIONS.every(function (q, i) { return answers[i] === q.pass; });
    card.innerHTML = '';
    card.appendChild(closeBtn());
    if (ready) {
      card.className = 'cq-card cq-ready';
      card.appendChild(el('div', 'cq-tag', 'You’re ready for class'));
      var h = el('h2', 'cq-result-h', 'Great news. We can’t wait to meet you and your pup.');
      h.id = 'cq-title';
      card.appendChild(h);
      card.appendChild(el('p', 'cq-result-body', 'Your dog sounds ready for group <i class="svc">Training</i>. Pick the class and time that work for your family.'));
      var a = el('a', 'cq-cta', 'Choose your class');
      a.href = CLASS_BOOKING_URL;
      deadLink(a);
      card.appendChild(a);
    } else {
      card.className = 'cq-card cq-nav';
      card.appendChild(el('div', 'cq-tag', 'Let’s find the right fit'));
      var h2 = el('h2', 'cq-result-h', 'Your dog may get more out of a different starting point.');
      h2.id = 'cq-title';
      card.appendChild(h2);
      card.appendChild(el('p', 'cq-result-body', 'That’s common, and it’s exactly what we’re here for. A free 15-minute Care Navigation Call with our Client Success Manager will get you to the right stage of care and the right professional.'));
      var b = el('a', 'cq-cta', 'Book a free Care Navigation Call');
      b.href = CARE_NAV_URL;
      deadLink(b);
      card.appendChild(b);
    }
    var again = el('button', 'cq-back', 'Start over');
    again.type = 'button';
    again.addEventListener('click', function () { card.className = 'cq-card'; step = 0; answers = []; renderQuestion(); });
    card.appendChild(again);
    card.querySelector('.cq-cta').focus();
  }

  function open(e) {
    if (e) e.preventDefault();
    if (!overlay) build();
    lastFocus = document.activeElement;
    step = 0; answers = [];
    card.className = 'cq-card';
    overlay.removeAttribute('hidden');
    document.documentElement.classList.add('cq-lock');
    renderQuestion();
  }

  function close() {
    overlay.setAttribute('hidden', '');
    document.documentElement.classList.remove('cq-lock');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-quiz-trigger="training"]');
    if (t) open(e);
  });
})();
