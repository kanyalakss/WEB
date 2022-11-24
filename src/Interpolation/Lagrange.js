import { Button } from "react-bootstrap";
import {React,Component} from "react";
import Form from "react-bootstrap/Form";
import '../App.css';

class Lagrange extends Component {
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }

    getValue() {
        
        var x = [];
        var y = [];
        var tmp,xp,yp=0;
        var ansstring ='';
        var size = document.getElementById("inputsize").value;
        var xp = document.getElementById("inputX").value;
        size = Number(size);
        for(var i=0;i<size;i++){
            x.push([]);
            y.push([]);
            x[i].push(document.getElementById('x'+i).value);
            y[i].push(document.getElementById('fx'+i).value);
        }
        console.log(x,y);
        for(var i=0;i<size;i++)
        {
             tmp=1;
             for(var j=0;j<size;j++)
             {
                  if(i!==j)
                  {
                       tmp = tmp* (xp - x[j])/(x[i] - x[j]);
                  }
             }
             yp = yp + tmp * y[i];
        }
        ansstring+="<h4>value of x("+xp+") is "+yp+"</h4>";
        document.getElementById("ansstring").innerHTML=ansstring;
    }

    createtable=()=>{
        var size = document.getElementById("inputsize").value;
        var tablestring='';
        for(var i=0;i<size;i++){
            tablestring+="point "+i+" : <input id='x"+i+"' type='number' step='1' placeholder='x"+i+"' class='input-matrix'/>";
            tablestring+="<input id='fx"+i+"' type='number' step='1' placeholder='fx"+i+"' class='input-matrix'/>";
            tablestring+="<br>";
        }
        document.getElementById("tableinput").innerHTML=tablestring;
    }

    render() {
        return (
            <div>
                <h1 class="header"><p/>Lagrange 🥎</h1>
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
                <div id="ansstring"></div>
            </div>
        );
    }
}
export default Lagrange;