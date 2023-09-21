import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import * as sessionActions from './store/session'
import Navigation from './components/Navigation/index'
import LandingPage from './components/LandingPage'
import SpotDetails from './components/SpotDetails'
import CreateSpotForm from './components/CreateSpotForm'
import ManageSpots from './components/ManageSpots'
import EditForm from './components/EditForm'
import FilteredSpotComponent from './components/FilteredSpotComponent'
import FilterBar from './components/FilterBar'
import * as spotActions from './store/spots'
import BookingPage from './components/BookingPage'
import Footer from './components/Footer'
import BookingConfirmation from './components/BookingConfirmation'

// import spot from '../../backend/db/models/spot'

function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)
  // const [haveSpots, setHaveSpots] = useState(false)
  // const [landingPageSpots, setLandingPageSpots] = useState('')
  // const allSpots = useSelector(state => state.spots.allSpots)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
    // dispatch(spotActions.fetchSpots()).then(() => setHaveSpots(true)).then(() => setLandingPageSpots(allSpots))
  }, [dispatch])


  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded &&
      <Switch>
        <Route exact path='/'>
          <FilterBar />
          <LandingPage />
          {/* <Footer /> */}
        </Route>
        <Route exact path='/spots/:id/booking'>
          <BookingPage />
          {/* <Footer /> */}
        </Route>
        <Route exact path='/spots/new'>
          <CreateSpotForm />
          {/* <Footer /> */}
        </Route>
        <Route exact path='/spots/current'>
          <ManageSpots />
          {/* <Footer /> */}
        </Route>
        <Route exact path='/spots/:spotId/edit'>
          <FilterBar />
          <EditForm />
          {/* <Footer /> */}
        </Route>
        <Route exact path='/spots/filtered/:tag'>
          <FilterBar />
          <FilteredSpotComponent />
          {/* <Footer /> */}
        </Route>
        <Route path='/spots/:spotId'>
          <FilterBar />
          <SpotDetails />
          {/* <Footer /> */}
        </Route>
        <Route exact path ='/booking/confirmation'>
          <BookingConfirmation />
          {/* <Footer /> */}
        </Route>

      </Switch>}
      {/* <Footer /> */}
    </>
  )
};

export default App;
