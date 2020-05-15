import React, { Component } from "react";



class RepositoryTable extends Component {
    render() {
        return(
            <div id="RepositoryTable">
                
                <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>File</th>
                            <th>Commit Message</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><a><i className="fas fa-undo-alt"></i></a></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td><i className="far fa-folder"></i><a>mysite06</a></td>
                            <td><a>commit init</a></td>
                            <td>2020.05.15</td>
                          </tr>
                          <tr>
                            <td><i className="far fa-folder"></i><a>mysite06</a></td>
                            <td><a>commit init</a></td>
                            <td>2020.05.15</td>
                          </tr>
                          <tr>
                            <td><i className="far fa-file-alt"></i><a>mysite06</a></td>
                            <td><a>commit init</a></td>
                            <td>2020.05.15</td>
                          </tr>
                          <tr>
                            <td><i className="far fa-file-alt"></i><a>mysite06</a></td>
                            <td><a>commit init</a></td>
                            <td>2020.05.15</td>
                          </tr>
                        </tbody>
                      </table>
           </div>
        );
    }
}

export default RepositoryTable;