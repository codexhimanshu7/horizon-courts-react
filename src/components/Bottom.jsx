import React from 'react'

const Bottom = () => {
  return (
    <div className='card'>
    <div className="bottomcards">
        <p>Services</p>
        <h4>Explore our full range of coaching training and tennis experiences. From  first serve to match point -- we've got the right program for you.</h4>
        <button>Explore More <i class="ri-arrow-right-up-long-line"></i></button>

    </div>
    <div className='image-box'>
        <img src="https://plus.unsplash.com/premium_photo-1707486616740-65119f0a5942?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D" alt="" srcset="" />
        <p>Training programs</p>
       
        <span>Program designed for all ages and abilities</span>
        <i class="ri-arrow-right-up-long-line"></i>
    
    </div>
    <div className='bottomcard2'>
        <img src="https://plus.unsplash.com/premium_photo-1663039820698-8bcf99ad5b74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwN3x8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
        <p>Court Access</p>
        <span>Hourly Court Rental</span>
        <h3>Step into a space built for players - to grow. complete, and thrive.</h3>
        <i class="ri-arrow-left-long-line i1"></i>
        <i class="ri-arrow-right-long-line i2"></i>
    </div>
    </div>
  )
}

export default Bottom
