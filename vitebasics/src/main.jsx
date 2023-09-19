import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Hello from './Hello.jsx';
// import  {jsx as _jsx} from "react/jsx-runtime.js"

function MyApp() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

const anotherUser = " bipin khanal"

const reactElement = React.createElement('a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherUser)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hello />
    <MyApp />
    {reactElement}
  </React.StrictMode>,
);
