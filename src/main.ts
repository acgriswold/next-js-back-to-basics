import './style.css';

function init() {
  const app = document.querySelector('#app');

  if (!app)
    return;
  
  app.innerHTML = `
    <div>
      <h1>Hello Vite!</h1>
      
      <div class="text-subtle">
        Let's get back to the basics
      </div>
    </div>
  `;  
}

init()