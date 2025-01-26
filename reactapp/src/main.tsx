import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'

let root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root)
    .render(
      <React.StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </React.StrictMode>,
    )
}
