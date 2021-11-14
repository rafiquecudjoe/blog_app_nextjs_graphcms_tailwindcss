import 'tailwindcss/tailwind.css'
import React, { Children, useEffect, useState } from "react"
import Layout from '../components/Layout'

import "../styles/globals.scss"
import { Header } from '../components';

function MyApp({ children}) {
  return (
    <>
      <Header />
      {children}
    
    </>
  ); 
}

export default MyApp
