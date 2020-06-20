import React from "react"
import Layout from "./hoc/Layout";
import Slider from "./components/Slider";

class App extends React.Component {
    state = {
        sliderContent: [
            {
                img: "https://img1.fonwall.ru/o/pi/tiger-walking-grass-big-cats.jpeg?route=mid&h=750",
                title: "Lorem ipsum dolor sit amet consectetur"
            },
            {
                img: "https://img1.fonwall.ru/o/dw/forest-snow-nature-evening.jpeg?dpr=2&h=750&route=mid",
                title: "Lorem ipsum dolor sit amet consectetur ipsum dolor Lorem"
            },
            {
                img: "https://img1.fonwall.ru/o/rx/gory-sklon-doroga.jpg?route=mid&h=750",
                title: "Lorem ipsum dolor Lorem, ipsum. sit amet consectetur"
            }
        ]
    }
    
    render(){
        return (
            <Layout>
                <Slider content={this.state.sliderContent}/>
            </Layout>
        )
    }
}

export default App