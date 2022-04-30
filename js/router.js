const Home = () => import('./components/home.js');
const Cards = () => import('./components/cards.js');
const Settings = () => import('./components/settings.js');
const About = () => import('./components/about.js');

const router = new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/cartas', name: 'cards', component: Cards },
    { path: '/configuracion', name: 'settings', component: Settings },
    { path: '/acerca', name: 'about', component: About }
  ]
});

export default router;