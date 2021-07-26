import React , {useState} from 'react'
import { Link } from "react-router-dom";

const friends = [
    {username: "Friend1", id: 1},
    {username: "Friend2", id: 2},
    {username: "Friend3", id: 3}
]

const FriendList = () => {
    const [tempFriends] = useState(friends)
    return (
        <div>
            Friends List

            {tempFriends.map(listItem => (
               <p key={listItem.id}>
                  <Link to={`/${listItem.username}`}> {listItem.username} </Link>
                </p>
            ))}
        </div>
    )
}

export default FriendList
