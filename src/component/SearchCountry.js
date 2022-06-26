import React, { useEffect, useState } from 'react'

const SearchCountry = (props) => {
    const [searchText, setSearchText] = useState("")
    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        props.onSearch(searchText)
    }, [searchText])

    return (
        <div style={{ textAlign: "center" }}>
            <input type="text" className='form-control w-25 m-auto' placeholder='Search Countries' value={searchText} onChange={handleChange} />
        </div>
    )
}

export default SearchCountry