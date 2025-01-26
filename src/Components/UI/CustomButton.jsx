import React from 'react'
import { IoIosUnlock } from 'react-icons/io'
import { MdStart } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const CustomButton = ({ link, text, className , onClickF}) => {
  const navigate = useNavigate()
  return (
      <div onClick={()=>{navigate(link); onClickF() }} className={`relative cursor-pointer origin-right ${className}`}>
        <div className="relative z-10 h-[37.5px] gap-1.5 flex items-center bg-secondaryC rounded-[22.5px] transform active:translate-y-[2.25px] active:translate-x-[2.25px]">
        <div className="flex items-center justify-center border-[3px] border-[#d1e8e9] w-[60px] h-full bg-primaryC rounded-[22.5px] text-backgroundC">
          <MdStart className="text-[22.5px]" />
        </div>  
        <span className="text-[#06A5A7] text-sm font-bold pr-[15px] select-none">{text}</span>
      </div>
      <div className="absolute inset-0 rounded-[22.5px] bg-[#d1e8e9] transform translate-y-[3px] translate-x-[3px]"></div>
    </div>

  )
}

export default CustomButton