import React from 'react';
import bdReview from '../api/db.json'
import { Link, useNavigate, useParams } from 'react-router-dom';


const ReviewList = () => { 
    const navigate = useNavigate();
  const { category } = useParams();

    const handleChange = (e) => {
       const selectedCategorie = e.target.value;
       if(selectedCategorie) 
       {
        navigate("/"+selectedCategorie);
       }else {
        navigate("/")
       }
    }
    const list = bdReview['reviews'];
    const categoryList = bdReview['categories'];


    return <section data-name="review-list">
    <div>
        <h4>{category}</h4>
        <p>
            <select onChange={handleChange} value={category}>
                <option value="">All</option>
                {categoryList.map((categorie) =>
                <option value={categorie.key}>{categorie.label}</option>
                )}
            </select>
        </p>
    </div>
    <grid>
    {list.filter((list) => list['category'] === category).map((review) =>
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