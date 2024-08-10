import { LeftIcon } from "../../assests/icon";
import TemporaryDrawer from "../Common/Drawer";
import SearchUser from "../searchuser/SearchUser";



export default function MobileHeader() {
    return(
        <div className="mobile-header">
            <div className="mobile-header-page">
                <div className="mobile-header-page-left"><TemporaryDrawer /></div>
                <div className="mobile-header-page-right"><SearchUser /> </div>
            </div>
        </div>
    )
}