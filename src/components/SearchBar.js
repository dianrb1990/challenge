import React, { Fragment } from "react";
import { connect } from "react-redux";
import actions from "../redux/actions/itemsActions";



class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
        };
      }

      handleTextFieldChange = ev => {
        const text = ev.target.value;

        if(!text || 0 === text.length){
            
            this.setState({ name: "" });
        }
        
        this.setState({ name: text });       
        
        this.props.dispatch(actions.findItem(text));

      };

    render() {
        return (
            <Fragment>
                <div className="container mx-auto border-black-800">
                    <div className="flex flex-col ">
                        <form className="w-full mt-5 mb-5">
                            <div className="w-full">
                                <div className="flex items-center">
                                    <input className="border border-2 border-purple-800 w-10/12" 
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.handleTextFieldChange}/>
                                    <button className="flex-shrink-0 bg-purple-800 hover:bg-purple-700 text-sm text-white py-1 px-2 rounded w-2/12" 
                                        type="button" 
                                        onClick={() => this.handleTextFieldChange()}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Fragment>
            
        );
    }
}

const mapStateToProps = state => ({
    itemsList: state.reducerItems.itemsList
})

const mapDispatchToProps = dispatch => ({
      dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

