import PlanCard from './../components/PlanCard/PlanCard';
import './Plans.css'

const Plans = () => {
  return (
    <div className='plans py-5'>
      <div className="container">
        <h1 className='text-center text-white'>Plans & Pricing</h1>
        <p className='text-center text-white w-75 mx-auto my-3 lead'>Sample text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo blanditiis minus deleniti error?</p>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <PlanCard planKind="HATCHLING" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <PlanCard planKind="BABY" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <PlanCard planKind="PREMIUM" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans