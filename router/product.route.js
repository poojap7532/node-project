const checkAdminRole = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.sendStatus(403);
    }
    next();
};

// Routes for products
app.get('/products', authenticateJWT, attachUser, (req, res) => {
    // Get all products
});

app.post('/products', authenticateJWT, attachUser, checkAdminRole, (req, res) => {
    // Create a new product
});

app.put('/products/:id', authenticateJWT, attachUser, checkAdminRole, (req, res) => {
    // Update a product
});

app.delete('/products/:id', authenticateJWT, attachUser, checkAdminRole, (req, res) => {
    // Delete a product
});

// Routes for categories
app.get('/categories', authenticateJWT, attachUser, (req, res) => {
    // Get all categories
});

app.post('/categories', authenticateJWT, attachUser, checkAdminRole, (req, res) => {
    // Create a new category
});

app.put('/categories/:id', authenticateJWT, attachUser, checkAdminRole, (req, res) => {
    // Update a category
});

app.delete('/categories/:id', authenticateJWT, attachUser, checkAdminRole, (req, res) => {
    // Delete a category
});
