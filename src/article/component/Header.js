import React, {Component} from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

const Menu = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon
            /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="my page"/>
        <MenuItem primaryText="log out"/>
    </IconMenu>
);

export default class Header extends Component {
    menuOpen(){
        //TODO:
    }

    render() {
        return (
            <AppBar
                title="Praha"
                onLeftIconButtonTouchTap={this.menuOpen}
                iconElementRight={
                    <Menu/>
                }
            />
        );
    }
}

