import Navbar from '@/comps/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {


  return <div className="wrap">
    {/* make the navbar stick to top */}

    <Navbar />
    <Component {...pageProps} />
  </div>
}
