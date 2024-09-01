import brand1 from "../assets/flipkart.png"
import brand2 from "../assets/amazon.png"
import brand from "../assets/shoe_image.png"

const Content = () => {
    return (
        <div className="content">
            <div className="content-left">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="content-btn">
                    <button className="btn1">Shop Now</button>
                    <button className="btn2">Category</button>
                </div>
                <div className="shop">
                    <p style={{marginBottom: 15}}> Also Available On</p>
                    <div className="brand-icons">
                        <img src={brand1} />
                        <img src={brand2} />
                    </div>
                </div>
            </div>
            <div className="content-right">
            <img src={brand} />
            </div>

        </div>
    )
}

export default Content;