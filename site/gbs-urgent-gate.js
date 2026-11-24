/* Urgent form gate (Nov 23). The urgent Jotform is for current clients only.
   Any [data-jotform="urgent"] link first asks "Are you a current client?"
   Yes -> the urgent form. No -> emergency guidance + Book a free call. */
(function () {
  var URGENT_URL = 'https://form.jotform.com/260484526770058'; // Urgent behavior Jotform (Justin, Nov 24)
  var wrap, lastFocus, src;

  function build() {
    wrap = document.createElement('div');
    wrap.className = 'cnm ugm';
    wrap.hidden = true;
    wrap.innerHTML =
      '<div class="cnm-backdrop" data-ugm-close></div>' +
      '<div class="cnm-panel ugm-panel" role="dialog" aria-modal="true" aria-labelledby="ugm-h1">' +
        '<button type="button" class="cnm-x" data-ugm-close aria-label="Close">&times;</button>' +
        '<div class="ugm-step" data-step="ask">' +
          '<p class="eyebrow">Urgent behavioral concern</p>' +
          '<h2 class="h2-sm" id="ugm-h1">Are you a current Gigi\'s Behavior client?</h2>' +
          '<p class="cnm-lede">This form is for families already in care with our team.</p>' +
          '<div class="cnm-actions"><a class="btn btn-urgent ugm-yes" href="' + URGENT_URL + '" target="_blank" rel="noopener">Yes, continue to the form</a>' +
          '<button type="button" class="btn btn-line-dark ugm-no">No, not yet</button></div>' +
        '</div>' +
        '<div class="ugm-step" data-step="new" hidden>' +
          '<p class="eyebrow">Urgent behavioral concern</p>' +
          '<h2 class="h2-sm" id="ugm-h2">This form is for current clients only.</h2>' +
          '<p class="cnm-lede"><strong>If any person or animal is in danger, contact your primary care veterinarian or a local emergency veterinary hospital now.</strong> Don\'t wait for a response from our team.</p>' +
          '<p class="cnm-lede">When everyone is safe, book a free call and we\'ll help you find the right care.</p>' +
          '<div class="cnm-actions"><a class="btn btn-teal ugm-call" href="index.html#cta-band">Book a free call</a>' +
          '<button type="button" class="cnm-later ugm-back">Back</button></div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(wrap);
    wrap.addEventListener('click', function (e) {
      if (e.target.closest('[data-ugm-close]')) { close(true); return; }
      if (e.target.closest('.ugm-no')) { show('new'); return; }
      if (e.target.closest('.ugm-back')) { show('ask'); return; }
      if (e.target.closest('.ugm-call') || e.target.closest('.ugm-yes')) { close(false); }
    });
  }
  function show(step) {
    var steps = wrap.querySelectorAll('.ugm-step');
    for (var i = 0; i < steps.length; i++) steps[i].hidden = steps[i].getAttribute('data-step') !== step;
    wrap.querySelector('.cnm-panel').setAttribute('aria-labelledby', step === 'ask' ? 'ugm-h1' : 'ugm-h2');
    var f = wrap.querySelector('.ugm-step:not([hidden]) .btn');
    if (f) f.focus();
  }
  function open() {
    if (!wrap) build();
    lastFocus = document.activeElement;
    wrap.hidden = false;
    document.documentElement.classList.add('cnm-lock');
    show('ask');
  }
  function close(restore) {
    if (!wrap || wrap.hidden) return;
    wrap.hidden = true;
    document.documentElement.classList.remove('cnm-lock');
    if (restore && lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-jotform="urgent"]');
    if (!a) return;
    e.preventDefault();
    open();
  });
  document.addEventListener('keydown', function (e) {
    if (!wrap || wrap.hidden) return;
    if (e.key === 'Escape') { close(true); return; }
    if (e.key === 'Tab') {
      var f = wrap.querySelectorAll('.cnm-x, .ugm-step:not([hidden]) a[href], .ugm-step:not([hidden]) button');
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
})();
