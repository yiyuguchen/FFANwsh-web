let Header = React.createClass({
	getInitialState: function () {
		return {
            classNames:{
                headerClass:'header'
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
                <header className={this.state.classNames.headerClass}>
                    <div className="header-content">
                        此处为header部分
                    </div>
                </header>
            );
    }
});


export default Header;





