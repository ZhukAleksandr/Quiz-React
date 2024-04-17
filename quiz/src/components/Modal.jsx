import { useNavigate } from "react-router-dom";

function Modal ({ setIsOpen }) {

  const navigate = useNavigate();

    return (
            <div className="overlay">
                <div className="modal">
                <p>Are you sure?</p>
                <div className="button-box">
                    <button onClick={() => setIsOpen(false)}>
                        Cancel
                    </button>

                    <button onClick={() => navigate("/")}>
                        Confirm
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Modal;
