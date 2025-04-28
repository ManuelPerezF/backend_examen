import express from 'express';
//import calculoRoutes from './src/routes/calculoRoutes';

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
//app.use ('/api', calculoRoutes);

app.listen(PORT, () => console.log('Server running'))