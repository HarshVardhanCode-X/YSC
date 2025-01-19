import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MainLoader from './components/Loader/MainLoader';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const LoginLayout = lazy(() => import('./components/Layouts/LoginLayout'));
const Login = lazy(() => import('./components/Login/Login'));
const Register = lazy(() => import('./components/Register/Register'));
const MainLayout = lazy(() => import('./components/Layouts/MainLayout'));
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

const App = () => {

  return (
    <div className='App'>
      <ToastContainer />

      <Suspense fallback={<MainLoader />}>
        <Routes>
          <Route element={<LoginLayout />}>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
          </Route>
        </Routes>

        <Routes>
          <Route element={<MainLayout />}>
            <Route exact path='/dashboard' element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>} />

            <Route exact path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
