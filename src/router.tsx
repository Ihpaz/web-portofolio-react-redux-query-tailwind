import { createBrowserRouter} from 'react-router-dom'
import App from './App.tsx'
import WelcomePage from './pages/WelcomePage.tsx'
import HomePage from './pages/HomePage.tsx'

const router: any = createBrowserRouter(
    [
        {path: '/', element: <WelcomePage />},
        {path: '/home', element: <HomePage />}
    ]
)


export default router