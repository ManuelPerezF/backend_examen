import express from 'express';
import authRoutes from './src/routes/authRoutes';

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use('/api', authRoutes);

app.listen(PORT, () => console.log('Server running'))