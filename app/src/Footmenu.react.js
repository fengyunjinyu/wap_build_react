import React , {Component} from 'react';

class Footmenu extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var listnodes = this.props.data.map(function(listitem ){
            return (
                <li key={listitem.name}>
                    <div className={listitem.classname}></div>
                    <p>{listitem['name']} </p>
                </li>
            );
        });
        return (
            <div className="ft_main_menu">
                <ul>
                   {listnodes}
                </ul>
            </div>
        );
    }
}
module.exports=Footmenu;