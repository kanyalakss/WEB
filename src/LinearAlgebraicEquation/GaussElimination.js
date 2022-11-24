import { Button } from "react-bootstrap";
import {React,Component} from "react";
import Form from "react-bootstrap/Form";
import '../App.css';

class GaussElimination extends Component {
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }
    getValue() {

        var A = [];
        var ansstring='';
        var size = document.getElementById("inputmatrix").value;
        size = Number(size);
        var x =[];
        var tmp,k;
        for(var i=0;i<size;i++){
            A.push([]);
                for(var j=0;j<size+1;j++){
                    A[i].push(document.getElementById('mat'+i+j).value);
                }
            }

        for(var i=0;i<size+1;i++)
        {
             for(var j=i+1;j<size;j++)
             {
                  tmp = A[j][i]/A[i][i];
                  for(k=0;k<size+1;k++)
                  {
                         A[j][k] = A[j][k] - tmp*A[i][k];
                  }
             }
        }
        x[size-1] = A[size-1][size]/A[size-1][size-1];
        console.log(A);
        for(var i=size-2;i>=0;i--)
        {
             x[i] = A[i][size];
             for(j=i+1;j<size;j++)
             {
                     x[i] = x[i] - A[i][j]*x[j];
             }
             x[i] = x[i]/A[i][i];
        }
        for(var i=0;i<size;i++){
            ansstring+="<h4>x"+i+" = "+x[i]+"</h4>";
        }
        document.getElementById("ansstring").innerHTML=ansstring;

    }
    creatematrix=()=>{
        var size = document.getElementById("inputmatrix").value;
        size = Number(size);
        var matstring='';
        for(var i=0;i<size;i++){
            for(var j=0;j<size;j++){
                matstring+="<input id='mat"+i+j+"' type='number' step='1' placeholder='A"+i+j+"' class='input-matrix'/>";
            }
            matstring+=' | <input type="number" id="mat'+i+j+'" placeholder="B'+i+'" class="input-matrix"/>';
            matstring+="<br>";
        }
        document.getElementById("matrixinput").innerHTML=matstring;
    }
    render() {
        return (
            <div>
                <h1 class="header"><p/>Gauss-Elimination method 🎂</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <div style={{margin:"0px 0px 25px 0px"}}>
                            <h4>Enter Number</h4><p/>
                            <input id="inputmatrix" type="number" step="1" placeholder="size of matrix" class="input-sizematrix" onChange={this.creatematrix}/>
                            <div id="matrixinput"></div>
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
export default GaussElimination;