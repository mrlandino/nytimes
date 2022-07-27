import { useState, useEffect } from "react";

const ArticleDetails = ({currentArticle, currentArticles}) => {
  const [article, setArticle] = useState('')

  useEffect(() => {
    console.log('DETAILS')
    // const thisArticle = currentArticles.reduce((acc, article) => {
    //   if(article.id)
    // })
  }) 
  return (
    <h2>DETAILS</h2>
  )
}

export default ArticleDetails;