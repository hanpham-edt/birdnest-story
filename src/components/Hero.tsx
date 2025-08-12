'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star, Shield, Truck, Clock } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Yến Sào Huyết Đỏ Premium',
    subtitle: 'Sản phẩm cao cấp từ đảo yến tự nhiên',
    description: 'Yến sào huyết đỏ được thu hoạch từ những tổ yến tự nhiên, giàu dinh dưỡng và khoáng chất quý hiếm.',
    image: '/images/hero-1.jpg',
    price: '2.500.000 VNĐ',
    originalPrice: '3.000.000 VNĐ',
    cta: 'Mua Ngay',
    ctaLink: '/products/1'
  },
  {
    id: 2,
    title: 'Yến Sào Trắng Tinh Khiết',
    subtitle: 'Chất lượng cao, hương vị tự nhiên',
    description: 'Yến sào trắng tinh khiết được chọn lọc kỹ lưỡng, không tạp chất, hương vị thơm ngon tự nhiên.',
    image: '/images/hero-2.jpg',
    price: '1.800.000 VNĐ',
    originalPrice: '2.200.000 VNĐ',
    cta: 'Khám Phá',
    ctaLink: '/products/2'
  },
  {
    id: 3,
    title: 'Yến Sào Vàng Hồng',
    subtitle: 'Màu sắc tự nhiên, dinh dưỡng cao',
    description: 'Yến sào vàng hồng chất lượng cao, màu sắc tự nhiên, giàu dinh dưỡng và khoáng chất.',
    image: '/images/hero-3.jpg',
    price: '1.200.000 VNĐ',
    cta: 'Xem Thêm',
    ctaLink: '/products/3'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-50">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center h-full">
                <div className="w-full lg:w-1/2">
                  <div className="text-white space-y-6">
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="text-sm font-medium">Sản phẩm cao cấp</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-yellow-100">
                      {slide.subtitle}
                    </p>
                    
                    <p className="text-lg text-gray-200 max-w-md">
                      {slide.description}
                    </p>
                 
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl font-bold text-orange-400">
                        {slide.price}
                      </div>
                      {slide.originalPrice && (
                        <div className="text-lg text-gray-300 line-through">
                          {slide.originalPrice}
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-4">
                      <Link href={slide.ctaLink}>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                          {slide.cta}
                        </button>
                      </Link>
                      <Link href="/products">
                        <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                          Xem Tất Cả
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

               {/* <div className="hidden lg:block w-1/2">
                  <div className="flex justify-center">
                    <div className="w-80 h-80 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-3xl">Y</span>
                        </div>
                        <p className="text-gray-700 font-semibold">Yến Sào Premium</p>
                      </div>
                    </div>
                  </div>
                </div>*/}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>

      {/* Features */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="h-5 w-5 text-orange-500" />
              <span className="text-sm font-medium">Chất lượng đảm bảo</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Truck className="h-5 w-5 text-orange-500" />
              <span className="text-sm font-medium">Giao hàng toàn quốc</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-5 w-5 text-orange-500" />
              <span className="text-sm font-medium">Giao hàng trong 24h</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-5 w-5 text-orange-500" />
              <span className="text-sm font-medium">100% tự nhiên</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 