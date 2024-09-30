import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Home from './pages/Home/Home/Home'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import Appointment from './pages/Appointment/Appointment/Appointment'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import ViewDoctorProfile from './components/ViewDoctorProfile/ViewDoctorProfile'

function App({ children }) {
  const routes = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
      {path: '/', element: <Home></Home>},
      {path: '/appointment', element: <Appointment></Appointment>},
      {path: '/doctor/:id/profile', element: <ViewDoctorProfile></ViewDoctorProfile>},
      {path: '/signUp', element: <SignUp></SignUp>},
      {path: '/signIn', element: <SignIn></SignIn>}
    ]},
    {
      path: '*', element: <ErrorPage></ErrorPage>
    }
  ])

  return (
    <RouterProvider router={routes}>
      { children }
    </RouterProvider>
  )
}

export default App
