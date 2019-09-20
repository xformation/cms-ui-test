import * as React from 'react';
// import { graphql, QueryProps, MutationFunc, compose } from 'react-apollo';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import SubTabPage from './SubTabPage';


export default class TabPage extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            activeTab: 0
        };
        this.toggleTab = this.toggleTab.bind(this);
    }

    toggleTab(tabNo: any){
        this.setState({
            activeTab: tabNo
        });
    }

    render() {
        const { activeTab } = this.state;
        return (
            <section className="tab-container">
                <Nav tabs className="pl-3 pl-3 mb-4 mt-4">
                    <NavItem className="cursor-pointer">
                        <NavLink className={`${activeTab === 0 ? "active":""}`} onClick={()=>{this.toggleTab(0)}}>
                            Test
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`${activeTab === 1 ? "active":""}`} onClick={()=>{this.toggleTab(1)}}>
                            Test 2
                        </NavLink>
                    </NavItem>
                    <NavItem className="cursor-pointer">
                        <NavLink className={`${activeTab === 2 ? "active":""}`} onClick={()=>{this.toggleTab(2)}}>
                            Test 3
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} className="">
                    <TabPane tabId={0}>
                        <SubTabPage />
                    </TabPane>
                    <TabPane tabId={1}>
                        Test 2
                    </TabPane>
                    <TabPane tabId={2}>
                        Test 3
                    </TabPane>
                </TabContent>
            </section>
        );
    }
}