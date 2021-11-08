import React,{useState} from 'react'

export default function Noti(props) {
    const [inp1, setinp1] = useState();
    const [inp2, setinp2] = useState();
    const [inp3, setinp3] = useState();
    const [inp4, setinp4] = useState();
    const [inp5, setinp5] = useState();
    const [inp6, setinp6] = useState();
    const ifisnum=(ch)=>{
        if(ch>="0" && ch<="9"){
            return(0)
        }
        else{return 1}
    }
    return (props.trigger)?(
        <div className="popup">
            <h1>Type OTP</h1>
            <form className="otp-match" onSubmit={(e)=>{
                e.preventDefault();
                
                window.alert("You typed - " + inp1+inp2+inp3+inp4+inp5+inp6)
                
                setinp1();
                setinp2();
                setinp3();
                setinp4();
                setinp5();
                setinp6();
            }} >
            <input type="text" maxLength="1" className="inp" id='1' onChange={(e)=>{
                if (ifisnum(e.currentTarget.value)===0){
                setinp1(e.currentTarget.value);
                document.getElementById('2').focus()
                }else{
                    window.alert("Input not allowed!")
                    setinp1();
                    setinp2();
                    setinp3();
                    setinp4();
                    setinp5();
                    setinp6();
                }
            }} /> 
            <input type="text" maxLength="1" className="inp" id='2' onChange={(e)=>{
                if (ifisnum(e.currentTarget.value)===0){
                setinp2(e.currentTarget.value);
                document.getElementById('3').focus()
                }else{
                    window.alert("Input not allowed!")
                    setinp1();
                    setinp2();
                    setinp3();
                    setinp4();
                    setinp5();
                    setinp6();
                }
            }}/> 
            <input type="text" maxLength="1" className="inp" id='3' onChange={(e)=>{
                if (ifisnum(e.currentTarget.value)===0){
                setinp3(e.currentTarget.value);
                document.getElementById('4').focus()
                }else{
                    window.alert("Input not allowed!")
                    setinp1();
                    setinp2();
                    setinp3();
                    setinp4();
                    setinp5();
                    setinp6();
                }
            }}/> 
            <input type="text" maxLength="1" className="inp" id='4' onChange={(e)=>{
                if (ifisnum(e.currentTarget.value)===0){
                setinp4(e.currentTarget.value);
                document.getElementById('5').focus()
                }else{
                    window.alert("Input not allowed!")
                    setinp1();
                    setinp2();
                    setinp3();
                    setinp4();
                    setinp5();
                    setinp6();
                }
            }}/> 
            <input type="text" maxLength="1" className="inp" id='5' onChange={(e)=>{
                if (ifisnum(e.currentTarget.value)===0){
                setinp5(e.currentTarget.value);
                document.getElementById('6').focus()
                }
                else{
                    window.alert("Input not allowed!")
                    setinp1();
                    setinp2();
                    setinp3();
                    setinp4();
                    setinp5();
                    setinp6();
                }
            }}/> 
            <input type="text" maxLength="1" className="inp" id='6' onChange={(e)=>{
                if (ifisnum(e.currentTarget.value)===0){
                setinp6(e.currentTarget.value);
                }
                else{
                    window.alert("Input not allowed!")
                    setinp1();
                    setinp2();
                    setinp3();
                    setinp4();
                    setinp5();
                    setinp6();
                }
            }}/> <br/>
            <button className="btn" type="submit">submit</button>
            </form>
            <button className="close btn" onClick={()=>{
                props.settr(false)
            }}>close</button>
        </div>
    ):"";
}
