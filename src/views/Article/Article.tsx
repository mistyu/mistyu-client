
import './article.scss'
import gfm from '@bytemd/plugin-gfm'
import { Editor, Viewer } from '@bytemd/react'
import frontmatter from '@bytemd/plugin-frontmatter'
import highlight from '@bytemd/plugin-highlight'
import httpV from '../note/http.md?raw'

const plugins = [
  gfm(),
  frontmatter(),
  highlight()
  // Add more plugins here
]


function Article() {
  return (
    <div className="contanier">
      <Viewer
        value={httpV}
        plugins={plugins}
      />
    </div>
    // <Editor
    //   value={value}
    //   plugins={plugins}
    //   onChange={(v) => {
    //     setValue(v)
    //   }}
    // />
  )
}

export default Article
