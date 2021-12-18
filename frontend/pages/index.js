import Head from 'next/head';
import Header from '../components/Header';
import Recipe from '../components/Recipe';
import { useState } from 'react';

export default function Home({ recipes, categories }) {
  const [filter, setFilter] = useState('');

  return (
    <div>
      <Head>
        <title>Strapi Recipe Book</title>
      </Head>
      <Header categories={categories} filter={filter} setFilter={setFilter} />
      <div id="recipe-container">
        {recipes.data.map((recipe) => {
          if (
            !filter ||
            (filter &&
              filter === recipe.attributes.category.data.attributes.category)
          ) {
            return <Recipe recipe={recipe} key={recipe.id} />;
          }
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const recipeRes = await fetch('http://localhost:1337/api/recipes?populate=*');
  const categoryRes = await fetch('http://localhost:1337/api/categories');

  const recipes = await recipeRes.json();
  const categories = await categoryRes.json();

  return {
    props: {
      recipes,
      categories,
    },
  };
}
