import React, {useState} from "react"
import ReactDOM from "react-dom"

// Header component
const Header = ({part}) => <h1>{part}</h1>

// Button component
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

//Stat component
const Statistic = ({text, value}) => {
return(
  <tbody>
  <tr>
    <th>{text}</th>
    <th>{value}</th>
  </tr>
  </tbody>
)
}

// Statistics section component
const Statistics = ({clicks}) => {
  
  // percent format
  let percent = {
    style: "percent",
    maximumFractionDigits: 2
  }
 
  let percentFormatter = new Intl.NumberFormat("en-US", percent)

  let sum = clicks.good + clicks.neutral + clicks.bad
  let average = ((clicks.good * 1) + (clicks.neutral * 0) + (clicks.bad * -1)) / sum
  let positive = percentFormatter.format(clicks.good / sum)

  if (sum === 0) {
    return(
      <>
      No feedback given
      </>
    )
  }
  return (
    <table style={{textAlign:"left"}}>
      <Statistic text="good" value={clicks.good}/>
      <Statistic text="neutral" value={clicks.neutral}/>
      <Statistic text="bad" value={clicks.bad}/>
      <Statistic text="all" value={sum}/>
      <Statistic text="average" value={average}/>
      <Statistic text="positive" value={positive}/>
    </table>
  )
}
const App = () => {
  // page sections
  const sections = {
    part1: "give feedback",
    part2: "statistics", 
  }

  //save clicks of each button to own state
  const [clicks, setClicks] = useState({
    good: 0, 
    neutral:0,
    bad: 0,
  })

  // Mechanism for counting clicks
  const goodClicks = () => {
    setClicks({
      ...clicks,
      good: clicks.good + 1
    })
  }
  const neutralClicks = () => {
    setClicks({
      ...clicks,
      neutral: clicks.neutral + 1
    })

  }
  const badClicks = () => {
    setClicks({
      ...clicks,
      bad: clicks.bad + 1
    })

  }

  return (
    // Button section
    <div>
      <Header part={sections.part1}/>
      <Button onClick={goodClicks} text="good"/>
      <Button onClick={neutralClicks} text="neutral"/>
      <Button onClick={badClicks} text="bad"/>
 
      <Header part={sections.part2}/>
      <Statistics clicks={clicks}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById("root")
  )
