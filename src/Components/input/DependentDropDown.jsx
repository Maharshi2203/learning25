import React, { useState } from 'react'

export const DepedentDropdown = () => {

    const [selectedCountry, setSelectedCountry] = useState("")
    const [selectedState, setSelectedState] = useState("")

    const data = [
        {
            country: "India",
            states: [
                {
                    name: "Gujarat",
                    cities: ["Ahmedabad", "Surat", "Vadodara"]
                },
                {
                    name: "Maharashtra",
                    cities: ["Mumbai", "Pune", "Nagpur"]
                }
            ]
        },
        {
            country: "USA",
            states: [
                {
                    name: "California",
                    cities: ["Los Angeles", "San Diego", "San Jose"]
                },
                {
                    name: "Washington",
                    cities: ["Seattle", "Spokane"]
                }
            ]
        }
    ]

    const countryHandler = (event) => {
        setSelectedCountry(event.target.value)
        setSelectedState("") 
    }

    const stateHandler = (event) => {
        setSelectedState(event.target.value)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>DEPENDENT DROPDOWN</h1>

            {/* Country Dropdown */}
            <select onChange={countryHandler}>
                <option value="">SELECT COUNTRY</option>
                {data.map((d, index) => (
                    <option key={index} value={d.country}>
                        {d.country}
                    </option>
                ))}
            </select>

            <br /><br />

            {/* State Dropdown */}
            <select onChange={stateHandler} disabled={!selectedCountry}>
                <option value="">SELECT STATE</option>
                {selectedCountry &&
                    data
                        .find(d => d.country === selectedCountry)
                        .states.map((s, index) => (
                            <option key={index} value={s.name}>
                                {s.name}
                            </option>
                        ))
                }
            </select>

            <br /><br />

            {/* City Dropdown */}
            <select disabled={!selectedState}>
                <option value="">SELECT CITY</option>
                {selectedState &&
                    data
                        .find(d => d.country === selectedCountry)
                        .states.find(s => s.name === selectedState)
                        .cities.map((c, index) => (
                            <option key={index}>{c}</option>
                        ))
                }
            </select>
        </div>
    )
}
