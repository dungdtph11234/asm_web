module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,n
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    translate: ['group-hover'],
    rotate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
