const path = require("path")

// crate pages dynamically
// rootにgatsby-node.jsを設置することでbuild時にhookしたい関数を指定できる
// createPagesは非同期、引数からgraphql, createPageにaccess可
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/products/${product.slug}`,
      // componentはabsolute path
      component: path.resolve(`src/templates/product-template.js`),
      // 渡す変数をcontextで指定
      context: {
        slug: product.slug,
      },
    })
  })
}
