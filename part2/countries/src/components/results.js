import React from 'react'
import View from './view'

const Results = (props) => {
    let results = props.results
    console.log("results props", results)
    console.log(results.length)

    if( results.length > 10 ) {
        return(
            <>
            Too many matches, specify another filter
            </>
        )
    }
    else if( results.length > 1 ) {
        return(
            <>
            {results.map(country =>
                <div key={country.name}>
                    {country.name}
                </div>
            )}
            </>
        )
    }
    else if (results.length === 1) {
        let country = results[0]
        console.log(country.languages)
        return(
              <View {...country}/>
        )
    }
    else {
        return(
            <>
            No matches found
            </>
        )
    }


}

export default Results