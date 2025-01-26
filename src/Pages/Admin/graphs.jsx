import React from 'react'
import Piechart from '../../Components/UI/Piechart'
import ColumbChart from '../../Components/UI/ColumbChart'
import TokenTable from '../../Components/UI/TokenTable'
import AdminHeader from '../../Components/Layouts/AdminHeader'

const Graphs = () => {
    return (
        <>
            <AdminHeader/>
        <div className='min-h-[calc(100vh-80px)] bg-[#f6f6f6] flex flex-col justify-start items-center flex-wrap'>
            <div className='flex justify-start items-center pt-[50px] flex-wrap'>
                <Piechart />
                <ColumbChart />
            </div>
            <div className='w-full pt-[50px]'>
                <TokenTable />
            </div>
        </div>
        </>
    )
}

export default Graphs