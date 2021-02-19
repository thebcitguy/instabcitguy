import React from 'react'
import Post from './index'
import { actions } from '@storybook/addon-actions'

// 2
const fakePost = {
  id: "post1",
  imageUrl: "https://i.imgur.com/aVqLAG7.png",
  description: "It's in the shed",
  liked: false,
  totalLikes: 200,
  totalComments: 20,
  user: {
    id: "user1",
    username: "AJ"
  }
}

// 3
export default {
  title: 'Post',
  component: Post,
}

const events = actions({ cardClicked: 'card clicked', likeClicked: 'like clicked', commentClicked: 'comment clicked' })


// 4
export const Default = () => (
  <Post post={{...fakePost, liked: false}} {...events}></Post>
)

export const Liked = () => (
  <Post post={{...fakePost, liked: true}} {...events}></Post>
)
