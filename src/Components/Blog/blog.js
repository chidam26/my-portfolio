import "./blog.css"

const Blog = ({img, link}) => {
    return (
        <div className="b">
            <div className="b-browser">
                <div className="b-circle"></div>
                <div className="b-circle"></div>
                <div className="b-circle"></div>
            </div>
            <a href={link} target="_blank" rel="nonreferrer">
                <img src={img} alt='' className="b-img"></img>
            </a>
        </div>
    )
}

export default Blog