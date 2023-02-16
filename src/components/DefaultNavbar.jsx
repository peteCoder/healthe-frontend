import React from 'react'
import DefaultSearch from './DefaultSearch';
import { BASE_URL } from '../utils/request';

export const DefaultNavbar = ({user}) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Health<span className='text-red-600'>e</span></a>
        </div>
        <div className="flex-none">
            <div className='flex-1'>
                <DefaultSearch />
            </div>
          <div className="dropdown dropdown-left">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-lg">
                <img src={`${BASE_URL}${user.photo}`} />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
