export const Input = ({type, id,name, className, place, required = true}) => {
    return(
        <input type={type} id={id} name={name}
        className={`w-full px-4 py-3 border border-semiWhite bg-transparent text-gray-400 font-semibold rounded-3xl focus:outline-none focus:ring-2 focus:ring-white ${className}`}
        placeholder={place}
        required={required} />
    )
}

export const Label = ({kol, text}) => {
    return <label htmlkol={kol} className="block text-white font-medium mb-2">{text && text}</label>
}

export const Radio = ({name, id, value, label}) => {
    return (
        <div className="py-4 bg-[#444343] rounded-2xl">
        <label className="flex items-center space-x-2">
            <input
            type="radio"
            name={name}
            value={value}
            id={id}
            className="w-6 h-6 ml-4 text-blue-600 bg-white-800 border-gray-700 focus:ring-blue-500"
            />
            <span className="text-white font-semibold">{label && label}</span>
        </label>
        </div>
    )
}