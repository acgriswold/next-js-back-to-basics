import './style.css';

function init() {
  const app = document.querySelector('#app')

  if (!app)
    return
  
  const header = document.createElement('h1')

  const headerText = document.createTextNode(`🚀 Learning at speed`)

  header.appendChild(headerText)

  const description = document.createElement('div')
  description.className = 'text-subtle'

  const desciptionText = document.createTextNode('Let\'s get back to the basics')

  description.appendChild(desciptionText)

  app.appendChild(header)
  app.appendChild(description)
}

init()