import React from 'react';

function RadioButton({value,name,label,checked = false}) {
    return (
        <label className="inline-flex items-center cursor-pointer select-none">
            <input type="radio" className="hidden peer" name={name} value={value} defaultChecked={checked}/>
            <span
                className="w-5 h-5 bg-gray-800 border-2 border-gray-600 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500 transition-colors"></span>
            <span className="ml-2 text-gray-300 peer-checked:text-blue-400">{label}</span>
        </label>
    );
}

export default RadioButton;