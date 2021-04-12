import React from 'react'
import { ProductConsumer } from "../Context"

function SearchBar() {
    return (
        <ProductConsumer>
            {
                (value) => {
                    const { handleInput, searchText, handleEnterKeyPressed } = value
                    return (
                        <div>
                            <div className="control" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem' }}>
                                <input style={{ padding: '10px', outline: 'none', fontSize: '1.5rem' }} type="text" className="input" onChange={handleInput} placeholder="Search movies..."
                                    value={searchText} onKeyPress={handleEnterKeyPressed}
                                />
                            </div>
                        </div>
                    )
                }
            }
        </ProductConsumer>
    )
}

export default SearchBar
