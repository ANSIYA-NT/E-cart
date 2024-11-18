import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{marginTop:'100px'}} className=' bg-violet-600 mt-45 p-5 text-white font-bold' >
    <div className='flex justify-around '>
      <div>
        <Link className='text-2xl ' to={'/'} ><i className="fa-solid fa-truck-fast me-1"></i>Daily Cart</Link>
        <p className='mt-3'>Designed and built with the love in the world by <br /> the Luminar team with help
          of our contibutors.</p>
        <p>Code licensed Luminar,docs CC BY 3.0.</p>
        <p>Currently v5.3.2.</p>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-2xl mb-3' >Links</h1>
        <Link to={'/'} >Home Page</Link>
        <Link to={'/wishlist'}>Wishlist Page</Link>
        <Link to={'/id/view'} >View Page</Link>
        <Link to={'/cart'} >Cart </Link>

      </div>
      <div className="flex flex-col">
        <h1 className='text-2xl mb-3'>Guides</h1>
        <a href="https://react.dev/" target='_blank'>React</a>
        <a href="https://reactrouter.com/en/main" target='_blank'>React Router</a>
        <a href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>
      </div>
      <div className="flex flex-col">
        <h5 className='text-2xl mb-3'>Contact</h5>
        <div className="flex">
          <input placeholder='Enter Your E-mail Here!!' type="text" className='rounded p-1 w-auto form-control me-4 ' />
          <button ><i className="fa-solid fa-arrow-right"></i></button>

        </div>
        <div className="flex justify-between mt-3">
          <a href="https://x.com/?lang=en-in&mx=2" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
            <i className="fa-brands fa-twitter"></i></a>
          <a href="https://x.com/?lang=en-in&mx=2" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
            <i className="fa-brands fa-instagram"></i></a>
          <a href="https://x.com/?lang=en-in&mx=2" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
            <i className="fa-brands fa-facebook"></i></a>
          <a href="https://x.com/?lang=en-in&mx=2" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
            <i className="fa-brands fa-linkedin"></i></a>
          <a href="https://x.com/?lang=en-in&mx=2" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
            <i className="fa-brands fa-github"></i></a>
          <a href="https://x.com/?lang=en-in&mx=2" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>
            <i className="fa-solid fa-phone"></i></a>
        </div>
      </div>

    </div>
    <p className="text-center mt-3">Copyright &copy; July 2024 Batch,E Cart. Built with React Redux.</p>

</div>
  )
}

export default Footer 