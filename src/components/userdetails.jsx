import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
  const params = useParams()
  const userId = params.userId
  return (
    <div>Details about the user {userId}</div>
  )
}

export default UserDetails

/***
 * useParams is used for accessing URL params
 * useSearchParams is used for accessing search params
 */