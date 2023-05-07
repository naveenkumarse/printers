import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';

function SimpleForm() {
    const config = {
        width: "400px",
        height: "500px",
        margin: "left",

    };
    

    const [activeBot, SetActivateBot] = useState(false);

    return (
        <div>
            {activeBot ? <div style={{ position: "sticky", marginLeft: "1000px" }}>
                {/* href="https://www.flaticon.com/free-icons/chatbot" title="chatbot icons" */}
                <ChatBot
                    steps={[
                        {
                            id: 'intro',
                            message: 'Welcome to  our Ero Prints',

                            trigger: 'intro-user',
                        },
                        {
                            id: 'intro-user',
                            message: 'How can I help you?',

                            trigger: 'user',
                        },

                        {
                            id: 'user',
                            options: [
                                { value: 'y', label: 'product details', trigger: 'y-response' },
                                { value: 'v', label: 'Address', trigger: 'v-response' },
                                { value: 'x', label: 'contact', trigger: 'x-response' },
                            ]
                        },
                        {
                            id: 'y-response',
                            options: [
                                { value: 'a', label: 'Visiting Cards', trigger: 'a-response' },
                                { value: 'b', label: 'Stickers', trigger: 'b-response' },
                                { value: 'c', label: 'Bond Papers', trigger: 'c-response' },
                                { value: 'd', label: 'Covers', trigger: 'd-response' },
                                { value: 'e', label: 'Flex  ', trigger: 'e-response' },

                            ]

                        },


                        {
                            id: 'v-response',
                            message: ' 10,1st Floor, VMK complex, Opp.Hotel Oxford, Vctv road,Erode -638003',
                            trigger:'t-response',
                        },
                        {
                            id: 'x-response',
                            message: 'Contact : 9876234567',
                            trigger:'t-response',

                        },
                        {
                            id: 'a-response',
                            options: [
                            { value: 'f', label: 'Special Cards', trigger: 'f-response' },
                            { value: 'g', label: 'Mat Finish', trigger: 'g-response' },
                            { value: 'h', label: 'Gloss Finish', trigger: 'h-response' },
                            { value: 'i', label: 'Synthetic', trigger: 'i-response' },
                           
                            ]

                        
                        },
                        {
                            id: 'b-response',
                            options: [
                                { value: 'j', label: 'Mirror Coat Stickers', trigger: 'j-response' },
                                { value: 'k', label: 'Chrome Art Stickers', trigger: 'k-response' },
                            ]
                            
                        },
                        {
                            id: 'c-response',
                            options: [
                                { value: 'l', label: '80GSM Paper', trigger: 'l-response' },
                                { value: 'm', label: '100GSM Paper' , trigger: 'm-response' },
                            ]

                        },
                        {
                            id: 'd-response',
                            options: [
                                { value: 'n', label: 'Office Covers', trigger: 'n-response' },
                               
                            ]

                        },
                        {
                            id: 'e-response',
                            options: [
                                { value: 'o', label: 'Normal Flex', trigger: 'o-response' },
                                { value: 'p', label: 'Star Flex', trigger: 'p-response' },
                                { value: 'q', label: 'Backlight Flex', trigger: 'q-response' },
                                { value: 'r', label: 'Vinyl Flex', trigger: 'r-response' },
                                { value: 's', label: 'Inject Flex', trigger: 's-response' },
                            ]

                        },
                        {
                            id: 'f-response',
                            message: 'Special card,Original sets a new standard for "standard"with a smooth,uniform finish and excellent print quality.',
                            trigger:'t-response',
                        },
                        {
                            id: 'g-response',
                            message: 'Matte cards look more professional.It eliminates glare. Whether your business card contains a lot of information or just a line or two of text, a matte finish can make it easier to read.',
                            trigger:'t-response',
                        },
                        {
                            id: 'h-response',
                            message:'Glossy finish makes images and colors appear brighter. To give your business card that wow factor, adding a glossy finish should do the trick. This finish will make your bright colors brighter and your images pop. ',
                            trigger:'t-response',
                        },
                         {
                            id: 'i-response',
                            message:'This synthetic cards is made up of synthetic sheet with state of art printing. its size is the international standard size. Perfect for the business environment.',
                            trigger:'t-response' 
                        },
                         {
                            id: 'j-response',
                            message:'mirror-coat is basically because of its mirror-like gloss on the surface. The purpose of using this type of material is to generate high-gloss printings, and this is why most of the foods and consumer foods use it.',
                            trigger:'t-response'
                        },
                         {
                            id: 'k-response',
                            message:'chrome stickers are printed in full color plus spot white ink on outdoor quality chrome material then perfectly cut to shape.',
                            trigger:'t-response',
                        },
                        {
                            id: 'l-response',
                            message:'popular, familiar and suitable for most office tasks. The 80gsm weight is lower down the gsm scale but of a more than passable quality for correspondence.' ,
                            trigger:'t-response'
                        },
                         {
                            id: 'm-response',
                            message:'100 gsm is our standard white paper stock for colour printing. It is often used for letters, compliment slips, forms and surveys etc. Better quality thickness. ',
                            trigger:'t-response'
                        },
                        {
                            id: 'n-response',
                            message:'Flawlessly designed to perfection office covers are widely used to mail the documents and other items.' ,
                            trigger:'t-response'
                        },
                            {
                                id: 'o-response',
                                message:' It is the cheapest form of flex printing done via solvent printers used at shops or in standees at events',
                                trigger:'t-response'
                            },
                             {
                                id: 'p-response',
                                message:'Star flex prints are made of a thicker material, better as per quality is concerned and more durable than normal flex.',
                                trigger:'t-response'
                            },
                             {
                                id: 'q-response',
                                message:' Blacklight Flex printing has the advantage of being able to produce a single or small print run without high upfront costs such as films and printing screens. Here it is advantageous to provide already vectorized graphics.',
                                trigger:'t-response' 
                            },
                             {
                                id: 'r-response',
                                message:'Vinyl Flex printing is a method of capturing and converting original art images into different colors and is used in various industries. Additionally, the low cost of deployment along with a longer lifespan, driving the flex market and subsequently the flex printing machine market.',
                                trigger:'t-response'
                            },
                             {
                                id: 's-response',
                                message:'An inkjet printer is a computer peripheral that produces hard copies of a text document or photo by spraying droplets of ink onto paper. ',
                                trigger:'t-response'
                            },
                             {
                                id: 't-response',
                                message:'Any other doubts?',
                                trigger:'u-response'
                              },
                              {
                                id: 'u-response',
                                options: [
                                    { value: 'yes', label: 'Yes', trigger: 'yes-response' },
                                    { value: 'no', label: 'No', trigger: 'no-response' },
                                ],
                              
                                
                              },
                             {
                                id:'yes-response',
                                message:'9876534567-contact for further queries.',
                             },
                             {
                                id:'no-response',
                                message:'Thank you for visiting our website',
                             },


                    ]}
                    {...config}
                />

            </div> : <button className='chat-button'  onClick={() => SetActivateBot(true)}>ChatBot!!</button>}
        </div>
    );
}



export default SimpleForm;