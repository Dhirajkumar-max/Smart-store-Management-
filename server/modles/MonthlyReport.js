const mongoose = require('mongoose');

const monthlyReportSchema = new mongoose.Schema({
  month: {
    type: Number,        // 1 to 12
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  totalSales: {
    type: Number,
    default: 0
  },
  totalExpenses: {
    type: Number,
    default: 0
  },
  totalProfit: {
    type: Number,
    default: 0
  },
  topProducts: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    name: String,
    quantitySold: Number,
    revenue: Number
  }],
  aiSuggestions: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for fast search (month + year)
monthlyReportSchema.index({ month: 1, year: 1 }, { unique: true });

module.exports = mongoose.model('MonthlyReport', monthlyReportSchema);