/* Apana — boîte à outils partagée des simulateurs pédagogiques IA.
   Logique métier réutilisable (tirage, ajustement, échantillonnage),
   reprise et généralisée depuis le simulateur n°1.
   Chargée en <helmet> ; expose window.ApanaSimKit. */
(function () {
  // Tire une option au hasard, pondérée par son champ .p
  function weighted(opts) {
    var tot = 0, k;
    for (k = 0; k < opts.length; k++) tot += opts[k].p;
    var x = Math.random() * tot, acc = 0;
    for (k = 0; k < opts.length; k++) {
      acc += opts[k].p;
      if (x <= acc) return opts[k];
    }
    return opts[opts.length - 1];
  }

  // Réajuste des probabilités par un exposant (exp>1 = plus tranché,
  // exp<1 = plus dispersé) et renormalise en pourcentages entiers.
  function adjustP(options, exp) {
    var out = [], sum = 0, i;
    for (i = 0; i < options.length; i++) {
      var w = Math.pow(options[i].p, exp);
      out.push({ t: options[i].t, tru: options[i].tru, p: w });
      sum += w;
    }
    for (i = 0; i < out.length; i++) {
      out[i].p = Math.max(1, Math.round(out[i].p / sum * 100));
    }
    return out;
  }

  // Échantillonne n tirages pondérés et renvoie le décompte par libellé.
  function tally(options, n, exp) {
    var opts = exp && exp !== 1 ? adjustP(options, exp) : options;
    var counts = {};
    for (var i = 0; i < opts.length; i++) counts[opts[i].t] = 0;
    for (var j = 0; j < n; j++) counts[weighted(opts).t]++;
    return opts.map(function (o) { return { t: o.t, tru: !!o.tru, n: counts[o.t] }; });
  }

  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  window.ApanaSimKit = {
    version: 1,
    weighted: weighted,
    adjustP: adjustP,
    tally: tally,
    clamp: clamp
  };
})();
