import React from "react"
import { Transition } from 'react-transition-group';
import Nav from "./Nav"

class Header extends React.Component {
    constructor(children){
        super(children)
        this.state = {
            scrolled: false
        }
    }

    setScroll = () => this.setState({scrolled: !!window.scrollY})

    componentDidMount(){
        this.setScroll()
        window.addEventListener("scroll", this.setScroll)
    }
    render(){
        return (
            <Transition in={this.state.scrolled} timeout={10}>
                {
                    state => {
                        return (
                            <header className={`header ${state}`}>
                                <div className="container">
                                    <div className="header__wrapper">
                                        <div className="header__logo">botanika</div>
                                        <Nav/>
                                    </div>
                                </div>
                            </header>
                        )
                    }
                }
            </Transition>
        )
    }
}

export default Header