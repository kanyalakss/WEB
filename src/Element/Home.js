import {React,Component} from "react";

class Home extends Component {
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }
    render() {
        return (
            <div>
                <h1 style={{margin:"20%",color:"#f26bc0"}}><p/> 🌱🦥 Welcome to our website 👩‍💻💐</h1>
            </div>
        );
    }
}
export default Home;