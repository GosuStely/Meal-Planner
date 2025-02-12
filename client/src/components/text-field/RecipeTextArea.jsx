import React from 'react';

function RecipeTextArea({id, value, handleChange}) {
    return (
        <div className="flex flex-col justify-center place-items-center w-full gap-2">
            <label htmlFor={id} className="select-none">Instructions:</label>
            <textarea
                className={"bg-black border border-gray-300 text-white p-3 rounded w-2/5 h-60 appearance-none"}
                id={id}
                value={value}
                onChange={handleChange}
                placeholder={"First we need to cut the cucumber..."}/>
        </div>
    );
}

export default RecipeTextArea;