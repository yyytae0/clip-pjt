import React from 'react';
import UserList from '../components/UserList';
import ClipList from '../components/ClipList';

function Train() {
  return (
    <div className="flex">
      <div className="col-2">
        <UserList />
      </div>
      <div className="col-10">
        <ClipList />
      </div>
    </div>
  );
}

export default Train;
