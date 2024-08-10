import { MessageIcon, NotificationIcon, ProfileIcon, SettingsIcon } from "../../assests/icon";



export default function MobileFooter() {
    return(
        <div className="mobilefooter">
            <div className="mobilefooter-page">
                <MessageIcon />
                <SettingsIcon />
                <NotificationIcon />
                <ProfileIcon />
            </div>
        </div>
    )
}