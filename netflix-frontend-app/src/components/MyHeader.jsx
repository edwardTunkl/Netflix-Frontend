import { Component } from 'react';
import {Dropdown, Row, Col} from 'react-bootstrap'
import '../style.css'

class MyHeader extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-in mt-3">
                <h4 className="text-light">TV SHOWS</h4>
                <Dropdown className="ml-3">
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Genres
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Comedy</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Drama</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>               
            </div>
        );
    }
}

export default MyHeader;