import { Button } from '@chakra-ui/react'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react/menu'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
  return (
     <Menu>
       <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
     Order by :Relevance
 
       </MenuButton>
       <MenuList>
       <MenuItem>Relevance</MenuItem>
       <MenuItem>Date Aded</MenuItem>
       <MenuItem>Name</MenuItem>
       <MenuItem>Release Date</MenuItem>
       <MenuItem>Popularity</MenuItem>
       <MenuItem>Average Rating</MenuItem>
       </MenuList>
     </Menu>
   )
}

export default SortSelector
