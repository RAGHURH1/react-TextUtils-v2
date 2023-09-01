import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpCilck = ()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();//local varible
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }
    const handlelowCilck = ()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toLowerCase();//local varible
        setText(newText);
        props.showAlert("Converted to lower case","success");
    }
    const handleExtraSpace = ()=>{
        // console.log("Uppercase was clicked");
        let temp=text.split(/[ ]+/);
        setText(temp.join(" "));
        props.showAlert("Removed extra space","success");
    }
    const handleclearCilck = ()=>{
        // console.log("Uppercase was clicked");
        
        setText("");
        props.showAlert("cleared the text","success");
    }
    const handleOnChange = (event)=>{
        // console.log("OnChange was clicked");
        setText(event.target.value);//helps value which is text can be change in wed page with help of event 
    }
    // const countWords =(text)=>{
    //     let listWords = text.split(" ");
    //     let index=listWords.length;
    //     let count=0;
    //     while(index>0)
    //     {
    //         index--;
    //         if(listWords[index] === "")
    //             continue;
    //         count++;
    //     }
    //     return count;
    // }
    const [text,setText] = useState('');//this string in use state is default value
    //const[input,updates]
    //hooks helps class
    // text = "feef" error
    //setText("new text")//currect way to change text
    return (
    <>
        <div className='Container mx-3' style={{color : (props.mode === 'dark')?'white':'#042743'}}>
            <h1 className='mb-2'> {props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor : (props.mode === 'dark')?'#042743':'white', color : (props.mode === 'dark')?'white':'#042743' }}  id="MyBox" rows="8" ></textarea>
            </div>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpCilck}>Convert to upper case</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handlelowCilck}>Convert to lower case</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>remove extra space</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleclearCilck}>clear</button>
        </div>
        <div className='Container mx-3 my-2' style={{color : (props.mode === 'dark')?'white':'#042743'}} >
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words, {text.length} characers</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes to read</p>
            <h2>Preveiw</h2>
            <p>{(text.length > 0 )? text : "Nothing to preview!"}</p>
        </div>
    </>
    )
}
