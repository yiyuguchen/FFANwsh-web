let Footer = React.createClass({
	getInitialState: function () {
		return {
            classNames:{
                footerClass:'footer'
            }
        };
	},
    back: function() {
        if(this.props.backFn){
            this.props.backFn();
        }
        if(this.props.backLink){
            window.location="#"+this.props.backLink;
        }
    },
    goNextPage: function(){
        if(this.props.goNextFn){
            this.props.goNextFn();
        }
        if(this.props.nextLink){
    	   window.location="#"+this.props.nextLink;
        }
    },
    render: function() {
        return (
                <footer className={this.state.classNames.footerClass}>
                    <div className="footer-content">
                        此处为footer部分
                    </div>
                </footer>
            );
    }
});


export default Footer;





