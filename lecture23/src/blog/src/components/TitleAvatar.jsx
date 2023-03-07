import React from 'react'

import "./TitleAvatar.css"

export default function TitleAvatar(props) {
  return (
    <div class="title-avatar">
        <img src={props.user.avatar_url} alt="" width={60} height={60} style={{backgroundColor: "grey", borderRadius: "50%"}}/>
        <p>{props.user.name}</p>
    </div>
  )
}
