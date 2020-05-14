import React from 'react';
import ReactDOM from 'react-dom';

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


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))