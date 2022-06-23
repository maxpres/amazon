import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image, rating }) {
  // const [rating] = useState(
  //   Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  // );
  const [hasPrime] = useState(Math.random() < 0.5);

  console.log(rating);

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>
        {category}
      </p>
      <div className='flex justify-center'>
        <img src={image} height={200} width={200} objectFit='contain' />
      </div>
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
        <p>{rating.rate} </p>
        {/* <img
          className='h-5'
          src='https://www.linzwiki.at/w/images/2/2c/Star-icon.png'
          alt=''
        /> */}
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className='h-5 text-yellow-500' />
          ))}
      </div>
      <p className='text-xs my-2 line-clamp-2'>{description}</p>
      <p>${price}</p>
      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img
            className='w-12'
            src='data:image/png;base64,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'
            alt=''
          />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}
      <button className='mt-auto button'>Add to basket</button>
    </div>
  );
}

export default Product;
