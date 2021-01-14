// fragmentはここでは使えない
const airtableQuery = `
{
  allAirtable(filter: {table: {eq: "Projects"}}) {
    nodes {
      id
      data {
        date
        name
        type
        image {
          localFiles {
            childImageSharp {
              fluid {
                src
                aspectRatio
                base64
                sizes
                srcSet
              }
            }
          }
        }
      }
    }
  }
}
`
function pageToAlgoliaRecord({ id, data: { name, type, date, image } }) {
  return {
    objectID: id,
    name,
    type,
    date,
    image: { ...image.localFiles[0].childImageSharp.fluid },
  }
}
const queries = [
  {
    query: airtableQuery,
    // queryで取得したdataをtransformerで加工
    transformer: ({ data }) => data.allAirtable.nodes.map(pageToAlgoliaRecord),
  },
]

module.exports = queries
