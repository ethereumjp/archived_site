const path = require("path");

const buildLintCommand = (filenames) =>
  `yarn run biome lint ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;

const buildFormatCommand = (filenames) =>
  `yarn run biome format ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")} `;

module.exports = {
  "**/*.{js,jsx,ts,tsx}": [buildLintCommand],
  "**/*.{js,jsx,ts,tsx,json}": [buildFormatCommand],
};
