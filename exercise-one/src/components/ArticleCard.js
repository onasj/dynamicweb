import React from 'react';

function ArticleCard({articleContent}) {
    return (
        <div className="card">
        	<img className="listingImage" src={articleContent.image.url} alt={articleContent.image}/>
            <p className="heading">{articleContent.title}</p>
            <p>{articleContent.publishedDate}</p>
            <p>{articleContent.blurb}</p>
            <p><a href={`/article/${articleContent.id}`}>Read More</a></p>
        </div>
    )
}

export default ArticleCard;
