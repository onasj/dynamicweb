import React from 'react';
import articleData from '../components/articleData.js'
import ArticleCard from '../components/ArticleCard.js'

export default function Home() {
    return(
        <div>
            {articleData.map((article, i) =>(
             <ArticleCard articleContent={article} key={i}/>
             ))}
        </div>
    )
};