import express from 'express';
import authRoutes from './src/routes/authRoutes';

const app = express();
const PORT = process.env.PORT || 7000;

// Middleware para configurar encabezados CORS manualmente
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Permitir solicitudes desde el frontend
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos permitidos
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Encabezados permitidos
    next();
});


app.use(express.json());
app.use('/api', authRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));