const providers = ['github']

const callbacks = providers.map(provider => {
  return `https://localhost:8080/${provider}/callback`
})

const [githubURL] = callbacks

exports.CLIENT_ORIGIN = 'https://localhost:3000'

exports.GITHUB_CONFIG = {
  clientID: process.env.GITHUB_KEY,
  clientSecret: process.env.GITHUB_SECRET,
  callbackURL: githubURL
}
