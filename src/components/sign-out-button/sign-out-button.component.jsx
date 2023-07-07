import { VscSignOut } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebase.utils';
const SignOut = () => {
    return (
        <>
            <div className="flex flex-col sm:flex">
                <Link to="/" onClick={signOutUser} className="text-gray-500 hover:text-white inline-flex items-center py-2 px-4 text-sm font-medium mb-9 hover:bg-amber-500 rounded">
                    <span className="flex items-center gap-4"><VscSignOut />Sign Out</span>
                </Link>
            </div>
        </>
    )
}

export default SignOut;
