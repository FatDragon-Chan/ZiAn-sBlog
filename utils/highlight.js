import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-gist.css'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function(code) {
    console.log(code)
    return hljs.highlightAuto(code).value
  }
})

export default marked
