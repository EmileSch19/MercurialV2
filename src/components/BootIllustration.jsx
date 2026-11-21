// Illustration neutre d'un crampon (remplace les photos de marque).
// Les couleurs viennent de la fiche produit.
const BootIllustration = ({ colors, className = '' }) => {
  const { upper, stripe, sole } = colors
  return (
    <svg className={`boot ${className}`} viewBox="0 0 240 120" aria-hidden="true">
      <ellipse cx="122" cy="108" rx="100" ry="6" className="boot-shadow" />
      {[40, 66, 150, 178, 204].map((x) => (
        <rect key={x} x={x} y="94" width="9" height="9" rx="2" fill={sole} />
      ))}
      <path className="boot-outline" d="M16 86 L228 86 C228 93 222 97 213 97 L30 97 C21 97 16 93 16 86 Z" fill={sole} />
      <path
        d="M20 84 C17 62 32 48 58 45 L116 35 C133 32 147 37 159 46 L205 63 C222 69 229 78 226 86 L20 86 Z"
        fill={upper}
        className="boot-outline"
      />
      <path d="M104 39 L128 35 L110 86 L84 86 Z" fill={stripe} />
      <path d="M58 45 C72 39 88 37 104 37" fill="none" stroke={stripe} strokeWidth="3" strokeLinecap="round" />
      <g stroke={stripe} strokeWidth="2.5" strokeLinecap="round" opacity=".7">
        <line x1="136" y1="44" x2="142" y2="56" />
        <line x1="148" y1="48" x2="154" y2="60" />
        <line x1="160" y1="52" x2="166" y2="64" />
      </g>
    </svg>
  )
}

export default BootIllustration
