import React from "react";

export type LogoVariant = "light" | "dark";

interface EmblemProps {
  variant?: LogoVariant;
  size?: number | string;
  className?: string;
  idPrefix?: string;
}

/**
 * AnvayaEmblem: Standalone Vector Emblem
 * Features the signature 'A' monogram, botanical green leaf,
 * sweeping golden trade ribbon, globe with continent highlights,
 * and the 8-point compass star of opportunity.
 */
export function AnvayaEmblem({
  variant = "light",
  size = 48,
  className = "",
  idPrefix = "emblem",
}: EmblemProps) {
  const isDark = variant === "dark";
  const aFill = isDark ? "#FFFFFF" : "#0F3D2E";

  const goldGradId = `${idPrefix}-gold`;
  const goldBrightId = `${idPrefix}-gold-bright`;
  const leafGradId = `${idPrefix}-leaf`;
  const leafDarkId = `${idPrefix}-leaf-dark`;

  return (
    <svg
      viewBox="0 0 240 210"
      width={size}
      height={typeof size === "number" ? Math.round((size * 210) / 240) : "auto"}
      className={`inline-block select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Gold Luxury Gradients */}
        <linearGradient id={goldGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E4C2" />
          <stop offset="30%" stopColor="#D9BA7C" />
          <stop offset="70%" stopColor="#B38D48" />
          <stop offset="100%" stopColor="#E2C589" />
        </linearGradient>

        <linearGradient id={goldBrightId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF7E6" />
          <stop offset="45%" stopColor="#E6C88A" />
          <stop offset="100%" stopColor="#BE964E" />
        </linearGradient>

        {/* Botanical Foliage Gradients */}
        <linearGradient id={leafGradId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#365C44" />
          <stop offset="45%" stopColor="#5B8764" />
          <stop offset="100%" stopColor="#81A87A" />
        </linearGradient>
        <linearGradient id={leafDarkId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3E2E" />
          <stop offset="100%" stopColor="#436B50" />
        </linearGradient>
      </defs>

      {/* 1. THE 'A' MONOGRAM CHISELED STEMS */}
      {/* Right Stem with serif base */}
      <path
        d="M 116 16 L 126 50 L 175 168 L 196 172 L 196 176 L 140 176 L 140 172 L 154 168 L 125 96 L 115 54 Z"
        fill={aFill}
      />
      {/* Left Apex Corner */}
      <path d="M 116 16 L 115 54 L 92 98 L 76 86 Z" fill={aFill} />

      {/* 2. THE BOTANICAL LEAF (Nature) */}
      {/* Dark Shaded Flank */}
      <path
        d="M 52 148 C 38 126 42 100 58 78 C 66 68 76 60 84 56 C 81 74 74 95 62 116 C 54 130 52 142 52 148 Z"
        fill={`url(#${leafDarkId})`}
      />
      {/* Illuminated Foliage Flank */}
      <path
        d="M 84 56 C 88 72 88 92 81 114 C 74 134 62 148 52 148 C 58 134 66 112 72 90 C 78 72 82 58 84 56 Z"
        fill={`url(#${leafGradId})`}
      />
      {/* Delicate Leaf Spine Vein */}
      <path
        d="M 84 56 C 80 82 70 114 52 148"
        stroke="#B2D3AC"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* 3. THE GOLD SWOOSH & TRADE RIBBON */}
      {/* Bottom curled tail & flow across waist */}
      <path
        d="M 32 152 C 26 158 24 166 28 171 C 33 175 42 176 56 172 C 78 166 98 152 116 136 C 132 122 146 114 162 114 C 182 114 198 126 198 140 C 198 144 196 148 191 148 C 186 148 184 144 184 140 C 184 132 174 124 160 124 C 142 124 126 134 108 148 C 88 164 66 178 44 180 C 30 181 20 176 16 166 C 13 158 16 148 24 142 C 27 140 30 142 32 152 Z"
        fill={`url(#${goldGradId})`}
      />
      {/* Dynamic Highlight Ridge */}
      <path
        d="M 38 168 C 62 162 88 144 114 126 C 134 112 152 104 168 104 C 188 104 204 116 204 128 C 204 133 200 137 195 137 C 190 137 188 132 186 128 C 182 118 172 112 158 112 C 140 112 120 124 98 142 C 74 160 52 174 38 168 Z"
        fill={`url(#${goldBrightId})`}
        opacity="0.9"
      />
      {/* Orbital Loop Enclosing the Globe */}
      <path
        d="M 124 116 C 146 98 174 92 194 98 C 208 102 216 112 214 122 C 211 134 198 142 182 142 C 166 142 152 134 144 124 C 141 120 144 116 148 118 C 156 126 168 134 182 134 C 196 134 206 126 208 118 C 210 110 202 102 190 98 C 172 92 146 98 126 114 Z"
        fill={`url(#${goldGradId})`}
      />

      {/* 4. THE GOLD GLOBE (Global Reach) */}
      <g transform="translate(168, 68)">
        <circle
          cx="0"
          cy="0"
          r="28"
          stroke={`url(#${goldGradId})`}
          strokeWidth="1.8"
          strokeOpacity="0.4"
        />
        <circle
          cx="0"
          cy="0"
          r="26"
          fill={`url(#${goldGradId})`}
          opacity={isDark ? "0.28" : "0.18"}
        />
        <ellipse
          cx="0"
          cy="0"
          rx="26"
          ry="12"
          stroke={`url(#${goldBrightId})`}
          strokeWidth="1.1"
          strokeOpacity="0.5"
        />
        <ellipse
          cx="0"
          cy="0"
          rx="14"
          ry="26"
          stroke={`url(#${goldBrightId})`}
          strokeWidth="1.1"
          strokeOpacity="0.5"
        />
        <line
          x1="-26"
          y1="0"
          x2="26"
          y2="0"
          stroke={`url(#${goldBrightId})`}
          strokeWidth="1.1"
          strokeOpacity="0.5"
        />
        <line
          x1="0"
          y1="-26"
          x2="0"
          y2="26"
          stroke={`url(#${goldBrightId})`}
          strokeWidth="1.1"
          strokeOpacity="0.5"
        />
        {/* Stylized Landmass / Asia-India silhouette */}
        <path
          d="M -8 -12 C -2 -14 6 -16 14 -10 C 18 -6 20 0 16 8 C 12 12 4 15 -4 14 C -12 12 -16 4 -14 -4 Z"
          fill={`url(#${goldBrightId})`}
          opacity="0.75"
        />
        {/* India Sourcing Hub Point */}
        <circle cx="4" cy="-2" r="3.2" fill={isDark ? "#FFF" : "#0F3D2E"} opacity="0.9" />
        <circle cx="4" cy="-2" r="1.8" fill="#D9BA7C" />
      </g>

      {/* 5. THE COMPASS STAR (Opportunity) */}
      <g transform="translate(196, 60)">
        <path
          d="M 0 -18 L 3 -4 L 18 0 L 3 4 L 0 18 L -3 4 L -18 0 L -3 -4 Z"
          fill={`url(#${goldBrightId})`}
        />
        <path
          d="M 0 -9 L 2 -2 L 9 0 L 2 2 L 0 9 L -2 2 L -9 0 L -2 -2 Z"
          fill="#FFFFFF"
          opacity="0.85"
        />
        <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

/**
 * AnvayaHorizontalLogo: Official Horizontal Logo Layout
 * Left: Emblem
 * Right: ANVAYA + — G L O B A L — + Tagline
 */
export function AnvayaHorizontalLogo({
  variant = "light",
  size = "md",
  showTagline = true,
  className = "",
}: {
  variant?: LogoVariant;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}) {
  const isDark = variant === "dark";

  const sizeMap = {
    sm: {
      emblemSize: 34,
      titleSize: "text-lg tracking-wider",
      subSize: "text-[9px] tracking-[0.24em]",
      tagSize: "text-[10px]",
    },
    md: {
      emblemSize: 46,
      titleSize: "text-2xl tracking-widest",
      subSize: "text-[10.5px] tracking-[0.28em]",
      tagSize: "text-xs",
    },
    lg: {
      emblemSize: 62,
      titleSize: "text-3xl tracking-widest",
      subSize: "text-xs tracking-[0.32em]",
      tagSize: "text-sm",
    },
  };

  const current = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      <AnvayaEmblem
        variant={variant}
        size={current.emblemSize}
        idPrefix={`horiz-${variant}-${size}`}
      />
      <div className="flex flex-col justify-center leading-none">
        {/* Brand Name */}
        <span
          className={`font-serif font-bold uppercase transition-colors ${current.titleSize} ${
            isDark ? "text-white" : "text-[#0F3D2E]"
          }`}
          style={{
            fontFamily: "'Cormorant Garamond', 'Instrument Serif', Georgia, serif",
            letterSpacing: "0.14em",
          }}
        >
          ANVAYA
        </span>

        {/* Global Subtitle with horizontal rules */}
        <div className="flex items-center gap-2 mt-1">
          <span className="h-[1px] w-5 bg-[#C9A96B] opacity-80" />
          <span
            className={`font-semibold uppercase text-[#C9A96B] ${current.subSize}`}
            style={{ letterSpacing: "0.28em" }}
          >
            GLOBAL
          </span>
          <span className="h-[1px] w-5 bg-[#C9A96B] opacity-80" />
        </div>

        {/* Tagline */}
        {showTagline && (
          <span
            className={`italic mt-1.5 font-serif font-light ${size === "sm" ? "hidden sm:inline-block" : "inline-block"} ${current.tagSize} ${
              isDark ? "text-[#F8F6EE]/90" : "text-[#0F3D2E]/85"
            }`}
            style={{ fontFamily: "'Cormorant Garamond', 'Instrument Serif', Georgia, serif" }}
          >
            Relationships are the currency of trade™
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * AnvayaLogo: The Complete Vertical Hero / Master Lockup
 * Replicates the main central logo from the brand guide sheet.
 */
export function AnvayaLogo({
  variant = "light",
  size = "md",
  showTagline = true,
  showDescriptor = false,
  showPillars = false,
  className = "",
}: {
  variant?: LogoVariant;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  showDescriptor?: boolean;
  showPillars?: boolean;
  className?: string;
}) {
  const isDark = variant === "dark";

  const sizeMap = {
    sm: {
      emblemSize: 52,
      titleSize: "text-2xl",
      subSize: "text-[10px]",
      tagSize: "text-xs",
      ruleWidth: "w-8",
    },
    md: {
      emblemSize: 90,
      titleSize: "text-4xl md:text-5xl",
      subSize: "text-xs md:text-sm",
      tagSize: "text-sm md:text-base",
      ruleWidth: "w-14",
    },
    lg: {
      emblemSize: 130,
      titleSize: "text-5xl md:text-6xl",
      subSize: "text-sm md:text-base",
      tagSize: "text-base md:text-lg",
      ruleWidth: "w-20",
    },
    xl: {
      emblemSize: 170,
      titleSize: "text-6xl md:text-7xl",
      subSize: "text-base md:text-lg",
      tagSize: "text-lg md:text-xl",
      ruleWidth: "w-28",
    },
  };

  const current = sizeMap[size];

  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      {/* Optional Top Pillars */}
      {showPillars && (
        <div className="w-full max-w-2xl flex justify-between items-start mb-6 text-[10px] tracking-[0.16em] uppercase opacity-75 font-medium px-4">
          <div className="text-left flex flex-col gap-1">
            <span className="w-8 h-[1px] bg-[#C9A96B] mb-1" />
            <span>People · Products</span>
            <span>Possibilities</span>
            <span>A Brighter Tomorrow</span>
          </div>
          <div className="text-right flex flex-col items-end gap-1">
            <span className="w-8 h-[1px] bg-[#C9A96B] mb-1" />
            <span>Rooted In India</span>
            <span>Open To The World</span>
          </div>
        </div>
      )}

      {/* Emblem */}
      <AnvayaEmblem
        variant={variant}
        size={current.emblemSize}
        idPrefix={`vert-${variant}-${size}`}
      />

      {/* ANVAYA */}
      <h1
        className={`font-bold mt-3 font-serif uppercase tracking-[0.18em] transition-colors ${current.titleSize} ${
          isDark ? "text-white" : "text-[#0F3D2E]"
        }`}
        style={{ fontFamily: "'Cormorant Garamond', 'Instrument Serif', Georgia, serif" }}
      >
        ANVAYA
      </h1>

      {/* — G L O B A L — */}
      <div className="flex items-center gap-3 mt-1.5">
        <span className={`h-[1px] ${current.ruleWidth} bg-[#C9A96B]`} />
        <span
          className={`font-semibold uppercase text-[#C9A96B] tracking-[0.38em] ${current.subSize}`}
          style={{ letterSpacing: "0.38em" }}
        >
          GLOBAL
        </span>
        <span className={`h-[1px] ${current.ruleWidth} bg-[#C9A96B]`} />
      </div>

      {/* Primary Tagline */}
      {showTagline && (
        <p
          className={`italic font-serif font-light mt-3 tracking-wide ${current.tagSize} ${
            isDark ? "text-[#F8F6EE]" : "text-[#0F3D2E]"
          }`}
          style={{ fontFamily: "'Cormorant Garamond', 'Instrument Serif', Georgia, serif" }}
        >
          Relationships are the currency of trade™
        </p>
      )}

      {/* Descriptor Bar */}
      {showDescriptor && (
        <div
          className={`mt-4 pt-3 border-t border-[#C9A96B]/30 flex flex-wrap justify-center items-center gap-3 text-[10px] md:text-[11px] tracking-[0.18em] uppercase ${
            isDark ? "text-[#F8F6EE]/80" : "text-[#0F3D2E]/80"
          }`}
        >
          <span>Indian Food Products</span>
          <span className="text-[#C9A96B]">|</span>
          <span>Sourcing</span>
          <span className="text-[#C9A96B]">|</span>
          <span>Global Trade</span>
        </div>
      )}
    </div>
  );
}

/**
 * AnvayaIcon: The Official App Icon / Squircle Favicon
 */
export function AnvayaIcon({ size = 56, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      style={{ width: size, height: size, borderRadius: size * 0.24 }}
      className={`relative inline-flex items-center justify-center bg-[#0F3D2E] shadow-md border border-[#C9A96B]/25 overflow-hidden p-1.5 ${className}`}
    >
      <AnvayaEmblem variant="dark" size={Math.round(size * 0.78)} idPrefix={`sq-icon-${size}`} />
    </div>
  );
}

/**
 * Key Brand Element Icons (Nature, Global, Trade, Opportunity)
 */
export function BrandElementIcon({
  element,
  size = 28,
  className = "",
}: {
  element: "nature" | "global" | "trade" | "opportunity";
  size?: number;
  className?: string;
}) {
  if (element === "nature") {
    // Leaf
    return (
      <svg viewBox="0 0 32 32" width={size} height={size} fill="none" className={className}>
        <path
          d="M7 26 C5 18 10 9 25 5 C 23 18 16 25 7 26 Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M7 26 C 14 20 18 14 25 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (element === "global") {
    // Globe
    return (
      <svg viewBox="0 0 32 32" width={size} height={size} fill="none" className={className}>
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.8" />
        <ellipse cx="16" cy="16" rx="5.5" ry="11" stroke="currentColor" strokeWidth="1.4" />
        <line x1="5" y1="16" x2="27" y2="16" stroke="currentColor" strokeWidth="1.4" />
        <line x1="7.5" y1="10.5" x2="24.5" y2="10.5" stroke="currentColor" strokeWidth="1.2" />
        <line x1="7.5" y1="21.5" x2="24.5" y2="21.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  }

  if (element === "trade") {
    // Dynamic swooshes / wings
    return (
      <svg viewBox="0 0 32 32" width={size} height={size} fill="none" className={className}>
        <path d="M 6 22 C 12 21 18 17 26 10 C 23 16 18 20 11 23 Z" fill="currentColor" />
        <path
          d="M 12 17 C 17 14 21 10 27 6 C 24 11 20 14 15 17 Z"
          fill="currentColor"
          opacity="0.75"
        />
      </svg>
    );
  }

  // Opportunity (Compass Star)
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" className={className}>
      <path d="M 16 2 L 18 13 L 29 16 L 18 19 L 16 30 L 14 19 L 3 16 L 14 13 Z" />
      <circle cx="16" cy="16" r="1.5" fill="#FFF" />
    </svg>
  );
}

/**
 * Brand Color Palette Definition
 */
export const anvayaBrandPalette = [
  { name: "Forest Green", hex: "#0F3D2E", role: "Primary Brand / Heritage", textColor: "#FFFFFF" },
  { name: "Antique Gold", hex: "#C9A96B", role: "Luxury & Prosperity", textColor: "#0F3D2E" },
  { name: "Warm Cream", hex: "#F8F6EE", role: "Paper / Surface / Ivory", textColor: "#0F3D2E" },
  { name: "Foliage Green", hex: "#6B8F63", role: "Nature & Botanical", textColor: "#FFFFFF" },
  { name: "Deep Earth", hex: "#3E2F1C", role: "Grounding / Spice", textColor: "#FFFFFF" },
];
