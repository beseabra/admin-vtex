import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import { Box, Button, Checkbox } from 'vtex.styleguide'
import folderQuery from './graphql/folder.gql'

interface Folder {
  name: string
  children?: Folder[]
}

interface QueryData {
  folder: Folder
}

interface CheckedFolders {
  [key: string]: boolean
}

interface ExpandedFolders {
  [key: string]: boolean
}

export default function AdminExample() {
  const { data, loading, error } = useQuery<QueryData>(folderQuery)

  const [checkedFolders, setCheckedFolders] = useState<CheckedFolders>({})
  const [expandedFolders, setExpandedFolders] = useState<ExpandedFolders>({})

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const handleFolderChange = (folderName: string) => {
    setCheckedFolders((prevState) => ({
      ...prevState,
      [folderName]: !prevState[folderName],
    }))
  }

  const handleExpandChange = (folderName: string) => {
    setExpandedFolders((prevState) => ({
      ...prevState,
      [folderName]: !prevState[folderName],
    }))
  }

  const renderFolder = (folder: Folder, level = 0) => (
    <div
      key={folder.name}
      style={{ marginLeft: level * 20, marginBottom: '10px' }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {folder.children && (
          <span
            onClick={() => handleExpandChange(folder.name)}
            style={{ cursor: 'pointer', marginRight: '5px' }}
          >
            {expandedFolders[folder.name] ? 'A' : 'F'}
          </span>
        )}
        <Checkbox
          checked={!!checkedFolders[folder.name]}
          label={folder.name}
          onChange={() => handleFolderChange(folder.name)}
        />
      </div>
      {expandedFolders[folder.name] &&
        folder.children &&
        folder.children.map((child) => renderFolder(child, level + 1))}
    </div>
  )

  return (
    <div className="bg-muted-5 pa8">
      <Box title="Folder Tree">{data?.folder && renderFolder(data.folder)}</Box>
      <div style={{ marginTop: '10px' }}>
        <Button
          onClick={() => console.log(checkedFolders)}
          style={{ marginTop: '10px' }}
        >
          Iniciar processamento
        </Button>
      </div>
    </div>
  )
}
