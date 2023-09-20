import { useParams } from 'react-router-dom'

function BookingPage() {
    const { spotId } = useParams()
    return (
        <div>
            <div>
                <button></button>
                <h1>Request to book</h1>
            </div>
        </div>
    )
}

export default BookingPage;
