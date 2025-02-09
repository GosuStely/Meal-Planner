import React from 'react';

function Filter({options,handleChange,label}) {
    return (
        <select onChange={handleChange} className="bg-black border border-gray-300 text-white p-2 rounded my-5 appearance-none w-1/4 cursor-pointer transition-all">
            <option>{label}</option>
            {options.map((option, index) => (<option key={index} value={option}>{option}</option>))}
        </select>
    );
}

export default Filter;