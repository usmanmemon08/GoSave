import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import dealsRoutes from './routes/dealsRoutes.js';
import membershipRoutes from './routes/membershipRoutes.js';
import partnersRoutes from './routes/partnersRoutes.js';

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*', credentials: false }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.use('/api/auth', authRoutes);
app.use('/api/deals', dealsRoutes);
app.use('/api/membership', membershipRoutes);
app.use('/api/partners', partnersRoutes);

// 404 handler
app.use((req, res) => res.status(404).json({ error: 'Not Found' }));

export default app;