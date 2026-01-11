import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getUser } from "../Services/APIServices.js";
import { ContactList } from "../components/ContactList/ContactList.jsx";
import { Contact } from "../components/ContactCard/ContactCard.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getUser(dispatch)
	}, [])

	return (
		<div className="home-container container g-0 d-flex mt-4 mb-2 " style={{ maxWidth: "1200px", margin: "0 auto" }}>
			<div className="row g-0 w-100 d-flex align-items-start justify-content-center gap-4">
				<div className={`contactList-height col-lg-4 col-md-5 col-12 justify-content-center justify-content-md-end ${store.contactSelected ? 'd-none d-md-flex' : ' d-flex'} d-flex  mb-5`}>
					<ContactList/>
				</div>
				<div className={`contact-height col-lg-6 col-md-6 col-12 justify-content-center justify-content-md-start ${store.contactSelected ? 'd-flex' : 'd-none d-md-flex'}  mb-5`}>
					<Contact />
				</div>
			</div>
		</div>
	);
}; 