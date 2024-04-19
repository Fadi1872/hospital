import {useNavigate} from 'react-router-dom'
import Success from '../Success/Success'

function SergeryCard({ser}) {
const navigate = useNavigate();

  return (
    <div className='card_back p-3 d-flex align-items-center' onClick={() => navigate(`/patient/sergeries/${ser.id}`)}>
        <p className='mb-0 title_small flex-grow-1'>{ser.name}</p>
        <p className='mb-0 sub_title ms-3'>{ser.created_at}</p>
        <Success suc={ser.success} />
    </div>
  )
}

export default SergeryCard