import { demoContacts } from "../data/demoData.js"
export const getUser = async (dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/MGBello`)
    if (!response.ok) {
        createAgenda()
        return
    }
    const data = await response.json()
    console.log(data)
    dispatch({ type: 'set_contact', payload: data.contacts })

}

const createAgenda = async () => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/MGBello`, {
        method: "POST"
    })
    return response.ok
}

export const deleteContact = async (id, dispatch) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/MGBello/contacts/${id}`,
        { method: "DELETE" }
    )
    if (response.ok) {
        dispatch({ type: 'delete_contact', payload: id });
    }

}

export const addContact = async (contact) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/MGBello/contacts`,
        {
            method: "POST",
            body: JSON.stringify(contact),
            headers: {
                "Content-type": "application/json"
            }
        }
    )
    const data = await response.json()
    console.log(data);

}

export const editContact = async (id, contact) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/MGBello/contacts/${id}`,
        {
            method: "PUT",
            body: JSON.stringify(contact),
            headers: {
                "Content-type": "application/json"
            }
        }
    )
    const data = await response.json()
    console.log(data);

}
export const addDemo = async (dispatch) => {
    const url = `https://playground.4geeks.com/contact/agendas/MGBello/contacts`
    for (let contact of demoContacts) {
        const response = await fetch(`${url}`,
            {
                method: "POST",
                body: JSON.stringify(contact),
                headers: {
                    "Content-type": "application/json"
                }
            })
    }
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/MGBello/contacts`)
    if (response.ok) {
        const data = await response.json()
        dispatch({
            type: 'add_demo',
            payload: data.contacts
        })
    }

}
export const deleteAll = async (contacts, dispatch) => {
    for (let contact of contacts) {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/MGBello/contacts/${contact.id}`,
            { method: "DELETE" }
        )
    }
    dispatch({
        type: 'set_contact',
        payload: []
    })
}