

function Modal ({ setIsOpen }) {    
    
    return (       
            <div className="overlay">
                <div className="modal">
                <p>Are you sure?{open}</p>
                <div className="button-box">
                    <button onClick={() => setIsOpen(false)}>
                        Cancel
                    </button>
                        
                    <button>
                        Confirm
                    </button>
                </div>                
            </div>

        </div>
    )
}

export default Modal;
