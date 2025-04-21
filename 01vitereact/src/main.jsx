import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return (
    <a href='https://google.com' target='_blank'>
      Custom Fun Google
    </a>
  )
}

const eleWrong = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank',
  },
  childern: 'Click Me',
}

const ele1 = (
  <a href='https://google.com' target='_blank'>
    Ele 1 Google
  </a>
)

const anotherUser = 'Farooq'

const ele2 = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Ele 2 Google ',
  anotherUser
)

createRoot(document.getElementById('root')).render(

  ele2

)
