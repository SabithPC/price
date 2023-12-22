import React from 'react'
import '../sidebar.css'
const Sidebar = () => {
    return (
        <>
        
        <div className='header'>
            <div className='side-nav'>
                <div className='user'>
                    <img src="https://www.shutterstock.com/image-photo/smiling-young-middle-eastern-man-600nw-2063524544.jpg" width='90' alt="" />
                    <div>
                        <h2>STEVE JOSEPH</h2>
                        <p>stevejoseph@gmail.com</p>
                    </div>
                    
                </div>
<ul>
    <li><i class="fa-solid fa-gauge fw-2"></i><span>Dashboard</span></li>
    <li><i class="fa-solid fa-tree"></i><p>Perks</p></li>
    <li><i class="fa-solid fa-puzzle-piece"></i><p>Addons</p></li>
    <li><i class="fa-solid fa-question"></i><p>FAQ</p></li>
    <li><i class="fa-solid fa-headset"></i><p>Support</p></li>

</ul>
            </div>

        </div>
        </>
        
    )
}

export default Sidebar