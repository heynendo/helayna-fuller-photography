import { useState } from 'react'
import { motion } from "motion/react"
import '../styles/contact.css'

function Contact() {
    const API_URL = import.meta.env.DEV
        ? "http://localhost:8787/" // local worker
        : "https://emailserver-resend.heynen-donovan.workers.dev/"

    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    function updateData(e) {
        const { name, value } = e.target
        setUserInput(prevInput => ({
            ...prevInput,
            [name]: value
        }))
        console.log(userInput)
    }

    function validate() {
        const newErrors = {}
        if (userInput.name.trim().length < 2)
            newErrors.name = "Name must be at least 2 characters."

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(userInput.email))
            newErrors.email = "Please enter a valid email address."

        if (userInput.message.trim().length < 10)
            newErrors.message = "Message must be at least 10 characters."

        return newErrors
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            console.log(validationErrors)
            setErrors(validationErrors)
            setSubmitted(false)
            alert("Fix errors before submitting")
            return
        }

        setErrors({})

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    site: "hfphotography",
                    name: userInput.name,
                    email: userInput.email,
                    message: userInput.message
                })
            })

            if (res.ok) {
                alert("Message Sent!")
                setSubmitted(true)
                setUserInput({ name: "", email: "", message: "" })
            } else {
                alert("Failed to send.")
                console.error("Form submission failed:", await res.text())
                setSubmitted(false)
            }
        } catch (err) {
            console.error("Error sending form:", err)
            setSubmitted(false)
        }
    }

    return(
        <div className="contact">
            <h2>Schedule Now</h2>
            <form onSubmit={handleSubmit}>
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
                {errors.message && <motion.div className="error"
                    initial={{ opacity: 0, y: -25, maxHeight: 0 }}
                    animate={{ opacity: 1, y: 0, maxHeight: 25 }}
                    transition={{ duration: 0.5 }}
                >{errors.message}</motion.div>}
                <textarea 
                    name="message"
                    placeholder="Details"
                    value={userInput.message}
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