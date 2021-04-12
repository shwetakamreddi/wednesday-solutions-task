import React from 'react'
import { ProductConsumer } from "../Context"

function List({ list }) {
    const { artworkUrl100, previewUrl, trackCensoredName } = list
    return (
        <ProductConsumer>
            {
                (value) => {
                    const { openMedia } = value;
                    return (
                        <div style={{ width: '150px', height: '125px', backgroundImage: `url(${artworkUrl100})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                            onClick={() => openMedia(previewUrl, trackCensoredName)}
                            className="result">
                        </div>

                    )
                }
            }
        </ProductConsumer>
    )
}

export default List
