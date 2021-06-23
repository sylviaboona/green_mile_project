import React from 'react'
import {render, screen} from '@testing-library/react'
import App from'./App'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

// test('navbar has text', ()=>{
//     render(<NavBar/>)
//     const linkElement = screen.getByText(/login/i)
//     expect(linkElement).toBeInTheDocument()
// })

test('footer has text', ()=>{
    const {getByText}=render(<Footer/>)
    getByText('@Copyright2021 GreeMile Connection Inc.')
})