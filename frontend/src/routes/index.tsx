import { Routes } from 'react-router-dom';
import quizRoutes from './quizRoutes';
import homeRoutes from './homeRoutes';

function AppRoutes() {
  return (
    <Routes>
      {homeRoutes}
      {quizRoutes}
    </Routes>
  );
}

export default AppRoutes;
