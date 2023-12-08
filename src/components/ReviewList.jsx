import React from 'react'
import bdReview from '../api/db.json'

const ReviewList = () => {  
    const list = bdReview['reviews'];
    return <section data-name="review-list">
    <div className="hidden">
        <h4>Categories</h4>
        <p>
            <select>
                <option value="">All</option>
                <option value="bordeaux">Bordeaux</option>
                <option value="cotes-du-rhone">Côtes du Rhone</option>
            </select>
        </p>
    </div>
    <grid>
    {list.map((review) =>
                <div col="1/2">
                    <card>
                        <a href="/">
                            <h5>{review.title}</h5>
                            <p> {review.points} / 100</p>
                        </a>
                    </card>
                </div>
            )}
    </grid>
</section>
}

export default ReviewList