const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'React Component Ts',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'D:\\code\\react-component-ts\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Component Ts',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3030,
        p: 3000,
        separator: '-',
        paths: {
          root: 'D:\\code\\react-component-ts',
          templates:
            'D:\\code\\react-component-ts\\node_modules\\docz-core\\dist\\templates',
          docz: 'D:\\code\\react-component-ts\\.docz',
          cache: 'D:\\code\\react-component-ts\\.docz\\.cache',
          app: 'D:\\code\\react-component-ts\\.docz\\app',
          appPackageJson: 'D:\\code\\react-component-ts\\package.json',
          appTsConfig: 'D:\\code\\react-component-ts\\tsconfig.json',
          gatsbyConfig: 'D:\\code\\react-component-ts\\gatsby-config.js',
          gatsbyBrowser: 'D:\\code\\react-component-ts\\gatsby-browser.js',
          gatsbyNode: 'D:\\code\\react-component-ts\\gatsby-node.js',
          gatsbySSR: 'D:\\code\\react-component-ts\\gatsby-ssr.js',
          importsJs: 'D:\\code\\react-component-ts\\.docz\\app\\imports.js',
          rootJs: 'D:\\code\\react-component-ts\\.docz\\app\\root.jsx',
          indexJs: 'D:\\code\\react-component-ts\\.docz\\app\\index.jsx',
          indexHtml: 'D:\\code\\react-component-ts\\.docz\\app\\index.html',
          db: 'D:\\code\\react-component-ts\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
