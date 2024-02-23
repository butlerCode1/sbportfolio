import { Route, Routes } from "react-router-dom";
import Aboutp from "../../modules/About/index copy";
import Blogp from "../../modules/Blog";
import Homep from "../../modules/Home";
import Portfoliop from "../../modules/Portfolio";

const AppRoutes = () => {

        return (
                <Routes>
                        <Route path="/" element = {Homep }/>
                        <Route path="about" element = {Aboutp }/>
                        <Route path="blog" element = {Blogp }/>
                        <Route path="portfolio" element = {Portfoliop }/>


                </Routes>
        );

};

export default AppRoutes;