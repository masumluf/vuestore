import Itemdetails from '../components/views/Itemdetails'
import About from '../components/About'
import Inventory from '../components/views/Inventory'

export const routes = [{
    path: '',
    component: Inventory
  }, {
    path: '/item/:id',
    component: Itemdetails
  }

]
