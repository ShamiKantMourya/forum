import React from 'react'

const Sort = () => {
  return (
    <div>
        <div className='sort'>
            <h2 className='txt'>Sort By</h2>
            <select className='select-sort'>
                <option value="latest">Latest</option>
                <option value= "mostupvotes">Most Upvoted</option>
            </select>
        </div>
    </div>
  )
}

export default Sort;