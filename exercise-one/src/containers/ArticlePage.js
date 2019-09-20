import React, {useEffect, useState} from 'react';
import articleData from '../components/articleData';
import TextBlock from '../components/TextBlock';


    function Article(props) {
        // console.log('props', props);
        const [article, setArticle] = useState({})
        const routeId = props.match.params.id;
    
        useEffect(() => {
            for(let i = 0; i < articleData.length; i++) {
                if(articleData[i].id === routeId) {
                    setArticle(articleData[i])
                }   else{
                console.log('nope')
                }
            }
        }, []);
        
        
        return (
            <div className="article">
                <img className="aImage" src={article.image && article.image.url}/>
                <h1 className="order">{article.title}</h1>
                <p className="order">{article.publishedDate}</p>
                <h2 className="order">{article.blurb}</h2>
                <div className="order">
                    {article.articleText && article.articleText.map((text, i) => (
                        <TextBlock key={i} type={text.type} data={text.data}/>
                    ))}
                </div>
                <p className="order"><a href='/'>Back</a></p>
            </div>
        )
    }


export default Article;