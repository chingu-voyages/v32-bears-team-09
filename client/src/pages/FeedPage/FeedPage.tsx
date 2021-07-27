import React, {useState} from 'react'

const feed = [
    {username: "bob", action: "Liked x"},
    {username: "bobby", action: "Liked x"},
    {username: "bobbish", action: "Liked x"},
    {username: "boban", action: "Liked x"},
]

const FeedPage = () => {
    const [mockFeed] = useState(feed)
    return (
        
        <div>
            <p>Friend FEed</p>
            {mockFeed.map(item => {
                return (<p>{item.username}, {item.action}</p>)
            })}
        </div>
    )
}

export default FeedPage
