//@ts-nocheck
import React from 'react'

const PlaylistCard = ({image, name, tracks}) => {
    return (
        <div>
            <img src={image}/>
            {name}
            {tracks}
        </div>
    )
}

export default PlaylistCard
