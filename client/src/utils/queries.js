import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
      gallery {
        _id
        artId
        artTitle
        artImage
        thoughtAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_GALLERY = gql`
  query getGallery {
    gallery {
      _id
      artId
      artTitle
      artImage
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_ART = gql`
  query getSingleArt($aId: ID!) {
    singleart(aId: $aId) {
      _id
      artId
      artTitle
      artImage
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
      gallery {
        _id
        artId
        artTitle
        artImage
        thoughtAuthor
        createdAt
      }
    }
  }
`;
