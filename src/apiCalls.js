const getHomeArticles = (section) => {
  return (
    fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=Sc9c4r7cXvUT6fx2dwgcz44GBHZfhCCN`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
  )
}

export { getHomeArticles }