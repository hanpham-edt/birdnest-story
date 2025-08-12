'use client';

import { useState } from 'react';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { products } from '@/lib/data';
import { CartItem } from '@/types';

export default function CartPage() {
  // Mock cart data - in real app this would come from state management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: products[0],
      quantity: 2
    },
    {
      product: products[1],
      quantity: 1
    }
  ]);

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(items => items.filter(item => item.product.id !== productId));
    } else {
      setCartItems(items =>
        items.map(item =>
          item.product.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const removeItem = (productId: string) => {
    setCartItems(items => items.filter(item => item.product.id !== productId));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = 50000; // 50,000 VND shipping
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">!</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Giỏ hàng trống
            </h2>
            <p className="text-gray-600 mb-8">
              Bạn chưa có sản phẩm nào trong giỏ hàng.
            </p>
            <Link href="/products">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Tiếp tục mua sắm
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Link href="/products" className="flex items-center text-gray-600 hover:text-orange-500 mr-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Tiếp tục mua sắm
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Giỏ hàng ({cartItems.length} sản phẩm)
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {cartItems.map((item) => (
                <div key={item.product.id} className="p-6 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-center space-x-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">Y</span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.product.weight} • {item.product.origin}
                      </p>
                      <div className="flex items-center space-x-4">
                        <span className="text-lg font-bold text-orange-600">
                          {formatPrice(item.product.price)}
                        </span>
                        {item.product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(item.product.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-12 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Tóm tắt đơn hàng
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tạm tính:</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phí vận chuyển:</span>
                  <span className="font-medium">{formatPrice(shipping)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Tổng cộng:</span>
                    <span className="text-lg font-bold text-orange-600">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Tiến hành thanh toán
                </button>
                <button className="w-full border border-orange-500 text-orange-500 hover:bg-orange-50 py-3 px-6 rounded-lg font-semibold transition-colors">
                  Lưu giỏ hàng
                </button>
              </div>

              {/* Shipping Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Thông tin vận chuyển
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Giao hàng toàn quốc</p>
                  <p>• Thời gian giao hàng: 1-3 ngày</p>
                  <p>• Miễn phí vận chuyển cho đơn hàng trên 2 triệu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 