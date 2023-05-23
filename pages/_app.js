import Navbar from '@components/Navbar/Navbar'
import '../styles/global.css'
import FooterBox from '@components/FooterBox'


const _app = ({Component, pageProps}) => {
  return  <>
  <Navbar/>
  <Component {...pageProps}/>
  <FooterBox/>
  </>
}

export default _app