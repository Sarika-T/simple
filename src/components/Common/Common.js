import { IncIcon, ArrowSide } from "../../assests/icon";
import { Gauge } from '@mui/x-charts/Gauge';
import './Common.scss';
import { feedBackData, menusData } from "../../MockData/mackData";
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const BasicRating = () => {
  const [value, setValue] = React.useState(2);
  setValue()

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}

export const SecondBox = () => {
    return(
        <div className="bottom-page-content-second-tab">
            <div className="bottom-page-content-second-tab-left">
                <div className="bottom-page-content-second-tab-left-text">Net Profit</div>
                <div className="bottom-page-content-second-tab-left-middle">$6759.25</div>
                <div className="bottom-page-content-second-tab-left-down"><IncIcon />3%</div>
            </div>
            <div className="bottom-page-content-second-tab-right">
                <Gauge
                value={70}
                startAngle={0}
                endAngle={360}
                innerRadius="80%"
                outerRadius="100%"
                text="70%"
                
                // ...
                />
                <span className="bottom-page-content-second-tab-right-text">*The values here has been rounded off</span>

            </div>
        </div>
    )
}


export const Options = () => {
    const data= menusData;
    return(
        data.map((menu,index)=>(
        <div className="bottom-page-content-fourth-tab" key={index}>
            <div className="bottom-page-content-fourth-tab-icons" style={{ backgroundColor: index === 0 ? 'lightcoral' : index === 1 ? 'lightseagreen' : 'lightgreen' }}>{menu?.icon}</div>
            <div className="bottom-page-content-fourth-tab-name">{menu?.title}</div>
            <div className="bottom-page-content-fourth-tab-side"><ArrowSide /></div>
        </div>
        ))
    )

}

export const Feedback = () => {
    const data = feedBackData;
    return(
        data.map((feed,index)=>( 
            <div className="bottom-page-content-five-box-bottom-content" key={index}>
                <div className="bottom-page-content-five-box-bottom-title">
                    <div className="bottom-page-content-five-box-bottom-title-icon">
                        <img src={feed?.image} alt="Icon" />
                    </div>
                    <div className="bottom-page-content-five-box-bottom-title-name">{feed?.name}</div>
                </div>
                <div className="bottom-page-content-five-box-bottom-rating"><Rating name="read-only" value={feed?.rating} readOnly /></div>
                <div className="bottom-page-content-five-box-bottom-para">{feed?.description}</div>
            </div>
        ))
    )
}