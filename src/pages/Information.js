import React, { useEffect, useState } from "react";
import TopMenu from "../components/TopMenu";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Information = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const localLogin = localStorage.getItem("login");

    if (!localLogin) {
      navigate("/portfolio");
    }
  }, [navigate]);

  const { products, selectedCategory } = useSelector(
    (state) => state.dataSlice,
  );

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  // Hàm bỏ dấu tiếng Việt
  const normalizeVietnamese = (str = "") => {
    return str
      .toLowerCase()
      .normalize("NFD") // tách dấu khỏi ký tự
      .replace(/[\u0300-\u036f]/g, "") // xóa dấu
      .replace(/đ/g, "d") // đổi đ -> d
      .replace(/Đ/g, "D")
      .replace(/\s+/g, " ") // gộp nhiều khoảng trắng
      .trim();
  };

  const handleSearchProduct = (e) => {
    const { value } = e.target;
    setKeyword(value);
  };

  useEffect(() => {
    let productsAfterCategoryFilter = [];

    // Bước 1: lọc theo category
    if (selectedCategory === "All") {
      const uniqueMap = new Map();
      products.forEach((sp) => {
        const key = sp.ma?.trim().toLowerCase();
        if (key && !uniqueMap.has(key)) {
          uniqueMap.set(key, sp);
        }
      });
      productsAfterCategoryFilter = Array.from(uniqueMap.values());
    } else {
      productsAfterCategoryFilter = products.filter((sp) =>
        sp.categories?.includes(selectedCategory),
      );
    }

    // Bước 2: lọc theo từ khóa không dấu
    if (keyword.trim() !== "") {
      const normalizedKeyword = normalizeVietnamese(keyword);

      productsAfterCategoryFilter = productsAfterCategoryFilter.filter((sp) => {
        const searchFields = [
          sp.proName,
          sp.title,
          sp.ma,
          sp.giaBan,
          sp.chuNha,
          sp.address,
          sp.dienTich,
          sp.ketCau,
        ];

        return searchFields.some((field) =>
          normalizeVietnamese(field).includes(normalizedKeyword),
        );
      });
    }

    setFilteredProducts(productsAfterCategoryFilter);
  }, [selectedCategory, products, keyword]);

  return (
    <div id="info">
      <TopMenu data={true} />
      <h2>Trang thông tin bất động sản</h2>

      <div className="searchBar">
        <input
          type="text"
          placeholder="Tìm kiếm,..."
          value={keyword}
          onChange={handleSearchProduct}
        />
      </div>

      <div className="product">
        <table className="product-table">
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Địa chỉ</th>
              <th>Diện tích</th>
              <th>Kết cấu</th>
              <th>Giá bán</th>
              <th>Chủ nhà</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.proName}</td>
                  <td>{item.address}</td>
                  <td>{item.dienTich}</td>
                  <td>{item.ketCau}</td>
                  <td>{item.giaBan}</td>
                  <td>{item.chuNha}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Information;
