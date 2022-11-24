import { Button } from "react-bootstrap";
import {React,Component} from "react";
import Form from "react-bootstrap/Form";
import '../App.css';

class Linear extends Component {
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }

    getValue() {

        var sumX=0, sumX2=0, sumY=0, sumXY=0, a, b;
        var x = [];
        var y = [];
        var size = document.getElementById("inputsize").value;
        var inputx = document.getElementById("inputX").value;
        size = Number(size);
        var showequation='';
        for(var i=0;i<size;i++){
            x.push([]);
            y.push([]);
            x[i].push(document.getElementById('x'+i).value);
            x[i] = Number(x[i]);
            y[i].push(document.getElementById('fx'+i).value);
            y[i] = Number(y[i]);
        }
        console.log(x,y);
        for(var i=0;i<size;i++)
        {
         sumX += x[i];
         sumX2 = sumX2 + x[i]*x[i];
         sumY += y[i];
         sumXY = sumXY + x[i]*y[i];
        }
        console.log(sumX,sumX2,sumY,sumXY);
        b = (size*sumXY-sumX*sumY)/(size*sumX2-sumX*sumX);
        a = (sumY - b*sumX)/size;
        console.log(a,b);
        showequation+='<h4>Equation</h4>';
        showequation+='f(x) = '+a+' + '+b+'x<br>';
        var result = b*inputx + a;
        showequation+='value of x('+inputx+') is '+result;
        
        document.getElementById("showequation").innerHTML=showequation;
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
                <h1 class="header"><p/>Linear Regression 🦜</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <div>
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
                <div id="showequation"></div>
            </div>
        );
    }
}
export default Linear;