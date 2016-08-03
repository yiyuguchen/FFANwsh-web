// // 1、在getInitialState里：通过store.getState()获取数据进行初始的渲染。
// // 2、在componentDidMount里：监听store的状态变化，当状态变化时，触发onChange回调。
import '../../css/main.css';
import 'antd/dist/antd.css'  
import Header from "../components/header";
import Footer from "../components/footer";
import MyTitle from '../components/title.jsx';

let Login = React.createClass({
    getInitialState: function(){
        return {
        	newTitle:'标aaaa'
        }
    },
    componentDidMount: function(){
        
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
    	let inputBox= this.refs.todo;
    	
    		inputBox.value= '';

    	this.setState({
    		newTitle:'标题aaaa'
    	})
    },
    render: function(){
        return (
            <section className={'main-section'}>
                <input className={'hidden'} ref="todo" type="text" placeholder="输入to项"  onChange={this.handleAdd}/>
                <button onClick={this.handleClean}>题</button>
				<MyTitle  titleText={this.state.newTitle} />
                试试
            </section>            
            )
    }
})


let rootElement = document.body;
React.render(
    <div>
        <Header/>
        <Login/>
        <Footer/>
    </div>
    ,rootElement)


