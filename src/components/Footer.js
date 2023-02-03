import React from 'react';
import '../styles/footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className="footer">
        <div className='social'>
            <div className='icons'>
                <InstagramIcon fontSize="large"/>
                <FacebookIcon fontSize="large"/>
                <TwitterIcon fontSize="large"/>
                <LinkedInIcon fontSize="large"/>
            </div>
            <p>&copy; 2023 Pizza Restaurant</p>
        </div>
    </div>
  )
}

export default Footer