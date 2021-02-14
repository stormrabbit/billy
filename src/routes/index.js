
import Dashboard from '../containers/Dashboard'
import UsersPage from '../containers/UsersPage'
import RolesPage from '../containers/RolesPage'
import AthoritiesPage from '../containers/AthoritiesPage'
import EndpointsPage from '../containers/EndpointsPage'
const routes = [
  { path: '/', component: Dashboard },
  { path: '/users', component: UsersPage },
  { path: '/roles', component: RolesPage },
  { path: '/athorities', component: AthoritiesPage },
  { path: '/endpoints', component: EndpointsPage }
]


export {
  routes
}