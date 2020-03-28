import Home from '../pages/home'
import Chat from '../pages/chat'
import Users from '../pages/users'
import Settings from '../pages/settings'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
  },

  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    exact: false,
  },

  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    exact: false,
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
    exact: false,
  },
]

export default routes
