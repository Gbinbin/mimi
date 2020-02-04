export default {
    path: '/movie',
    component: () => import('@/views/Movie'),
    children: [{
            path: 'city',
            component: () => import('@/components/City')
        },
        {
            path: 'comingSoon',
            component: () => import('@/components/ComingSoon')
        },
        {
            path: 'playingNow',
            component: () => import('@/components/PlayingNow')
        },
        {
            path: 'search',
            component: () => import('@/components/Search')
        },
        {
            path: '/movie',
            redirect: '/movie/playingNow'
        }
    ]
}