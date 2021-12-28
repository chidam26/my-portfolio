import "./toggle.css"
import Sun from "../../Images/sun.png"
import Moon from "../../Images/moon2.png"
import { useContext } from "react"
import { ThemeContext } from "../../Context"

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
    }

    return (
        <div className='t'>
            <img src={Sun} alt="" className="t-icon" onClick={handleClick} />
            <img src={Moon} alt="" className="t-icon" onClick={handleClick} />
            <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    )
}

export default Toggle
