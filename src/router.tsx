import { createBrowserRouter} from 'react-router-dom'
import WelcomePage from './pages/WelcomePage.tsx'
import HomePage from './pages/HomePage.tsx'
import DetailProjectPage from './pages/DetailProjectPage.tsx'
import LayoutPage from './pages/Layoutpage.tsx'

const router: any = createBrowserRouter(
    [
        {path: '/', element: <WelcomePage />},
        {path: '/home', element: <LayoutPage />,
            children: [
                {
                    path: '/home',
                    element: <HomePage />,
                },
                {
                    path: '/home/:id',
                    element: <DetailProjectPage />,
                },
            ],
        }
    ]
)


export default router