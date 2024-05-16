import React from 'react'
import { useQuery } from 'react-apollo'
import { Box } from 'vtex.styleguide'
import helloworld from './graphql/helloworld.gql'

export default function AdminExample() {
  const { data } = useQuery(helloworld)
  return (
    <div className="bg-muted-5 pa8">
      <Box title="Distributed Order Management">
        <h1>Hello, World!</h1>
        <p>{data?.helloworld}</p>
      </Box>
    </div>
  )
}
