import { useNavigate } from "react-router-dom";


function MainPage () {
    const navigate = useNavigate();

    const createNumberOptions = () => {
        const options = [];
        for (let i = 5; i <= 15; i++) {
          options.push(<option key={i} value={i}>{i}</option>);
        }
        return options;
    };

    return (        
        <div className="setting-box">
            <h1>Quiz main page</h1>

            <div>
                <h2>Select category:</h2>
                <select>
                    <option value="1">Geogrphy</option>                    
                </select>

                <h2>Select difficulty:</h2>
                <select>
                    <option value="2">Hard</option>                    
                </select>

                <h2>Select type:</h2>
                <select>
                    <option value="3">True/False</option>                    
                </select>

                <h2>Amount of questions:</h2>
                <select>
                    {createNumberOptions()}
                </select>

                <h2>Select time:</h2>
                <select>
                    <option value="4">1</option>
                    <option value="5">2</option>   
                    <option value="6">5</option>                       
                </select>            
                
            </div>
            <div className="button-box">
                    <button>
                        Start quiz
                    </button>
                    <button onClick={() => navigate("/results")}>
                        See my stats
                    </button>
            </div>
            
        </div>
    )
}

export default MainPage;