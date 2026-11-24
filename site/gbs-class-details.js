/* Class details & prerequisites popup (Cost page). Opens from .cls-det[data-class]. */
(function () {
  var BOOK = 'https://gigisbehavior.as.me/schedule/f381a863';
  var C = {
    puppy: ['Puppy Preschool', ['Puppies under 20 weeks old', 'Proof of age-appropriate vaccinations required', 'An adult family member attends every class', 'Four rotating socialization topics: cooperative care, new surfaces and sounds, different people and movement, and unexpected experiences', 'Join any week. Drop in, buy the 4-class package, or both', '50-minute class, capped at 8 puppies, at Gigi\'s']],
    foundations: ['Skills & Manners: Foundations', ['A 6-week series, booked as a full series', 'For dogs who are comfortable working around people and other dogs', 'Foundational skills and good manners using positive reinforcement', 'Capped at 6 dogs, at Gigi\'s']],
    advanced: ['Skills & Manners: Advanced', ['A 6-week series, booked as a full series', 'For dogs who have completed Foundations or the equivalent', 'Advanced manners, impulse control and real-world skills', 'Capped at 6 dogs, at Gigi\'s']],
    tricks: ['Tricks Classes', ['Dogs 20 weeks and older, fully vaccinated', 'A new trick each week for six weeks', 'Join any week. Drop in, buy the full-series package, or both', '50-minute class, at Gigi\'s']],
    oneonone: ['Skills & Manners: 1-on-1', ['Six 1-on-1 sessions with a credentialed trainer', 'Follows the Skills & Manners Foundations or Advanced curriculum', 'A good fit when you need schedule flexibility or your dog does better in a quieter setting', 'In person at Gigi\'s']]
  };
  var wrap, last;
  function build() {
    wrap = document.createElement('div');
    wrap.className = 'cnm'; wrap.hidden = true;
    wrap.innerHTML = '<div class="cnm-backdrop" data-cd-close></div><div class="cnm-panel" role="dialog" aria-modal="true" aria-labelledby="cd-h" style="max-width: 560px"><button type="button" class="cnm-x" data-cd-close aria-label="Close">&times;</button><p class="eyebrow">Details &amp; prerequisites</p><h2 class="h2-sm" id="cd-h"></h2><ul class="ticks muted mt-s" style="font-size: 15px"></ul><a class="btn btn-butter mt-m" target="_blank" rel="noopener" data-quiz-trigger="training" href="' + BOOK + '">Book now</a></div>';
    document.body.appendChild(wrap);
    wrap.addEventListener('click', function (e) {
      if (e.target.closest('[data-cd-close]')) close();
      else if (e.target.closest('[data-quiz-trigger]')) close(true);
    });
  }
  function open(k) {
    var c = C[k]; if (!c) return;
    if (!wrap) build();
    last = document.activeElement;
    wrap.querySelector('#cd-h').textContent = c[0];
    var ul = wrap.querySelector('ul'); ul.innerHTML = '';
    c[1].forEach(function (t) { var li = document.createElement('li'); li.textContent = t; ul.appendChild(li); });
    wrap.hidden = false; document.documentElement.classList.add('cnm-lock');
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
