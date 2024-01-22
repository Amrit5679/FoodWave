import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        //create state
        this.state= {
            count : 0,
        };
    }
    componentDidMount() {
        
    }
    render() {
        return(
            <div>
                <h1>Profile class component</h1>
                <h2>Count: {count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count :1 ,
                    })
                }}>SetButton</button>
            </div>
        );
    }
}

export default Profile;