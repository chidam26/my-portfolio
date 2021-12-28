import "./bloglist.css"
import Blog from "../Blog/blog"
import { blogs } from "../../Data"
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Bloglist = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='bl'>
            <div className="bl-texts">
                <h1 className="bl-title">My Popular Blog Posts</h1>
                <p className="bl-desc">
                I write blog posts for <a href="https://chidamspeaks.in" target="_blank" rel="nonreferrer" style={{color: darkMode && "white" }}>chidamspeaks.in</a>.   
                 My favorite topics are related to Psychology, Culture, Productivity and Life-hacks
                </p>
            </div>
            <div className="bl-list">
                {blogs.map((item) => (
                    <Blog key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
           
            
        </div>
    )
}

export default Bloglist