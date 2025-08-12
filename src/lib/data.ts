import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Yến Sào Huyết Đỏ Premium',
    description: 'Yến sào huyết đỏ cao cấp, được thu hoạch từ những tổ yến tự nhiên, giàu dinh dưỡng và khoáng chất quý hiếm.',
    price: 2500000,
    originalPrice: 3000000,
    image: '/images/yen-huyet-do.jpg',
    category: 'premium',
    weight: '100g',
    origin: 'Đảo Khánh Hòa',
    benefits: [
      'Tăng cường hệ miễn dịch',
      'Làm đẹp da, chống lão hóa',
      'Bổ sung canxi và khoáng chất',
      'Tốt cho hệ hô hấp',
      'Phục hồi sức khỏe nhanh chóng'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 128,
    featured: true
  },
  {
    id: '2',
    name: 'Yến Sào Trắng Tinh Khiết',
    description: 'Yến sào trắng tinh khiết, được chọn lọc kỹ lưỡng, không tạp chất, hương vị thơm ngon tự nhiên.',
    price: 1800000,
    originalPrice: 2200000,
    image: '/images/yen-trang.jpg',
    category: 'premium',
    weight: '100g',
    origin: 'Đảo Phú Quốc',
    benefits: [
      'Bổ sung protein tự nhiên',
      'Tăng cường sức đề kháng',
      'Làm đẹp da và tóc',
      'Tốt cho người già và trẻ em',
      'Phục hồi sức khỏe sau bệnh'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 95,
    featured: true
  },
  {
    id: '3',
    name: 'Yến Sào Vàng Hồng',
    description: 'Yến sào vàng hồng chất lượng cao, màu sắc tự nhiên, giàu dinh dưỡng và khoáng chất.',
    price: 1200000,
    image: '/images/yen-vang-hong.jpg',
    category: 'standard',
    weight: '100g',
    origin: 'Đảo Côn Đảo',
    benefits: [
      'Tăng cường sức khỏe',
      'Bổ sung dinh dưỡng',
      'Tốt cho hệ tiêu hóa',
      'Làm đẹp da',
      'Tăng cường trí nhớ'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 76
  },
  {
    id: '4',
    name: 'Yến Sào Tinh Chế',
    description: 'Yến sào đã được tinh chế, loại bỏ tạp chất, sạch sẽ và dễ sử dụng.',
    price: 800000,
    image: '/images/yen-tinh-che.jpg',
    category: 'standard',
    weight: '100g',
    origin: 'Đảo Khánh Hòa',
    benefits: [
      'Dễ tiêu hóa',
      'Bổ sung protein',
      'Tăng cường sức đề kháng',
      'Tốt cho sức khỏe tổng thể',
      'Phù hợp mọi lứa tuổi'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 64
  },
  {
    id: '5',
    name: 'Yến Sào Chưng Đường Phèn',
    description: 'Yến sào đã được chưng sẵn với đường phèn, tiện lợi sử dụng ngay.',
    price: 600000,
    image: '/images/yen-chung-duong-phen.jpg',
    category: 'economy',
    weight: '50g',
    origin: 'Đảo Phú Quốc',
    benefits: [
      'Tiện lợi sử dụng',
      'Hương vị thơm ngon',
      'Bổ sung dinh dưỡng',
      'Tốt cho sức khỏe',
      'Phù hợp mọi lứa tuổi'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 52
  },
  {
    id: '6',
    name: 'Yến Sào Tổ Nguyên',
    description: 'Yến sào tổ nguyên, giữ nguyên hình dạng tự nhiên, chất lượng cao.',
    price: 1500000,
    image: '/images/yen-to-nguyen.jpg',
    category: 'premium',
    weight: '100g',
    origin: 'Đảo Côn Đảo',
    benefits: [
      'Giữ nguyên dinh dưỡng',
      'Chất lượng cao cấp',
      'Tăng cường sức khỏe',
      'Làm đẹp da',
      'Tốt cho hệ miễn dịch'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 89,
    featured: true
  }
];

export const categories = [
  { id: 'premium', name: 'Cao Cấp', color: 'bg-gradient-to-r from-yellow-400 to-orange-500' },
  { id: 'standard', name: 'Tiêu Chuẩn', color: 'bg-gradient-to-r from-blue-400 to-purple-500' },
  { id: 'economy', name: 'Kinh Tế', color: 'bg-gradient-to-r from-green-400 to-teal-500' }
];

export const benefits = [
  'Tăng cường hệ miễn dịch',
  'Làm đẹp da, chống lão hóa',
  'Bổ sung canxi và khoáng chất',
  'Tốt cho hệ hô hấp',
  'Phục hồi sức khỏe nhanh chóng',
  'Tăng cường trí nhớ',
  'Tốt cho hệ tiêu hóa',
  'Bổ sung protein tự nhiên'
]; 