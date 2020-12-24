import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const components = {
  h3: () => <span>and you thought you wiall a h3</span>,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
