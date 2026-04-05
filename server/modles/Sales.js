const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  totalAmount: {
    type: Number,
    required: true
  },
  profit: {
    type: Number,
    required: true
  },
  soldBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  customerNote: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Jab sale save ho toh automatically stock update karne ke liye hook (baad mein use karenge)
saleSchema.pre('save', async function(next) {
  // Yahan baad mein inventory logic add karenge
  next();
});

module.exports = mongoose.model('Sale', saleSchema);