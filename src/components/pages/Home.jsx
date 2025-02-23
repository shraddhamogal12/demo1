import React from 'react'
import "./Style.css"

const Home = () => {
  return (
    <div>
<div  id="feature"className="container feature-section">
      <div className="row align-items-center mb-5">
        <div className="col-md-6 text-center">
          <img src="feature1.jpeg" alt="Food 1" className="feature-img img-fluid" />
        </div>
        <div className="col-md-6 feature-text">
          <h3 className="fst-italic">
          Discover, create, and share delicious recipes with food lovers around the world! 🍽️✨</h3>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 feature-text text-adjust">
          <h3 className="fst-italic">
            Savor the authentic flavors of South India with classics like Dosa, Idli, and Chettinad Curry! 🍛
          </h3>
        </div>
        <div className="col-md-6 text-center">
          <img src="feature2.jpeg" alt="Food 2" className="feature-img img-fluid custom-round-img" />
        </div>
      </div>
      <div className="row align-items-center mb-5">
        <div className="col-md-6 text-center">
          <img src="feature3.jpeg" alt="Food 3" className="feature-img img-fluid custom-round-img" />
        </div>
        <div className="col-md-6 feature-text">
          <h3 className="fst-italic">
          Indulge in the aromatic flavors of North India with Paneer Tikka, Chole Bhature!✨</h3>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6 feature-text text-adjust">
          <h3 className="fst-italic">
          Experience the rich flavors of Maharashtra with authentic dishes like Vada Pav, puranpoli! ✨</h3>
        </div>
        <div className="col-md-6 text-center">
          <img src="feature4.jpeg" alt="Food 4" className="feature-img img-fluid custom-round-img" />
        </div>
      </div>
    </div>
    
<footer className="footer bg-dark text-white text-center py-4">
  <div className="container" id="aboutus">
    <p className="mb-1">© 2025 Delicious Recipes | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
