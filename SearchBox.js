import React from "react";
class SearchBox extends React.Component{
    state= {term: ""};


formSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.term);
}
    render(){
    return(
        <div className="ui segment">
            <form className = "ui form" onSubmit ={this.formSubmit}> 
                <input 
             
                onChange = {(e) => 
                    this.setState({
                        term: e.target.value})
                }
                    />
            </form>
        </div>
    )
    }
}
export default SearchBox;
