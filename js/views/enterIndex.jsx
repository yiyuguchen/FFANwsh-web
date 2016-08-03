// 载入引用
import '../../css/main.css';
import 'antd/dist/antd.css'
import Header from "../components/header";
import Footer from "../components/footer";
import MyTitle from '../components/title.jsx';
import indexModel from '../model/indexModel';

let IndexEnter = React.createClass({
    getInitialState: function(){
        return {
        	newTitle:'标题abba'
        }
    },
    componentDidMount: function(){
        indexModel.init();
    },
    onChange: function(){
        
    },
    handleAdd: function(){
    	let inputBox= this.refs.todo;
    	let inputVal=inputBox.value.trim();

    	this.setState({
    		newTitle:inputVal
    	})
    	console.log(inputVal);

    },
    handleClean: function(){
    	// let inputBox= this.refs.todo;
    	
    	// 	inputBox.value= '';

    	// this.setState({
    	// 	newTitle:'标题aaaa'
    	// })

        window.location='login.html'
    },
    render: function(){
        return (
            <section className={'main-section'}>
                <input ref="todo" type="text" placeholder="输入to项"  onChange={this.handleAdd}/>
                <button onClick={this.handleClean}>恢复标题</button>
                <p className={'hidden'} >aaaaaa</p>
				<MyTitle   titleText={this.state.newTitle} />
            </section>        
            )
    }
})

let rootElement = document.body;
React.render(
  <div>
	  <Header/>
	  <IndexEnter/>
	  <Footer/>
  </div>,
  rootElement
)



