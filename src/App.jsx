import './App.css'
import './style.css'
import LanguageIcon from '@mui/icons-material/Language'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { FaTiktok } from 'react-icons/fa'

function App() {
  return (
    <>
      <div className='navbar'>
        <div className='container'>
          <div className='item item1'>
            <a href=''>Menu</a>
          </div>
          <div className='item item2'>
            <a href=''>Lemonade club</a>
          </div>
          <div className='item item3'>
            <a href=''>Jobs</a>
          </div>
          <div className='item item4'>
            <a href=''>Green practices</a>
          </div>
        </div>
        <div className='container2'>
          <div>Lemonade</div>
          <div>Shack</div>
        </div>
        <div className='container3'>
          <div className='item'>
            <a href=''>
              <LanguageIcon style={{ fontSize: '30px' }} /> <div> SE/EN</div>
            </a>
          </div>
          <div className='item'>
            <a href=''>
              <HelpOutlineIcon style={{ fontSize: '30px' }} />
              <div> Need help </div>
            </a>
          </div>
          <div className='item'>
            <a href=''>
              <PlaceOutlinedIcon style={{ fontSize: '30px' }} />
              <div> Our location</div>
            </a>
          </div>
        </div>
      </div>
      <div className='fikaContainer'>
        <div className='fikaText'>
          <div>
            <h1 className='fikaH1'>Join Lemonade Club</h1>
          </div>
          <div>
            <p className='fikaP'>
              For great offers and fun stuff! Download now, enjoy a free
              lemonade on us and experience more exclusive perks.
            </p>
          </div>
          <div>
            <button className='fikaButton'>FIND OUT MORE!</button>
          </div>
        </div>
        <div>
          <img src='pexels-photo-1233319.webp' alt='' />
        </div>
      </div>
      <div className='newProductsContainer'>
        <div>
          <h2 className='rainbow'>Savor the colorful delight!</h2>
        </div>
        <div className='newProducts'>
          <div>
            <img src='pexels-photo-6542761.webp' alt='' />
          </div>
          <div>
            <img src='pexels-photo-4846542.webp' alt='' />
          </div>
          <div>
            <img src='pexels-photo-6174880.webp' alt='' />
          </div>
        </div>

        <div className='newProductsDiv'>
          <div>
            <p className='newProductsText'>
              This summer, as we bask in the sun and enjoy the refreshing
              breeze, we're excited to introduce our new range of lemonade
              flavors. These aren't just delicious and vibrant, they're also a
              celebration of diversity and the joy of coming together. During
              the hot summer months and at local festivals, our lemonade
              varieties are sure to be the highlight, symbolizing our
              partnership with the Citrus Delight Foundation.
            </p>

            <button className='fikaButton'>SEE EXCITING NEW PRODUCTS</button>
          </div>
        </div>
      </div>
      <div className='menuImgDiv'>
        <img className='menuImg' src='pexels-photo-5638730.webp' alt='' />
        <div className='menuImgTextDiv'>
          <h2 className='menuImgH2'>Lemonade Moments</h2>
          <button className='menuButton'>CHECK OUR MENU</button>
        </div>
      </div>
      <div className='gridDiv'>
        <div className='foundationFlex'>
          <h2 className='girdImg1H2'>Citrus Delight Foundation</h2>
          <p className='gridImg1P'>
            The Citrus Delight Foundation advocates for the simple joy of
            savoring refreshing beverages and the universal right to enjoy
            life's small pleasures, like a cool glass of lemonade. We deeply
            value this mission and are proud to support their efforts and
            vision.
          </p>

          <button className='fikaButton'>READ MORE</button>
        </div>
        <div>
          <img className='gridImg1' src='pexels-photo-977460.webp' alt='' />
        </div>
      </div>
      <div className='gridDiv'>
        <div>
          <img className='gridImg1' src='pexels-photo-1171521.webp' alt='' />
        </div>
        <div className='foundationFlex'>
          <h2 className='girdImg1H2'>Our Lemon Farmers</h2>
          <p className='gridImg1P'>
            Our commitment to exceptional lemonade starts with the dedicated
            farmers who cultivate our lemons. Meet our lemon growers who shape
            our beverages and inspire us with their dedication to excellence and
            sustainability.
          </p>

          <button className='fikaButton'>READ MORE</button>
        </div>
      </div>
      <div className='gridDiv'>
        <div className='foundationFlex'>
          <h2 className='girdImg1H2'> Let's SipTogether</h2>
          <p className='gridImg1P'>
            We are on a mission: to fight loneliness and break down taboos – one
            refreshing sip at a time. Say hello to SipTogether and let us combat
            loneliness together with every glass of lemonade!
          </p>

          <button className='fikaButton'>READ MORE</button>
        </div>
        <div>
          <img className='gridImg1' src='pexels-photo-5709559.webp' alt='' />
        </div>
      </div>
      <div className='gridDiv'>
        <div>
          <img className='gridImg1' src='pexels-photo-1222271.jpeg' alt='' />
        </div>
        <div className='foundationFlex'>
          <h2 className='girdImg1H2'>Stir Your Future</h2>
          <p className='gridImg1P'>
            Come and work for us! We're excited to get to know you, hear your
            story, and support you in fulfilling your future plans, hopes, and
            dreams.
          </p>

          <button className='fikaButton'>WORK WITH US</button>
        </div>
      </div>
      <div className='emailWrapper'>
        <img
          className='lemonadePic'
          src='/public/lemonade.png'
          alt='Lemonade Icon'
        />
        <div className='newsLetter'>
          <h2 className='emailH2'>Subscribe to our newsletter</h2>
          <div className='emailDiv'>
            <input
              className='emailInput'
              type='text'
              placeholder='Email address'
            />
            <button className='subscribeButton'>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className='footerDiv'>
        <div className='flexColumn'>
          <div>Product</div>
          <a href=''>Our Lemonade</a>
          <a href=''>Food and bevarages</a>
          <a href=''>Lemonade at home</a>
          <a href=''>Catering</a>
          <a href=''>Gift cards</a>
        </div>
        <div className='flexColumn'>
          <div>Lemonade shack</div>
          <a href=''>About us</a>
          <a href=''>Press</a>
          <a href=''>Contact us</a>
        </div>
        <div className='flexColumn'>
          <div>Legal</div>
          <a href=''>Nutrients and allergens</a>
          <a href=''>Privacy notice</a>
          <a href=''>Food safety</a>
          <a href=''>Cookie policy</a>
        </div>
        <div className='flexColumn'>
          <div>Follow us</div>
          <a href=''>News</a>
          <div className='iconDiv'>
            <a href=''>
              <FacebookRoundedIcon />
            </a>
            <a href=''>
              <InstagramIcon />
            </a>

            <a href=''>
              <LinkedInIcon />
            </a>
            <a href=''>
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
