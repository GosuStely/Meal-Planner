/* eslint-disable react/prop-types */
function FormDataField({ type, id, value, handleChange }) {
    const labels = new Map();
    labels.set("username", { label: "Username:", placeholder: "JhonTheBest" });
    labels.set("email", { label: "Email:", placeholder: "Jhon@gmail.com" });
    labels.set("password", { label: "Password:", placeholder: "Jhon123" });
    labels.set("repeatPassword", { label: "Repeat Password:", placeholder: "Jhon123" });
    const { label, placeholder } = labels.get(id);

    return (
        <div className="flex flex-col w-full">
            <label htmlFor={id} className="select-none">{label}</label>
            <input
                className="bg-white p-2 w-full border border-black focus:outline-blue-500 placeholder:font-extralight"
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                required={true}
                onChange={(e) => handleChange(e)} />
        </div>
    );
}

export default FormDataField;