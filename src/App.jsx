// // react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayouts from "./layouts/MainLayouts";

// pages
import CreateRecipe from "./pages/CreateRecipe";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
    },
    {
      path: "/createrecipe",
      element: <CreateRecipe />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
