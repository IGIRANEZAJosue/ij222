
import './App.css'

import Sidebar from './Sidebar'
import Dashboard from "./Pages/Dashboard"
import Payments from "./Pages/Payments"
import Loans from "./Pages/Loans"
import Profile from "./Pages/Profile"
import Notifications from './Pages/Notifications'
import Settings from "./Pages/Settings"
import Home from './Pages/Home'

import { Route, Routes } from "react-router-dom"




function App() {

  	return (
    	<div className='App  text-[#18171f] dark:text-white dark:bg-textBlack font-poppins  '>

			<Sidebar />
			
			<div className="container min-h-[100vh] ml-[17vw]">

				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/payments' element={<Payments />} />
					<Route path='/loans' element={<Loans/>} />
					<Route path='/profile' element={<Profile/>} />
					<Route path='/notifications' element={<Notifications/>} />
					<Route path='/settings' element={<Settings/>} />
				</Routes>
					
			</div>

   		</div>
  	)
}

export default App
