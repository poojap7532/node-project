app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send('Invalid username or password');
    }
    const token = jwt.sign({ username, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 }); // Set cookie for 1 hour
    res.send('Login successful');
});