import { Box, Button, ButtonGroup, Flex } from '@chakra-ui/react'
import React, { useState } from 'react';
type ArgboxesProps = {
    text: string
};

const Argboxes:React.FC<ArgboxesProps> = ({text}) => {
    const [buttonClicked, setButtonClicked] = useState(false); 
    
    return (
    <Flex>
   
   <Box bg='cyan' w='50%' p={4} color='white' borderRadius={30}>
   There are several reasons why giving aid to Ukraine is reasonable. First, 
   Ukraine is a country that is in transition and is working to reform its 
   economy and political system. Second, Ukraine has a large population and a 
   strategic location, making it important to stability in the region. Third, Ukraine has been a 
   victim of Russian aggression, and giving aid will help to offset Russian influence. 
   Finally, giving aid to Ukraine will help to promote democracy and human rights in the country.,
</Box>
<Box bg='cyan' w='50%' p={4} color='white' borderRadius={30} marginLeft={2}>
There are many reasons why giving aid to Ukraine is unreasonable. First, Ukraine is a country
with a history of corruption, and it is not clear that the aid would be used effectively. 
Second, Ukraine is in a difficult financial situation, and it is not clear that it would 
be able to repay the aid. Third, there is a risk that the aid 
would be used to finance military action against Russia, which could lead to a wider conflict.
</Box>

    </Flex>
    
    
    )
}
export default Argboxes;