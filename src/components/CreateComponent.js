import React from 'react'

function CreateComponent() {
  return (
    <form method='post' className='create-form'>
        <h1>Create New Item</h1>
        <h2>Name</h2>
        <input name='name' type='text'/>
        <h2>Description</h2>
        <textarea name='description'/>
        <h2>Category</h2>
        <select size='1' name='category[]'>
            <option>Art</option>
            <option>Music</option>
            <option>Technology</option>
            <option>Trade mark</option>
        </select>
    </form>
  )
}

export default CreateComponent