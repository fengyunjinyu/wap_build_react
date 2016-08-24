import React , {Component} from 'react';
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router';

class Footmenu extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var listnodes = this.props.data.map(function(listitem ){
            return (
                <li key={listitem.name}>
                    <Link to={listitem.path}>
                        <div className={listitem.classname}></div>
                        <p>{listitem['name']} </p>
                    </Link>
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