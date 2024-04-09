import { useContext } from 'react';
import { Rating } from 'react-simple-star-rating';
import RatingContext from '../context/ratingContext';
import { patchRating } from '../services/api';

export function ProductDetailsCard({ data }) {
  const { title, long_description, price, rating, id } = data
  const { handleRatingChange } = useContext(RatingContext);

  const handleRatingClick = async (newRating) => {
    try {
      const updatedData = await patchRating({ ...data, rating: newRating });
      handleRatingChange()
    } catch (error) {
      console.error('Error updating rating:', error);
    }
  };

  return (
    <>
      <div className="tw-w-[80%] tw-flex tw-flex-col tw-h-300px tw-bg-light-gray tw-p-5 tw-rounded-lg tw-shadow">
        <p className="tw-font-nunito-bold tw-text-3xl tw-py-5">{title}</p>
        <p className="tw-py-5">{long_description}</p>
        <div className="tw-flex tw-justify-between">
          <div>
            <Rating onClick={handleRatingClick} initialValue={rating} fillIcon={<img className="tw-inline tw-w-10 tw-text-green" src="/assets/svg/guitar-green.svg" />} emptyIcon={<img className="tw-inline tw-w-10" src="/assets/svg/guitar-black.svg" />} />
          </div>
          <p className="tw-font-nunito-bold tw-text-3xl tw-bg-flax tw-text-dark-green rounded tw-p-2">{price}</p>
        </div>
      </div>
    </>
  )
}