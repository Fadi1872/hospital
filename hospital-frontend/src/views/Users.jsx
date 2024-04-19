import { useState } from 'react'
import UserShow from '../components/UserShow/UserShow';
import UserAdd from '../components/UsersAdd/UserAdd';

function Users() {
    const [active, setActive] = useState(1);
    const [userId, setUserId] = useState(null);
    return (
        <>
            {
                active == 1
                    ? <UserShow set={setActive} setId={setUserId} />
                    : active == 2
                        ? <UserAdd set={setActive} />
                        : <UserAdd
                            set={setActive}
                            id={userId}
                            edit />
            }</>
    )
}

export default Users