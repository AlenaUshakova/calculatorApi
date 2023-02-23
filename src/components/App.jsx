import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { ThemeContext } from '../context/ThemeContext';

const Home = lazy(() => import('pages/Home/Home'));
const Settings = lazy(() => import('pages/Settings/Settings'));

export const App = () => {
  return (
    <ThemeContext>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </ThemeContext>
  );
};
