/* eslint-env node */

module.exports = {
  extends: ['@commitlint/config-conventional'],

  // Add your own rules. See http://marionebl.github.io/commitlint
  rules: {
    // Disable language rule
    lang: [0, 'always', 'eng']
  }
};
