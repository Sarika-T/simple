import { ArrowDown } from "../../assests/icon";
import { orders } from "../../MockData/mackData";
import TickPlacementBars from "../Common/BarGraph";
import SimpleBarChart from "../Common/BarGraph";
import { Feedback, Options, SecondBox } from "../Common/Common";
import BasicRowEditingGrid from "../Common/Orders";


const TotalOP = () =>{
    const data = orders
    return(
        <div className="bottom-page-content-first-tab">
            {data.map((order, index) => (
                <div className="bottom-page-content-first-box" key={index}>
                    <div className="bottom-page-content-first-box-icon">
                        {order?.icon}
                    </div>
                    <div className="bottom-page-content-first-box-icon-text">
                        {order?.title}
                    </div>
                    <div className="bottom-page-content-first-box-down">
                        <span className="bottom-page-content-first-box-down-value">
                            {order?.value}
                        </span>
                        <span className="bottom-page-content-first-box-down-percentage">
                            {order?.profIcon}{order?.percentage}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function Bottom() {
    return(
        <div className="bottom">
            <div className="bottom-page">
                <div className="bottom-page-title">Dashboard</div>
                <div className="bottom-page-content">
                    <div className="bottom-page-content-first">
                        <TotalOP />
                    </div>
                    <div className="bottom-page-content-second">
                        <SecondBox />
                    </div>
                    <div className="bottom-page-content-third">
                        <div className="bottom-page-content-third-text">
                           Activity
                           <div className="bottom-page-content-third-text-side">
                                Weekly <ArrowDown />
                            </div>
                        </div>
                        <TickPlacementBars />
                    </div>
                    <div className="bottom-page-content-third">
                        <Options />
                    </div>
                    <div className="bottom-page-content-five">
                        <div className="bottom-page-content-five-tab">
                            <div className="bottom-page-content-five-tab-title">Recent Orders</div>
                            <div className="bottom-page-content-five-tab-list">
                                <BasicRowEditingGrid />
                            </div>
                        </div>
                    </div>
                    <div className="bottom-page-content-five">
                        <div className="bottom-page-content-five-box">
                            <div className="bottom-page-content-five-box-title">Customer's Feedback</div>
                            <div className="bottom-page-content-five-box-bottom">
                                <Feedback />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}