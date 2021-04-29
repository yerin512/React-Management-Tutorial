import Users from './components/pages/Users'
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/Users',
        component: Users
    },
    {
        path: '/Movies',
        component: Movies
    }
]