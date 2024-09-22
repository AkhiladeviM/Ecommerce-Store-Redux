import React from 'react';

const CarouselComponent = () => (
    <div className='col-6'>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" style={{ backgroundColor: "#141414", borderRadius: "20px", border: "2px solid #41cea7" }}>
                    <img className="d-block" style={{ height: "265px", width: "auto", borderRadius: "20px" }} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a69f03100699803.5f0e99d121f96.jpg" alt="First slide" />
                </div>
                <div className="carousel-item" style={{ backgroundColor: "white", borderRadius: "20px", border: "2px solid #5b6166" }}>
                    <img className="d-block" style={{ height: "265px", width: "100%", borderRadius: "20px" }} src="https://dlcdnwebimgs.asus.com/gain/D2999CFF-B1EF-4978-B7CF-216A9CD070C5/fwebp" alt="Second slide" />
                </div>
                <div className="carousel-item" style={{ backgroundColor: "#292a6a", borderRadius: "20px", border: "3px solid #48484a" }}>
                    <img className="d-block" style={{ height: "265px", width: "100%", borderRadius: "20px" }} src="https://global.beyerdynamic.com/media/catalog/category/beyerdynamic-Katalogbanner-Amiron-Copper-ohne-bubble.jpg" alt="Third slide" />
                </div>
                <div className="carousel-item" style={{ backgroundColor: "#f4f4f4", borderRadius: "20px", border: "2px solid #9c93ae" }}>
                    <img className="d-block" style={{ height: "265px", width: "auto", borderRadius: "20px" }} src="https://www.bajajmall.in/emistore/media/manufacturerimages/1688556669_SMF721BLVEINU_1.jpeg" alt="Fourth slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
);

export default CarouselComponent;
