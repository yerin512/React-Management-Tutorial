import Users from './components/pages/Users'
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import Userd from './components/pages/Userd';

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
    },
    {
        path: '/Users/:id',
        component: Userd
    }
]