/**
 * Color profile for the portfolio application
 * Base colors: Blanched Almond and Dark Gray
 */

// Base colors
export const baseColors = {
  blanchedAlmond: '#FFEBCD',
  darkGray: '#2C2C2C',
} as const;

// Semantic color palette
export const colors = {
  // Primary colors
  primary: baseColors.blanchedAlmond,
  secondary: baseColors.darkGray,

  // Background colors
  background: baseColors.blanchedAlmond,
  backgroundAlt: '#FFF8F0', // Slightly lighter variant
  backgroundDark: baseColors.darkGray,
  backgroundDarkAlt: '#3A3A3A', // Slightly lighter dark variant

  // Text colors
  text: baseColors.darkGray,
  textLight: '#4A4A4A', // Lighter gray for secondary text
  textOnDark: baseColors.blanchedAlmond,
  textMuted: '#6B6B6B', // Muted gray for less important text

  // Border colors
  border: '#D4C5B0', // Subtle border color
  borderDark: '#1A1A1A', // Dark border

  // Accent colors (derived from base)
  accent: '#E8D5B7', // Slightly darker than blanched almond
  accentDark: '#1E1E1E', // Slightly lighter than dark gray

  // Status colors (using base palette as inspiration)
  success: '#4A7C59', // Muted green
  warning: '#D4A574', // Warm tone matching blanched almond
  error: '#C97D60', // Warm red
  info: '#6B8E9F', // Muted blue

  // Neutral grays (for UI elements)
  gray50: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#E5E5E5',
  gray300: '#D4D4D4',
  gray400: '#A3A3A3',
  gray500: '#737373',
  gray600: '#525252',
  gray700: '#404040',
  gray800: '#262626',
  gray900: '#171717',
} as const;

// Type export for TypeScript
export type ColorName = keyof typeof colors;

/**
 * Get a color value by name
 * @param name - The name of the color
 * @returns The color hex value
 */
export const getColor = (name: ColorName): string => {
  return colors[name];
};

/**
 * Color profile object that can be used with styled-components ThemeProvider
 */
export const colorTheme = {
  colors,
  baseColors,
} as const;

export default colors;
