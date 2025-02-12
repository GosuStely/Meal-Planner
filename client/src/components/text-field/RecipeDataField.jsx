import React from 'react';

function RecipeDataField({ id, value, handleChange}) {
    const labels = new Map();
    labels.set("title", { label: "Title:", placeholder: "My Salad" });
    labels.set("ingredients", { label: "Ingredients:", placeholder: "Cucumber, Tomato, Cheese, Onions..." });
    const { label, placeholder } = labels.get(id);

    return (
        <div className="flex flex-col justify-center place-items-center w-full gap-2">
            <label htmlFor={id} className="select-none">{label}</label>
            <input
                className="bg-black border border-gray-300 text-white p-3 rounded appearance-none w-2/5"
                type={"text"}
                id={id}
                value={value}
                placeholder={placeholder}
                required={true}
                onChange={(e) => handleChange(e)} />
        </div>
    );
}

export default RecipeDataField;