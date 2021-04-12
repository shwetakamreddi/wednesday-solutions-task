import React from 'react'
import List from "./List"
import { ProductConsumer } from "../Context"

function PlayList() {
    return (
        <ProductConsumer>
            {
                (value) => {
                    const { data } = value
                    const Lists = data.results;
                    return (
                        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                            { Lists.map((list) => {
                                return (
                                    <List key={list.trackId} list={list} />
                                )
                            })
                            }
                        </div>
                    )
                }
            }
        </ProductConsumer>
    )

}

export default PlayList
