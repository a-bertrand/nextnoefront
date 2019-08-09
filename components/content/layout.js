export default class About  extends React.Component  {
    render(){
        let imgUrl = this.props.img_url
        let divStyle = {
            backgroundImage: 'url('+imgUrl+')',
            '-webkit-background-size': 'cover',
            '-moz-background-size': 'cover',
            '-o-background-size': 'cover',
            'background-position': 'center',
            'background-size': 'cover'                                                                                                                                       
        };
        return(
            <section>
                <div className="white-header-area">
                </div>
                <div style={divStyle}>
                    <div className="header-presentation">
                        <div className="overlay has-text-centered">
                            <h2>{this.props.title}</h2>
                            <hr/>
                            <p>{this.props.subtitle}</p>
                        </div>
                    </div>
                </div>

                { this.props.children }
            </section>
        )
    }
}