import {Badge, Flex, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Button} from '@chakra-ui/react'

interface historyProps {
    name: string;
    for: string;
    against: string;
}

function HistoryItem(props: historyProps) {
    return(
        <AccordionItem>
            <h2>
            <AccordionButton background="gray.100">
                <Box flex='1' textAlign='left' color= "black" fontSize='2xl'>
                  <b>{props.name}</b>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Box background= "teal.100" color="black" fontSize="lg">
                  Arguments For:
                </Box>
                {props.for} 
            </AccordionPanel>
            <AccordionPanel pb = {4}>
                <Box background="teal.100" color="black" fontSize="lg">
                  Arguments Against:
                </Box>
                {props.against}
            </AccordionPanel>
        </AccordionItem>
    )
}

export default HistoryItem;