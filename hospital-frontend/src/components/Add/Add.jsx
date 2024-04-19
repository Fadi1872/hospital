import './App.css'
import { FaPlus } from "react-icons/fa6";

function Add({set}) {
    return (
        <div className='add sub_text fs-2 d-flex justify-content-center align-items-center py-2' onClick={() => set(2)}>
            <FaPlus />
        </div>
    )
}

export default Add