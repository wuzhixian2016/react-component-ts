const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\code\\react-component-ts\\.docz\\.cache\\dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("D:\\code\\react-component-ts\\README.md"))),
  "component---src-components-touch-feedback-touch-feedback-mdx": hot(preferDefault(require("D:\\code\\react-component-ts\\src\\components\\TouchFeedback\\TouchFeedback.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\code\\react-component-ts\\.docz\\src\\pages\\404.js")))
}

