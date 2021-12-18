import { marked } from 'marked';
import Link from 'next/link';

const fullRecipe = ({ recipe }) => {
  const getMarkdownText = (text) => {
    const formattedText = marked(text);
    return { __html: formattedText };
  };
  return (
    <div className="full-recipe">
      <h1>{recipe.attributes.name}</h1>
      <img
        src={`http://localhost:1337${recipe.attributes.photo.data.attributes.formats.medium.url}`}
        alt={recipe.attributes.name}
        width={400}
      />
      <h3>Ingredients</h3>
      <div
        dangerouslySetInnerHTML={getMarkdownText(recipe.attributes.ingredients)}
      ></div>
      <h3>Instructions</h3>
      <div
        dangerouslySetInnerHTML={getMarkdownText(
          recipe.attributes.instructions
        )}
      ></div>
      <Link href="/">
        <button className="home">Home</button>
      </Link>
    </div>
  );
};

export default fullRecipe;

export async function getStaticPaths() {
  const response = await fetch('http://localhost:1337/api/recipes?populate=*');
  const recipes = await response.json();
  return {
    paths: recipes.data.map((recipe) => ({
      params: {
        id: recipe.id.toString(),
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const response = await fetch(
    `http://localhost:1337/api/recipes/${params.id}?populate=*`
  );

  const recipe = await response.json();

  return {
    props: { recipe: recipe.data },
    revalidate: 1,
  };
}
