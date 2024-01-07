import { onAuthStateChanged, signOut } from "firebase/auth";
import React, {useEffect,useState} from "react";
import {auth} from "../../firebase"
import Button from "../Card/Button";
import { ArrowLeftStartOnRectangleIcon,UserPlusIcon } from "@heroicons/react/24/solid";

const AuthDetails= () =>{
  const [authUser, setAuthUser]=useState<any|null>(null);
  
  useEffect(()=>{
    const listen =onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user);
        } else {
            setAuthUser(null);
        }
    });
    return ()=>{
        listen();
    }
  },[]);

  const userSignOut=()=>{
    signOut(auth).then(()=>{
        console.log('sign out successful')
    }).catch(error=>console.log(error))
  }
  return <div>
        {authUser ? 
        
        <div onClick={userSignOut}><Button  
        text= "Sign Out"
        href= '#/'
        type= 'secondary'
        icon= {<ArrowLeftStartOnRectangleIcon/>}
        filled={false} /></div>:
        <Button  
        text= "Login"
        href= '#/login'
        type= 'secondary'
        icon= {<UserPlusIcon/>}
        filled={false} />
    }
  </div>
};

export default AuthDetails;