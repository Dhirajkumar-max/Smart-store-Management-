const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['LOW_STOCK', 'REORDER', 'TREND_ALERT', 'BIG_SALE', 'MONTHLY_REPORT']
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: false
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  isRead: {
    type: Boolean,
    default: false
  },
  priority: {
    type: String,
    enum: ['LOW', 'MEDIUM', 'HIGH'],
    default: 'MEDIUM'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for fast fetching unread alerts
alertSchema.index({ isRead: 1, createdAt: -1 });

module.exports = mongoose.model('Alert', alertSchema);