import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, CircularProgress } from '@mui/material';

// Pages
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Auto-authenticate based on token presence
    const token = localStorage.getItem('adminToken');
    if (!token) {
      // If no token exists, create a default one for automatic access
      localStorage.setItem('adminToken', 'default_admin_token');
      localStorage.setItem('adminUser', JSON.stringify({
        role: 'ADMIN',
        firstName: 'Admin',
        lastName: 'User'
      }));
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          
          {/* Redirect to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
          
          {/* 404 - Redirect to dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App; 