import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Component/About';
import Blog from './Component/Blog';
import Home from './Component/Home';
import Login from './Component/Login';
import PostDetails from './Component/PostDetails';
import Posts from './Component/Posts';
import PrivateRoute from './Component/PrivateRoute';
import Root from './Component/Root';
import { postLoader, postsLoader } from './Component/routesLoader/postLoader';
import NotFoundPage from './Component/styledComponent/Custom.style';
import GlobalStyles from './Component/styledComponent/Global.style';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            // all private route
            {
                path: '/',
                element: <PrivateRoute />,
                children: [
                    {
                        path: '/blog',
                        element: <Blog />,
                    },
                    {
                        path: '/posts',
                        element: <Posts />,
                        loader: postsLoader,
                    },
                    {
                        path: '/post/:postId',
                        element: <PostDetails />,
                        loader: postLoader,
                    },
                ],
                errorElement: <NotFoundPage />,
            },
            {
                path: '/about',
                element: <About />,
            },
        ],
        errorElement: <NotFoundPage />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]);

function App() {
    return (
        <>
            <GlobalStyles />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
