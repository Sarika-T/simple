import SearchUser from '../searchuser/SearchUser';
import './Header.scss';
import { MessageIcon, NotificationIcon, ProfileIcon, SettingsIcon } from '../../assests/icon';



export default function Header() {
    return (
        <div className="header">
            <div className="header-page">
                <div className="header-page-left">
                    <SearchUser />  
                </div>
                <div className="header-page-right">
                    <MessageIcon />
                    <SettingsIcon />
                    <NotificationIcon />
                    <ProfileIcon /> 
                </div>
            </div>
        </div>
    )
}