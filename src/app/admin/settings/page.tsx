'use client';

import { useState } from 'react';
import { 
  Save, 
  Globe, 
  Mail, 
  Shield, 
  CreditCard, 
  Truck,
  Bell
} from 'lucide-react';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [isSaving, setIsSaving] = useState(false);

  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'Yến Sào Premium',
    siteDescription: 'Chuyên cung cấp yến sào chất lượng cao',
    contactEmail: 'info@yensaopremium.com',
    contactPhone: '+84 123 456 789',
    address: '123 Đường ABC, Quận 1, TP.HCM, Việt Nam'
  });

  const [emailSettings, setEmailSettings] = useState({
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    smtpUser: 'noreply@yensaopremium.com',
    smtpPassword: '',
    fromName: 'Yến Sào Premium',
    fromEmail: 'noreply@yensaopremium.com'
  });

  const [shippingSettings, setShippingSettings] = useState({
    freeShippingThreshold: '2000000',
    shippingFee: '50000',
    deliveryTime: '1-3 ngày',
    returnPolicy: '7 ngày'
  });

  const [paymentSettings, setPaymentSettings] = useState({
    codEnabled: true,
    bankTransferEnabled: true,
    creditCardEnabled: true,
    paypalEnabled: false,
    bankAccount: '1234567890',
    bankName: 'Vietcombank'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    newOrderEmail: true,
    orderStatusEmail: true,
    lowStockEmail: true,
    newsletterEmail: true
  });

  const tabs = [
    { id: 'general', name: 'Cài đặt chung', icon: Globe },
    { id: 'email', name: 'Cài đặt email', icon: Mail },
    { id: 'shipping', name: 'Vận chuyển', icon: Truck },
    { id: 'payment', name: 'Thanh toán', icon: CreditCard },
    { id: 'notifications', name: 'Thông báo', icon: Bell },
    { id: 'security', name: 'Bảo mật', icon: Shield }
  ];

  const handleSave = async () => {
    setIsSaving(true);
    // In real app, this would call API to save settings
    console.log('Saving settings...');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Cài đặt hệ thống</h1>
        <p className="text-gray-600">Quản lý cấu hình hệ thống</p>
      </div>

      <div className="bg-white shadow rounded-lg">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Cài đặt chung</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tên website
                  </label>
                  <input
                    type="text"
                    value={generalSettings.siteName}
                    onChange={(e) => setGeneralSettings(prev => ({ ...prev, siteName: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mô tả website
                  </label>
                  <input
                    type="text"
                    value={generalSettings.siteDescription}
                    onChange={(e) => setGeneralSettings(prev => ({ ...prev, siteDescription: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email liên hệ
                  </label>
                  <input
                    type="email"
                    value={generalSettings.contactEmail}
                    onChange={(e) => setGeneralSettings(prev => ({ ...prev, contactEmail: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    value={generalSettings.contactPhone}
                    onChange={(e) => setGeneralSettings(prev => ({ ...prev, contactPhone: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Địa chỉ
                  </label>
                  <textarea
                    value={generalSettings.address}
                    onChange={(e) => setGeneralSettings(prev => ({ ...prev, address: e.target.value }))}
                    rows={3}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'email' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Cài đặt email</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SMTP Host
                  </label>
                  <input
                    type="text"
                    value={emailSettings.smtpHost}
                    onChange={(e) => setEmailSettings(prev => ({ ...prev, smtpHost: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SMTP Port
                  </label>
                  <input
                    type="text"
                    value={emailSettings.smtpPort}
                    onChange={(e) => setEmailSettings(prev => ({ ...prev, smtpPort: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SMTP User
                  </label>
                  <input
                    type="email"
                    value={emailSettings.smtpUser}
                    onChange={(e) => setEmailSettings(prev => ({ ...prev, smtpUser: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SMTP Password
                  </label>
                  <input
                    type="password"
                    value={emailSettings.smtpPassword}
                    onChange={(e) => setEmailSettings(prev => ({ ...prev, smtpPassword: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Cài đặt vận chuyển</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ngưỡng miễn phí vận chuyển (VNĐ)
                  </label>
                  <input
                    type="number"
                    value={shippingSettings.freeShippingThreshold}
                    onChange={(e) => setShippingSettings(prev => ({ ...prev, freeShippingThreshold: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phí vận chuyển (VNĐ)
                  </label>
                  <input
                    type="number"
                    value={shippingSettings.shippingFee}
                    onChange={(e) => setShippingSettings(prev => ({ ...prev, shippingFee: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thời gian giao hàng
                  </label>
                  <input
                    type="text"
                    value={shippingSettings.deliveryTime}
                    onChange={(e) => setShippingSettings(prev => ({ ...prev, deliveryTime: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Chính sách đổi trả
                  </label>
                  <input
                    type="text"
                    value={shippingSettings.returnPolicy}
                    onChange={(e) => setShippingSettings(prev => ({ ...prev, returnPolicy: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'payment' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Cài đặt thanh toán</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Thanh toán khi nhận hàng (COD)</h4>
                    <p className="text-sm text-gray-500">Cho phép khách hàng thanh toán khi nhận hàng</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={paymentSettings.codEnabled}
                    onChange={(e) => setPaymentSettings(prev => ({ ...prev, codEnabled: e.target.checked }))}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Chuyển khoản ngân hàng</h4>
                    <p className="text-sm text-gray-500">Cho phép thanh toán qua chuyển khoản</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={paymentSettings.bankTransferEnabled}
                    onChange={(e) => setPaymentSettings(prev => ({ ...prev, bankTransferEnabled: e.target.checked }))}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Thẻ tín dụng</h4>
                    <p className="text-sm text-gray-500">Cho phép thanh toán bằng thẻ tín dụng</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={paymentSettings.creditCardEnabled}
                    onChange={(e) => setPaymentSettings(prev => ({ ...prev, creditCardEnabled: e.target.checked }))}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">PayPal</h4>
                    <p className="text-sm text-gray-500">Cho phép thanh toán qua PayPal</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={paymentSettings.paypalEnabled}
                    onChange={(e) => setPaymentSettings(prev => ({ ...prev, paypalEnabled: e.target.checked }))}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số tài khoản ngân hàng
                  </label>
                  <input
                    type="text"
                    value={paymentSettings.bankAccount}
                    onChange={(e) => setPaymentSettings(prev => ({ ...prev, bankAccount: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tên ngân hàng
                  </label>
                  <input
                    type="text"
                    value={paymentSettings.bankName}
                    onChange={(e) => setPaymentSettings(prev => ({ ...prev, bankName: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Cài đặt thông báo</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Email đơn hàng mới</h4>
                    <p className="text-sm text-gray-500">Gửi email khi có đơn hàng mới</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notificationSettings.newOrderEmail}
                    onChange={(e) => setNotificationSettings(prev => ({ ...prev, newOrderEmail: e.target.checked }))}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Email cập nhật trạng thái</h4>
                    <p className="text-sm text-gray-500">Gửi email khi cập nhật trạng thái đơn hàng</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notificationSettings.orderStatusEmail}
                    onChange={(e) => setNotificationSettings(prev => ({ ...prev, orderStatusEmail: e.target.checked }))}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Email hết hàng</h4>
                    <p className="text-sm text-gray-500">Gửi email khi sản phẩm sắp hết hàng</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notificationSettings.lowStockEmail}
                    onChange={(e) => setNotificationSettings(prev => ({ ...prev, lowStockEmail: e.target.checked }))}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Email newsletter</h4>
                    <p className="text-sm text-gray-500">Gửi email marketing và khuyến mãi</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={notificationSettings.newsletterEmail}
                    onChange={(e) => setNotificationSettings(prev => ({ ...prev, newsletterEmail: e.target.checked }))}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Bảo mật</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Shield className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">
                        Cài đặt bảo mật
                      </h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>Để bảo mật tối ưu, vui lòng:</p>
                        <ul className="list-disc list-inside mt-1">
                          <li>Thay đổi mật khẩu admin thường xuyên</li>
                          <li>Sử dụng HTTPS cho website</li>
                          <li>Bật xác thực 2 yếu tố</li>
                          <li>Giới hạn quyền truy cập</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="flex items-center justify-end pt-6 border-t border-gray-200">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors flex items-center disabled:opacity-50"
            >
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? 'Đang lưu...' : 'Lưu cài đặt'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 