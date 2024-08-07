import { Box, Grid } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navigation from './pages/navigation/navigation.component';
import Home from "./pages/home/home.component"
import About from "./pages/about/about.component"
import Portfolio from './pages/portfolio/portfolio.component';
import Project from './pages/project/project.component';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Box style={{ paddingTop: '60px' }}>
        <Grid container justifyContent="center" alignItems="center" style={{ width: '100%' }}>
          <Grid item xs={false} sm={1} md={1} /> {/* Empty grid item to push content to center */}
          <Grid item xs={12} sm={10} style={{ width: '100%' }}>
            <Grid container justifyContent="center" alignItems="center">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About/>}/>
                <Route path="/Portfolio" element={<Portfolio/>} />
                <Route path="/Project/:id" element={<Project/>} />

              </Routes>
            </Grid>
          </Grid>
          <Grid item xs={false} sm={1} md={1} /> {/* Empty grid item to push content to center */}
        </Grid>
      </Box>
    </Router>
  );
};

export default App;
