import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
            <Link to={"/usestatebasics"} className='links'>
            <li>Use state Basic</li>
            </Link>
            <Link to={"/usestateobjects"} className='links'>
            <li>Use state object</li>
            </Link>
            <Link to={"/usestatearray"} className='links'>
            <li>Use state array</li>
            </Link>
            <Link to={"/singleinput"} className='links'>
            <li>single input</li>
            </Link>
            <Link to={"/multipleinput"} className='links'>
            <li>multiple input</li>
            </Link>
            <Link to={"/useref"} className='links'>
            <li>useref</li>
            </Link>
            <Link to={"/useeffect"} className='links'>
            <li>useeffect</li>
            </Link>
            <Link to={"/Fetch"} className='links'>
            <li>fetch</li>
            </Link>
            <Link to={"/simplereturn"} className='links'>
            <li>simplereturn</li>
            </Link>
            <Link to={"/useeffectfetch"} className='links'>
            <li>useeffectfetch</li>
            </Link>
            <Link to={"/useeffectcleanup"} className='links'>
            <li>use effect cleanup</li>
            </Link>
            {/* <Link to={"/multiplereturns"} className='links'>
            <li>multiple returns</li>
            </Link>
            <Link to={"/usecontext"} className="links">
            <li>Use context</li>
            </Link> */}
            <Link to={"/propdrilling"} className='links'>
            <li>prop drilling </li>
            </Link>
            <Link to={"/usereducer"} className='links'>
            <li>use reducer </li>
            </Link>
            
        </ul>
    </div>
  )
}

export default Navbar
