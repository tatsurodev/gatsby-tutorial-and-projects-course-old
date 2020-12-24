import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})()
`

const Example = props => {
  const className = props.children.props.className
  const language = className.replace(/language-/, '')

  return (
    <Highlight
      {...defaultProps}
      // 表示するcodeをtrimして指定
      code={props.children.props.children.trim()}
      // 言語を動的に指定
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Example
