import { createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import DetailProjectPage from './pages/DetailProjectPage.tsx'
import LayoutPage from './pages/Layoutpage.tsx'

const router: any = createBrowserRouter(
    [
        {path: '/', element: <LayoutPage />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
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
