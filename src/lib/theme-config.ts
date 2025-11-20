const hexToRgb = (hex: string): [number, number, number] | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
};

const createOpacityVariants = (hex: string) => {
  const rgb = hexToRgb(hex);
  if (!rgb) {
    return { '10': '', '20': '', '30': '', '50': '', '60': '', '80': '' };
  }
  const [r, g, b] = rgb;
  return {
    '10': `rgba(${r}, ${g}, ${b}, 0.1)`,
    '20': `rgba(${r}, ${g}, ${b}, 0.2)`,
    '30': `rgba(${r}, ${g}, ${b}, 0.3)`,
    '50': `rgba(${r}, ${g}, ${b}, 0.5)`,
    '60': `rgba(${r}, ${g}, ${b}, 0.6)`,
    '80': `rgba(${r}, ${g}, ${b}, 0.8)`,
  };
};

export const colors = {
  beige: "#edebe0",
  burgundy: "#4a151e",
  gold: "#988561",
  teal: "#002623",
  beigeWithOpacity: createOpacityVariants("#edebe0"),
  burgundyWithOpacity: createOpacityVariants("#4a151e"),
  goldWithOpacity: createOpacityVariants("#988561"),
  tealWithOpacity: createOpacityVariants("#002623"),
} as const;

export const typography = {
  fontFamily: {
    display: ["Qomra", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "sans-serif"],
    body: ["Qomra", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "sans-serif"],
  },
  fontSize: {
    'xs': ['0.75rem', { lineHeight: '1.5' }],
    'sm': ['0.875rem', { lineHeight: '1.6' }],
    'base': ['1rem', { lineHeight: '1.7' }],
    'lg': ['1.125rem', { lineHeight: '1.6' }],
    'xl': ['1.5rem', { lineHeight: '1.4' }],
    '2xl': ['2.25rem', { lineHeight: '1.3' }],
    '3xl': ['3rem', { lineHeight: '1.2' }],
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

export const spacing = {
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
} as const;

export const borderRadius = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
} as const;

export const shadows = {
  sm: '0 1px 3px rgba(74, 21, 30, 0.06)',
  md: '0 4px 12px rgba(74, 21, 30, 0.08)',
  lg: '0 10px 30px rgba(74, 21, 30, 0.12)',
  xl: '0 20px 60px rgba(74, 21, 30, 0.15)',
} as const;

export const breakpoints = {
  mobile: '0px',
  tablet: '768px',
  desktop: '1024px',
  large: '1536px',
} as const;

export const animations = {
  durations: {
    fast: '150ms',
    base: '250ms',
    slow: '400ms',
  },
  timingFunctions: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  dropdown: 10,
  sticky: 20,
  banner: 30,
  overlay: 40,
  modal: 50,
  tooltip: 60,
} as const;

export const layout = {
  maxWidth: {
    container: '1280px',
  },
} as const;