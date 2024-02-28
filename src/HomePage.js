import React from 'react';
import { Link } from 'react-router-dom';
import bird from './BurmeseBird.jpg'
import explore from './explore-icon.png'
import bird1 from './bird-photo.jpg'
import bird2 from './bird-photo2.jpg'
import { Carousel } from 'react-bootstrap';
const HomePage = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                <div className="card rounded-5" style={{ backgroundColor: 'rgba(218,221,225, 0.5)' }} >
                <div className="card-body">
                    <Carousel>
                        <Carousel.Item>
                            <img src={bird} alt="First slide" className="d-block w-100 card-img-top bird-image rounded" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={bird1} alt="Second slide" className="d-block w-100 card-img-top bird-image rounded" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={bird2} alt="Third slide" className="d-block w-100 card-img-top bird-image rounded" />
                        </Carousel.Item>
                    </Carousel>
                </div>
                
                </div>
                
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between">
                <div className="card rounded-5" style={{ backgroundColor: 'rgba(218,221,225, 0.5)' }}>
                        <h2 className=" my-4">ငှက်</h2>
                        <p className="text-dark mx-4" style={{ fontStyle: 'italic' }} >ငှက် (မျိုးပေါင်း Aves) သည် အမွှေးအတောင်ရှိ၍ အတောင်ပံ နှစ်ဖက်ရှိသော သွေးနွေးသတ္တဝါအမျိုးအစားတွင်ပါဝင်သည်။ သို့သော် အားလုံး ပျံသန်းနိုင်စွမ်း မရှိကြပေ။ ငှက်သည် ကျောရိုးရှိသတ္တဝါဖြစ်ပြီး ဥ,ဥတတ်သော သတ္တဝါအမျိုးအစားလည်း ဖြစ်သည်။</p>
                        <p className="text-dark mx-4" style={{ fontStyle: 'italic' }} >ကျွန်ုပ်တို့သည် ငှက်များကို နေ့စဉ်တွေ့မြင်နေကြရသော်လည်း ငှက်၏အကြောင်းကို နှိုက်နှိုက်ချွတ်ချွတ် မသိကြပေ။ ထိုကြောင့် ငှက်အကြောင်းကို ဖတ်ရှုလေ့လာခြင်းအားဖြင့် ငှက်လောက၏ စိတ်ဝင်စားဖွယ်ရာ၊ မှတ်သားဖွယ်ရာ အချက်များကိုပို၍ သိရှိလာနိုင်မည် ဖြစ်ပေသည်။</p>
                        <div className="d-flex justify-content-center"> {/* Center content horizontally */}
                            <Link to="/" className="btn rounded-pill my-4 text-light " style={{ backgroundColor: '#709090', color: '#333' }}>Browse Birds</Link>
                        </div>
                    </div>                
                </div>
            </div>
            <div className='row justify-content-between mt-4'>
            
                    <div className='row'>
                        <div className='col-md-6 mb-4'>
                            <div className='card card-body shadow-3 rounded-5' style={{ backgroundColor: 'rgba(218,221,225, 0.5)' }}>
                                <div className='row justify-content-between'>
                                    <div className='col-md-3 card'>
                                        <h2 className='text-dark'>၈၆၀၀</h2>
                                        <p className='text-dark'>ငှက်အမျိုးပေါင်း(မျိုးစိတ်ပေါင်း)</p>
                                    </div>
                                    <div className='col-md-3 card'>
                                        <h2 className='text-dark'>၁၆၀၀</h2>
                                        <p className='text-dark'>မျိုးစုပေါင်း</p>
                                    </div>
                                    <div className='col-md-3 card'>
                                        <h2 className='text-dark'>၁၅၅</h2>
                                        <p className='text-dark'>မျိုးရင်းပေါင်း</p>
                                    </div>
                                    <div className='col-md-3 card'>
                                        <h2 className='text-dark'>၂၇</h2>
                                        <p className='text-dark'>မျိုးစဉ်ပေါင်း</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mb-4'>
                            <Link to="/" style={{ textDecoration: 'none' }}>
                            <div className='card card-body shadow-3 rounded-5' style={{ backgroundColor: 'rgba(218,221,225, 0.5)' }}  >
                                <h1 className='text-dark'>Let's Explore Together . . 
                                    <img src={explore} style={{width: '50px', height: '50px'}}/>
                                </h1>
                            </div>
                            </Link>
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default HomePage;
