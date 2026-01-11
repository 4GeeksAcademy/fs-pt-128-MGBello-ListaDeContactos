import { Input } from "./Input/Input.jsx"
import { Contact } from "./Contact/Contact.jsx";

import './ContacList.css'

export const ContactList = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-center align-items-center bg-dark g-0">
            <Input/>
            <Contact />
        </div>
    )
}