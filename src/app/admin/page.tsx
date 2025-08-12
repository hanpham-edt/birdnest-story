import { 
  Users, 
  Package, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Star
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  // Mock data - in real app this would come from API
  const stats = [
    {
      name: 'Tổng doanh thu',
      value: '125.000.000 VNĐ',
      change: '+12%',
      changeType: 'increase',
      icon: DollarSign,
    },
    {
      name: 'Đơn hàng mới',
      value: '24',
      change: '+8%',
      changeType: 'increase',
      icon: ShoppingCart,
    },
    {
      name: 'Sản phẩm',
      value: '156',
      change: '+3%',
      changeType: 'increase',
      icon: Package,
    },
    {
      name: 'Người dùng',
      value: '1,234',
      change: '+15%',
      changeType: 'increase',
      icon: Users,
    },
  ];

  const recentOrders = [
    {
      id: '#ORD-001',
      customer: 'Nguyễn Thị Anh',
      product: 'Yến Sào Huyết Đỏ Premium',
      amount: '2.500.000 VNĐ',
      status: 'Đã giao',
      date: '2024-01-15',
    },
    {
      id: '#ORD-002',
      customer: 'Trần Văn Bình',
      product: 'Yến Sào Trắng Tinh Khiết',
      amount: '1.800.000 VNĐ',
      status: 'Đang xử lý',
      date: '2024-01-14',
    },
    {
      id: '#ORD-003',
      customer: 'Lê Thị Cẩm',
      product: 'Yến Sào Vàng Hồng',
      amount: '1.200.000 VNĐ',
      status: 'Đã giao',
      date: '2024-01-13',
    },
  ];

  const topProducts = [
    {
      name: 'Yến Sào Huyết Đỏ Premium',
      sales: 45,
      revenue: '112.500.000 VNĐ',
      rating: 4.9,
    },
    {
      name: 'Yến Sào Trắng Tinh Khiết',
      sales: 38,
      revenue: '68.400.000 VNĐ',
      rating: 4.8,
    },
    {
      name: 'Yến Sào Vàng Hồng',
      sales: 32,
      revenue: '38.400.000 VNĐ',
      rating: 4.7,
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Tổng quan về hoạt động kinh doanh</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {stat.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <div className="flex items-center">
                  {stat.changeType === 'increase' ? (
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-400" />
                  )}
                  <span className={`ml-2 text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">so với tháng trước</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Đơn hàng gần đây</h3>
              <Link href="/admin/orders" className="text-sm text-orange-600 hover:text-orange-500">
                Xem tất cả
              </Link>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {recentOrders.map((order) => (
              <div key={order.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {order.id}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {order.customer} - {order.product}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-900">
                      {order.amount}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === 'Đã giao' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Sản phẩm bán chạy</h3>
              <Link href="/admin/products" className="text-sm text-orange-600 hover:text-orange-500">
                Xem tất cả
              </Link>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {topProducts.map((product, index) => (
              <div key={product.name} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-500 w-6">
                      #{index + 1}
                    </span>
                    <div className="ml-4 flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {product.name}
                      </p>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-500">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {product.sales} đã bán
                    </p>
                    <p className="text-sm text-gray-500">
                      {product.revenue}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Thao tác nhanh</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/admin/products/new">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
                Thêm sản phẩm
              </button>
            </Link>
            <Link href="/admin/orders">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
                Xem đơn hàng
              </button>
            </Link>
            <Link href="/admin/users">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
                Quản lý người dùng
              </button>
            </Link>
            <Link href="/admin/settings">
              <button className="w-full bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
                Cài đặt
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 