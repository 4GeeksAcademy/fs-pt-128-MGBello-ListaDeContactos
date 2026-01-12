import { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { addDemo } from "../Services/APIServices";
import { deleteAll } from "../Services/APIServices";
import { Modal } from '../../src/components/Modal/Modal.jsx'
import { modalData } from "../data/dataModal";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	const [isLoading, setIsLoading] = useState()
	const handlerDemo = async () => {
		setIsLoading(true)
		await addDemo(dispatch)
		setIsLoading(false)
	}
	const handelerDeleteAll = async () => {
		setIsLoading(true)
		await deleteAll(store.contacts, dispatch)
		setIsLoading(false)
	}
	const demo = modalData.demo
	const dataDeleteAll = modalData.delete_all;
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-purple">
			<div className="container-fluid d-flex justify-content-between">
				<Link to="/" className="custom-navbar ">
					<span className="navbar-brand custom-navbar mb-0 h1">Dandadan Lista de contactos</span>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							{store.contacts.length === 0 ? (
								<Modal
									id={demo.id}
									tittle={demo.title}
									message={demo.message}
									buttonText={demo.buttonText}
									buttonIcon={demo.buttonIcon}
									colorClass={demo.colorClass}
									btnColorSecondary={demo.btnColorSecondary}
									onClick={() => handlerDemo()} />
							) : (
								<Modal
									id={dataDeleteAll.id}
									tittle={dataDeleteAll.title}
									message={dataDeleteAll.message}
									buttonText={dataDeleteAll.buttonText}
									buttonIcon={dataDeleteAll.buttonIcon}
									colorClass={dataDeleteAll.colorClass}
									btnColorSecondary={dataDeleteAll.btnColorSecondary}
									onClick={() => handelerDeleteAll()} />)}

						</li>
						<li className="nav-item">
							<Link to={"/form"} className='btn btn-addCustom'><i className="fa-solid fa-spaghetti-monster-flying mx-1"></i>Añadir nuevo objetivo</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
