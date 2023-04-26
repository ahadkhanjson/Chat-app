import { Box, Container ,Text, Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
   <Container maxWidth={"xl"}  centerContent>
        <Box 
        display={"flex"}
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m=" 40px 0 15px 0 "
        borderRadius={"lg"}
        borderWidth={"1px"}>
           <Text fontSize={'4xl'} fontFamily={"Work sans"}
           color={'black'}   > Talk-A-Tive </Text>
        </Box>

        <Box bg={"white"}
        w={"100%"}
        p={"4"}
        borderRadius={"lg"}
        borderWidth={"1px"}
        >
        
        <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>

        
        
        </Box>
   </Container>
  )
}

export default Home