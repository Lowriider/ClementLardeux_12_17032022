import "../../scss/app.scss"
import React from "react";
import Activity from "../Components/Activity";
import Perfomance from "../Components/Perfomance";
import AverageSession from "../Components/AverageSession";
import Score from "../Components/Score";

const Home = ({userData}) => {

    return (
        <div className="home-container">
            <div className="home-title ">
                <div>
                    <h2>Bonjour <span className="red-name">{userData.infos.userInfos.firstName}</span>
                    </h2>
                </div>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="stats-container">
                <div className="global-activity">
                    <div className="daily-activity">
                        {
                            userData.activity.sessions &&
                            <Activity activities={userData.activity.sessions}/>
                        }
                    </div>
                    <div className="detailed-stats">
                        <div className="stat">
                            {
                                userData.sessions &&
                                <AverageSession session={userData.sessions}/>
                            }
                        </div>
                        <div className="stat">
                            {
                                userData.performance &&
                                <Perfomance performances={userData.performance}/>
                            }
                        </div>
                        <div className="stat"><Score score={userData.infos.todayScore === undefined ? userData.infos.score * 100 : userData.infos.todayScore * 100}/></div>
                    </div>
                </div>
                <aside className="aside-stats">
                    <div className="nutri-stat">
                        <div className="nutri-img red-icon">
                            <img src="/images/calories_icon.svg" alt=""/>
                        </div>
                        <div className="nutri-content">
                            <p>{userData.infos.keyData.calorieCount.toLocaleString('en-US')}kCal</p>
                            <p>Calories</p>
                        </div>
                    </div>
                    <div className="nutri-stat">
                        <div className="nutri-img blue-icon">
                            <img src="/images/proteins_icon.svg" alt=""/>
                        </div>
                        <div className="nutri-content">
                            <p>{userData.infos.keyData.proteinCount}g</p>
                            <p>Proteines</p>
                        </div>
                    </div>
                    <div className="nutri-stat">
                        <div className="nutri-img yellow-icon">
                            <img src="/images/carbohydrate_icon.svg" alt=""/>
                        </div>
                        <div className="nutri-content">
                            <p>{userData.infos.keyData.carbohydrateCount}g</p>
                            <p>Glucides</p>
                        </div>
                    </div>
                    <div className="nutri-stat">
                        <div className="nutri-img pink-icon">
                            <img src="/images/lipids_icon.svg" alt=""/>
                        </div>
                        <div className="nutri-content">
                            <p>{userData.infos.keyData.lipidCount}g</p>
                            <p>Lipides</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}
export default Home
