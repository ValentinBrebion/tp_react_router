import React from 'react'
import { useParams } from 'react-router-dom'
import bdReview from '../api/db.json'

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  
  const Review = () => {
    const params = useParams();
  
    const review =
    params.slug === 'random'
      ? bdReview.reviews[getRandomInt(bdReview.reviews.length -1)]
      : bdReview.reviews.find((review) => review.slug === params.slug);

      return (
        <section data-name="review">
          <h2>Nouveau</h2>
          <h3>{review.title}</h3>
          <p>
            Price : <b>{review.price} euros</b>
          </p>
          <blockquote>
            <p>{review.description}</p>
            <p txt="r">
              <i>{review.winery}</i>
            </p>
          </blockquote>
        </section>
      );
    };
    
    export default Review;