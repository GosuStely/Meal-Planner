import React from 'react';

function Post({recipe}) {
    return (
        <div>
            <h2>{recipe.title}</h2>
            <p>{recipe.instructions}</p>
            <p>{recipe.meal_type}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.diet}</p>
            <p>{recipe.cuisine}</p>
            <p>{recipe.category}</p>

        </div>
    );
}

export default Post;