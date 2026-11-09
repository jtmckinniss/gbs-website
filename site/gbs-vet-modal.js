/* Referral portal popup for vets (Nov 9). Opens from any [data-portal-link]. */
(function () {
  var LOGIN_URL = 'https://gigis.rvetlink.com/Account/Login?ReturnUrl=%2FChart';
  var GUEST_URL = 'https://gigis.rvetlink.com/referral/new'; // rVetLink guest referral (standard rVetLink path; confirm it loads)
  var wrap, lastFocus;
  function build() {
    wrap = document.createElement('div');
    wrap.className = 'cnm vpm';
    wrap.hidden = true;
    wrap.innerHTML =
      '<div class="cnm-backdrop" data-vpm-close></div>' +
      '<div class="cnm-panel" role="dialog" aria-modal="true" aria-labelledby="vpm-h">' +
        '<button type="button" class="cnm-x" data-vpm-close aria-label="Close">&times;</button>' +
        '<p class="eyebrow">Referral portal</p>' +
        '<h2 class="h2-sm" id="vpm-h">Two ways in.</h2>' +
        '<div class="vpm-opts">' +
          '<div class="vpm-opt"><p class="h4">Returning vet?</p>' +
            '<p class="small muted">Log in to the referral portal.</p>' +
            '<a class="btn btn-black vpm-go" href="' + LOGIN_URL + '" target="_blank" rel="noopener">Log in</a>' +
            '<p class="tiny muted vpm-help">Forgot your password? Click <strong>Password Help</strong> on the next screen and our team will be in touch within 24 hours.</p></div>' +
          '<div class="vpm-opt"><p class="h4">New here?</p>' +
            '<p class="small muted">Send us a guest referral. No login needed.</p>' +
            '<a class="btn btn-teal vpm-go" href="' + GUEST_URL + '" target="_blank" rel="noopener">Start a guest referral</a></div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(wrap);
    wrap.addEventListener('click', function (e) { if (e.target.closest('[data-vpm-close]')) close(); });
  }
  function open() {
    if (!wrap) build();
    lastFocus = document.activeElement;
    wrap.hidden = false;
    document.documentElement.classList.add('cnm-lock');
    wrap.querySelector('.vpm-go').focus();
  }
  function close() {
    if (!wrap || wrap.hidden) return;
    wrap.hidden = true;
    document.documentElement.classList.remove('cnm-lock');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-portal-link]');
    if (!a) return;
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
