import MainHeader from "./MainHeader";
import {useState} from "react";

const MainLayout = ({children}) => {
    const [data, setData] =useState('pouet')
    return <>
        <MainHeader/>
        <div className="layout-container">
            <div className="side-bar">
                <div className="side-bar-content">
                    <div className="sport-icons">
                        <div className="sport-icon">
                            <img src="/images/yoga_icon.svg" alt=""/>
                        </div>
                        <div className="sport-icon">
                            <img src="/images/swim_icon.svg" alt=""/>
                        </div>
                        <div className="sport-icon">
                            <img src="/images/bike_icon.svg" alt=""/>
                        </div>
                        <div className="sport-icon">
                            <img src="/images/fitness_icon.svg" alt=""/>
                        </div>
                    </div>
                    <div className="copyright">Copiryght, SportSee 2020</div>
                </div>
            </div>
            {children}
        </div>
    </>
}
export default MainLayout
