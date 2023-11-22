import './App.css';
import * as React from "react";
import {
  createBrowserRouter,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import SimpleBottomNavigation from "./components/footer"
import HomeAppBar from "./components/AppBar"
import Grid from '@mui/material/Unstable_Grid2'

import Home from "./routes/Home";
import ErrorPage from "./routes/error-page";
import Store from "./routes/Store";

function App() {
  return (<React.StrictMode>
      <BrowserRouter>
        <Grid container spacing={0}>
          <HomeAppBar />
        </Grid>

        <Grid container spacing={0}  direction="column"  justifyContent="center"  alignItems="stretch">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store/:id" element={<Store />} />
          </Routes>
        </Grid>

        <Grid container spacing={0} direction="row"
          justifyContent="center"
          alignItems="flex-end">
          <SimpleBottomNavigation />
        </Grid>
      </BrowserRouter>
  </React.StrictMode>);
}

export default App;
