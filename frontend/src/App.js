import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
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
import BookingPage from './components/BookingPage'
import Footer from './components/Footer'
import BookingConfirmation from './components/BookingConfirmation'
import EditBookingPage from './components/EditBookingPage'
import EditedBookingConfirmation from './components/BookingConfirmation/EditedBookingConfirmation'
import UserTrips from './components/Trips'

function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true))
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
        <Route exact path='/trips/current'>
          <UserTrips />
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
        <Route exact path='/spots/:spotId/bookings/:bookingId'>
          <EditBookingPage />
        </Route>
        <Route path='/spots/:spotId'>
          <FilterBar />
          <SpotDetails />
          {/* <Footer /> */}
        </Route>
        <Route exact path ='/booking/:id/confirmation'>
          <BookingConfirmation />
          {/* <Footer /> */}
        </Route>
        <Route exact path='/booking/:id/edited/confirmation'>
          <EditedBookingConfirmation />
        </Route>

      </Switch>}
      {/* <Footer /> */}
    </>
  )
};

export default App;
