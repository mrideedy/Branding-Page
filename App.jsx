import "./App.css";

const App = () => {
  return (
    <div>
      <nav>
        
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <div className="head-container">
          <p>Menu</p>
          <p>Location</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div className="login">
          <button className="but-login">login</button>
        </div>
      </nav>

      <div className="container">
        <div className="text-part">
          <h1> YOUR FEET DESERVE THE BEST</h1>
          <p id="small-text">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          </p>
          <div className="shop">
          <button className="shop-now">Shop Now</button>
          <button className="category">Category</button>
        </div>

        <div className="available">
          <p>Also available on</p>

        </div>
        <div className="text-available">
        <div className="flipkart">
            <img src="/images/flipkart.png" alt="" />
          </div>

          <div className="amazon">
            <img src="/images/amazon.png" alt="" />
          </div>
        </div>
        </div>
        <div className="shoe">
          <img className="shoe" src="/images/shoe_image.png" alt="shoe.png" />
        </div>
      </div>
      
    </div>
  );
};

export default App;