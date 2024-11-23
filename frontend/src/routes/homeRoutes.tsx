import { Route } from 'react-router-dom';
import Home from '@/pages/Home';

const homeRoutes = [
  <Route
    key="home"
    path="/"
    element={<Home />}
  />,
];

export default homeRoutes;
