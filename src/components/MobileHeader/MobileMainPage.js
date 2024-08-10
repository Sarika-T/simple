import MobileFooter from "./MobileFooter";
import MobileHeader from "./MobileHeader";
import './Mobile.scss';
import Bottom from "../RightMenu/Bottom";


export default function MobileMainPage() {
    return(
        <div className="mobile-mainpage">
            <div className="mobile-mainpage-content">
                <div className="mobile-mainpage-content-top">
                    <MobileHeader />
                </div>
                <div className="mobile-mainpage-content-middle">
                    <Bottom />
                </div>
                <div className="mobile-mainpage-content-down">
                    <MobileFooter />
                </div>
            </div>
        </div>
    )
}


