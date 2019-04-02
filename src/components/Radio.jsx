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
        let {children,value,onSelect,selected,disabled} = this.props;
        let cls = getCss({
            [selected]:'x-radiolist-radio-selected',
            [disabled]:'x-radiolist-radio-disabled'
        });
        let className = cls + ' x-radio';
        return (
            <div className={className}>
                <div className="x-radio-text" onClick={this.onSelect.bind(this,value)}>{children}</div>
                <div className="x-radio-value" onClick={this.onSelect.bind(this,value)}>{value}</div>
            </div>
        );
    }
}