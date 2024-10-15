import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar, Loading } from './components/path'

function App() {
  const location = useLocation();

  const HomePage = lazy(() => import('./components/pages/Home'))
  const TodayPage = lazy(() => import('./components/pages/Today'))
  const HistoryPage = lazy(() => import('./components/pages/History'))
  const TomorrowPage = lazy(() => import('./components/pages/Tomorrow'))
  const LoginPage = lazy(() => import('./components/pages/Login'))
  const SignUpPage = lazy(() => import('./components/pages/SignUp'))
  const ErrorPage = lazy(() => import('./components/pages/Error'))

  const navbarRoutes = ['/', '/home', '/today', '/history', '/tomorrow'];

  return (
    <>
      <div className="h-screen ">
        <Suspense fallback={<Loading />}>
        {navbarRoutes.includes(location.pathname) && <Navbar />}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/today' element={<TodayPage />} />
            <Route path='/history' element={<HistoryPage />} />
            <Route path='/tomorrow' element={<TomorrowPage />} />

            <Route path='/loading' element={<Loading />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/SignUp' element={<SignUpPage />} />
            <Route path='/error' element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </div >
    </>
  )
}

export default App
