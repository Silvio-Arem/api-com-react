import {
    Routes as WrapperRoutes,
    Route,
    BrowserRouter,
} from "react-router-dom";
import PsicologoCreate from "./Pages/Psicologo/create";
import PsicologoList from "./Pages/Psicologo/list";
import Login from "./Pages/Login/index";

export default function Routes() {
    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path="/cadastro" element={<PsicologoCreate />} />
                <Route path="/lista" element={<PsicologoList />} />
                <Route path="/login" element={<Login />} />
            </WrapperRoutes>
        </BrowserRouter>
    )
}