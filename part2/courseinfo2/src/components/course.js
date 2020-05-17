import React from 'react'


const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    )
  }
  
  const Part = ({parts}) => {
    // console.log(parts)
    return (
      <div>
        {parts.map(part => 
        <p key={part.id}>
          {part.name} {part.exercises}
          </p>
        )}
      </div>
      )
  }
  
  const Content = ({ course }) => {
    // console.log(course)
    return (
      <div>
        <Part parts={course.parts}/>
      </div>
    )
  }
  
  const Total = ({ parts }) => {
    // console.log(parts)
    let array = []
    parts.forEach((element) => {
      array.push(element.exercises)
    })
    let sum = array.reduce((acc, curr) => acc + curr)
    return(
    <p>total of {sum} exercises</p>
    ) 
  }
  
  
  const Course = ({courses}) => {
    // console.log(courses)
    return(
        <div>
        {courses.map(course => 
          <div key={course.id}>
          <Header course={course}/>
          <Content course={course}/>
          <strong>
            <Total parts={course.parts} />
          </strong>
          </div>
        )}
      </div>
  
    )
  }
  
export default Course