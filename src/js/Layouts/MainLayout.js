import MainHeader from "./MainHeader";
import MainSideBar from "./MainSideBar";

const MainLayout = ({children}) => {
    return <>
        <MainHeader/>
        {children}
        <MainSideBar/>
    </>
}
export default MainLayout
