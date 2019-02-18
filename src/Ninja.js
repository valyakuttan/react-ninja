import React from 'react'

function Ninja ({ ninjas, deleteNinja }) {
  const ninjaList = ninjas.map((ninja, id) => {
    const handleClick = (e) => {
      e.preventDefault()
      deleteNinja(id)
    }

    return (
      <div className='ninja' key={id}>
        <div> Name: {ninja.name}</div>
        <div> Age: {ninja.age}</div>
        <div> Belt: {ninja.belt}</div>
        <div>
          <button onClick={handleClick}>
            Delete
          </button>
        </div>
      </div>
    )
  })

  return (
    <div className='ninja-list'>
      {ninjaList}
    </div>
  )
}

export default Ninja
