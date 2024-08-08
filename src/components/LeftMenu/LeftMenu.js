import { BagIcon, HomeIcon, MenuIcon, NoteIcon, Signoff, ToggleIcon, TrendIcon } from "../../assests/icon";
import TabsMenu from "../Common/TabsMenu";
import './LeftMenu.scss';




export default function LeftMenu() {
    return (
        <div className="leftmenu">
            <div className="leftmenu-page">
                <div className="leftmenu-page-top"><MenuIcon /></div>
                <div className="leftmenu-page-bottom">
                    <TabsMenu />
                    <div className="leftmenu-page-bottom-tag">
                        <Signoff />
                    </div>
                </div>
            </div>
        </div>
    )
}


