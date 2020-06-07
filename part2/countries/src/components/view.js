import React from 'react'

const View = (props) => {
    let country = props
    let languages = country.languages
    return (
        <div>
             <h1>{country.name}</h1>
                capital {country.capital}
                <br/>
                population {country.population}
                <br />
                <h2> Languages</h2>
                <ul>
                    {languages.map( language => 
                        <li key={language.name}>
                            {language.name}
                        </li>
                    )}
                </ul>
                <img src={country.flag} width="200" height="100" />
        </div>
    )
  




}

export default View