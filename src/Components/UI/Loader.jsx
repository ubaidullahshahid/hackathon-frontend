import React from 'react'
import { FiBarChart } from "react-icons/fi";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-[#F7F5F3]">
      <div className='flex flex-col items-center justify-center'>
        <div className="flex justify-center items-center gap-2">
          <p className='text-[21px] text-[#303030] font-semibold'>Quick Token</p>
        </div>
        <div className="w-[200px] h-[2px] bg-[#e4e4e4] overflow-hidden relative">
          <div className="w-[100%] h-full bg-primaryC moving-line"></div>
        </div>
        <div className="mt-[20px] flex gap-1">
          <p className='text-[12px] text-[#959595]'>Your Token Tracker</p>
          <FiBarChart className='text-[#959595]' />
        </div>
      </div>

    </div>

  )
}

export default Loader