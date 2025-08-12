import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { products, benefits } from '@/lib/data';
import { Star, Shield, Heart, Award, Users } from 'lucide-react';
import Link from 'next/link';
export default function Home() {
  const featuredProducts = products.filter(product => product.featured);
  return (
   
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sản Phẩm Nổi Bật
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá những sản phẩm yến sào cao cấp được chọn lọc kỹ lưỡng, 
              đảm bảo chất lượng và dinh dưỡng tốt nhất cho sức khỏe của bạn.
            </p>
          </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div> 

          <div className="text-center mt-12">
            <Link href="/products">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Xem Tất Cả Sản Phẩm
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lợi Ích Từ Yến Sào
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Yến sào không chỉ là thực phẩm bổ dưỡng mà còn mang lại nhiều lợi ích 
              tuyệt vời cho sức khỏe và sắc đẹp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tại Sao Chọn Chúng Tôi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến những sản phẩm yến sào chất lượng cao nhất 
              với dịch vụ khách hàng tận tâm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Chất Lượng Cao Cấp
              </h3>
              <p className="text-gray-600">
                Sản phẩm được chọn lọc kỹ lưỡng từ những tổ yến tự nhiên, 
                đảm bảo dinh dưỡng và an toàn.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                An Toàn Tuyệt Đối
              </h3>
              <p className="text-gray-600">
                Quy trình chế biến nghiêm ngặt, không chất bảo quản, 
                đảm bảo sức khỏe cho người sử dụng.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dịch Vụ Tận Tâm
              </h3>
              <p className="text-gray-600">
                Đội ngũ tư vấn chuyên nghiệp, hỗ trợ khách hàng 24/7 
                và giao hàng nhanh chóng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Khách Hàng Nói Gì
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những phản hồi chân thực từ khách hàng đã sử dụng sản phẩm của chúng tôi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Sản phẩm yến sào chất lượng rất tốt, tôi đã sử dụng được 3 tháng và 
                cảm thấy sức khỏe cải thiện rõ rệt.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">N</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Nguyễn Thị Anh</p>
                  <p className="text-sm text-gray-600">Khách hàng thân thiết</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Giao hàng nhanh, sản phẩm đóng gói cẩn thận. Yến sào huyết đỏ 
                rất thơm ngon và bổ dưỡng.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Trần Văn Bình</p>
                  <p className="text-sm text-gray-600">Khách hàng mới</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Tôi rất hài lòng với dịch vụ và chất lượng sản phẩm. 
                Nhân viên tư vấn rất nhiệt tình và chuyên nghiệp.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">L</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Lê Thị Cẩm</p>
                  <p className="text-sm text-gray-600">Khách hàng thân thiết</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bắt Đầu Hành Trình Sức Khỏe
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Khám phá bộ sưu tập yến sào cao cấp và trải nghiệm chất lượng 
            dịch vụ tuyệt vời của chúng tôi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Mua Sắm Ngay
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-lg font-semibold transition-colors">
                Liên Hệ Tư Vấn
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
