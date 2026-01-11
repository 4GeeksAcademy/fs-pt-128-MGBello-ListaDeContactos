import { Link } from "react-router-dom";
import useGlobalReducer from "../../hooks/useGlobalReducer";
import './ContactCard.css'
import { DeleteModal } from "./DeleteModal/DeleteModal";

export const Contact = () => {
    const { store, dispatch } = useGlobalReducer()
    const contactExist = store.contacts.find(c => c.id === store.contactSelected?.id);


    if (!store.contactSelected || !contactExist) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
                <i className="fa-solid fa-spaghetti-monster-flying load-icon"></i>
                <p className="load-text">Escaneando señales... selecciona un objetivo</p>
            </div>

        )
    }

    return (
        <div className="contact-card bg-light">
            <div className="contact-card_imagen bg-dark d-flex flex-column justify-content-center p-3 g-0 w-100">
                <div className=" d-flex justify-content-end">
                    <button className="text-light btn" onClick={() => dispatch({ type: 'clear_selection' })}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="card-image_container d-flex justify-content-center w-100">
                    <img src="https://preview.redd.it/my-art-of-okarun-v0-mre5in3890ud1.jpeg?width=640&crop=smart&auto=webp&s=c1e9ed952f9d6663270f4d3efa9ee12eaf4a154f"
                        alt="Okarun" />
                </div>
                <div className="text-light text-center">
                    <h3 className="contact-name">{store.contactSelected.name}</h3>
                </div>
            </div>
            <div className="d-flex flex-column align-item-center justify-content-center">
                <div className="contact-card__body  w-100 d-flex flex-column justify-content-center align-items-center mt-4">
                    <div className="border-bottom w-75 fs-5">
                        <p className="mb-0 mt-2">
                            <i className="fa-solid fa-mobile-retro mx-2"></i>{store.contactSelected.phone}
                        </p>
                    </div>
                    <div className="border-bottom w-75 fs-5 fw-normal text-email">
                        <p className="mb-0 mt-2">
                            <i className="fa-solid fa-scroll mx-1"></i>{store.contactSelected.email}
                        </p>
                    </div>
                    <div className="border-bottom w-75 fs-5">
                        <p className="mb-0 mt-2">
                            <i className="fa-solid fa-torii-gate mx-2"></i>{store.contactSelected.address}
                        </p>
                    </div>
                </div>
                <div className="d-flex justify-content-end alig-items-end mt-2 mb-2 gap-3 g-0">
                    <Link to={`/edit/${store.contactSelected.id}`}>
                        <button className="btn btn-random">
                            <i className="fa-solid fa-pen-fancy mx-1"></i> Edit
                        </button>
                    </Link>
                  <DeleteModal/>
                </div>
            </div>
        </div>
    )
}