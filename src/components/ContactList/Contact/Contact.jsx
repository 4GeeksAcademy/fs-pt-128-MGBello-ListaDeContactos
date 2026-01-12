import useGlobalReducer from "../../../hooks/useGlobalReducer"
import './Contact.css'

export const Contact = () => {

    const { store, dispatch } = useGlobalReducer()

    const filtered = store.contacts.filter(contact => contact.name.toLowerCase().includes(store.search.toLowerCase()));
    
    const handlerSelect = (id) => {
        dispatch({ type: 'select_contact', payload:id })
    }

    return (
        <div className="w-100 mt-2 p-0 sidebar-list-container d-flex flex-column align-items-center">
            {
                filtered.map(contact => (
                    <div key={contact.id} className="d-flex g-0 sidebar-contact__container align-items-center justify-content-center w-100 row border-bottom border-light"
                        onClick={()=>handlerSelect(contact.id)}>
                        <div className="sidebar-image_container col-2 p-0 d-flex justify-content-center align-items-center">
                            <img src="https://preview.redd.it/my-art-of-okarun-v0-mre5in3890ud1.jpeg?width=640&crop=smart&auto=webp&s=c1e9ed952f9d6663270f4d3efa9ee12eaf4a154f"
                                alt="Okarun" />
                        </div>
                        <div className="col-8 d-flex flex-column align-items-start justify-content-center p-0">
                            <h3 className="sidebar-name">{contact.name}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    )


}