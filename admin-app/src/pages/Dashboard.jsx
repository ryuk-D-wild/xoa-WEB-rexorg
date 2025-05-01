import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Paper,
} from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';
import AdminLayout from '../components/AdminLayout';
import { productAPI, orderAPI } from '../services/api';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0,
    pendingOrders: 0,
    deliveredOrders: 0,
    recentOrders: [],
    topProducts: [],
    monthlySales: [],
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch products
        const products = await productAPI.getAllProducts();
        
        // Fetch orders
        const orders = await orderAPI.getAllOrders();
        
        // Process data for stats
        const pendingOrders = orders.filter(order => order.orderStatus === 'PENDING').length;
        const deliveredOrders = orders.filter(order => order.orderStatus === 'DELIVERED').length;
        
        const totalRevenue = orders.reduce((total, order) => {
          if (order.orderStatus === 'DELIVERED') {
            return total + (order.totalDiscountedPrice || 0);
          }
          return total;
        }, 0);
        
        // Get recent orders (last 5)
        const recentOrders = [...orders]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 5);
        
        // Calculate monthly sales for the past 6 months
        const monthlySales = calculateMonthlySales(orders);
        
        // Get top selling products
        const topProducts = calculateTopProducts(orders);
        
        setStats({
          totalProducts: products.length,
          totalOrders: orders.length,
          totalUsers: 0, // This would typically come from a user API
          totalRevenue,
          pendingOrders,
          deliveredOrders,
          recentOrders,
          topProducts,
          monthlySales,
        });
        
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchDashboardData();
  }, []);
  
  // Calculate monthly sales for the past 6 months
  const calculateMonthlySales = (orders) => {
    const months = [];
    const salesData = [];
    
    // Get the last 6 months
    for (let i = 5; i >= 0; i--) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      months.push(date.toLocaleString('default', { month: 'short' }));
      
      // Calculate total sales for this month
      const monthSales = orders.reduce((total, order) => {
        const orderDate = new Date(order.createdAt);
        if (
          orderDate.getMonth() === date.getMonth() &&
          orderDate.getFullYear() === date.getFullYear()
        ) {
          return total + (order.totalDiscountedPrice || 0);
        }
        return total;
      }, 0);
      
      salesData.push(monthSales);
    }
    
    return { months, salesData };
  };
  
  // Calculate top selling products
  const calculateTopProducts = (orders) => {
    const productSales = {};
    
    orders.forEach(order => {
      order.orderItems.forEach(item => {
        const productId = item.product._id || item.product;
        const productName = item.product.title || 'Unknown Product';
        
        if (!productSales[productId]) {
          productSales[productId] = {
            name: productName,
            quantity: 0,
            revenue: 0,
          };
        }
        
        productSales[productId].quantity += item.quantity;
        productSales[productId].revenue += (item.discountedPrice * item.quantity);
      });
    });
    
    // Convert to array and sort by quantity
    return Object.values(productSales)
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 5);
  };
  
  // Chart data for monthly sales
  const salesChartData = {
    labels: stats.monthlySales.months,
    datasets: [
      {
        label: 'Monthly Sales (₹)',
        data: stats.monthlySales.salesData,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };
  
  // Chart data for order status
  const orderStatusChartData = {
    labels: ['Pending', 'Delivered'],
    datasets: [
      {
        data: [stats.pendingOrders, stats.deliveredOrders],
        backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(255, 159, 64, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };
  
  // Chart data for top products
  const topProductsChartData = {
    labels: stats.topProducts.map(product => product.name),
    datasets: [
      {
        label: 'Units Sold',
        data: stats.topProducts.map(product => product.quantity),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  if (loading) {
    return (
      <AdminLayout>
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
          <CircularProgress />
        </Box>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ bgcolor: 'primary.light', color: 'primary.contrastText' }}>
            <CardContent>
              <Typography variant="h6">Total Products</Typography>
              <Typography variant="h3">{stats.totalProducts}</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ bgcolor: 'secondary.light', color: 'secondary.contrastText' }}>
            <CardContent>
              <Typography variant="h6">Total Orders</Typography>
              <Typography variant="h3">{stats.totalOrders}</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ bgcolor: 'success.light', color: 'success.contrastText' }}>
            <CardContent>
              <Typography variant="h6">Total Revenue</Typography>
              <Typography variant="h3">₹{stats.totalRevenue.toFixed(2)}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      {/* Charts */}
      <Grid container spacing={3}>
        {/* Monthly Sales */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Monthly Sales
            </Typography>
            <Box sx={{ height: 300 }}>
              <Line
                data={salesChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </Box>
          </Paper>
        </Grid>
        
        {/* Order Status */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Order Status
            </Typography>
            <Box sx={{ height: 300, display: 'flex', justifyContent: 'center' }}>
              <Pie
                data={orderStatusChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </Box>
          </Paper>
        </Grid>
        
        {/* Top Selling Products */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Top Selling Products
            </Typography>
            <Box sx={{ height: 300 }}>
              <Bar
                data={topProductsChartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </Box>
          </Paper>
        </Grid>
        
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Orders
            </Typography>
            <Box sx={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Order ID</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Customer</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Date</th>
                    <th style={{ textAlign: 'right', padding: '8px' }}>Amount</th>
                    <th style={{ textAlign: 'center', padding: '8px' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentOrders.map((order) => (
                    <tr key={order._id} style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '8px' }}>{order._id.substring(0, 8)}...</td>
                      <td style={{ padding: '8px' }}>{order.user?.firstName || 'Unknown'} {order.user?.lastName || ''}</td>
                      <td style={{ padding: '8px' }}>{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td style={{ textAlign: 'right', padding: '8px' }}>₹{order.totalDiscountedPrice.toFixed(2)}</td>
                      <td style={{ textAlign: 'center', padding: '8px' }}>
                        <span
                          style={{
                            backgroundColor: order.orderStatus === 'DELIVERED' ? '#e6f7ee' : '#fff7e6',
                            color: order.orderStatus === 'DELIVERED' ? '#00a854' : '#fa8c16',
                            padding: '3px 8px',
                            borderRadius: '12px',
                            fontSize: '0.75rem',
                          }}
                        >
                          {order.orderStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

export default Dashboard; 