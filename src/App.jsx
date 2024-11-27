import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Home from './pages/Home/Home/Home'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import Appointment from './pages/Appointment/Appointment/Appointment'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import ViewDoctorProfile from './components/DoctorProfile/ViewDoctorProfile/ViewDoctorProfile'
import AllUsers from './pages/Dashboard/AdminDashboard/AllUsers/AllUsers'
import AddDoctor from './pages/Dashboard/AdminDashboard/AddDoctor/AddDoctor'
import ManageDoctors from './pages/Dashboard/AdminDashboard/ManageDoctors/ManageDoctors'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import UserProfile from './components/UserProfile/UserProfile'

function App({ children }) {
  const routes = createBrowserRouter([
    {path: '/', element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
      {path: '/', element: <Home></Home>},
      {path: '/appointment', element: <Appointment></Appointment>},
      {path: '/doctor/:id/profile', element: <ViewDoctorProfile></ViewDoctorProfile>, loader: () => fetch('http://localhost:5000/doctors')},
      {path: '/signUp', element: <SignUp></SignUp>},
      {path: '/signIn', element: <SignIn></SignIn>},
      {path: '/profile', element: <UserProfile />},
      {path: '/allUsers', element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>},
      {path: '/addDoctor', element: <AddDoctor></AddDoctor>},
      {path: '/manageDoctors', element: <ManageDoctors></ManageDoctors>}
    ]}
  ])

  return (
    <RouterProvider router={routes}>
      { children }
    </RouterProvider>
  )
}

export default App
