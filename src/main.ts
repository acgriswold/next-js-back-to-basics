import { render } from 'react-dom';

import './style.css';
import { Content } from './content';

function init() {
  const app = document.querySelector('#app')

  if (!app)
    return

  render(Content(), app);
}

init()