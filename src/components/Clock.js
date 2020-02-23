import React from 'react';

export class Clock extends React.Component {
    state = {
        second: 0
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.setState({ second: this.state.second + 1 });
        }, 1000)    
    }

    stopTimer() {
        clearInterval(this.timer);
        this.setState({ second: 0 });
    }

    convertTime() {
        const d = Number(this.state.second);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h < 10 ? `0${h}` : h > 0 ? h : "00";
        var mDisplay = m < 10 ? `0${m}` : m > 0 ? m : "00";
        var sDisplay = s < 10 ? `0${s}` : s > 0 ? s : "00";
        return `${hDisplay}:${mDisplay}:${sDisplay}`; 
    }

    render() {
        return (
            <div>
                {this.convertTime()}
            </div>
        )
    }
}