import "../../scss/app.scss"
import React from "react";

const Home = ({getUser}) => {

    return (
        <div className="home-container">
            {
                getUser &&
                <>
                    <div className="home-title ">
                        <div>
                            <h2>Bonjour <span className="red-name">{getUser.data.userInfos.firstName}</span>
                            </h2>
                        </div>
                        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>
                    <div className="stats-container">
                        <div className="global-activity">
                            <div className="daily-activity">
                                1
                            </div>
                            <div className="detailed-stats">
                                <div className="stat">2</div>
                                <div className="stat">3</div>
                                <div className="stat">4</div>
                            </div>
                        </div>
                        <aside className="aside-stats">
                            <div className="nutri-stat">
                                <div className="nutri-img red-icon">
                                    <img src="/images/calories_icon.svg" alt=""/>
                                </div>
                                <div className="nutri-content">
                                    <p>{getUser.data.keyData.calorieCount.toLocaleString('en-US')}kCal</p>
                                    <p>Calories</p>
                                </div>
                            </div>
                            <div className="nutri-stat">
                                <div className="nutri-img blue-icon">
                                    <img src="/images/proteins_icon.svg" alt=""/>
                                </div>
                                <div className="nutri-content">
                                    <p>{getUser.data.keyData.proteinCount}g</p>
                                    <p>Proteines</p>
                                </div>
                            </div>
                            <div className="nutri-stat">
                                <div className="nutri-img yellow-icon">
                                    <img src="/images/carbohydrate_icon.svg" alt=""/>
                                </div>
                                <div className="nutri-content">
                                    <p>{getUser.data.keyData.carbohydrateCount}g</p>
                                    <p>Glucides</p>
                                </div>
                            </div>
                            <div className="nutri-stat">
                                <div className="nutri-img pink-icon">
                                    <img src="/images/lipids_icon.svg" alt=""/>
                                </div>
                                <div className="nutri-content">
                                    <p>{getUser.data.keyData.lipidCount}g</p>
                                    <p>Lipides</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </>
            }
        </div>
    )
}
export default Home
