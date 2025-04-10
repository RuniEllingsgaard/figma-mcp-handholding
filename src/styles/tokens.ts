// Design tokens extracted from Figma

// Colors
export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F5F5F5',
    100: '#F4F4F4',
    200: '#EDEDED',
    300: '#EBEBEB',
    400: '#E7E7E7',
    500: '#939393',
    600: '#3C3C3C',
    700: '#2A2A2A',
  }
} as const;

// Typography
export const typography = {
  fontFamilies: {
    matter: 'Matter',
    matterMono: 'Matter Mono TRIAL'
  },
  fontWeights: {
    regular: 400
  },
  fontSizes: {
    xs: '12px',
    base: '16px',
    lg: '20px'
  },
  lineHeights: {
    normal: 1.2,
    mono: 1.2000000476837158
  }
} as const;

// Layout
export const layout = {
  spacing: {
    none: '0px',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '102px',
    '4xl': '116px',
    '5xl': '182px'
  },
  sizing: {
    icon: {
      width: '48px',
      height: '48px'
    },
    sidePanel: {
      width: '244px',
      height: '960px'
    },
    documentItem: {
      width: '217px'
    },
    document: {
      width: '1036px',
      height: '48px'
    },
    workspace: {
      width: '1376px'
    }
  },
  borderRadius: {
    sm: '4px',
    md: '5px',
    lg: '8px',
    xl: '16px'
  }
} as const;

// Effects
export const effects = {
  boxShadow: {
    sm: '0px 1px 13px 0px rgba(0, 0, 0, 0.05)'
  }
} as const;

// Border styles
export const borders = {
  stroke: {
    width: '1px',
    color: colors.gray[200],
    dashed: {
      width: '1px',
      color: '#9747FF',
      pattern: [10, 5]
    }
  }
} as const;

// Opacity levels
export const opacity = {
  none: 0,
  low: 0.3,
  medium: 0.4,
  high: 0.5,
  full: 1
} as const;

// Component-specific styles
export const components = {
  documentTag: {
    height: '43px',
    padding: `${layout.spacing.md} ${layout.spacing.md} 15px`
  },
  textButton: {
    padding: `${layout.spacing.md} ${layout.spacing.xl}`
  },
  iconButton: {
    padding: layout.spacing.xs
  },
  textFormatControl: {
    padding: `${layout.spacing.sm} ${layout.spacing.sm}`
  },
  textSizeControl: {
    padding: `${layout.spacing.sm} 14px`
  }
} as const;

// Export all tokens as a single object
export const tokens = {
  colors,
  typography,
  layout,
  effects,
  borders,
  opacity,
  components
} as const;

// Type exports
export type Colors = typeof colors;
export type Typography = typeof typography;
export type Layout = typeof layout;
export type Effects = typeof effects;
export type Borders = typeof borders;
export type Opacity = typeof opacity;
export type Components = typeof components;
export type Tokens = typeof tokens; 