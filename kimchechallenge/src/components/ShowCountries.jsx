import React from 'react'

const ShowCountries = ({ filteredCountries }) => {
    return (
        <div>
            {
                filteredCountries?.map((key) => {
                    if (key.countries.length === 0) return
                    return (
                        <React.Fragment key={key.code}>
                            <h2>{key.name}</h2>
                            {
                                key.countries.map((country) =>(
                                    <p key={country.code}>
                                        {`${country.emoji} ${country.name}`}
                                    </p>
                                ))
                            }
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}   

export default ShowCountries