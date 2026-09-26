/* Apana — langue commune à tout le site.
   Priorité : ?lang=en|fr  >  choix déjà fait sur le site  >  langue du navigateur  >  français.
   À charger en premier dans chaque page : <script src="lang.js"></script> */
(function () {
  var KEY = 'apanaLang';
  function ok(l) { return l === 'fr' || l === 'en'; }
  function save(l) { try { localStorage.setItem(KEY, l); } catch (e) {} }
  var L = null;
  try { L = (new URLSearchParams(location.search).get('lang') || '').toLowerCase(); } catch (e) {}
  if (!ok(L)) { try { L = localStorage.getItem(KEY); } catch (e) {} }
  if (!ok(L)) {
    var n = ((navigator.languages && navigator.languages[0]) || navigator.language || 'fr').toLowerCase();
    L = n.indexOf('fr') === 0 ? 'fr' : 'en';
  }
  function setLang(l) { window.APANA_LANG = l; document.documentElement.lang = l; save(l); }
  setLang(L);
  window.apanaSetLang = setLang;

  // Trouve les menus Français/English (y compris dans les shadow DOM) et les garde alignés.
  var setVal = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set;
  function langSelects(root, out) {
    var s = root.querySelectorAll('select');
    for (var i = 0; i < s.length; i++) {
      var v = []; for (var k = 0; k < s[i].options.length; k++) v.push(s[i].options[k].value);
      if (v.length === 2 && v.indexOf('fr') >= 0 && v.indexOf('en') >= 0) out.push(s[i]);
    }
    var all = root.querySelectorAll('*');
    for (var j = 0; j < all.length; j++) if (all[j].shadowRoot) langSelects(all[j].shadowRoot, out);
    return out;
  }
  function tick() {
    var list = langSelects(document, []);
    for (var i = 0; i < list.length; i++) {
      var s = list[i];
      if (!s.__apanaListen) {
        s.__apanaListen = true; s.__apanaTries = 0;
        s.addEventListener('change', function (e) { if (ok(e.target.value)) setLang(e.target.value); });
      }
      if (!s.__apanaDone) {
        if (s.value === window.APANA_LANG) { s.__apanaDone = true; }
        else if (s.__apanaTries++ < 20) { setVal.call(s, window.APANA_LANG); s.dispatchEvent(new Event('change', { bubbles: true })); }
      }
    }
  }
  setInterval(tick, 400);
  if (document.readyState !== 'loading') tick(); else document.addEventListener('DOMContentLoaded', tick);
})();
