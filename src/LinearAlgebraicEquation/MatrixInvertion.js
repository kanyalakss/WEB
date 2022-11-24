import { Button } from "react-bootstrap";
import {React,Component} from "react";
import Form from "react-bootstrap/Form";
import '../App.css';

class MatrixInvertion extends Component {
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }
    getValue() {

        var A = [];
        var B = [];
        var C = [];
        var ansstring='';
        var size = document.getElementById("inputmatrix").value;
        size = Number(size);
        var x =[];
        var tmp,k;
        var count=1;
        for(var i=0;i<size;i++){
            A.push([]);
            C.push([]);
                for(var j=0;j<size;j++){
                    A[i].push(document.getElementById('mat'+i+j).value);
                }
                C[i].push(document.getElementById('matans'+i+'0').value);
            }
        for(var i=0;i<size;i++){
            B.push([]);
            for(var j=0;j<size;j++){
                B[i].push('0');
            }
            if(i===i){B[i][i] = '1';}
        }
        for(var i=0;i<size;i++)
        {
             for(var j=i+1;j<size;j++)
             {
                  tmp = A[j][i]/A[i][i];
                  for(var k=0;k<size;k++)
                  {
                    A[j][k] = A[j][k] - tmp*A[i][k];
                    B[j][k]-=tmp*B[i][k];
                  }
             }
        }
        console.log(A);
        for(var i=size-1;i>=0;i--)
        {
             for(var j=i-1;j>=0;j--)
             {
                  tmp = A[j][i]/A[i][i];
                  for(var k=size-1;k>=0;k--)
                  {
                    A[j][k] = A[j][k] - tmp*A[i][k];
                    B[j][k]-=tmp*B[i][k];
                  }
             }
        }
        for(var i=0;i<size;i++)
        {
            for(var j=0;j<size;j++){
                B[i][j]/=A[i][i];
            }
            A[i][i]/=A[i][i];
        }
        console.log(B);
        for(var i=0;i<size;i++){
            var sum=0;
            for(var j=0;j<size;j++){
                sum+=B[i][j]*C[j][0];
            }
            console.log(sum);
            ansstring+="<h4>x"+count+" = "+sum+"</h4>";
            count++;
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
            matstring+=' | <input type="number" id="matans'+i+'0" placeholder="B'+i+'" class="input-matrix"/>';
            matstring+="<br>";
        }
        document.getElementById("matrixinput").innerHTML=matstring;
    }
    render() {
        return (
            <div>
                <h1 class="header"><p/>Matrix Invertion method 🥨</h1>
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
export default MatrixInvertion;