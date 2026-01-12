import { useEffect, useState } from 'react'
import './Form.css'
import useGlobalReducer from '../../hooks/useGlobalReducer'
import { useNavigate, useParams } from 'react-router-dom'
import { editContact, addContact } from '../../Services/APIServices'

export const Form = () => {
    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()
    const [contact, setContact] = useState(
        {
            "name": "",
            "phone": "",
            "email": "",
            "address": ""
        }
    )
    const [showAlert, setShowAlert] = useState(false)
    const [isEditing, setIsEditting] = useState(false)
    const { id } = useParams()
    const handlerChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!contact.name || !contact.phone || !contact.email || !contact.address) {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return
        }

        if (isEditing) {
            await editContact(id, contact)
            dispatch({ type: 'update_contact', payload: contact })

        } else {
            await addContact(contact)
        }
        navigate("/")
    }

    useEffect(() => {
        if (id) {
            const findContact = store.contacts.find(c => c.id === Number(id));
            setContact(findContact);
            setIsEditting(true)
        } else {
            setContact({
                "name": "",
                "phone": "",
                "email": "",
                "address": ""
            })
            setIsEditting(false)
        }
    }, [id, store.contacts])
    return (
        <>
            
            <div className='container-fluid mt-5 mx-auto custom-formContainer bg-dark p-2'>

                <h2 className='text-customColor text-center '>{isEditing ? '¿Deseas alterar el sello espiritual?' : 'Registrar nuevo objetivo.'}</h2>
                {(showAlert) && (
                <div className='container'>
                    <div class="alert alert-custom" role="alert">
                        <i className="fa-solid fa-eye-slash mx-2"></i>
                        ¡AVISO! No se detecta rastro del objetivo. Completa los datos.
                    </div>
                </div>)}
                <form className="text-start " onSubmit={handleSubmit}>
                    <div className=' w-100 mt-2'>
                        <label htmlFor="name" className='text-light mt-3 mb-0 mx-3'>
                            <i className="fa-solid fa-spaghetti-monster-flying mx-1"></i>
                            Sujeto / Alias
                        </label>
                        <input type="Text"
                            placeholder=" Nombre del ente.."
                            className="form-custom m-0 mx-3"
                            name="name" value={contact.name}
                            onChange={handlerChange}
                        />
                    </div>
                    <div className=' w-100 mt-2'>
                        <label htmlFor="name" className='text-light mt-1 mb-0 mx-3'>
                            <i className="fa-solid fa-mobile-retro mx-1"></i>
                            Frecuencia de rastro
                        </label>
                        <input type="Text"
                            placeholder=" 000 000 000"
                            className="form-custom m-0 mx-3"
                            name="phone" value={contact.phone}
                            onChange={handlerChange} />
                    </div>
                    <div className=' w-100 mt-2'>
                        <label htmlFor="name" className='text-light mt-1 mb-0 mx-3'>
                            <i className="fa-solid fa-scroll mx-1"></i>
                            Canal de telepatía
                        </label>
                        <input type="Text"
                            placeholder="correo@dandadan.jp"
                            className="form-custom m-0 mx-3"
                            name="email" value={contact.email}
                            onChange={handlerChange} />
                    </div>
                    <div className=' w-100 mt-2'>
                        <label htmlFor="name" className='text-light mt-1 mb-0 mx-3'>
                            <i className="fa-solid fa-torii-gate mx-1"></i>
                            Zona de Avistamiento
                        </label>
                        <input type="Text"
                            placeholder="Localización exacta..."
                            className="form-custom m-0 mx-3"
                            name="address" value={contact.address}
                            onChange={handlerChange} />
                    </div>
                    <div className='row'>
                        <div className='col-6 d-flex justify-content-start align-items-center'>
                            <button className='btn btn-backCustom'
                                onClick={() => navigate("/")}> <i className="fa-solid fa-ghost mx-1"></i>Volver a la realidad</button>
                        </div>
                        <div className='col-6 d-flex justify-content-end align-items-center'>
                            <button type="submit"
                                className='btn btn-addCustom text-end mt-2'>
                                <i className={`${isEditing ? 'fa-solid fa-stamp' : 'fa-solid fa-cat fa-bounce'} mx-1`} ></i>
                                {isEditing ? '¡Cambia el sello!' : '¡Atrapa al mocoso!'}
                            </button>
                        </div>


                    </div>

                </form>

            </div>
        </>


    )
}