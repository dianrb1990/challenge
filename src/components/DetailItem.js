import React, { Fragment } from "react";
import { connect } from "react-redux";
import Item from './Item';
import { withRouter, Link } from 'react-router-dom';
import actions from "../redux/actions/itemsActions";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';



class DetailItem extends React.Component {

    componentDidMount(){
        this.props.dispatch(actions.getCurrentItems(this.props.match.params.id))
   }

    componentWillReceiveProps(){
        this.props.dispatch(actions.getCurrentItems(this.props.match.params.id))
   }

    render() {
        return (
            <Fragment>
                <div className="container mx-auto border-black-800">

                    <Link to='/' className="text-grey-800 font-bold">{'<  ' + this.props.currentItem.title}</Link>

                    <div className='flex flex-wrap justify-center mb-5 w-full h-full'>
                        <img className="w-auto h-full" src={`https://media.giphy.com/media/${this.props.currentItem.id}/giphy.gif`} alt=""/>
                        
                    </div>

                    <Carousel slidesPerPage={4} arrows>
                        {this.props.itemsList.map(item =>
                            <Link key={item.id} to={'/details/' + item.id}  className="h-full">  
                                <div className="w-10/12 h-full rounded overflow-hidden shadow-lg relative" >
                                    <img className="w-full h-full" src={`https://media.giphy.com/media/${item.id}/giphy.gif`} alt=""/>
                                    <p className="absolute bottom-0 left-0 text-left text-white font-bold">
                                        {item.title}
                                    </p>
                                </div>
                            </Link>
                        )}
                    </Carousel>
                </div>
            </Fragment>
            
        );
    }
}

const mapStateToProps = state => ({
    itemsList: state.reducerItems.itemsList,
    currentItem: state.reducerItems.currentItem
})

const mapDispatchToProps = dispatch => ({
      dispatch      
})


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(DetailItem)
);

