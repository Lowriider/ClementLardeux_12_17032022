import {useEffect, useState} from "react";
import axios from "axios";
import Home from "../Pages/Home";
import React from "react";
import data from './NoAPIData'
import {
    useNavigate,
    useParams
} from "react-router-dom";

const GetUser = () => {
    const [userData, setUserData] = useState({})
    const [isLoading, setLoading] = useState(true);
    const [apiOff, setApiOff] = useState(false)

    /* An array of keys that will be used to store the data from the API in the userData object. */
    const objectKeys = ['infos', 'activity', 'sessions', 'performance']
    /* A hook that is used to navigate to a different page. */
    const navigate = useNavigate();

    /* Getting the userId from the url. */
    const userId = useParams().userId;


        /**
         * It takes an array of responses from axios and returns an array of data from each response
         * @param responses - an array of responses from the API
         * @returns An array of data from the responses.
         */

        /* A hook that is called when the component is mounted. */
        useEffect(() => {
            /* Checking if the api is off. If it is off, it will use the data from the NoAPIData.js file. */
            if (apiOff) {
                let newUserData = userData;
                newUserData['infos'] =  data.USER_MAIN_DATA.find(element => element.id == userId);
                newUserData['activity'] =  data.USER_ACTIVITY.find(element => element.userId == userId);
                newUserData['sessions'] =  data.USER_AVERAGE_SESSIONS.find(element => element.userId == userId);
                newUserData['performance'] =  data.USER_PERFORMANCE.find(element => element.userId == userId);
                setUserData(newUserData);
                setLoading(false)
            }
            else {
                const requestUser = axios.get("http://localhost:3000/user/" + userId + "");
                const requestActivity = axios.get("http://localhost:3000/user/" + userId + "/activity");
                const requestSessions = axios.get("http://localhost:3000/user/" + userId + "/average-sessions");
                const requestPerfomance = axios.get("http://localhost:3000/user/" + userId + "/performance");

                /* A promise that is waiting for all the requests to be completed. */
                axios.all([requestUser, requestActivity, requestSessions, requestPerfomance])
                    .then(
                        axios.spread((...responses) => {

                            /** Looping through the objectKeys array and setting the value of the key in the newUserData object
                             to the value of the response at the index of the objectKeys array.
                             Then setting the state of the userData to the newUserData object.
                             Then setting the state of the isLoading to false. **/
                            if (responses) {
                                let newUserData = userData;
                                objectKeys.forEach((key, index) => {
                                    newUserData[key] = responses[index].data.data
                                })
                                setUserData(newUserData);
                                setLoading(false)
                            }
                        })
                    )
                    .catch(errors => {
                        navigate("/404");
                    });
            }
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
