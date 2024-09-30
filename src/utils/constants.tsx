import { v4 as uuidv4 } from 'uuid' 

export const navItems = [
    {
        id: uuidv4(),
        name: 'home',
        path: '/',
        active: true
    },
    {
        id: uuidv4(),
        name: 'tours',
        path: '/tours',
        active: false
    },
    {
        id: uuidv4(),
        name: 'destinations',
        path: '/destinations',
        active: false
    },
    {
        id: uuidv4(),
        name: 'manage booking',
        path: '/booking',
        active: false
    },
    {
        id: uuidv4(),
        name: 'contact us',
        path: '/contact',
        active: false
    },
    {
        id: uuidv4(),
        name: 'about us',
        path: '/about',
        active: false
    }
]