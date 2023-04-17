import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import SingleProfile from './SingleProfile'
import CreateProfileForm from './CreateProfileForm'
import AllProfiles from './AllProfiles'
import Footer from './Footer'
// import Header from './Header'
// import Login from './Login'
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import ScopedCssBaseline from '@mui/material/ScopedCssBaseline'
import { useAppDispatch } from '../hooks'
import { setLocalThunk } from '../actions/local'
import { useEffect } from 'react'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setLocalThunk())
  }, [dispatch])

  return (
    <>
      <ScopedCssBaseline>
        <Nav />
        {/* <CreateProfileForm /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SingleProfile />} />
          <Route path="/create-profile" element={<CreateProfileForm />} />
          <Route path="/allprofiles" element={<AllProfiles />} />
        </Routes>
        <Footer />
      </ScopedCssBaseline>
    </>
  )
}

export default App
