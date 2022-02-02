import React from "react";
import RedditImageFetcher from 'reddit-image-fetcher';
import disableScroll from 'disable-scroll';

import Header from "../components/header"
// import ClickMeText from "../components/clickMeText"
import "./clicker.css"

class Clicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            meme: null,
            preloadMeme: null,
            loading: true,
            isDisabled: false,
            darkmode: false,
        }
    }

    async componentDidMount() {
        disableScroll[this.state.isDisabled ? 'off' : 'on']();
        await RedditImageFetcher.fetch({
            type: "meme"
        }).then(result => {
            this.setState({meme: result[0].image})
        })
        await this.setPreload()
        this.setState({loading: false})
    }   


    setPreloadToMeme = async() => {
        this.setState({meme: this.state.preloadMeme})
    }

    setPreload = async() => {
        await RedditImageFetcher.fetch({
            type: "meme"
        }).then(result => {
            this.setState({preloadMeme: result[0].image})
        })
    }

    handleClick = async() => {
        await this.setPreloadToMeme()
        await this.setPreload()
    }

    changeMode = () => {
        this.setState({darkmode: !this.state.darkmode})
    }

    render(){
        return(
            <div className="clickerMain">
                <Header/>
                <div className="clickCard">
                    {this.state.loading ? <i class="fas fa-spinner"></i> : <img onClick={this.handleClick} src={this.state.meme} style={{width: "350px", height: "350px"}} alt="meme"/>}<br/>
                    <br/>
                    <button onClick={this.handleClick}><i class="far fa-hand-point-right"></i></button>
                </div>
            </div>
        )
    }
}

export default Clicker;