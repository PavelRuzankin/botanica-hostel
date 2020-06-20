import React from "react"
import Header from "../components/Header";

class Layout extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="content">
                <Header/>
                {this.props.children}
                <div style={{height: "2000px"}}></div>
            </div>
        )
    }
}

export default Layout