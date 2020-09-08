module.exports = {
  presets: [
    '@babel/preset-env', // converte de um JS "moderno" para um "antigo"
    '@babel/preset-react' // entende o JSX e converte para que o browser também entenda
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}