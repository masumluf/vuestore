import Hello from '../components/Hello'
import About from '../components/About'

export const routes = [{
    path: '',
    component: Hello
  }, {
    path: '/about/:id',
    component: About
  }

]
