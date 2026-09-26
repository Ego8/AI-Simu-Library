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

  /* Textes hors simulateurs : page d'accueil et boutons de retour (FR -> EN). */
  var EN = {
    "Série · Comprendre l’IA": "Series · Understanding AI",
    "Comprendre l’IA en la manipulant": "Understand AI by playing with it",
    "Trois simulateurs pour voir comment fonctionne un LLM, décoder son vocabulaire et l’entraîner de zéro jusqu’à un usage réel.": "Three simulators to see how an LLM works, decode its vocabulary, and train one from scratch all the way to real use.",
    "Les 3 simulateurs": "The 3 simulators",
    "01 · Les bases": "01 · The basics",
    "Comprendre un LLM": "Understanding an LLM",
    "Comment un grand modèle de langage lit une phrase et prédit la suite.": "How a large language model reads a sentence and predicts what comes next.",
    "Lancer →": "Launch →",
    "02 · Glossaire": "02 · Glossary",
    "Les mots de l’IA, décodés": "The words of AI, decoded",
    "Token, température, RAG, transformer : chaque mot ouvre un mini-simulateur.": "Token, temperature, RAG, transformer: every word opens a mini-simulator.",
    "Explorer →": "Explore →",
    "03 · Parcours complet": "03 · Full journey",
    "Entraînez votre IA, de zéro à utile": "Train your AI, from scratch to useful",
    "6 jeux : pré-entraînement, fine-tuning, RLHF, RAG, apprentissage continu, outils.": "6 games: pre-training, fine-tuning, RLHF, RAG, continual learning, tools.",
    "Aussi disponible en 5 modules courts ↓": "Also available as 5 short modules ↓",
    "Commencer →": "Start →",
    "Simulateur 03 en modules courts": "Simulator 03 in short modules",
    "Entraînez votre IA, en 5 étapes": "Train your AI, in 5 steps",
    "Le même parcours que le simulateur 03, découpé en modules de quelques minutes. Suivez-les dans l’ordre ou ouvrez celui qui vous intéresse.": "The same journey as simulator 03, split into modules of a few minutes each. Follow them in order or open the one you like.",
    "Étape 1 · 1 jeu": "Step 1 · 1 game",
    "Étape 2 · 3 jeux": "Step 2 · 3 games",
    "Étape 3 · 3 jeux + bilan": "Step 3 · 3 games + recap",
    "Étape 4 · 1 jeu": "Step 4 · 1 game",
    "Étape 5 · 1 jeu": "Step 5 · 1 game",
    "Le pré-entraînement": "Pre-training",
    "L’IA apprend à deviner le mot suivant.": "The AI learns to guess the next word.",
    "Entraînez votre IA": "Train your AI",
    "Pré-entraînement, fine-tuning, RLHF.": "Pre-training, fine-tuning, RLHF.",
    "Rendre votre IA vraiment utile": "Make your AI truly useful",
    "RAG, apprentissage continu, outils.": "RAG, continual learning, tools.",
    "Votre IA passe à l’action": "Your AI takes action",
    "Le dernier jeu et le bilan de fin.": "The last game and the final recap.",
    "Faites attention": "Be careful",
    "Ce que votre IA apprend de vos clients.": "What your AI learns from your clients.",
    "← Retour aux simulateurs": "← Back to simulators",
    "Retour aux simulateurs": "Back to simulators",
    "← Accueil": "← Home",
    "Accueil": "Home",
    "← Précédent": "← Previous"
  };

  var FR = {}; for (var kk in EN) if (EN.hasOwnProperty(kk)) FR[EN[kk]] = kk;
  function translateTexts(root) {
    var dict = window.APANA_LANG === 'en' ? EN : FR;
    var tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), t;
    while ((t = tw.nextNode())) {
      var p = t.parentNode && t.parentNode.nodeName;
      if (p === 'SCRIPT' || p === 'STYLE') continue;
      var k = t.nodeValue.trim();
      if (k && dict[k] !== undefined) t.nodeValue = t.nodeValue.replace(k, dict[k]);
    }
    var all = root.querySelectorAll('*');
    for (var j = 0; j < all.length; j++) if (all[j].shadowRoot) translateTexts(all[j].shadowRoot);
  }

  function setLang(l) {
    window.APANA_LANG = l; document.documentElement.lang = l; save(l);
    if (document.body) translateTexts(document.body);
  }
  window.APANA_LANG = L; document.documentElement.lang = L; save(L);
  window.apanaSetLang = setLang;

  /* Anti-clignotement : la page reste invisible jusqu'à ce qu'elle soit rendue dans la bonne langue
     (au plus 2,5 s, pour ne jamais bloquer l'affichage). */
  var revealed = false, hideEl = null, t0 = Date.now();
  if (!revealed) {
    hideEl = document.createElement('style');
    hideEl.textContent = 'html{visibility:hidden!important}';
    (document.head || document.documentElement).appendChild(hideEl);
  }
  /* Les pages exportées remplacent toute la page au démarrage (documentElement.replaceWith) :
     on glisse le masque et la langue dans la nouvelle page avant l'échange, pour qu'aucune image
     ne s'affiche entre les deux. */
  try {
    var origRW = Element.prototype.replaceWith;
    Element.prototype.replaceWith = function (n) {
      if (this === document.documentElement && n && n.nodeType === 1) {
        try {
          n.setAttribute('lang', window.APANA_LANG);
          if (!revealed && hideEl) { var h = n.querySelector('head') || n; h.insertBefore(hideEl, h.firstChild); }
        } catch (e) {}
      }
      return origRW.apply(this, arguments);
    };
  } catch (e) {}

  function ensureHidden() {
    if (revealed || !hideEl) return;
    if (!hideEl.isConnected) (document.head || document.documentElement).appendChild(hideEl);
  }
  function reveal() { if (revealed) return; revealed = true; if (hideEl && hideEl.parentNode) hideEl.parentNode.removeChild(hideEl); }

  /* Menus Français/English (y compris dans les shadow DOM), gardés alignés. */
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

  /* Pages sans menu de langue (accueil) : on en ajoute un, en haut à droite. */
  var started = Date.now(), added = false;
  var isHome = /(^|\/)(index\.html)?$/.test(location.pathname);
  function addSelector() {
    var s = document.createElement('select');
    s.setAttribute('aria-label', 'Language');
    s.innerHTML = '<option value="fr">Français</option><option value="en">English</option>';
    s.style.cssText = 'position:fixed;top:16px;right:16px;z-index:2147483647;cursor:pointer;font-size:12px;color:#6f6350;font-weight:600;border:1px solid #e3d8c2;background:#fffdf8;border-radius:8px;padding:6px 9px;font-family:Poppins,sans-serif;';
    s.value = window.APANA_LANG; s.__apanaDone = true;
    document.body.appendChild(s);
    mySel = s;
  }
  var mySel = null;
  function pageReady() {
    var bt = (document.body && document.body.textContent) || '';
    return bt.trim().length > 20 && bt.indexOf('{{') < 0 && bt.indexOf('Unpacking') < 0;
  }

  var lastText = 0;
  function tick() {
    ensureHidden();
    if (!document.body) return;
    var list = langSelects(document, []);
    if (!list.length && isHome && (!mySel || !mySel.isConnected) && pageReady()) { added = true; addSelector(); list = langSelects(document, []); }
    for (var i = 0; i < list.length; i++) {
      var s = list[i];
      if (!s.__apanaListen) {
        s.__apanaListen = true; s.__apanaTries = 0;
        s.addEventListener('change', function (e) { if (ok(e.target.value) && e.target.value !== window.APANA_LANG) setLang(e.target.value); });
      }
      if (!s.__apanaDone) {
        if (s.value === window.APANA_LANG) { s.__apanaDone = true; }
        else if (s.__apanaTries++ < 20) { setVal.call(s, window.APANA_LANG); s.dispatchEvent(new Event('change', { bubbles: true })); }
      }
    }
    var now = Date.now();
    if (window.APANA_LANG === 'en' && (!revealed || now - lastText > 900)) { lastText = now; translateTexts(document.body); }
    if (!revealed) {
      var allOk = list.length > 0;
      for (var q = 0; q < list.length; q++) if (list[q].value !== window.APANA_LANG) allOk = false;
      var hasContent = pageReady();
      if ((hasContent && (window.APANA_LANG === 'fr' || allOk || (isHome && mySel && mySel.isConnected))) || now - t0 > 2500) {
        requestAnimationFrame(function () { translateTexts(document.body); reveal(); });
      }
    }
  }
  (function fast() { ensureHidden(); tick(); if (!revealed) setTimeout(fast, 20); })();
  (function frame() { ensureHidden(); if (!revealed) requestAnimationFrame(frame); })();
  setInterval(tick, 400);
  if (document.readyState !== 'loading') tick(); else document.addEventListener('DOMContentLoaded', tick);
})();
