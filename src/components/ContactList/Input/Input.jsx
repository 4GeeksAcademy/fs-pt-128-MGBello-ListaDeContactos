import useGlobalReducer from "../../../hooks/useGlobalReducer"
import './Input.css'

export const Input = () =>{
    const { store, dispatch } = useGlobalReducer();
    return(
        <input type="text"
                className="sidebar-input m-2"
                name="search"
                value={store.search}
                placeholder="🔍Busca tu objetivo..."
                onChange={(e) => dispatch({ type: 'search', payload: e.target.value })} />
    )
}