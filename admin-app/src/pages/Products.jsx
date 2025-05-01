import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Alert,
  IconButton,
  Grid,
  CircularProgress,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import AdminLayout from '../components/AdminLayout';
import { productAPI, categoryAPI } from '../services/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMode, setDialogMode] = useState('add'); // 'add' or 'edit'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    discountedPrice: '',
    category: '',
    quantity: '',
    brand: '',
    color: '',
    sizes: [],
    imageUrl: '',
  });

  // Fetch products and categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          productAPI.getAllProducts(),
          categoryAPI.getAllCategories(),
        ]);
        
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
        showSnackbar('Failed to load data', 'error');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle select changes for multiple select (sizes)
  const handleSizesChange = (e) => {
    setFormData({ ...formData, sizes: e.target.value });
  };

  // Open dialog for adding a new product
  const handleAddProduct = () => {
    setDialogMode('add');
    setSelectedProduct(null);
    setFormData({
      title: '',
      description: '',
      price: '',
      discountedPrice: '',
      category: '',
      quantity: '',
      brand: '',
      color: '',
      sizes: [],
      imageUrl: '',
    });
    setOpenDialog(true);
  };

  // Open dialog for editing an existing product
  const handleEditProduct = (product) => {
    setDialogMode('edit');
    setSelectedProduct(product);
    setFormData({
      title: product.title || '',
      description: product.description || '',
      price: product.price || '',
      discountedPrice: product.discountedPrice || product.price || '',
      category: product.category?._id || product.category || '',
      quantity: product.quantity || '',
      brand: product.brand || '',
      color: product.color || '',
      sizes: product.sizes || [],
      imageUrl: product.imageUrl || '',
    });
    setOpenDialog(true);
  };

  // Close the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Show snackbar notification
  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };

  // Close snackbar
  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Submit form to add or edit a product
  const handleSubmit = async () => {
    try {
      if (dialogMode === 'add') {
        await productAPI.createProduct(formData);
        showSnackbar('Product added successfully');
      } else {
        await productAPI.updateProduct(selectedProduct._id, formData);
        showSnackbar('Product updated successfully');
      }
      
      // Refresh products list
      const updatedProducts = await productAPI.getAllProducts();
      setProducts(updatedProducts);
      
      handleCloseDialog();
    } catch (error) {
      console.error('Error saving product:', error);
      showSnackbar('Failed to save product', 'error');
    }
  };

  // Delete a product
  const handleDeleteProduct = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await productAPI.deleteProduct(productId);
        
        // Update products list
        setProducts(products.filter(product => product._id !== productId));
        
        showSnackbar('Product deleted successfully');
      } catch (error) {
        console.error('Error deleting product:', error);
        showSnackbar('Failed to delete product', 'error');
      }
    }
  };

  // Format price to currency
  const formatPrice = (price) => {
    return `₹${parseFloat(price).toFixed(2)}`;
  };

  return (
    <AdminLayout>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Products</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAddProduct}
        >
          Add Product
        </Button>
      </Box>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Discounted</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell>
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: '50px',
                          height: '50px',
                          bgcolor: 'grey.200',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        No image
                      </Box>
                    )}
                  </TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>{product.category?.name || 'N/A'}</TableCell>
                  <TableCell>{formatPrice(product.price)}</TableCell>
                  <TableCell>{formatPrice(product.discountedPrice || product.price)}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEditProduct(product)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteProduct(product._id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {products.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No products found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Add/Edit Product Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>{dialogMode === 'add' ? 'Add New Product' : 'Edit Product'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="title"
                label="Product Title"
                fullWidth
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  label="Category"
                >
                  {categories.map((category) => (
                    <MenuItem key={category._id} value={category._id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="price"
                label="Price"
                type="number"
                fullWidth
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="discountedPrice"
                label="Discounted Price"
                type="number"
                fullWidth
                value={formData.discountedPrice}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="quantity"
                label="Quantity"
                type="number"
                fullWidth
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="brand"
                label="Brand"
                fullWidth
                value={formData.brand}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="color"
                label="Color"
                fullWidth
                value={formData.color}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Sizes</InputLabel>
                <Select
                  multiple
                  name="sizes"
                  value={formData.sizes}
                  onChange={handleSizesChange}
                  label="Sizes"
                >
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <MenuItem key={size} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="imageUrl"
                label="Image URL"
                fullWidth
                value={formData.imageUrl}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                label="Description"
                fullWidth
                multiline
                rows={4}
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            {dialogMode === 'add' ? 'Add' : 'Update'} Product
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </AdminLayout>
  );
};

export default Products; 