import React,{Component} from 'react';
const getCss=(obj)=>{
    let arr = []
    for(let k in obj){
        if(k ==="true"){
            arr.push(obj[k]);
        }
    }
    return arr.join(' ');
}
export default class Radio extends Component{
    constructor(props){
        super(props);
    }
    onSelect(v){
        this.props.onSelect(v);
    }
    render(){
        let {children,text,value,onSelect,selected,disabled,secText} = this.props;
        let cls = getCss({
            [selected]:'x-radiolist-radio-selected',
            [disabled]:'x-radiolist-radio-disabled'
        });
        if(typeof text ==='undefined'){
            text = children;
        }
        let className = cls + ' x-radio';
        return (
            <div className={className} onClick={this.onSelect.bind(this,value)}>
                <div className="x-radio-text">{text}</div>
                {secText && <div className="x-radio-text-sec">{secText}</div>}
                {/* <div className="x-radio-value">{value}</div> */}
            </div>
        );
    }
}