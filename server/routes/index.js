import transactionRoutes from './transactions.routes.js'
import rateRoutes from './rates.routes.js'

export const registerRoutes = (app) => {
    app.use('/api/transaction', transactionRoutes)
    app.use('/api/rate', rateRoutes)
}