/** @type {import('prettier').Config} */
module.exports = {
  trailingComma: 'all',
  singleQuote: true,
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
