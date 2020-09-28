import React, { Component } from 'react';
import CardHolder from '../../components/Cards_Holder/cards_holder';
import SideDrawer from '../Side_Drawer/sideDrawer';
import classes from './landing_page.module.css';
import * as actionCreator from '../../Store/actions';
import { connect } from 'react-redux';
import Card from '../../components/Card/card';

class LandingPage extends Component{
    componentDidMount() {
        this.props.getALLProjects()
    }
    render() {
        return (
            <div className={classes.grid}>
                <SideDrawer/>
                <CardHolder>
                    <Card />
                </CardHolder>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.project_list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getALLProjects: () => dispatch(actionCreator.allProjects()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);