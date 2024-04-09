import { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { getAllProducts } from '../services/api';
import ProductCard from './ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllProducts();
      setProducts(data);
      setFilteredProducts(data);
    };
    getData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredProducts(
        products?.filter((product) =>
          product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, products]);

  return (
    <div className='tw-h-full tw-min-h-[700px] tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center'>
      <div className="tw-w-full tw-flex lg:tw-justify-end tw-justify-center tw-px-10 tw-pt-10">
        <div className="input-group mb-3 tw-w-[30%] tw-min-w-[300px]">
          <input onChange={(e) => setSearchTerm(e.target.value)} type="text" className="form-control tw-rounded tw-min-w-[200px]" placeholder="Pesquisar" aria-label="Pesquisar" aria-describedby="basic-addon1" />
          <div className="input-group-prepend">
            <span className="input-group-text tw-h-full" id="basic-addon1"><FaSearch /></span>
          </div>
        </div>
      </div>
      <div className="tw-flex tw-w-full lg:tw-pl-14 tw-py-5 tw-flex-wrap tw-justify-center tw-gap-4">
        {filteredProducts &&
          filteredProducts?.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
      </div>
    </div>
  );
}