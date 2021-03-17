import React, {Component} from 'react';
import FooterOne from '../../components/common/footers/footer-one';
import HeaderTwo from './Header1';



class LayoutTwo extends Component {

    render() {
        return (
            <div>
                <HeaderTwo logoName={'logo.png'}/>
                {this.props.children}
                

                {/* <ThemeSettings /> */}

            </div>
        );
    }
}

export default LayoutTwo;
