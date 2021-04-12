import React from 'react'
import { ProductConsumer } from "../Context"
import "./media.css"

function Media() {
    return (
        <div className="media">
            <ProductConsumer>
                {
                    (value) => {
                        const { src, title, showVideo, closeMedia } = value;
                        return (
                            showVideo &&
                            <div className="video">
                                <video controls autoPlay src={src}></video>
                                <p>{title}</p>
                                <button onClick={closeMedia}>X</button>
                            </div>
                        )
                    }
                }
            </ProductConsumer>
        </div>
    )
}

export default Media
