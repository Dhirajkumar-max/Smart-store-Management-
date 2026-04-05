const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  sku: {
    type: String,
    required: true,
    unique: true,
    uppercase: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Electronics', 'Clothing', 'Groceries', 'Stationery', 'Others']
  },
  buyPrice: {
    type: Number,
    required: true
  },
  sellPrice: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    default: 0,
    min: 0
  },
  minStock: {
    type: Number,
    default: 10
  },
  supplier: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Virtual field for profit margin
productSchema.virtual('profitMargin').get(function() {
  return ((this.sellPrice - this.buyPrice) / this.buyPrice * 100).toFixed(2);
});

module.exports = mongoose.model('Product', productSchema);