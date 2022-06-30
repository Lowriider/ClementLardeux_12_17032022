import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import MainLayout from "../js/Layouts/MainLayout";
import GetUser from "../js/Data/GetUser";
import NotFound from "../js/Pages/NotFound";

const Router = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/user/:userId" element={<GetUser/>}/>
                    <Route path="/404" element={<NotFound/>}/>

                    <Route
                        path="*"
                        element={<NotFound/>}
                    />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Router
