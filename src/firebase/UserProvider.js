import React, {useEffect, useState, useContext} from 'react';
import firebase from 'firebase/app';

export const UserContext = React.createContext();
//export const SetUserContext = React.createContext();

export const UserProvider = props => {
    const [UserId, setUserId] = useState("2");


    //const values = [UserId, setUserId]
    

    return(
        <UserContext.Provider value = {[UserId, setUserId]}>
            {props.children}
        </UserContext.Provider>
    )

};

export const useUserId = () => {
    const Userset = useContext(UserContext);
    return Userset
}
