import React from "react"
import SliderSwitch from "../UI/SliderSwitch"

function capitalize(str){
    const latter = str.split("")[0].toUpperCase() 
    str = latter + str.slice(1)
    return str
    
}

class Slider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            titleCls: ["slider__title"],
            current: 0,
            direction: "",
        }
    }

    switchRight = () => {
        if(this.props.content.length !== this.state.current + 1){
            this.setState({direction: "left"})
            setTimeout(() => this.setState({current: this.state.current+1, direction: ""}), 1000)
        }else{
            this.setState({direction: "left"})
            setTimeout(() => this.setState({current: 0, direction: ""}), 1000)
        }
        
    }

    switchLeft = () => {
        if(0 !== this.state.current){
            this.setState({direction: "right"})
            setTimeout(() => this.setState({current: this.state.current-1, direction: ""}), 1000)
        }else{
            this.setState({direction: "right"})
            setTimeout(() => this.setState({current: this.props.content.length-1, direction: ""}), 1000)
        }
    }
    switch(dir){
        if(!dir) return 
        const method = "switch"+capitalize(dir)
        this[method]()
    }

    componentDidMount(){
        setTimeout(() => {
            const titleCls = this.state.titleCls.concat()
            titleCls.push("slider__title_show")
            this.setState({titleCls})
        }, 1000)

        setInterval(this.switchRight, 7000);
    }
    render(){
        const {current} = this.state
        const {content} = this.props

        const prev = current - 1 < 0 ? content.length - 1 : current - 1
        const next = current + 1 > content.length - 1 ? 0 : current + 1
        return  (
            <section className="slider" onClick={(event) => this.switch(event.target.dataset.direction)}>
                <SliderSwitch direction={"left"} >
                    <span className="material-icons">
                        navigate_before
                    </span>
                </SliderSwitch>

                <div style={{backgroundImage: `url("${content[prev].img}")`}} className={`slider__image slider__image_prev ${this.state.direction}`}>
                    <div className={this.state.titleCls.join(" ")}>{content[prev].title}</div>
                </div>

                <div style={{backgroundImage: `url("${content[current].img}")`}} className={`slider__image ${this.state.direction}`}>
                    <div className={this.state.titleCls.join(" ")}>{content[current].title}</div>
                </div>

                <div style={{backgroundImage: `url("${content[next].img}")`}} className={`slider__image slider__image_next ${this.state.direction}`}>
                    <div className={this.state.titleCls.join(" ")}>{content[next].title}</div>
                </div>

                <SliderSwitch direction={"right"}>
                    <span className="material-icons">
                        navigate_next
                    </span>
                </SliderSwitch>

            </section>
        )
    }
}

export default Slider