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
                            <th colSpan="2">一般</th>
                            <th colSpan="2">困難</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th rowSpan="3" scope="row">經典</th>
                            <td><Link to={`/classical/easy/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/classical/normal/audio/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/classical/normal/text/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/classical/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/classical/hard/img//${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                        </tr>
                        <tr>
                            <td><Link to={`/classical/easy/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/classical/normal/audio/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/classical/normal/text/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/classical/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/classical/hard/img//${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                        </tr>
                        <tr>
                            <td><Link to={`/classical/easy/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/classical/normal/audio/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/classical/normal/text/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/classical/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/classical/hard/img//${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                        </tr>

                        <tr>
                            <th rowSpan="3" scope="row">國片</th>
                            <td><Link to={`/native/easy/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/native/normal/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/native/normal/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/native/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/native/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                        </tr>
                        <tr>
                            <td><Link to={`/native/easy/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/native/normal/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/native/normal/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/native/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/native/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                        </tr>
                        <tr>
                            <td><Link to={`/native/easy/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/native/normal/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/native/normal/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/native/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/native/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                        </tr>

                        <tr>
                            <th rowSpan="4" scope="row">動畫</th>
                            <td><Link to={`/cartoon/easy/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/cartoon/normal/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/cartoon/normal/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/cartoon/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/cartoon/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                        </tr>
                        <tr>
                            <td><Link to={`/cartoon/easy/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/cartoon/normal/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/cartoon/normal/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/cartoon/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/cartoon/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                        </tr>
                        <tr>
                            <td><Link to={`/cartoon/easy/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/cartoon/normal/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/cartoon/normal/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/cartoon/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/cartoon/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                        </tr>
                        <tr>
                            <td><Link to={`/cartoon/easy/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/cartoon/normal/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/cartoon/normal/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/cartoon/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                            <td><Link to={`/cartoon/hard/img/${count}/`}><div className={ questionHistory.indexOf(count) > -1 ? 'used' : '' } >{count++}</div></Link></td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        );
    }
}

export default IndexPage;
