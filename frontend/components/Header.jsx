export default function Header({setFilter, categories}) {

  return (
    <div className="header">
      <h3>Strapi Recipe Book</h3>
      <ul>
        <li className="type" onClick={() => {setFilter(null)}}>All recipes</li>
      {categories.data.map((category) => (
        <li className="type" onClick={() => {setFilter(category.attributes.category)}}>{category.attributes.category}</li>
      ))}
      </ul>
    </div>
  )
}
