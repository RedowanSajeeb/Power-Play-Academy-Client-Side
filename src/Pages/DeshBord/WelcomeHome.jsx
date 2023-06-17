import React from 'react';
import useAuth from '../../Hooks/useAuth';

const WelcomeHome = () => {
    const {user} = useAuth()
    return (
      <div>
        <img
          className="w-full mt-0 max-h-full"
          src="https://assets.website-files.com/62010c298ad50e2f90f75c5f/62d79b2f80fdf95b82b5ca78_1412042_Blog%20Featured%20Image_1200x628-Featured%20Image%201b_071322.png"
          alt=""
        />
        <h1 className="text-6xl text-center me-20 -mt-20 ">
          Welcome <spn className="text-2xl">{user.displayName}</spn>
        </h1>
      </div>
    );
};

export default WelcomeHome;