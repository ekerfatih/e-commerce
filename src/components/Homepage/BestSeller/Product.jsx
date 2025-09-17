import React from "react"
import ColorOptionsHelper from "../../Singlepages/Helper/ColorOptionsHelper.jsx"
const Product = ({
                     images,
                     name,
                     price,
                     renderColors,
                     alignCenter = true,
                     loading,
                 }) => {

    const colorOptions= ["bg-[#111827]", "bg-[#F59E0B]", "bg-[#10B981]", "bg-[#3B82F6]"];

    if (loading || !images || images.length === 0) {
        return (
            <div className="flex justify-center items-center h-40 w-full">
                <div className="animate-spin rounded-full h-8 w-8 border-4 border-green-500 border-t-transparent"></div>
            </div>
        )
    }

    return (
        <div
            className={`font-montserrat font-bold flex flex-col h-full ${
                renderColors && "mb-7"
            } ${alignCenter ? "items-center text-center" : "items-left"} bg-white`}
        >
            <img src={images[0].url} alt={name} className={"object-cover"}/>
            <div className={`${!alignCenter && "ml-10"}`}>
                <div className="pt-6">{name}</div>
                <div className="py-3">Some text</div>
                <p className="text-[#23856D] mb-2 font-bold">${price}</p>
            </div>
            {renderColors && <ColorOptionsHelper colorOptions={colorOptions}/>}
        </div>
    )
}

export default Product
