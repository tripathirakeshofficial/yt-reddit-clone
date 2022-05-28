import { gql } from '@apollo/client'

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`
export const GET_ALL_POSTS = gql`
  query MyQuery {
    getPostList {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      comments {
        created_at
        id
        post_id
        text
        username
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
      subreddit {
        created_at
        id
        topic
      }
    }
  }
`
