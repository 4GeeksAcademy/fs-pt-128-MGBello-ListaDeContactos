import useGlobalReducer from "../../hooks/useGlobalReducer"
import { useNavigate } from "react-router-dom"
import { deleteContact } from "../../Services/APIServices"
import './Modal.css'
export const Modal = ({id, tittle, message,buttonText, colorClass, buttonIcon, btnColorSecondary, onClick}) => {
    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()
    
    return (
        <>
            <button  type="button" className={`btn ${btnColorSecondary} mx-1`} data-bs-toggle="modal" data-bs-target={`#${id}`}>
                <i className={`${buttonIcon}`}></i>{buttonText}
            </button>

            <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal-contentCustom bg-dark">
                        <div className="modal-header border border-0  modal-headerCustom">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{tittle}</h1>
                            <button type="button" className="btn btn-closePurple" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="modal-body text-light border border-0">
                            {message}
                        </div>
                        <div className="modal-footer border border-0">
                            <button type="button" className="btn btn-closePurple" data-bs-dismiss="modal"> <i className="fa-solid fa-eye-slash mx-1"></i>Close</button>
                            <button
                                type="button"
                                className={`btn ${colorClass}`}
                                data-bs-dismiss="modal"
                                onClick = {onClick}
                            >
                                <i className={`${buttonIcon}`}></i>
                                {buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}