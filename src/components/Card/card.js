import React from 'react';
import classes from './card.module.css';
import { connect } from 'react-redux';

const Cards = (props) => {
    let cards
    if(props.list) {
        cards = (
            props.list.map((item,index) => {
                return <div className={classes.card} key={index+"_pro"}>
                            {/* <div className={classes.cardImg} style={{backgroundImage: "url(" + item.links.mission_patch_small + ")"}}></div> */}
                            <img className={classes.cardImg} src={item.links.mission_patch_small} alt="patch" />
                            <div>{item.mission_name}</div>
                            <p>{item.mission_id}</p>
                            <p><b>Launch Year:</b> {item.launch_year}</p>
                            <p><b>Successful Lauch:</b> {item.launch_success+""}</p>
                            <p><b>Successful Landing:</b> {item.launch_landing+""}</p>
                        </div>
            })
        )
    }
    return [cards]
    
}

const mapStateToProps = state => {
    return {
        list: state.project_list
    }
}
export default connect(mapStateToProps)(Cards)