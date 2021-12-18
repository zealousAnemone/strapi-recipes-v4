const Recipe = ({recipe}) => {

  return (
    <div className='recipe-card'>
      <div className="recipe-name"><a href={`http://localhost:3000/recipe/${recipe.id}`}><h3>{recipe.attributes.name}</h3></a></div>
      <img src={`http://localhost:1337${recipe.attributes.photo.data.attributes.formats.thumbnail.url}`} alt={recipe.attributes.name} className="recipe-image" />
      
      <span className='category'>{recipe.attributes.category.data.attributes.category}</span>
    </div>
  )
  }
  
  export default Recipe;