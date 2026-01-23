import React, { useState, useEffect } from 'react'
import { ShoppingBag, ArrowRight, Check, ShoppingCart, X, Trash2 } from 'lucide-react'
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants'

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))]

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === selectedCategory)

  // --- Cart Logic ---
  const addToCart = (product) => {
    setCart([...cart, product])
    setShowCart(true)
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const checkout = () => {
    if (cart.length === 0) return
    const items = cart.map(item => `${item.name} - ${item.price.toLocaleString()} ${item.currency}`).join('%0A')
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const message = encodeURIComponent(
      `Hello Rwooga! I'm interested in purchasing:%0A%0A${items}%0A%0ATotal: ${total.toLocaleString()} RWF`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
    setCart([])
    setShowCart(false)
  }

  return (
    <div className="py-20 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-brand-dark mb-6">
            3D Printed Goods
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our collection of high-quality 3D printed items. Each piece is crafted with precision and durable materials.
          </p>
        </div>

        {/* Filter + Cart Button */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-dark text-white shadow-lg'
                    : 'bg-white text-gray-500 border border-gray-100 hover:border-brand-cyan'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setShowCart(!showCart)}
            className="relative p-3 bg-brand-cyan/10 rounded-full hover:bg-brand-cyan/20 transition-all"
          >
            <ShoppingCart size={24} className="text-brand-dark" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-cyan text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-50 hover:shadow-2xl transition-all"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-brand-dark font-bold text-sm shadow-sm">
                  {product.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-brand-dark">
                    {product.name}
                  </h3>
                  <p className="text-xl font-display font-extrabold text-brand-cyan">
                    {product.price.toLocaleString()}{' '}
                    <span className="text-xs uppercase ml-1">
                      {product.currency}
                    </span>
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-sm text-gray-500">
                    <Check size={16} className="text-brand-cyan mr-2" />
                    Available in {product.variants.material.join(', ')}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Check size={16} className="text-brand-cyan mr-2" />
                    Colors: {product.variants.color.join(', ')}
                  </div>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-brand-dark text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-brand-cyan transition-all"
                >
                  <ShoppingBag size={20} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Products */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">
              No products found in this category.
            </p>
          </div>
        )}

        {/* Note on Shipping */}
        <div className="mt-20 p-8 rounded-3xl bg-brand-cyan/5 border border-brand-cyan/20">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-brand-cyan/10 rounded-xl text-brand-cyan">
              <ArrowRight size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-brand-dark mb-1">
                Local Delivery & Payments
              </h4>
              <p className="text-gray-600">
                All payments are handled securely via Mobile Money upon order
                confirmation on WhatsApp. We offer local delivery within Kigali
                and across Rwanda.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- CART SIDEBAR --- */}
      {showCart && (
        <div className="fixed top-0 right-0 w-96 max-w-[90vw] h-screen bg-white shadow-2xl z-50 p-6 overflow-y-auto animate-[slideIn_0.3s_ease_forwards]">
          <div className="flex justify-between items-center mb-5 pb-4 border-b-2 border-gray-100">
            <h3 className="text-brand-dark text-xl font-bold">Shopping Cart</h3>
            <button
              onClick={() => setShowCart(false)}
              className="text-3xl bg-transparent text-gray-400 hover:text-brand-dark cursor-pointer"
            >
              <X size={28} />
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="text-center text-gray-400 py-10">Your cart is empty</p>
          ) : (
            <>
              <div className="mb-5 flex flex-col gap-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                  >
                    <span className="flex-1 text-gray-700">{item.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold">
                        {item.price.toLocaleString()} {item.currency}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-gray-50 rounded-lg mb-5 text-center text-lg text-brand-dark font-semibold">
                <strong>
                  Total:{' '}
                  {cart
                    .reduce((sum, item) => sum + item.price, 0)
                    .toLocaleString()}{' '}
                  RWF
                </strong>
              </div>

              <button
                className="w-full bg-brand-cyan text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-dark transition-all"
                onClick={checkout}
              >
                <ShoppingBag size={20} />
                Checkout via WhatsApp
              </button>
            </>
          )}
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

export default Shop
