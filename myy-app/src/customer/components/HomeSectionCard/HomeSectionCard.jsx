import React from 'react'
import { useNavigate } from "react-router-dom";


const HomeSectionCard =({sproduct})=> {
    const navigate=useNavigate();
    return (
        <div onClick={()=>navigate('/product/&{7}')} className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[16rem] mx-3">
          <div className="h-[13rem] w-full flex items-center justify-center">
            <img
              className="object-cover w-[10rem] h-[13rem] rounded-md"
              src={sproduct.image}
              alt=""
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-medium text-gray-900">{sproduct.brand}</h3>
            <p className="mt-2 text-sm text-gray-500">
              {sproduct.title}
            </p>
          </div>
        </div>
      );
      
}
export default HomeSectionCard;