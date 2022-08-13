import { gql } from 'graphql-request'

export const GET_AUTHOR = gql`
  query getAuthor($first: Int) {
    authors(first: $first) {
      id
      title
      smallBio {
        html
      }
      largeBio {
        html
      }
      downloadUrl
    }
  }
`
export const GET_JOBS = gql`
  query getJobs() {
    jobs(orderBy: startDate_DESC) {
      id
      company
      occupation
      startDate
      endDate
      url
      description {
        html
      }
    }
  }
`

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      title
      description {
        html
      }
      image {
        url
      }
      github
      demo
    }
  }
`

export const GET_CONTACT = gql`
  query getContact {
    contacts {
      id
      description {
        html
      }
      contactUrl
    }
  }
`
