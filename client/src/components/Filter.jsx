import React from 'react';

function Filter({options, handleChange, label, id, required = false}) {
    return (
        <select onChange={handleChange} id={id} className="bg-black border border-gray-300 text-white p-2 rounded appearance-none w-2/5 cursor-pointer place-self-center" required={required}>
            <option value={""}>{label}</option>
            {options.map((option, index) => (<option key={index} value={option}>{option}</option>))}
        </select>
    );
}

export default Filter;