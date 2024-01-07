import { onAuthStateChanged, signOut } from "firebase/auth";
import React, {useEffect,useState} from "react";
import {auth} from "../../firebase"
import Button from "../Card/Button";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const AccountDetails= () =>{
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

  
  return <div>
        {authUser ? 
        
        <Button  
        text= {authUser.email}
        href= '#/account'
        type= 'secondary'
        icon= {<UserCircleIcon/>}
        filled={false} />:<></>
    }
  </div>
};

export default AccountDetails;