import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { title, short_description, price, images, id } = product;
  const navigate = useNavigate()

  const handleCLick = () => {
    navigate(`/product/${id}/details`, { state: { product } })
  }

  return (
    <Card style={{ width: '14rem' }} className='tw-bg-light-gray tw-text-[#fff]'>
      <Card.Img variant="top" src={images[0]} className='tw-max-h-52' />
      <Card.Body className='tw-flex tw-flex-col tw-justify-between tw-items-center'>
        <div>
          <Card.Title className='tw-text-lg tw-font-bold'>
            {title}
          </Card.Title>
          <Card.Text className='tw-pb-5 tw-text-sm'>
            {short_description}
          </Card.Text>
        </div>
        <div className='tw-flex tw-w-full tw-justify-between tw-items-center'>
          <p className='tw-font-bold'>{price}</p>
          <Button onClick={handleCLick} className='tw-bg-green tw-border tw-border-green hover:tw-bg-green hover:tw-border-green hover:tw-scale-105 focus:tw-bg-green'>Ver Mais</Button>
        </div>
      </Card.Body>
    </Card >
  )
}

