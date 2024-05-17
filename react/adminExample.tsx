import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import { Box, Button, Checkbox, Divider } from 'vtex.styleguide'
import ModalComponent from './components/Modal'
import categoriesQuery from './graphql/categories.gql'

interface SubCategory {
  id: number
  name: string
}

interface Category {
  id: number
  name: string
  subCategories: SubCategory[]
}

interface QueryData {
  categories: Category[]
}

interface CheckedCategories {
  [key: number]: boolean
}

interface CheckedSubCategories {
  [key: number]: {
    [key: number]: boolean
  }
}

export default function AdminExample() {
  const { data, loading, error } = useQuery<QueryData>(categoriesQuery)

  const [checkedCategories, setCheckedCategories] = useState<CheckedCategories>({})
  const [checkedSubCategories, setCheckedSubCategories] = useState<CheckedSubCategories>({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const handleCategoryChange = (categoryId: number) => {
    setCheckedCategories((prevState) => ({
      ...prevState,
      [categoryId]: !prevState[categoryId],
    }))
  }

  const handleSubCategoryChange = (categoryId: number, subCategoryId: number) => {
    setCheckedSubCategories((prevState) => ({
      ...prevState,
      [categoryId]: {
        ...prevState[categoryId],
        [subCategoryId]: !prevState[categoryId]?.[subCategoryId],
      },
    }))
  }

  const handleSave = () => {
    setIsModalOpen(true)
  }

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className="bg-muted-5 pa8">
      <Box title="Product List">
        {data?.categories.map((category) => (
          <>
          <div key={category.id} style={{marginBottom:"5px", marginTop:"10px"}}>
            <Checkbox
              checked={!!checkedCategories[category.id]}
              label={category.name}
              onChange={() => handleCategoryChange(category.id)}
            />
            <ul style={{ listStyleType: 'none'}}>
              {category.subCategories.map((subCategory) => (
                <li key={subCategory.id}>
                  <Checkbox
                    checked={!!checkedSubCategories[category.id]?.[subCategory.id]}
                    label={subCategory.name}
                    onChange={() => handleSubCategoryChange(category.id, subCategory.id)}
                  />
                </li>
              ))}
            </ul>
           
          </div>
           <Divider />
           </>
        ))}
      
      </Box>
      <div style={{marginTop:"10px"}}>
      <Button onClick={handleSave} style={{marginTop:"10px"}}>Iniciar processamento</Button>
      </div>
      <ModalComponent 
        isModalOpen={isModalOpen} 
        handleModalToggle={handleModalToggle} 
        checkedCategories={checkedCategories} 
        checkedSubCategories={checkedSubCategories} 
      />
    </div>
  )
}
