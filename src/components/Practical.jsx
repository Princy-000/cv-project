import { useState } from 'react'

function Practical() {
  const [companyName, setCompanyName] = useState('')
  const [positionTitle, setPositionTitle] = useState('')
  const [mainResponsibilities, setMainResponsibilities] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateUntil, setDateUntil] = useState('')
  const [isEditing, setIsEditing] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
    console.log('Practical Submitted:', { 
      companyName, 
      positionTitle, 
      mainResponsibilities,
      dateFrom,
      dateUntil 
    })
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  if (isEditing) {
    return (
      <div>
        <h2>Practical Experience</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Company Name:</label>
            <input 
              type="text" 
              value={companyName} 
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div>
            <label>Position Title:</label>
            <input 
              type="text" 
              value={positionTitle} 
              onChange={(e) => setPositionTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Main Responsibilities:</label>
            <textarea 
              value={mainResponsibilities} 
              onChange={(e) => setMainResponsibilities(e.target.value)}
              rows="4"
            />
          </div>
          <div>
            <label>Date From:</label>
            <input 
              type="text" 
              value={dateFrom} 
              onChange={(e) => setDateFrom(e.target.value)}
              placeholder="YYYY"
            />
          </div>
          <div>
            <label>Date Until:</label>
            <input 
              type="text" 
              value={dateUntil} 
              onChange={(e) => setDateUntil(e.target.value)}
              placeholder="YYYY or Present"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <h2>Practical Experience</h2>
      <p><strong>Company:</strong> {companyName}</p>
      <p><strong>Position:</strong> {positionTitle}</p>
      <p><strong>Responsibilities:</strong> {mainResponsibilities}</p>
      <p><strong>Period:</strong> {dateFrom} - {dateUntil}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  )
}

export default Practical
