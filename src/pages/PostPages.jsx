import { useContext } from "react";
import Post from "../components/Posts.jsx";
import { alertContext } from "../context/Context.js";


const PostPages = () => {

    const { showAlert, setShowAlert } = useContext(alertContext)

    return (
        <>
            <div className="container mt-4">
                <h1>Personaggi</h1>
                <div className="d-flex gap-5">
                    <button className="btn btn-primary col-2"
                        onClick={() => setShowAlert(!showAlert)}>
                        Mostra Avviso
                    </button>
                    {showAlert && <div className="alert alert-warning col-5 text-center">Attenzione</div>}
                </div>
                <Post />

            </div>

        </>
    )
}

export default PostPages;