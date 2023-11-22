import './App.css';
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SimpleBottomNavigation from "./components/footer"
import HomeAppBar from "./components/AppBar"
import Grid from '@mui/material/Unstable_Grid2'

import Home from "./routes/Home";
import ErrorPage from "./routes/error-page";
import Store from "./routes/Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/store/:id",
    element: <Store />,
  },
]);

function App() {
  return (<React.StrictMode>

      <Grid container spacing={0}>
        <HomeAppBar />
      </Grid>

      <Grid container spacing={0}  direction="column"  justifyContent="center"  alignItems="stretch">
        <RouterProvider router={router} />
      </Grid>

      <Grid container spacing={0} direction="row"
        justifyContent="center"
        alignItems="flex-end">
        <SimpleBottomNavigation />
      </Grid>
  </React.StrictMode>);
}

export default App;
