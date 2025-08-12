'use client';

import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  XCircle,
  Clock,
  Package,
  Truck,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

// Define interfaces for type safety
interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  customer: string;
  email: string;
  phone: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  shippingAddress: string;
  paymentMethod: string;
}

// Mock orders data
const orders: Order[] = [
  {
    id: 'ORD-001',
    customer: 'Nguyễn Thị Anh',
    email: 'anh.nguyen@email.com',
    phone: '0123456789',
    items: [
      { name: 'Yến Sào Huyết Đỏ Premium', quantity: 2, price: 2500000 }
    ],
    total: 5000000,
    status: 'delivered',
    createdAt: '2024-01-15',
    shippingAddress: '123 Đường ABC, Quận 1, TP.HCM',
    paymentMethod: 'COD'
  },
  {
    id: 'ORD-002',
    customer: 'Trần Văn Bình',
    email: 'binh.tran@email.com',
    phone: '0987654321',
    items: [
      { name: 'Yến Sào Trắng Tinh Khiết', quantity: 1, price: 1800000 }
    ],
    total: 1800000,
    status: 'processing',
    createdAt: '2024-01-14',
    shippingAddress: '456 Đường XYZ, Quận 2, TP.HCM',
    paymentMethod: 'Bank Transfer'
  },
  {
    id: 'ORD-003',
    customer: 'Lê Thị Cẩm',
    email: 'cam.le@email.com',
    phone: '0555666777',
    items: [
      { name: 'Yến Sào Vàng Hồng', quantity: 1, price: 1200000 },
      { name: 'Yến Sào Tinh Chế', quantity: 2, price: 800000 }
    ],
    total: 2800000,
    status: 'shipped',
    createdAt: '2024-01-13',
    shippingAddress: '789 Đường DEF, Quận 3, TP.HCM',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'ORD-004',
    customer: 'Phạm Văn Dũng',
    email: 'dung.pham@email.com',
    phone: '0333444555',
    items: [
      { name: 'Yến Sào Chưng Đường Phèn', quantity: 3, price: 600000 }
    ],
    total: 1800000,
    status: 'pending',
    createdAt: '2024-01-12',
    shippingAddress: '321 Đường GHI, Quận 4, TP.HCM',
    paymentMethod: 'COD'
  }
];

const statusOptions = [
  { value: 'all', label: 'Tất cả' },
  { value: 'pending', label: 'Chờ xử lý' },
  { value: 'processing', label: 'Đang xử lý' },
  { value: 'shipped', label: 'Đã gửi hàng' },
  { value: 'delivered', label: 'Đã giao' },
  { value: 'cancelled', label: 'Đã hủy' }
];

const statusConfig = {
  pending: { color: 'bg-yellow-100 text-yellow-800', icon: Clock },
  processing: { color: 'bg-blue-100 text-blue-800', icon: Package },
  shipped: { color: 'bg-purple-100 text-purple-800', icon: Truck },
  delivered: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
  cancelled: { color: 'bg-red-100 text-red-800', icon: XCircle }
};

export default function AdminOrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setShowOrderModal(true);
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    // In real app, this would call API to update order status
    console.log('Updating order status:', orderId, newStatus);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN');
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Quản lý đơn hàng</h1>
        <p className="text-gray-600">Quản lý tất cả đơn hàng của khách hàng</p>
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tìm kiếm
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Tìm kiếm đơn hàng..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Trạng thái
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium transition-colors flex items-center justify-center">
              <Filter className="h-4 w-4 mr-2" />
              Lọc
            </button>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Đơn hàng ({filteredOrders.length})
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mã đơn hàng
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Khách hàng
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tổng tiền
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ngày tạo
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => {
                const status = statusConfig[order.status as keyof typeof statusConfig];
                const StatusIcon = status.icon;
                
                return (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {order.id}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {order.customer}
                        </div>
                        <div className="text-sm text-gray-500">
                          {order.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {formatPrice(order.total)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {order.items.length} sản phẩm
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.color}`}>
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {statusOptions.find(s => s.value === order.status)?.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(order.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => handleViewOrder(order)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <Link href={`/admin/orders/${order.id}/edit`}>
                          <button className="text-orange-600 hover:text-orange-900">
                            <Edit className="h-4 w-4" />
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail Modal */}
      {showOrderModal && selectedOrder && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Chi tiết đơn hàng {selectedOrder.id}
              </h3>
              <button
                onClick={() => setShowOrderModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Order Info */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Thông tin đơn hàng</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Khách hàng:</span> {selectedOrder.customer}
                  </div>
                  <div>
                    <span className="font-medium">Email:</span> {selectedOrder.email}
                  </div>
                  <div>
                    <span className="font-medium">Số điện thoại:</span> {selectedOrder.phone}
                  </div>
                  <div>
                    <span className="font-medium">Phương thức thanh toán:</span> {selectedOrder.paymentMethod}
                  </div>
                  <div>
                    <span className="font-medium">Địa chỉ giao hàng:</span>
                    <p className="text-gray-600 mt-1">{selectedOrder.shippingAddress}</p>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Sản phẩm</h4>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">Số lượng: {item.quantity}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{formatPrice(item.price)}</div>
                        <div className="text-sm text-gray-500">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center font-bold">
                      <span>Tổng cộng:</span>
                      <span>{formatPrice(selectedOrder.total)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Update */}
            <div className="mt-6 pt-6 border-t">
              <h4 className="font-medium text-gray-900 mb-3">Cập nhật trạng thái</h4>
              <div className="flex space-x-2">
                {statusOptions.filter(s => s.value !== 'all').map((status) => (
                  <button
                    key={status.value}
                    onClick={() => updateOrderStatus(selectedOrder.id, status.value)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      selectedOrder.status === status.value
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {status.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 