// backTure nextTure backLink nextLink backClassName nextClassName titleText
// backTure 如存在返回按钮，则定义，无需赋值
// nextTure 如存在下一页按钮，则定义，无需赋值
// backLink 如存在返回按钮，定义路径    "/"
// nextLink 如存在下一页按钮，定义路径   "/acount"
// nextClassName 如存在返回按钮，定义图标class,无默认值,必须定义
// titleText 如存在文字，定义title文字

let MyTitle = React.createClass({
	getInitialState: function () {
		return {
            classNames:{
                title:"cyb_title",
                leftBtn:"left_btn",
                titleText:"title_txt",
                rightText:"right_btn"
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
            <div className={this.state.classNames.title + " " +this.props.titleClass}>
                {this.props.backTure ? (<span className={this.state.classNames.leftBtn} onClick={this.back}><i> </i></span>) : null}                      
                <h1 className={this.state.classNames.titleText} > {this.props.titleText}</h1>
                {this.props.nextTure ? (<span className={this.state.classNames.rightText +" "+this.props.nextClassName} onClick={this.goNextPage}><i></i>{this.props.nextLinkText}</span>) : null }
            </div>
            );
    }
});


export default MyTitle;





