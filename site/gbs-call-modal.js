/* Care Navigation Call expectations popup (Nov 9).
   Opens from any "Book a ... call" / "Care Navigation Call" link, explains the three steps,
   then sends the family to Vello to create their client account and book. */
(function () {
  var VELLO_URL = 'https://app.vello.idexx.com/book/hcNFo5meTuC2VaM_ydL3mw'; // Vello: new-client account + Care Navigation Call booking (Justin, Nov 9)
  var RING = "<svg aria-hidden='true' viewBox='0 0 300 160' preserveAspectRatio='none' fill='none' stroke='#0E8079' stroke-width='9' stroke-linecap='round'><path d='M30 84 C 22 30, 120 8, 190 12 C 270 16, 296 54, 288 92 C 278 140, 180 154, 110 150 C 40 146, 8 112, 34 62'/></svg>";
  var MATCH = /book a (free )?call|care navigation call/i;
  var wrap, lastFocus;

  function step(n, h, p) {
    return '<li><span class="cnm-n">' + RING + '<span>' + n + '</span></span><div><p class="h4">' + h + '</p><p class="small muted">' + p + '</p></div></li>';
  }
  function build() {
    wrap = document.createElement('div');
    wrap.className = 'cnm';
    wrap.hidden = true;
    wrap.innerHTML =
      '<div class="cnm-backdrop" data-cnm-close></div>' +
      '<div class="cnm-panel" role="dialog" aria-modal="true" aria-labelledby="cnm-h">' +
        '<button type="button" class="cnm-x" data-cnm-close aria-label="Close">&times;</button>' +
        '<p class="eyebrow">Free Care Navigation Call</p>' +
        '<h2 class="h2-sm" id="cnm-h">Here\'s what to expect.</h2>' +
        '<p class="cnm-lede">Booking your call also sets up your Gigi\'s Behavior client account, so your care team has what they need from the start.</p>' +
        '<ol class="cnm-steps">' +
          step(1, 'Create your account', 'Your name and contact information.') +
          step(2, 'Tell us about your dog', 'A few details about your dog.') +
          step(3, 'Pick a time', 'Choose a time for your free 15-minute call with our Client Success Manager.') +
        '</ol>' +
        '<div class="cnm-actions"><a class="btn btn-teal cnm-go" href="' + VELLO_URL + '">Continue</a>' +
        '<button type="button" class="cnm-later" data-cnm-close>Not now</button>' +
        '<span class="hand cnm-note" aria-hidden="true">it\'s free, and only 15 minutes</span></div>' +
        '<p class="tiny muted cnm-fine">You\'ll finish on our client booking site.</p>' +
      '</div>';
    document.body.appendChild(wrap);
    wrap.addEventListener('click', function (e) { if (e.target.closest('[data-cnm-close]')) close(); });
  }
  function open() {
    if (!wrap) build();
    lastFocus = document.activeElement;
    wrap.hidden = false;
    document.documentElement.classList.add('cnm-lock');
    wrap.querySelector('.cnm-go').focus();
  }
  function close() {
    if (!wrap || wrap.hidden) return;
    wrap.hidden = true;
    document.documentElement.classList.remove('cnm-lock');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a');
    if (!a || a.classList.contains('cnm-go') || (wrap && wrap.contains(a))) return;
    if (!MATCH.test(a.textContent)) return;
    e.preventDefault();
    open();
  }, true);
  document.addEventListener('keydown', function (e) {
    if (!wrap || wrap.hidden) return;
    if (e.key === 'Escape') { close(); return; }
    if (e.key === 'Tab') {
      var f = wrap.querySelectorAll('a[href], button');
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
})();
