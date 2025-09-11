import React from 'react';
import {User, Search, ShoppingCart, Heart} from 'lucide-react';
import {Link, useLocation} from 'react-router-dom';
import Gravatar from 'react-gravatar';
import {useDispatch} from 'react-redux';
import {logout} from '../../../store/actions/clientActions.js';
import useLocalStorage from '../../../hooks/useLocalStorage.jsx';

const LoginRegister = () => {
    const loc = useLocation();
    const [user, removeUser] = useLocalStorage('user', null);
    const dispatch = useDispatch();

    const handleLogout = () => {
        removeUser();
        dispatch(logout());
    };

    return (
        <div>
      <span className="text-[#23A6F0] flex gap-5 items-center font-bold">
        {user ? (
            <div className="flex items-center gap-5">
                <Gravatar email={"fatiheker97@gmail.com"}/>
                <span>{user.email}</span>
                <button className="cursor-pointer" onClick={handleLogout}>Logout</button>
            </div>
        ) : (
            <div className="flex gap-5 items-center justify-center w-full">
                <User/>
                <Link to={{pathname: '/login', state: {from: loc}}}>Login</Link> /
                <Link to={{pathname: '/signup', state: {from: loc}}}>Register</Link>
            </div>
        )}
          <div className="flex gap-5">
          <div><Search/></div>
          <div className="flex gap-1"><ShoppingCart/>{0}</div>
          <div className="flex gap-1"><Heart/>{0}</div>
        </div>
      </span>
        </div>
    );
};

export default LoginRegister;
