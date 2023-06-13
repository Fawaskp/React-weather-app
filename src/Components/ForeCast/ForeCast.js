import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const ForeCast = ({ data }) => {
    return (
        <>
            <label className='title' >Daily</label>
            <Accordion allowZeroExpanded >
                {data.list.splice(0, 7).map((item, idx)=>{
                    <AccordionItem key={idx} >
                        <AccordionItemHeading>
                            
                        </AccordionItemHeading>
                        <AccordionItemPanel></AccordionItemPanel>
                    </AccordionItem>
                })}
            </Accordion>
        </>
    )
}

export default ForeCast
