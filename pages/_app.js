import Navbar from '@/comps/Navbar'
import '@/styles/globals.css'
import withSession from '../session';


export default function App({ Component, pageProps, user }) {


  return <div className="wrap">

    <Navbar user={user} />
    <Component {...pageProps} />
  </div>
}

