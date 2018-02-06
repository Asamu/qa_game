import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import './App.css';

class IndexPage extends Component {
    render () {
        const questionHistory = this.props.questionHistory;
        let count = 1;
        return (
            <div className="table-container">
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th></th>
                            <th>熱身</th>
                            <th colSpan="3">一般</th>
                            <th colSpan="2">困難</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">經典</th>
                            <td><Link to={`/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/audio/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <th></th>
                        </tr>
                        <tr>
                            <th scope="row">國片</th>
                            <td><Link to={`/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                        </tr>
                        <tr>
                            <th scope="row">動畫</th>
                            <td><Link to={`/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        );
    }
}

export default IndexPage;
