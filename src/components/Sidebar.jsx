import { useContext, useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Rating } from 'react-simple-star-rating';
import RatingContext from '../context/ratingContext';
import calculateAverageRating from '../helpers/getAverage';
import { getAllProducts } from '../services/api';

export default function Sidebar() {
  const { averageRating, triggerUpdate } = useContext(RatingContext);
  const [average, setAverage] = useState("0")
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const averageData = async () => {
      const productsData = await getAllProducts();
      const averageData = calculateAverageRating(productsData)
      setAverage(averageData)
    }
    averageData()
  }, [averageRating, triggerUpdate])

  return (
    <div className='tw-border lg:tw-w-[16%] tw-hidden lg:tw-flex lg:tw-flex-col tw-bg-light-gray tw-border-border-gray tw-border-opacity-25'>
      <div className="">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Categorias</Accordion.Header>
            <Accordion.Body>
              Guitarras
            </Accordion.Body>
            <Accordion.Body>
              Acessórios
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div >
      <div className='tw-py-10 tw-border-y tw-border-border-gray tw-border-opacity-25 tw-flex tw-flex-col tw-justify-center tw-items-center'>
        <p className='tw-text-center tw-py-4 tw-px-2 tw-font-nunito-bold'>Média das avaliações dos produtos</p>
        <Rating readonly initialValue={average} fillIcon={<img className="tw-inline tw-w-7 tw-text-green" src="/assets/svg/guitar-green.svg" />} emptyIcon={<img className="tw-inline tw-w-7" src="/assets/svg/guitar-black.svg" />} />
      </div>
    </div>
  )
}

