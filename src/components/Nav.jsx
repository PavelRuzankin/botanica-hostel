import React from "react"
import HeaderBtn from "../UI/HeaderBtn"



class Nav extends React.Component {
    state = {
        mounted: false,
        activeCoords: null,
        buttons: [
            {title: "о нас", active: true, id: 0},
            {title: "галерея", active: false, id: 1},
            {title: "номера", active: false, id: 2},
            {title: "забронировать", active: false, id: 3},
        ]
    }

    setActive(id, toggle){
        const buttons = this.state.buttons.concat()
            buttons[id].active = toggle
            this.setState({buttons})
    }

    removeAllActive(){
        this.state.buttons.forEach((_, i) => {
            this.setActive(i, false)
        })
    }

    activeHandler = (event) => {
        if(!event.target.dataset.id) return
        this.removeAllActive()
        const id = event.target.dataset.id

        this.setActive(id, true)
    }

    getIndicatePlace = () => {
        const activeBtn = this.state.buttons.find((el, index) => el.active)
        if(!activeBtn) return

        const el = document.querySelector(`.header__btn[data-id='${activeBtn.id}']`) // TODO
        const parentEl = el.closest(".header__nav")
         return {
            width: el.getBoundingClientRect().width,
            left: el.getBoundingClientRect().x - parentEl.getBoundingClientRect().x
         }
    }

    componentDidMount(){
        this.setState({mounted: true})
    }
    render(){
        return (
            <div onClick={this.activeHandler} className="header__nav">
                {
                    this.state.buttons.map((elem, i) => (
                        <HeaderBtn
                        key={elem.title}
                        title={elem.title}
                        id={i}
                        />
                    ))

                }
                {this.state.mounted ? <div style={this.getIndicatePlace()} className="header__indicate"></div> : null}
            </div>
        )
    }
}

export default Nav