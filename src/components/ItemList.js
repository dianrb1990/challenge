import React, { Fragment } from "react";
import { connect } from "react-redux";
import Item from './Item';
import { withRouter, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import actions from "../redux/actions/itemsActions";

class ItemList extends React.Component{
    constructor(props) {
        super(props);
        this.state = null;
      }

    componentDidMount(){
        if(this.props.itemsList.length === 0){
            this.props.dispatch(actions.fillList())
        
        }
        //this.props.getItemsList();
    }

    render(){
        return (
            <Fragment>
                <div className="container mx-auto border-black-800">
                    <div className="flex flex-col ">
                        <SearchBar/>
                        <div className="flex flex-wrap container mx-auto">
                            {this.props.itemsList.map(item =>
                                <Link key={item.id} to={'/details/' + item.id} className="m-3">  
                                    <Item  id={item.id} name={item.title}/>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </Fragment>
            
        )
    };
}

const mapStateToProps = state => ({
    itemsList: state.reducerItems.itemsList,
    currentItem: state.reducerItems.currentItem
})

const mapDispatchToProps = dispatch => ({
      dispatch
})

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ItemList)
);