const styleLintConfig = {
  extends: ['@linaria/stylelint-config-standard-linaria'],
  overrides: [
    {
      files: ['src/**/*.{jsx,tsx}'],
    },
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'rule-empty-line-before': null,
    'block-no-empty': null,
    'function-no-unknown': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};

module.exports = styleLintConfig;
