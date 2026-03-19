import { useState } from 'react'

function Education() {
  const [schoolName, setSchoolName] = useState('')
  const [titleOfStudy, setTitleOfStudy] = useState('')
  const [dateOfStudy, setDateOfStudy] = useState('')
  const [isEditing, setIsEditing] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
    console.log('Education Submitted:', { schoolName, titleOfStudy, dateOfStudy })
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  if (isEditing) {
    return (
      <div>
        <h2>Educational Experience</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>School Name:</label>
            <input 
              type="text" 
              value={schoolName} 
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </div>
          <div>
            <label>Title of Study:</label>
            <input 
              type="text" 
              value={titleOfStudy} 
              onChange={(e) => setTitleOfStudy(e.target.value)}
            />
          </div>
          <div>
            <label>Date of Study:</label>
            <input 
              type="text" 
              value={dateOfStudy} 
              onChange={(e) => setDateOfStudy(e.target.value)}
              placeholder="YYYY or YYYY-YYYY"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <h2>Educational Experience</h2>
      <p><strong>School:</strong> {schoolName}</p>
      <p><strong>Degree/Study:</strong> {titleOfStudy}</p>
      <p><strong>Date:</strong> {dateOfStudy}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  )
}

export default Education
