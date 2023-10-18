import React, { Component } from "react";
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { withNamespaces } from 'react-i18next';
import { connect } from "react-redux";
import {
    changeLayout,
    changeLayoutWidth,
    changeSidebarTheme,
    changeSidebarType,
    changePreloader
} from "../../store/actions";

class DataTable extends Component {
    

    render() {
        // Add your DataTable rendering logic here
        return (
            <div>
                {/* DataTable JSX */}
            </div>
        );
    }
}

class SidebarContent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.initMenu();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            if (this.props.type !== prevProps.type) {
                this.initMenu();
            }
        }
    }

    initMenu() {
        new MetisMenu("#side-menu");

        var matchingMenuItem = null;
        var ul = document.getElementById("side-menu");
        var items = ul.getElementsByTagName("a");
        for (var i = 0; i < items.length; ++i) {
            if (this.props.location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }

    activateParentDropdown = (item) => {
        item.classList.add("active");
        const parent = item.parentElement;

        if (parent) {
            parent.classList.add("mm-active");
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add("mm-show");

                const parent3 = parent2.parentElement;

                if (parent3) {
                    parent3.classList.add("mm-active"); // li
                    parent3.childNodes[0].classList.add("mm-active"); //a
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add("mm-active");
                    }
                }
            }
            return false;
        }
        return false;
    };

    render() {
        return (
            <React.Fragment>
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title">{this.props.t('Menu')}</li>

                        <li>
                            <Link to="#" className="waves-effect">
                                <i className="ri-dashboard-line"></i>
                                <span className="badge rounded-pill bg-success float-end"></span>
                                <span className="ms-1">{this.props.t('Dashboard')}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/settings/export" className="waves-effect">
                            <i className="ri-settings-2-line"></i>
                                <span className="ms-1">Settings</span>
                            </Link>
                        </li>
                        
                        {/* Add more menu items as needed */}
                        
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = (state) => {
    return { ...state.Layout };
};

export default withRouter(
    connect(mapStatetoProps, {
        changeLayout,
        changeSidebarTheme,
        changeSidebarType,
        changeLayoutWidth,
        changePreloader
    })(withNamespaces()(SidebarContent))
);
