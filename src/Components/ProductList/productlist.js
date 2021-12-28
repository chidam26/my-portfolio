import "./productlist.css"
import Product from "../Product/Product"
import { products } from "../../Data"

const Productlist = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Apps that I've developed</h1>
                <p className="pl-desc">
                Below are some of my works. Major technologies used are JavaScript, React.js, Node.js and MongoDB. 
                Some are works in progress and I'm continually working on them to improve their functionality
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
           
            
        </div>
    )
}

export default Productlist
