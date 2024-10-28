import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import { Login } from '@/pages/Login';
import { Signup } from '@/pages/Signup';
import { Landing } from '@/pages/Landing';
import { UpgradePremium } from '@/pages/UpgradePremium';
import { Layout } from '@/components/Layout';
import { Konsultasi } from '@/pages/Konsultasi';
import { DeteksiKulit } from '@/pages/DeteksiKulit';
import { DetailDeteksiKulit } from '@/pages/DeteksiKulit/detail.jsx';
import { Bibliotek } from '@/pages/Bibliotek';
// protected route
import { AuthProtectedRoute } from '@/components/AuthProtectedRoute';
import { RoleProtectedRoute } from '@/components/RoleProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/signup"
        element={<Signup />}
      />
      <Route
        path="/"
        element={
          <Layout>
            <Landing />
          </Layout>
        }
      />
      <Route
        path="/deteksi-kulit"
        element={
          <Layout>
            <DeteksiKulit />
          </Layout>
        }
      />
      <Route
        path="/deteksi-kulit/:id"
        element={
          <Layout>
            <DetailDeteksiKulit />
          </Layout>
        }
      />
      <Route
        path="/bibliotek"
        element={
          <Layout>
            <Bibliotek />
          </Layout>
        }
      />
      <Route
        path="/upgrade"
        element={
          <AuthProtectedRoute>
            <Layout>
              <UpgradePremium />
            </Layout>
          </AuthProtectedRoute>
        }
      />
      {/* dibawah sini contoh protectedroute untuk fitur premium */}
      <Route
        path='/konsultasi'
        element={
          // <AuthProtectedRoute>
          //   <RoleProtectedRoute requiredRole="premium">
          <Layout>
            <Konsultasi />
          </Layout>
          //   </RoleProtectedRoute>
          // </AuthProtectedRoute>

        }
      />

      <Route
        path="*"
        element={
          <AuthProtectedRoute>
            <Layout>
              <Landing />
            </Layout>
          </AuthProtectedRoute>
        } />
    </Routes >
  );
};

export default AppRoutes;
