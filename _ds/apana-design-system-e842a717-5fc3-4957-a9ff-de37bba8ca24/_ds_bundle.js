/* @ds-bundle: {"format":4,"namespace":"ApanaDesignSystem_e842a7","components":[{"name":"BigStat","sourcePath":"components/core/BigStat.jsx"},{"name":"Box","sourcePath":"components/core/Box.jsx"},{"name":"Cols","sourcePath":"components/core/Cols.jsx"},{"name":"ContactCard","sourcePath":"components/core/ContactCard.jsx"},{"name":"CoverHero","sourcePath":"components/core/CoverHero.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconBadge","sourcePath":"components/core/IconBadge.jsx"},{"name":"PricingPlan","sourcePath":"components/core/PricingPlan.jsx"},{"name":"ProductFiche","sourcePath":"components/core/ProductFiche.jsx"},{"name":"Quote","sourcePath":"components/core/Quote.jsx"},{"name":"SectionBreak","sourcePath":"components/core/SectionBreak.jsx"},{"name":"StatBox","sourcePath":"components/core/StatBox.jsx"}],"sourceHashes":{"components/core/BigStat.jsx":"779322582926","components/core/Box.jsx":"c58cac43a668","components/core/Cols.jsx":"e0658028735f","components/core/ContactCard.jsx":"2f495280d92f","components/core/CoverHero.jsx":"881d173e38f9","components/core/Eyebrow.jsx":"3d54626ba754","components/core/IconBadge.jsx":"2b42de144e21","components/core/PricingPlan.jsx":"1ae294262376","components/core/ProductFiche.jsx":"a60f35f3d71f","components/core/Quote.jsx":"8a8571f9222f","components/core/SectionBreak.jsx":"dea1a97c4183","components/core/StatBox.jsx":"e9f229272761"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ApanaDesignSystem_e842a7 = window.ApanaDesignSystem_e842a7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/BigStat.jsx
try { (() => {
function BigStat({
  eyebrowLabel,
  value,
  caption
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'var(--font-sans)'
    }
  }, eyebrowLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      marginBottom: 32
    }
  }, eyebrowLabel) : null, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 200,
      fontWeight: 'var(--weight-bold)',
      color: 'var(--accent)',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      margin: '16px 0'
    }
  }, value), caption ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 24,
      color: 'var(--navy)',
      maxWidth: 800,
      margin: '16px auto 0'
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { BigStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BigStat.jsx", error: String((e && e.message) || e) }); }

// components/core/Box.jsx
try { (() => {
function Box({
  children,
  accent = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: accent ? '#fff' : 'var(--bg-alt)',
      border: accent ? 'none' : 'var(--border-hairline)',
      borderTop: accent ? 'var(--border-accent-top)' : undefined,
      borderRadius: 'var(--radius-md)',
      padding: '20px 22px',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Box });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Box.jsx", error: String((e && e.message) || e) }); }

// components/core/Cols.jsx
try { (() => {
function Cols({
  children,
  columns = 3,
  gap = 20
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
      gap
    }
  }, children);
}
Object.assign(__ds_scope, { Cols });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Cols.jsx", error: String((e && e.message) || e) }); }

// components/core/ContactCard.jsx
try { (() => {
function ContactCard({
  photoSrc,
  name,
  role,
  fields = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: 40,
      alignItems: 'center',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      height: 260,
      background: '#fff',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center'
    }
  }, photoSrc ? /*#__PURE__*/React.createElement("img", {
    src: photoSrc,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 'var(--weight-bold)',
      color: 'var(--navy-dark)',
      margin: '0 0 4px',
      lineHeight: 1.1
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--accent)',
      margin: '0 0 24px'
    }
  }, role), fields.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '40px 1fr',
      gap: 14,
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'rgba(255,79,163,.12)',
      color: 'var(--accent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14,
      fontWeight: 700
    }
  }, f.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 13,
      color: 'var(--navy-dark)',
      fontWeight: 600
    }
  }, f.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text)',
      fontSize: 14
    }
  }, f.value))))));
}
Object.assign(__ds_scope, { ContactCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ContactCard.jsx", error: String((e && e.message) || e) }); }

// components/core/CoverHero.jsx
try { (() => {
function CoverHero({
  logoSrc,
  kicker,
  title,
  subtitle,
  bullets = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-navy)',
      color: '#fff',
      padding: '80px 96px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      minHeight: 560,
      borderRadius: 'var(--radius-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -240,
      right: -240,
      width: 800,
      height: 800,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,79,163,.55) 0%, rgba(255,79,163,0) 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -160,
      left: -160,
      width: 560,
      height: 560,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(59,105,168,.25) 0%, rgba(59,105,168,0) 65%)'
    }
  }), logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Apana",
    style: {
      position: 'absolute',
      top: 40,
      right: 48,
      width: 72,
      zIndex: 5
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, kicker ? /*#__PURE__*/React.createElement("div", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: '0.28em',
      fontSize: 14,
      color: 'var(--accent)',
      fontWeight: 'var(--weight-semibold)',
      marginBottom: 16
    }
  }, kicker) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 64,
      fontWeight: 'var(--weight-bold)',
      margin: '0 0 16px',
      lineHeight: 1.05,
      maxWidth: 900
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      fontWeight: 'var(--weight-light)',
      color: 'rgba(255,255,255,.88)',
      margin: '0 0 32px',
      lineHeight: 1.4,
      maxWidth: 900
    }
  }, subtitle) : null, bullets.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", {
    style: {
      width: 80,
      height: 4,
      background: 'var(--accent)',
      border: 0,
      margin: '0 0 24px'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      color: 'rgba(255,255,255,.72)',
      fontSize: 16,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, b)))) : null));
}
Object.assign(__ds_scope, { CoverHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CoverHero.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = 'blue'
}) {
  const bg = tone === 'navy' ? 'var(--pill-blue)' : 'var(--pill-blue)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      alignSelf: 'flex-start',
      width: 'fit-content',
      minHeight: 44,
      padding: '0 26px',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 17,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '0.03em',
      textTransform: 'uppercase'
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconBadge.jsx
try { (() => {
const TONES = {
  blue: {
    color: '#2a4fd7',
    bg: 'var(--icon-blue-bg)'
  },
  pink: {
    color: 'var(--accent)',
    bg: 'var(--icon-pink-bg)'
  },
  orange: {
    color: 'var(--orange)',
    bg: 'var(--icon-orange-bg)'
  }
};
function IconBadge({
  children,
  tone = 'blue',
  size = 54
}) {
  const t = TONES[tone] || TONES.blue;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      color: t.color,
      background: t.bg,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size * 0.52,
      height: size * 0.52,
      display: 'grid',
      placeItems: 'center'
    }
  }, children));
}
Object.assign(__ds_scope, { IconBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/PricingPlan.jsx
try { (() => {
const TONES = {
  blue: {
    border: 'rgba(72,118,255,.22)',
    pillBg: 'rgba(72,118,255,.11)',
    pillBorder: 'rgba(72,118,255,.28)',
    pillText: '#2752dd',
    priceBg: 'rgba(72,118,255,.06)',
    price: '#2752dd'
  },
  pink: {
    border: 'rgba(255,79,163,.45)',
    pillBg: 'rgba(255,79,163,.11)',
    pillBorder: 'rgba(255,79,163,.24)',
    pillText: '#cb2a7d',
    priceBg: 'rgba(255,79,163,.1)',
    price: 'var(--accent)'
  },
  orange: {
    border: 'rgba(253,126,20,.35)',
    pillBg: 'rgba(253,126,20,.12)',
    pillBorder: 'rgba(253,126,20,.24)',
    pillText: 'var(--orange)',
    priceBg: 'rgba(253,126,20,.14)',
    price: 'var(--orange)'
  }
};
function PricingPlan({
  tone = 'blue',
  product,
  name,
  tagline,
  price,
  period,
  features = []
}) {
  const t = TONES[tone] || TONES.blue;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-2xl)',
      padding: '18px 18px 16px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 372,
      fontFamily: 'var(--font-sans)'
    }
  }, product ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      width: 'fit-content',
      minWidth: 156,
      padding: '7px 16px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      background: t.pillBg,
      border: `1px solid ${t.pillBorder}`,
      color: t.pillText,
      marginBottom: 12
    }
  }, product) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 'var(--weight-bold)',
      color: 'var(--navy-dark)',
      letterSpacing: '-0.02em',
      margin: '0 0 8px'
    }
  }, name), tagline ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted-2)',
      margin: '0 0 12px',
      lineHeight: 1.45,
      minHeight: 54
    }
  }, tagline) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      borderRadius: 18,
      padding: '12px 14px 11px',
      margin: '0 0 12px',
      border: '1px solid rgba(18,40,95,.06)',
      background: t.priceBg
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 29,
      fontWeight: 'var(--weight-bold)',
      color: t.price,
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted-2)',
      whiteSpace: 'nowrap'
    }
  }, period)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      flex: 1
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: 'relative',
      paddingLeft: 22,
      marginBottom: 6,
      fontSize: 11,
      color: 'var(--text)',
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      color: t.price,
      fontWeight: 700,
      fontSize: 14
    }
  }, "\u2713"), f))));
}
Object.assign(__ds_scope, { PricingPlan });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PricingPlan.jsx", error: String((e && e.message) || e) }); }

// components/core/ProductFiche.jsx
try { (() => {
function ProductFiche({
  tag,
  title,
  problem,
  solution,
  benefits = [],
  imageSrc,
  imageAlt
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.08fr 0.92fr',
      gap: 48,
      fontFamily: 'var(--font-sans)',
      alignItems: 'stretch',
      minHeight: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, tag ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      alignSelf: 'flex-start',
      minHeight: 44,
      background: 'var(--pill-blue)',
      color: '#fff',
      padding: '0 26px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 17,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '0.03em',
      margin: '0 0 20px'
    }
  }, tag) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 34,
      lineHeight: 1.15,
      margin: '0 0 24px',
      color: 'var(--navy-dark)'
    }
  }, title), problem ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--accent-soft)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 22px',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--accent)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "Probl\xE8me"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--navy-dark)',
      margin: 0
    }
  }, problem)) : null, solution ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 22px',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--accent)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "Solution"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--navy-dark)',
      margin: 0,
      lineHeight: 1.45
    }
  }, solution)) : null, benefits.length ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--accent)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "B\xE9n\xE9fices"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    }
  }, benefits.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: 'relative',
      paddingLeft: 30,
      marginBottom: 8,
      fontSize: 17,
      color: 'var(--navy-dark)',
      fontWeight: 'var(--weight-medium)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 4,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, var(--accent), #ff79bb)',
      color: '#fff',
      fontSize: 12,
      display: 'grid',
      placeItems: 'center'
    }
  }, "\u2713"), b)))) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: 'var(--border-card)',
      borderRadius: 'var(--radius-xl)',
      padding: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, imageSrc ? /*#__PURE__*/React.createElement("img", {
    src: imageSrc,
    alt: imageAlt || '',
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain'
    }
  }) : null));
}
Object.assign(__ds_scope, { ProductFiche });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProductFiche.jsx", error: String((e && e.message) || e) }); }

// components/core/Quote.jsx
try { (() => {
function Quote({
  children,
  source
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 120,
      color: 'var(--accent)',
      lineHeight: 0.8,
      marginBottom: 16,
      fontFamily: 'Georgia, serif'
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 36,
      fontStyle: 'italic',
      fontWeight: 'var(--weight-light)',
      color: 'var(--navy-dark)',
      lineHeight: 1.4
    }
  }, children), source ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      fontSize: 18,
      color: 'var(--text-muted)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, source) : null);
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Quote.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionBreak.jsx
try { (() => {
function SectionBreak({
  eyebrowLabel,
  title,
  logoSrc
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy)',
      color: '#fff',
      padding: '80px 120px',
      minHeight: 400,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      fontFamily: 'var(--font-sans)',
      position: 'relative',
      borderRadius: 'var(--radius-xl)'
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Apana",
    style: {
      position: 'absolute',
      right: 96,
      top: 72,
      width: 64
    }
  }) : null, eyebrowLabel ? /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 'var(--weight-regular)',
      color: 'rgba(255,255,255,.72)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      margin: '0 0 24px'
    }
  }, eyebrowLabel) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 56,
      color: '#fff',
      margin: 0,
      lineHeight: 1.1,
      maxWidth: 1000
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 4,
      background: 'var(--accent)',
      marginTop: 24
    }
  }));
}
Object.assign(__ds_scope, { SectionBreak });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionBreak.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBox.jsx
try { (() => {
function StatBox({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 40,
      fontWeight: 'var(--weight-bold)',
      color: 'var(--accent)',
      lineHeight: 1,
      letterSpacing: '-0.01em',
      margin: '4px 0 10px'
    }
  }, value), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 17,
      color: 'var(--text)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { StatBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBox.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BigStat = __ds_scope.BigStat;

__ds_ns.Box = __ds_scope.Box;

__ds_ns.Cols = __ds_scope.Cols;

__ds_ns.ContactCard = __ds_scope.ContactCard;

__ds_ns.CoverHero = __ds_scope.CoverHero;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconBadge = __ds_scope.IconBadge;

__ds_ns.PricingPlan = __ds_scope.PricingPlan;

__ds_ns.ProductFiche = __ds_scope.ProductFiche;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionBreak = __ds_scope.SectionBreak;

__ds_ns.StatBox = __ds_scope.StatBox;

})();
