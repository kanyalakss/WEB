import { Button } from "react-bootstrap";
import {React,Component} from "react";
import Form from "react-bootstrap/Form";
import '../App.css';

class Spline extends Component {
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }

    getValue() {
 
    }

    createtable=()=>{
        var size= document.getElementById("inputsize").value;
        size = Number(size);
        var tablestring='';
        for(var i=1;i<=size;i++){
            tablestring+="point "+i+" : <input id='x"+i+"' type='number' step='1' placeholder='x"+i+"' class='input-matrix'/>";
            tablestring+="<input id='fx"+i+"' type='number' step='1' placeholder='fx"+i+"' class='input-matrix'/>";
            tablestring+="<br>";
        }
        document.getElementById("tableinput").innerHTML=tablestring;
    }

    render() {
        return (
            <div>
                <h1 class="header"><p/>Spline 🤹🏽‍♂️</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <div style={{margin:"0px 0px 25px 0px"}}>
                            <h4>Enter Number</h4><p/>
                            <input id="inputsize" type="number" step="1" placeholder="data point" class="input-sizematrix" onChange={this.createtable}/>
                            <div id="tableinput"></div>
                            <input id="inputX" type="number" step="1" placeholder="Enter value of x" class="input-number"/>
                        </div>
                        <Button onClick={this.getValue}>
                            Submit
                        </Button>
                    </Form.Group>
                </Form>

            </div>
        );
    }
}
export default Spline;