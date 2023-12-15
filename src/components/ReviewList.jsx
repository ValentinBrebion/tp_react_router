import React, { useState } from 'react';
import bdReview from '../api/db.json'
import { Link } from 'react-router-dom';


const ReviewList = () => { 

    const [categor, setCategor] = useState('')

    const handleChange = (e) => {
       setCategor(e.target.value)
    }
    const list = bdReview['reviews'];
    const categoryList = bdReview['categories'];


    return <section data-name="review-list">
    <div>
        <h4>Categories</h4>
        <p>
            <select onChange={(e) => handleChange(e)}>
                <option value="">All</option>
                {categoryList.map((categorie) =>
                <option value={categorie.key}>{categorie.label}</option>
                )}
            </select>
        </p>
    </div>
    <grid>
    {list.filter((list) => list['category'] === categor).map((review) =>
                <div col="1/2">
                    <card>
                        <Link to={"/view/"+review.slug}>
                            <h5>{review.title}</h5>
                            <p> {review.points} / 100</p>
                        </Link>
                    </card>
                </div>
            )}
    </grid>
</section>
}

export default ReviewList