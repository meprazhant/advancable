import Navbar from '@/comps/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return <div className="wrap">
    <Navbar />
    <Component {...pageProps} />
  </div>
}
