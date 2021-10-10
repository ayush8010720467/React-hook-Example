import React, { useEffect, useState,useRef} from 'react';
function Example(props){
    // useEffect(()=>{
    //     console.log('use Effect 2');
    // },[])
    var refSpan= useRef();
    
    useEffect(()=>{
        console.log('use Effect 1');
        console.log(refSpan.current)
        refSpan.current.click()
        return ()=>{
            console.log('unmounting the functional component')
        }
    })
    const [count, changeState] = useState(0);
    useEffect(()=>{
        console.log('the variable updated')
    },[count]);
    
    
    return (<>
    <span ref={refSpan} onClick={()=>{console.log('functional comp clicked');changeState(1)}}>Example</span>
        
    </>)
}
class ExampleClass extends React.Component{
    constructor(props){
        super(props);
        console.log('mounting started');
        this.state = {}
        this.refForClassExpample = React.createRef();
    }
    componentDidMount(){
        console.log('Class Component Mounted');
        console.log(this.refForClassExpample.current)
        this.refForClassExpample.current.click();
    }
    componentDidUpdate(){
        console.log('class component updated');
    }
    componentWillUnmount(){
        console.log('Unmounting');
    }
    render(){
        console.log('rendering started')
        return <><span onClick={()=>{console.log('my class comp clicked');this.setState({1:1})}} ref={ this.refForClassExpample}>Class Example</span></>
    }
}
export {Example,ExampleClass};