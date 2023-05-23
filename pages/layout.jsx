import '@styles/global.css'
import Navbar from '../components/Navbar/Navbar'

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Navbar/>
            <main>
                {children}
            </main>
            <footer>Footer</footer>
        </body>
    </html>
  )
}

export default RootLayout