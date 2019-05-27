module.exports = {
  presets: [
    '@vue/app', '@babel/preset-env'
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-syntax-dynamic-import"], 
    ["transform-vue-jsx"], 
    ["@babel/plugin-transform-runtime"]
  ]
}
