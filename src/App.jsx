
import './App.css'

import Sidebar from './Sidebar'
import Dashboard from "./Pages/Dashboard"
import Payments from "./Pages/Payments"
import Loans from "./Pages/Loans"
import Profile from "./Pages/Members"
import Settings from "./Pages/Settings"
import Home from './Pages/Home'

import { Route, Routes } from "react-router-dom"
import Members from './Pages/Members'




function App() {

  	return (
    	<div className='App text-[#18171f] dark:text-white dark:bg-gray-900 font-poppins  '>

			<Sidebar />
			
			<div className="container min-h-screen ml-[17vw]">

				<Routes>
					<Route path='/' element={<Dashboard/>} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/payments' element={<Payments />} />
					<Route path='/loans' element={<Loans />} />
					<Route path='/members' element={<Members />} />
					<Route path='/settings' element={<Settings />} />
				</Routes>
					
			</div>

   		</div>
  	)
}

export default App
