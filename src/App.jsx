import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Home from './pages/Home/Home/Home'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import Appointment from './pages/Appointment/Appointment/Appointment'

function App({ children }) {
  const routes = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
      {path: '/', element: <Home></Home>},
      {path: '/appointment', element: <Appointment></Appointment>},
      {path: '/signUp', element: <SignUp></SignUp>},
      {path: '/signIn', element: <SignIn></SignIn>}
    ]}
  ])

  return (
    <RouterProvider router={routes}>
      { children }
    </RouterProvider>
  )
}

export default App
