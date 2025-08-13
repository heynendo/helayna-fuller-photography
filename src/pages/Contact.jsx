import { useState } from 'react'
import { motion } from "motion/react"
import '../styles/contact.css'

function Contact() {
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        content: ""
    })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const updateData = (e) => {
        const { name, value } = e.target

        setUserInput(prevInput => ({
            ...prevInput,
            [name]: value
        }))

    }

    const validate = () => {
        const newErrors = {}
        if (userInput.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters."
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(userInput.email)) {
            newErrors.email = "Please enter a valid email address."
        }

        if (userInput.content.trim().length < 10) {
            newErrors.content = "Message must be at least 10 characters."
        }

        return newErrors
    }

    async function handleSumbit(e){
        e.preventDefault()

        const validationErrors = validate()

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            setSubmitted(false)
            return
        } else {
            console.log(userInput)
            setErrors({})
        }

        try {
            const res = await fetch("https://formsubmit.co/fullerhe@mail.gvsu.edu", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: userInput.name,
                    email: userInput.email,
                    message: userInput.content
                })
            });

            if (res.ok) {
                setSubmitted(true)
                setErrors({})
                setUserInput({ name: "", email: "", content: "" })
            } else {
                console.error("Form submission failed")
            }
        } catch (err) {
            console.error("Error sending form:", err)
        }

    }

    return(
        <div className="contact">
            <h2>Schedule Now</h2>
            <form onSubmit={handleSumbit}>
                {errors.name && <motion.div className="error"
                    initial={{ opacity: 0, y: -25, maxHeight: 0 }}
                    animate={{ opacity: 1, y: 0, maxHeight: 25 }}
                    transition={{ duration: 0.5 }}
                >{errors.name}</motion.div>}
                <input 
                    name = "name"
                    placeholder="Name"
                    value={userInput.name}
                    onChange={updateData}
                />
                {errors.email && <motion.div className="error"
                    initial={{ opacity: 0, y: -25, maxHeight: 0 }}
                    animate={{ opacity: 1, y: 0, maxHeight: 25 }}
                    transition={{ duration: 0.5 }}
                >{errors.email}</motion.div>}
                <input 
                    name="email"
                    placeholder="Email"
                    value={userInput.email}
                    onChange={updateData}
                />
                {errors.content && <motion.div className="error"
                    initial={{ opacity: 0, y: -25, maxHeight: 0 }}
                    animate={{ opacity: 1, y: 0, maxHeight: 25 }}
                    transition={{ duration: 0.5 }}
                >{errors.content}</motion.div>}
                <textarea 
                    name="content"
                    placeholder="Details"
                    value={userInput.content}
                    onChange={updateData}
                />
                <button type="submit">Send</button>
                {submitted && <motion.div className="success"
                    initial={{ opacity: 0, y: 30, maxHeight: 0 }}
                    animate={{ opacity: 1, y: 0, maxHeight: 30 }}
                    transition={{ duration: 0.5 }}
                >Your message has been sent!</motion.div>}
            </form>
            <a className='mail' href="mailto:fullerhe@mail.gvsu.edu">
                fullerhe@mail.gvsu.edu
            </a>
        </div>
    )
}

export default Contact