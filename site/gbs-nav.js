/* Aligns the secondary menu row (Cost Transparency · Team · For Vets)
   so its first link starts directly under "Training" in the main row. */
(function () {
  function align() {
    var inner = document.querySelector('#nav .nav-inner');
    var links = document.querySelector('#nav .nav-links');
    var sub = document.querySelector('#nav .nav-sub-inner');
    if (!inner || !links || !sub) return;
    if (getComputedStyle(links).display === 'none') { sub.style.paddingLeft = ''; return; }
    var offset = links.getBoundingClientRect().left - inner.getBoundingClientRect().left;
    sub.style.paddingLeft = Math.round(offset) + 'px';
  }
  window.addEventListener('resize', align);
  window.addEventListener('load', align);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(align);
  align();
})();
