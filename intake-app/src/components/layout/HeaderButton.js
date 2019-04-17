import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import Referrals from './Referrals'

class HeaderButton extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false
        };
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    render() {
        return (
            <div ref={ref => this.el = ref}>
                <button className="btn btn-primary" onClick={() => this.setState({ isPaneOpen: true })}>Referrals</button>
                <SlidingPane className='some-custom-class'
                                overlayClassName='some-custom-overlay-class'
                                isOpen={ this.state.isPaneOpen }
                                title='Referrals Information'
                                subtitle='Check all that apply'
                                width='800px'
                                onRequestClose={ () => {
                                // triggered on "<" on left top click or on outside click
                                this.setState({ isPaneOpen: false });
                } }>
                <div>
                    <Referrals />
                </div>
            </SlidingPane>
            </div>
        );
    }
}

//render(<HeaderButton />, document.getElementById('root'));

export default HeaderButton

