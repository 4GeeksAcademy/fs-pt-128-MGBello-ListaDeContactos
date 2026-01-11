import { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { addDemo } from "../Services/APIServices";
import { deleteAll } from "../Services/APIServices";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()
	const [isLoading, setIsLoading] = useState()
	const handleDemo = async () => {
		setIsLoading(true)
		await addDemo(dispatch)
		setIsLoading(false)
	}
	const handelerDeleteAll = async () => {
		setIsLoading(true)
		await deleteAll(store.contacts, dispatch)
		setIsLoading(false)
	}
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
							<a className={`btn btn-loadCustom ${store.contacts.length > 0 ? 'd-none' : 'd-block'}`}
								onClick={handleDemo}>
								<i className="fa-solid fa-cloud-arrow-down mx-1">
								</i>Cargar datos DEMO</a>
							<a className={`btn btn-deleteCustom ${store.contacts.length > 0 ? 'd-block' : 'd-none'}`}
								onClick={handelerDeleteAll}>
								<i className="fa-solid fa-meteor mx-1">
								</i>Borrar Agenda Completa</a>
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
