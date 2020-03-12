import React, { Component } from 'react';
import st from './style.module.css';

class Inputs extends Component {
    render(){
        return(

        <div className={st.group}>      
            <input  className={st.input}
                    name={this.props.name}
                    value={this.props.value}
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                    type={this.props.type} 
                    required />
            <span className={st.bar}></span>
            <label className={st.label}>{this.props.labelname}</label>
        </div>
        )
    }
}

export default Inputs;