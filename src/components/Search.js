import React from 'react'

function Search() {
  return (
    <form method='get' className='search-form'>
        <input className='input' type='text' name='search' placeholder='Search'/>
        <input className='submit' type='submit' value='Submit'/>
    </form>
  )
}

export default Search