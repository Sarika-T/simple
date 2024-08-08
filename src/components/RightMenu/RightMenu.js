import Header from "../Header/Header";
import Bottom from "./Bottom";
import './RightMenu.scss';


export default function RightMenu() {
    return(
        <div className="rightmenu">
            <div className="rightmenu-page">
                <div className="rightmenu-page-header">
                    <Header />
                </div>
                <div className="rightmenu-page-bottom">
                    <Bottom />
                </div>
            </div>
        </div>
    )
}