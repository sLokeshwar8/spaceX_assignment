import React, {useState} from 'react';
import * as actionCreator from '../../Store/actions';
import { connect } from 'react-redux';
import classes from './filter.module.css';

const Filter = (props) => {
    const [isSuccessful, setSuccessful] = useState();
    const [launchYear, setLaunchYear] = useState();

    function filterHandler(e,isSuccess, year){
        if(isSuccess) {
            setSuccessful(isSuccess)
        }
        if(year) {
            setLaunchYear(year)
        }

        props.getIsSuccess(isSuccess,year)
        if(document.getElementById(e.target.id).style.backgroundColor == "rgb(181, 255, 108)") {
            document.getElementById(e.target.id).style.background = "#d0eab6";
        }else {
            document.getElementById(e.target.id).style.backgroundColor = "rgb(181, 255, 108)";
        }
    }    
    

    return (
        <div className={classes.filterContainer}>
            <h5>Launch Year</h5>
            <div className={classes.launchYear}>
                <button id="2006" onClick={(e) =>filterHandler(e,isSuccessful,2006)} className={classes.btn}>2006</button>
                <button id="2007" onClick={(e) =>filterHandler(e,isSuccessful,2007)} className={classes.btn}>2007</button>
                <button id="2008" onClick={(e) =>filterHandler(e,isSuccessful,2008)} className={classes.btn}>2008</button>
                <button id="2009" onClick={(e) =>filterHandler(e,isSuccessful,2009)} className={classes.btn}>2009</button>
                <button id="2010" onClick={(e) =>filterHandler(e,isSuccessful,2010)} className={classes.btn}>2010</button>
                <button id="2011" onClick={(e) =>filterHandler(e,isSuccessful,2011)} className={classes.btn}>2011</button>
                <button id="2012" onClick={(e) =>filterHandler(e,isSuccessful,2012)} className={classes.btn}>2012</button>
                <button id="2013" onClick={(e) =>filterHandler(e,isSuccessful,2013)} className={classes.btn}>2013</button>
                <button id="2014" onClick={(e) =>filterHandler(e,isSuccessful,2014)} className={classes.btn}>2014</button>
                <button id="2015" onClick={(e) =>filterHandler(e,isSuccessful,2015)} className={classes.btn}>2015</button>
                <button id="2016" onClick={(e) =>filterHandler(e,isSuccessful,2016)} className={classes.btn}>2016</button>
                <button id="2017" onClick={(e) =>filterHandler(e,isSuccessful,2017)} className={classes.btn}>2017</button>
                <button id="2018" onClick={(e) =>filterHandler(e,isSuccessful,2018)} className={classes.btn}>2018</button>
                <button id="2019" onClick={(e) =>filterHandler(e,isSuccessful,2019)} className={classes.btn}>2019</button>
                <button id="2020" onClick={(e) =>filterHandler(e,isSuccessful,2020)} className={classes.btn}>2020</button>
            </div>
            <h5>Successful Launching</h5>
            <div className={classes.launchYear}>
                <button id="trueLaunch" onClick={(e) =>filterHandler(e,true, launchYear)} className={classes.btn}>True</button>
                <button id="falseLaunch" onClick={(e) =>filterHandler(e,false, launchYear)} className={classes.btn}>False</button>
            </div>

            <h5>Successful Landing</h5>
            <div className={classes.launchYear}>
                <button className={classes.btn}>True</button>
                <button className={classes.btn}>False</button>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        getIsSuccess: (isSuccess,year) => dispatch(actionCreator.launchSuccess(isSuccess,year)),
    }
}

export default connect(null, mapDispatchToProps)(Filter);
