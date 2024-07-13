app.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.send('Logout successful');
});