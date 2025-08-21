import { useState, type FormEvent } from "react"
import Navigation from "../components/Navigation"
import type { ContactUsFormType } from "../lib/definitions"

const ContactUsPage = () => {
    return (
        <div className='h-screen overflow-y-auto bg-herowhite pt-3'>
            <div className=''>
                <div className="px-5">
                    <Navigation />

                    <div className="my-5">
                        <ContactUsForm />
                    </div>
                </div>

            </div>
        </div>
    )
}

const ContactUsForm: React.FC = () => {

    const [formData, setFormData] = useState<ContactUsFormType>({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <>
            <div>
                <h2 className="text-2xl">Get In Touch</h2>

                <div>
                    <p>Have a question or need assistance?</p>
                    <p>Fill out the form below to contact us.</p>
                </div>

                <form onSubmit={handleSubmit} action="POST" className="text-sm mt-5">
                    <div className="flex gap-x-2 border-b border-b-gray-400 mb-3">
                        <label htmlFor="name">Name</label>
                        <input id="name" onChange={(e) => setFormData({...formData, name: e.target.value})} className="border outline-none border-none w-full" type="text" />
                    </div>
                    <div className="flex gap-x-2 border-b border-b-gray-400 mb-3">
                        <label htmlFor="email">Email</label>
                        <input id="email" onChange={(e) => setFormData({...formData, email: e.target.value})} className="border outline-none border-none w-full" type="email" />
                    </div>
                    <div className="flex gap-x-2 border-b border-b-gray-400 mb-3">
                        <label htmlFor="subject">Subject</label>
                        <input id="subject" onChange={(e) => setFormData({...formData, subject: e.target.value})} className="border outline-none border-none w-full" type="text" />
                    </div>
                    <div className="flex gap-x-2 border-b border-b-gray-400 mb-3">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" onChange={(e) => setFormData({...formData, message: e.target.value})} className="border outline-none border-none w-full resize-none" rows={3} id=""></textarea>
                    </div>
                    <button className="w-full max-w-[500px] bg-pry py-2 rounded mt-5 text-white">Send</button>
                </form>
            </div>
        </>
    )
}

export default ContactUsPage
