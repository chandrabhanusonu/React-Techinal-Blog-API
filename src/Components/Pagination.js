import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {
    const {page,handlePageChange,totalPages} = useContext(AppContext);
  return (
    <div className='w-10/12 max-w-[1080px] mx-auto mb-8'>
        <div>
            <div className='flex gap-3 mb-2'>
                {   page > 1 &&
                    (<button 
                    className='text-[1.1rem] text-orange-400 font-bold bg-slate-600 px-4 py-2 rounded-lg hover:text-orange-500 hover:bg-slate-700'
                    onClick={() =>  handlePageChange(page-1)}>
                        Previous
                    </button>)
                }

                {   page < totalPages && 
                    (<button 
                    className='text-[1.1rem] text-orange-400 font-bold bg-slate-600 px-4 py-2 rounded-lg hover:text-orange-500 hover:bg-slate-700'
                    onClick={() => handlePageChange(page+1)}>
                        Next
                    </button>)
                }
            </div>

            <p className='text-[14px] font-bold text-gray-700'>
                Page {page} of {totalPages}
            </p>
        </div>
    </div>
  )
}

export default Pagination