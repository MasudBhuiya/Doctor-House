// import React from 'react';
import {FaGoogle} from "react-icons/fa"
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const {googleSignIn, user} = useContext(AuthContext);
    // console.log(user)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = ()=>{

        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            // console.log(loggedUser);
            const saveUser = {name: loggedUser.name, email: loggedUser.email, image: loggedUser.photoURL};
            fetch('https://assignment-twelve-server-gilt.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then( () => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500
              });
                navigate(from, {replace: true})
        } )
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                <FaGoogle></FaGoogle>
</button>
            </div>
        </div>
    );
};

export default SocialLogin;