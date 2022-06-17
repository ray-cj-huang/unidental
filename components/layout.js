import { Navbar } from '../components/navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <div className='min-h-screen w-screen flex flex-col'>
        <Navbar />
        <div className='grow flex flex-1 flex-col'>
            {children}
        </div>
        <Footer />
      </div>
      
    </>
  )
}