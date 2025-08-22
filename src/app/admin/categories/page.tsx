"use client";
import { useEffect, useState } from "react";
import { Search, Eye, Edit, Trash2, Plus, XCircle } from "lucide-react";
import Link from "next/link";
// Define interfaces for type safety
type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

const emptyCategory: Partial<Category> = {
  name: "",
  slug: "",
  description: "",
};
export default function AdminCategoryPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  //const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<string | null>(null);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  // const [form, setForm] = useState<Partial<Category>>(emptyCategory);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  // Lấy danh sách danh mục tu API
  const fetchCategories = async (q = "") => {
    //setLoading(true);
    try {
      const res = await fetch(`/api/categories?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setCategories(data);
    } catch (e) {
      setError("Không thể tải dữ liệu danh mục");
    } finally {
      //setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Tìm kiếm real-time
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchCategories(searchTerm);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleDelete = (categoryId: string) => {
    setCategoryToDelete(categoryId);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    // In real app, this would call API to delete category

    try {
      await fetch(`/api/categories/${categoryToDelete}`, { method: "DELETE" });
      fetchCategories(searchTerm);
    } catch (error) {
      setError("Không thể xóa danh mục");
    }

    setShowDeleteModal(false);
    setCategoryToDelete(null);
  };

  const handleViewUser = (categories: Category) => {
    setSelectedCategory(categories);
    setShowCategoryModal(true);
  };

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Quản lý danh mục
            </h1>
            <p className="text-gray-600">Quản lý tất cả danh mục</p>
          </div>
          <Link href="/admin/categories/new">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-colors flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Thêm danh mục mới
            </button>
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                placeholder="Tìm kiếm danh mục..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Danh mục ({categories.length})
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tên danh mục
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Slug
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mô tả
                </th>

                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {category.name}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {category.slug}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {category.description}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => handleViewUser(category)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <Link href={`/admin/categories/${category.id}/edit`}>
                        <button className="text-orange-600 hover:text-orange-900">
                          <Edit className="h-4 w-4" />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Category Detail Modal */}
      {showCategoryModal && selectedCategory && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-2xl shadow-lg rounded-md bg-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Chi tiết Danh mục
              </h3>
              <button
                onClick={() => setShowCategoryModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    {selectedCategory.name}
                  </h4>
                  <p className="text-gray-500">{selectedCategory.slug}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mô tả danh mục
                </label>
                <p className="text-sm text-gray-900">
                  {selectedCategory.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <Trash2 className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-4">
                Xác nhận xóa
              </h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  Bạn có chắc chắn muốn xóa danh mục này này? Hành động này
                  không thể hoàn tác.
                </p>
              </div>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Hủy
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Xóa
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
