import {useEffect, useState} from "react";
import axios from "axios";
import Home from "../Pages/Home";
import React from "react";

const GetUser = () => {
    const [userInfos, setUserInfos] = useState(null)

        /* This is a React Hook that is used to run a function when a component is mounted or updated. */
        useEffect(() => {
            /**
             * It fetches data from the server and sets the userInfos state
             */
            const fetchData = async () => {
                try {
                    const res = await axios(
                        'http://localhost:3000/user/12',
                    )
                    setUserInfos(res.data)
                } catch (err) {
                    console.log(err)
                }
            }
            fetchData();
        }, [])


    return (
        <>
            {
                userInfos !== null &&
                <Home getUser={userInfos}/>
            }
        </>
    )

}
export default GetUser
