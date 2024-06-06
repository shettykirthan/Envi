import React from 'react';
import '../index.css'; 

const InfoDetailHome = () => {
    return (
        <div className='info_container'>
            <div className='info_detail'>
                <h1 className='mainheading'>Reduce Your Carbon Footprint</h1>
                <h3 className='subheading'>AI-Powered Carbon Emission Calculator</h3>
                <p className='para'>
                    Utilize our AI-powered platform to effortlessly track and reduce your carbon footprint.
                    By uploading utility bills, vehicle usage, and travel records, gain personalized insights for greener living.
                    Our advanced algorithms provide actionable recommendations, empowering you to make environmentally conscious choices.
                    Join a global community committed to sustainability and start making a positive impact today.
                </p>
            </div>
            <div className='image-container'>
                <img src='https://tse1.mm.bing.net/th?id=OIP.Czp42PbiqplhzSit4u8kjQHaE8&pid=Api&P=0&h=180' className='image' alt='Carbon Footprint'/>
            </div>
        </div>
    );
}

export default InfoDetailHome;
