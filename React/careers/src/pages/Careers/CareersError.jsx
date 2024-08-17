import { Link, useRouteError } from "react-router-dom"

const CareersError = () => {
  const err = useRouteError();

  return (
    <div className='careers-error'>
      <h2>Error:</h2>
      <p>{err.message}</p>
      <Link to='/'>Back To Homepage</Link>
    </div>
  )
}

export default CareersError