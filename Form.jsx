import React from 'react'
import { useState } from 'react'






function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const message = () => {
        alert('Please send your message to this number: 9422350340')
    }
    const call = () => {
        alert('Please call on this number: 96898889170')
    }

    const submit = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }

    return (
        <div className='flex ml-40 mt-7'>
            <div className='contactForm'>
                <div className="buttons">
                    <button onClick={message} className='uppercase cursor-pointer bg-black text-white mr-3 p-3 rounded-lg hover:bg-white hover:text-black w-[264px]'>Via Support chat</button>
                    <button onClick={call} className='uppercase cursor-pointer bg-black text-white p-3 rounded-lg hover:bg-white hover:text-black w-[264px]'>Via Call</button>
                </div>
                <div className="emailForm">
                    <button className='border-gray-700 border-2 w-[264px] h-11 mt-3 mr-3 hover:bg-white hover:text-black cursor-pointer hover:border-none rounded-lg'>Via Email Form</button>
                    <button className='border-gray-700 border-2 w-[264px] h-11 mt-3 hover:bg-white hover:text-black cursor-pointer hover:border-none rounded-lg'>Whatsapp</button>
                </div>
                <form onSubmit={submit}>
                    <div className="inputs mt-3">
                        <input className='mr-3 h-11 border-2 border-gray-700 p-1 w-[264px] rounded-lg placeholder:text-black' type="name" placeholder='Name' />
                        <input className='border-2 h-11 border-gray-700 p-1 mt-2 w-[264px] rounded-lg placeholder:text-black' type="email" placeholder='E-mail' />
                    </div>

                    <div>
                        <textarea className='w-[540px] mt-4 border-gray-700 border-2 placeholder:text-black rounded-lg' name="" id="" cols="30" rows="6" placeholder='Text'></textarea><br />
                        <button onSubmit={submit} className='w-[264px] cursor-pointer mt-3 uppercase bg-black text-white p-3 rounded-lg hover:bg-white hover:text-black'>Submit</button>
                    </div>

                    <div className='bg-black text-[#FFD230] font-bold my-4 p-3 text-center rounded-lg'>
                        {"Name:" + " " + name + "," + " " + "Email-id:" + " " + email + "," + " " + "Message:" + " " + " " + text}
                    </div>
                </form>
            </div>
            <div className="contactFormImage">
                <img className='w-sm ml-32' src="/images/contact.svg" alt="" />
            </div>

        </div>


    )
}

export default Form
