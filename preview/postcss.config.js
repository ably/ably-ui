module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      // Tailwind code breaks without this disabled; the postcss plugin that handles custom properties
      // seems to break if it second-passes (we already use it in the package) over it's output
      features: {
        "custom-properties": false,
      },
    }),
  ],
};
