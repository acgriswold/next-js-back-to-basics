import React from 'react'
import ReactDOM from 'react-dom/client'

import { Content } from './content';

import './style.css';

function init() {
  const app = document.querySelector('#app')

  if (!app)
    return

    ReactDOM.createRoot(app)
      .render(
      <React.StrictMode>
        <Content />
      </React.StrictMode>
    )
}

init()