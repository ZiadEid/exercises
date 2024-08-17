import { useLoaderData, useParams } from 'react-router-dom'

const CareerDetails = () => {
  const {id} = useParams();
  const career = useLoaderData();

  return (
    <div className='career-details'>
      <h2>Career Details for {career.title}</h2>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore consequatur laboriosam provident libero atque sint officia inventore cumque quod modi a cupiditate dicta facilis fugit, aspernatur animi accusantium deserunt fugiat.
        </p>
      </div>
    </div>
  )
}

//Loader Function

export const careerLoader = async ({params}) => {

  const {id} = params;

  const res = await fetch(`http://localhost:4000/careers/${id}`);

  if (!res.ok) {
    throw Error("this Job dosen't exist")
  }

  return res.json()

}

export default CareerDetails