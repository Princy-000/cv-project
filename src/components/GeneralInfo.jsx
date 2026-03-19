import { useState } from 'react'

function GeneralInfo() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isEditing, setIsEditing] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
    console.log('General Info Submitted:', { name, email, phone })
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  if (isEditing) {
    return (
      <div>
        <h2>General Information</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <h2>General Information</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  )
}

export default GeneralInfo
