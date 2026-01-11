import useGlobalReducer from "../../../hooks/useGlobalReducer"
import { useNavigate } from "react-router-dom"
import { deleteContact } from "../../../Services/APIServices"
export const DeleteModal = () => {
    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()
    return (
        <>
            <button type="button" className="btn btn-randomdelete mx-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa-solid fa-meteor mx-1 mx-1"></i>Delete
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content modal-contentCustom bg-dark">
                        <div className="modal-header border border-0  modal-headerCustom">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">¿Quieres realizar el exorcismo?</h1>
                            <button type="button" className="btn btn-closeCustom" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                        </div>
                        <div className="modal-body text-light border border-0">
                            ¿Estás seguro? Una vez realizado el exorcismo de {store.contactSelected.name}, esta señal desaparecerá del radar para siempre.
                        </div>
                        <div className="modal-footer border border-0">
                            <button type="button" className="btn btn-closeCustom" data-bs-dismiss="modal"> <i className="fa-solid fa-eye-slash mx-1"></i>Close</button>
                            <button
                                type="button"
                                className="btn btn-deleteCustom"
                                data-bs-dismiss="modal"
                                onClick={async () => {
                                    await deleteContact(store.contactSelected.id,dispatch);
                                    navigate("/");
                                }}
                            >
                                <i className="fa-solid fa-meteor mx-1"></i>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}