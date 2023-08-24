import { graphql, useStaticQuery } from "gatsby"

export const useBookCovers = () => {
  const data = useStaticQuery(graphql`
query BookCovers {
  allMarkdownRemark(filter: {frontmatter: {bookcover: {eq: true}}}) {
    edges {
      node {
        frontmatter {
          bookSlug
          title
          path
          stars
          description
          order
          keywords
          image
          icon
        }
      }
    }
  }
}
`)

    const {allMarkdownRemark} = data   
    const {edges} = allMarkdownRemark
    const docs: Array<any> = []
    for(let i = 0; i < edges.length; i++){        
        const {node} = edges[i]
        const {frontmatter} = node
                docs.push({
                    order: frontmatter.order,
                    ...node,
                  })
    }
    const sortedArr = [...docs].sort((a, b) => a.order - b.order);
    return sortedArr
}