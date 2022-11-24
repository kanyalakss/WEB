import { Button } from "react-bootstrap";
import {React,Component} from "react";
import Form from "react-bootstrap/Form";
import '../App.css';

class GaussSedial extends Component {
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }
    getValue() {

        function cloneArray(A) {
            var B = []
            for (let i = 0; i < A.length; i++) {
                B[i] = A[i].slice()
            }
            return B
        }

        var A = [];
        var B = [];
        var ansstring='';
        var count=1;
        const math = require("mathjs"); 
        var size = document.getElementById("inputmatrix").value;
        for(var i=0;i<size;i++){
            A.push([]);
            B.push([]);
            for(var j=0;j<size;j++){
                A[i].push(document.getElementById('mat'+i+j).value);
            }
            B[i].push(document.getElementById('matans'+i+"0").value);
        }
        var detA = math.det(A);
        console.log(A,B);
        for(var i=0;i<size;i++){
            var tmp =cloneArray(A);
            for(var j=0;j<size;j++){
                tmp[j][i] = B[j][0];
            }
            var dettmp = math.det(tmp);
            var ans =  dettmp/detA;
            ansstring+="<h4>x"+count+" = "+ans+"</h4>";
            count++;    
        }
        document.getElementById("ansstring").innerHTML=ansstring;

    }
    creatematrix=()=>{
        var size = document.getElementById("inputmatrix").value;
        var matstring='';
        var xstring='';
        for(var i=0;i<size;i++){
            for(var j=0;j<size;j++){
                matstring+="<input id='mat"+i+j+"' type='number' step='1' placeholder='A"+i+j+"' class='input-matrix'/>";
            }
            matstring+=' | <input type="number" id="matans'+i+'0" placeholder="B'+i+'" class="input-matrix"/>';
            matstring+="<br>";
        }
        for(var i=0;i<size;i++){
            xstring+="<input id='x"+i+"' type='number' step='1' placeholder='x"+i+"' class='input-number2'/>";
            xstring+="<br>";
        }
        document.getElementById("matrixinput").innerHTML=matstring;
        document.getElementById("xinput").innerHTML=xstring;
    }
    render() {
        return (
            <div>
                <h1 class="header"><p/>Gauss-Sedial Iteration 🥓</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <div style={{margin:"0px 0px 25px 0px"}}>
                            <h4>Enter Number</h4><p/>
                            <input id="inputmatrix" type="number" step="1" placeholder="size of matrix" class="input-sizematrix" onChange={this.creatematrix}/>
                            <div id="matrixinput"></div>
                            <div id="xinput"></div>
                            <input id="inputError" type="number" step="1" placeholder="Error" class="input-error"/>
                        </div>
                        <Button onClick={this.getValue}>
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
                <div id="ansstring"/>
            </div>
        );
    }
}
export default GaussSedial;