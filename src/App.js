import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import appStore from "./utils/appStore";

import Login from "./components/login/Login";
import Browse from "./components/browse/Browse";
import TvShow from "./components/tvShow/TvShow";

import CurrentVideo from "./components/videoInfo/CurrentVideo";
import Playing from "./components/playing/Playing";
import Layout from "./Layout";
import TrendingPopular from "./components/trendingPopular/TrendingPopular";
import SearchPage from "./components/search/SearchPage";
import AuthProvider from "./AuthProvider";
import ProtectedRoute from "./ProtectedRoute";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Login /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "browse", element: <Browse /> },
          { path: "search", element: <SearchPage /> },
          { path: "tvshow", element: <TvShow /> },
          { path: "trend", element: <TrendingPopular /> },
          { path: "browse/:id", element: <CurrentVideo /> },
          { path: "browse/playing", element: <Playing /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <AuthProvider>
        <RouterProvider router={appRouter} />
      </AuthProvider>
    </Provider>
  );
}

export default App;
