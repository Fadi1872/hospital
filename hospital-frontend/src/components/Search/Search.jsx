import './Search.css'
import { FaSearch } from "react-icons/fa";

function Search({name}) {
    return (
        <div className='d-flex align-items-center justify-content-between my-4'>
            <p className='sub_title mb-0'>للبحث عن {name} عن طريق الاسم</p>
            <div className='search px-4 py-2'>
                <FaSearch className='search-icon' />
                <input type="text" className='sub_title pe-3' placeholder='الاسم' />
            </div>
        </div>
    )
}

export default Search