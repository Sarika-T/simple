
import LeftMenu from "../LeftMenu/LeftMenu";
import RightMenu from "../RightMenu/RightMenu";
import './MainPage.scss';
import '../../assests/view.scss';




export default function MainPage() {
    return(
        <div className="mainpage">
            <div className="mainpage-content">
                <div className="mainpage-content-left">
                    <LeftMenu />
                </div>
                <div className="mainpage-content-right">
                    <RightMenu />
                </div>
            </div>
        </div>
    )
}