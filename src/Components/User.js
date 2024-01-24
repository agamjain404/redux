import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { fetchUsers } from '../redux/userActions';
import { connect } from 'react-redux';

function User({ userData, fetchUsers }) {

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <>
      {
        userData.loading ? 
        <h1>Loading...</h1> :
        userData.error !== '' ? 
        <h1>{userData.error}</h1> :
        <ul>
            {
                userData.users.length && userData.users.map((user) => (
                    <li>{user.name}</li>
                ))
            }
        </ul>
      }
    </>
  )
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
