import React from 'react'

import "./ArticleTitle.css"
import TitleAvatar from './TitleAvatar'

const url = "data:image/png;base64,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"

export default function ArticleTitle(props) {
  return (
    <div className="article-title">
        <h2>{props.article.title}</h2>
        <TitleAvatar user={props.article.author || {id: 1, avatar_url: url}}/>
    </div>
  )
}
