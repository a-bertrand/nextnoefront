import React from 'react'

/*
interface State {
    current_img_id : number;
    slider_max : number;
    upper_modificator : number;
    down_modificator : number;
    total_modificator : number;
    PREVIOUS : string;
    NEXT : string;
    
}
interface Props {
    img_array : Array<string>;
}

interface IMG_ARRAY {
    src : string;
    array_text : any;
}
*/
export default class Rotation extends React.Component {
    constructor(props ) {
        super(props);
        this.state = {
            current_img_id : 0,
            slider_max : this.props.img_array.length,
            upper_modificator : 1,
            down_modificator : this.props.img_array.length - 1,
            total_modificator : this.props.img_array.length,
            PREVIOUS : "PREVIOUS",
            NEXT : "NEXT"
        }
    }
    componentDidMount() {
        setInterval(this.slideinslider.bind(this,this.state.NEXT), 5000); 
    }
    slideinslider(action ) {
        const state = this.state;
        let  current_img_id     = state.current_img_id;
        if(action === state.NEXT) {
            current_img_id = current_img_id + 1;
        } else if (action === state.PREVIOUS) {
            current_img_id = current_img_id - 1;
        }
        if (current_img_id === this.state.slider_max ) {
            current_img_id = 0;
        } else if (current_img_id < 0) {
            current_img_id = this.state.slider_max - 1;
        } 
        let upper_modificator = Math.abs(1 - current_img_id);
        let down_modificator = state.total_modificator - upper_modificator;
        this.setState({
            current_img_id : current_img_id,
            down_modificator : down_modificator,
            upper_modificator : upper_modificator
        })
    }
    render() {
        const state = this.state;
        let imgUrl = this.props.img_array[state.current_img_id].src  
        let divStyle = {
            color: 'white',
            width:'auto',
            height: '100vh',
            backgroundImage: 'url(' + imgUrl + ')',
            '-webkit-background-size': 'cover',
            '-moz-background-size': 'cover',
            '-o-background-size': 'cover',
            'background-position': 'center',
            'background-size': 'cover'
        };
        return (
            <div className="is-fullheight" style={divStyle}>
                <div className="carousel-navigation">
                    <div className="carousel-nav-left">
                        <i onClick={this.slideinslider.bind(this,state.PREVIOUS)} className="fa fa-chevron-left btn-fa"></i>
                    </div>
                    <div className="carousel-nav-right">
                        <i onClick={this.slideinslider.bind(this,state.NEXT)} className="fa fa-chevron-right btn-fa"></i>
                    </div>
                </div>
            </div>
        )
    }
}