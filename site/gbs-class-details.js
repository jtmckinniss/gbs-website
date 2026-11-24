/* Class details & prerequisites popup (Cost page). Opens from .cls-det[data-class].
   Content: team class descriptions (Nov 24), reconciled with current decisions. */
(function () {
  var BOOK = 'https://gigisbehavior.as.me/schedule/f381a863';
  var WEBINAR = 'Complete our complimentary How to Train / Dog Body Language webinar before your first class (added when you book)';
  var VAX = 'Fully vaccinated by a veterinarian against rabies, distemper, parvovirus and Bordetella';
  var FAMILY = 'An adult family member attends every class';
  var C = {
    puppy: { t: 'Puppy Preschool', m: '4-class series · 50 min · Capped at 8 puppies',
      o: 'Designed for young puppies and their families during a critical developmental window. Reward-based, evidence-informed training and structured social experiences build early confidence and the foundational skills that support long-term behavioral health.',
      s: [['Who can attend', ['Puppies 8 to 20 weeks old on the day of class', 'At least one set of vaccines (distemper, parvovirus, Bordetella) from a veterinarian, given at least 7 days before the first class', 'Puppies who can take treats comfortably around other people and dogs', FAMILY]],
          ['Four rotating themes', ['Confident Care: handling, nail trims and mock exams that make vet visits and grooming feel safe', 'Brave Explorers: new surfaces, sounds and puppy-safe obstacles that build curiosity over caution', 'People Are Great: meeting people in hats, costumes and mobility aids', 'Strange Is Safe: gentle exposure to the unexpected, like umbrellas, skateboards and thunder, paired with good things']],
          ['Good to know', ['Themes restart monthly, so there is no wrong week to begin', 'Drop in, buy the 4-class package, or both', 'Play sessions are brief, structured and guided by credentialed trainers', 'No class on major U.S. holidays']],
          ['Before your first class', [WEBINAR]]] },
    foundations: { t: 'Skills & Manners: Foundations', m: '6-week series · Capped at 6 dogs',
      o: 'For dogs and families building foundational skills that translate into real life: clear communication, everyday manners and practical, reward-based training in a structured group setting.',
      s: [['Who can attend', ['Dogs 15 weeks and older', VAX, 'Dogs who are comfortable working around people and other dogs', FAMILY]],
          ['What you\'ll learn', ['Core manners for daily life', 'Foundations of reward-based training', 'Essential cues like sit, leave it, drop it and attention skills', 'Introductory leash skills and structured greetings']],
          ['Good to know', ['Booked as a full 6-week series', 'No class on major U.S. holidays']],
          ['Before your first class', [WEBINAR]]] },
    advanced: { t: 'Skills & Manners: Advanced', m: '6-week series · Capped at 6 dogs',
      o: 'Builds on Foundations with more complex cues, impulse control and real-world skills, so good manners hold up in busier, less predictable places.',
      s: [['Who can attend', ['Dogs who have completed Foundations or have equivalent skills', VAX, 'Dogs who are comfortable working around people and other dogs', FAMILY]],
          ['What you\'ll learn', ['More complex cues', 'Impulse control', 'Practicing skills in real-world settings']],
          ['Good to know', ['Booked as a full 6-week series', 'No class on major U.S. holidays']],
          ['Before your first class', [WEBINAR]]] },
    tricks: { t: 'Tricks Classes', m: '6-week series · 50 min',
      o: 'For dogs and families who want to expand skills, build confidence and strengthen engagement. Each class introduces new behaviors and enrichment-based learning in a guided setting.',
      s: [['Who can attend', ['Dogs 20 weeks and older', VAX, 'Dogs who are comfortable working in a group', FAMILY]],
          ['Recommended', ['Skills & Manners Foundations, or equivalent foundational skills']],
          ['Good to know', ['A new trick each week for six weeks, then the series repeats', 'Join any week. Drop in, buy the full-series package, or both', 'Ask about evaluation for trick title recognition when your dog is ready']],
          ['Before your first class', [WEBINAR]]] },
    oneonone: { t: 'Skills & Manners: 1-on-1', m: '6 sessions · In person at Gigi\'s',
      o: 'The Skills & Manners curriculum, delivered 1-on-1 with a credentialed trainer. The same skills as group classes, without the group.',
      s: [['Who it\'s for', ['Families who need schedule flexibility', 'Dogs who do better in a quieter setting', FAMILY]],
          ['What you\'ll learn', ['The full Skills & Manners Foundations or Advanced curriculum']],
          ['Before your first session', [WEBINAR]]] }
  };
  var wrap, last;
  function build() {
    wrap = document.createElement('div');
    wrap.className = 'cnm cd'; wrap.hidden = true;
    wrap.innerHTML = '<div class="cnm-backdrop" data-cd-close></div><div class="cnm-panel cd-panel" role="dialog" aria-modal="true" aria-labelledby="cd-h"><button type="button" class="cnm-x" data-cd-close aria-label="Close">&times;</button><p class="eyebrow">Details &amp; prerequisites</p><h2 class="h2-sm" id="cd-h"></h2><p class="meta cd-m"></p><p class="muted cd-o"></p><div class="cd-secs"></div><a class="btn btn-butter mt-m" target="_blank" rel="noopener" data-quiz-trigger="training" href="' + BOOK + '">Book now</a></div>';
    document.body.appendChild(wrap);
    wrap.addEventListener('click', function (e) {
      if (e.target.closest('[data-cd-close]')) close();
      else if (e.target.closest('[data-quiz-trigger]')) close(true);
    });
  }
  function el(tag, cls, txt) { var n = document.createElement(tag); if (cls) n.className = cls; if (txt) n.textContent = txt; return n; }
  function open(k) {
    var c = C[k]; if (!c) return;
    if (!wrap) build();
    last = document.activeElement;
    wrap.querySelector('#cd-h').textContent = c.t;
    wrap.querySelector('.cd-m').textContent = c.m;
    wrap.querySelector('.cd-o').textContent = c.o;
    var box = wrap.querySelector('.cd-secs'); box.innerHTML = '';
    c.s.forEach(function (sec) {
      var d = el('div', 'cd-sec'); d.appendChild(el('p', 'cd-h', sec[0]));
      var ul = el('ul', 'ticks muted'); sec[1].forEach(function (t) { ul.appendChild(el('li', '', t)); });
      d.appendChild(ul); box.appendChild(d);
    });
    wrap.hidden = false; document.documentElement.classList.add('cnm-lock');
    wrap.querySelector('.cd-panel').scrollTop = 0;
    wrap.querySelector('.cnm-x').focus();
  }
  function close(keep) {
    if (!wrap || wrap.hidden) return;
    wrap.hidden = true; document.documentElement.classList.remove('cnm-lock');
    if (!keep && last && last.focus) last.focus();
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('.cls-det[data-class]');
    if (!a) return; e.preventDefault(); open(a.getAttribute('data-class'));
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
