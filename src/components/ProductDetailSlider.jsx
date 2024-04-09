import Carousel from 'react-bootstrap/Carousel';

export function ProductDetailSlider({ images }) {

  return (
    <>
      <div className='tw-w-72 tw-py-5'>
        <Carousel interval={null} data-bs-theme="dark">
          {images?.map((img, index) => {
            return (
              < Carousel.Item key={index} >
                <img src={img} />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div >
    </>
  );
}