import Top from './pages/Top';
import About from './pages/About';

const routes = [
  { path: '/', component: Top, exact : true },
  { path: '/about', component: About },
];

export default routes;