import React from 'react'

function PostCard({post}) {
    return (
        <div>
            {post.title}
            {post.excerpts}
        </div>
    )
}

export default PostCard
