import './PlanCard.css'

const PlanCard = (props) => {
  let { planKind } = props

  return (
    <div className='planCard mt-5'>
      <div className="plan-card bg-white p-5 position-relative">
        <div className={`price text-white py-3 px-4 ms-5 w-75 d-flex flex-column justify-content-center align-items-center position-absolute 
          ${planKind == "HATCHLING" ? 'bg-perple' : planKind == "BABY" ? 'bg-green' : 'bg-orange'}`}>
          <p className="mb-0 fw-bold">HATCHLING PLAN</p>
          <span className="d-block mt-2 mx-1 fw-bold">$59</span>
          <p className="mb-0 fw-bold">HATCHLING PLAN</p>
        </div>
        <ul className="list-unstyled">
          <li className='mb-3'>
            <i className={`fa-solid fa-check text-info`}></i>
            <span className='fw-bold ms-1'>Unlimited Support</span>
          </li>
          <li className='mb-3'>
            <i className="fa-solid fa-check text-info"></i>
            <span className='fw-bold ms-1'>5GB Server Space</span>
          </li>
          <li className='mb-3'>
            <i className="fa-solid fa-check text-info"></i>
            <span className='fw-bold ms-1'>2 Users per Project</span>
          </li>
          <li className='mb-3'>
            <i className={`fa-solid ${planKind == "HATCHLING" ? 'fa-xmark text-danger' : 'fa-check text-info'}`}></i>
            <span className='fw-bold ms-1'>Email Integration</span>
          </li>
          <li className='mb-3'>
            <i className={`fa-solid ${planKind == "HATCHLING" || planKind == "BABY" ? 'fa-xmark text-danger' : 'fa-check text-info'}`}></i>
            <span className='fw-bold ms-1'>Unlimited Download</span>
          </li>
        </ul>
        <button className='btn rounded-0 w-100 fw-bold text-white'>CHOOSE PLAN</button>
      </div>
    </div>
  )
}

export default PlanCard