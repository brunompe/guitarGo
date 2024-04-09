import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from "react-router-dom";
import { ProductDetailSlider } from "../components/ProductDetailSlider";
import { ProductDetailsCard } from "../components/ProductDetailsCard";

export default function ProductDetails() {
  const navigate = useNavigate()
  const location = useLocation();


  return (
    <div className="tw-w-full tw-h-full">
      <div className="p-2">
        <Button variant="outline-secondary" onClick={() => { navigate("/") }}>Voltar</Button>
      </div>
      <div className="tw-flex tw-flex-col tw-justify-between tw-py-10 tw-items-center tw-w-full tw-h-full">
        <ProductDetailSlider images={location.state.product.images} />
        <ProductDetailsCard data={location.state.product} />
      </div>
    </div>
  )
}

