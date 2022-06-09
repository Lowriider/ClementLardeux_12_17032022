import {useEffect, useState} from "react";
import axios from "axios";
import Home from "../Pages/Home";
import React from "react";
import {
    useParams
} from "react-router-dom";

const GetUser = () => {
    const [userData, setUserData] = useState({})
    const [isLoading, setLoading] = useState(true);
    /**
     * It takes an array of responses from axios and returns an array of data from each response
     * @param responses - an array of responses from the API
     * @returns An array of data from the responses.
     */
    const userId = useParams().userId;
    const setDataMap = (responses) => {
        return responses.map(response => {
            return response.data.data
        })
    }

    const objectKeys = ['infos', 'activity', 'sessions', 'performance']


    /* A hook that is called when the component is mounted. */
    useEffect(() => {
        const requestUser = axios.get("http://localhost:3000/user/"+userId+"");
        const requestActivity = axios.get("http://localhost:3000/user/"+userId+"/activity");
        const requestSessions = axios.get("http://localhost:3000/user/"+userId+"/average-sessions");
        const requestPerfomance = axios.get("http://localhost:3000/user/"+userId+"/performance");

        /* A promise that is waiting for all the requests to be completed. */
        axios.all([requestUser, requestActivity, requestSessions, requestPerfomance])
            .then(
                axios.spread((...responses) => {

                    if (responses) {
                        let newUserData = userData;
                        objectKeys.forEach((key, index) => {
                            newUserData[key] = responses[index].data.data
                        })
                        setUserData(newUserData);
                        setLoading(false)
                    }
                    console.log(userData)
                })
            )
            .catch(errors => {
                console.error(errors);
            });
    }, [])

    return (
        <>
            {
                !isLoading &&
                <Home userData={userData}/>
            }
        </>
    )

}
export default GetUser
