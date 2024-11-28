import { Route, Routes } from 'react-router-dom';
import quizRoutes from './quizRoutes';
import homeRoutes from './homeRoutes';
import NotFound from '@/pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      {homeRoutes}
      {quizRoutes}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default AppRoutes;
