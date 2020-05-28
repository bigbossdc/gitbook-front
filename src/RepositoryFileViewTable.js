import React, { Component } from "react";
import './RepositoryPage.css';

class RepositoryFileViewTable extends Component {
      onClicklist2(e){ 
        let a = e.target.id.split("/");
        a.splice(a.length-1,1);
        this.props.clicklist.newList(a.join("/"))
      }

    render() {
        let contents = this.props.contents.split('\n');
        return (
            <div className='RepositoryFileViewTable'>
                <div className='FileViewHeader'>
                <i id={this.props.callPath} 
                     onClick={this.onClicklist2.bind(this)} 
                     className="fas fa-undo-alt"
                    style={{cursor:"pointer",float:"left",marginLeft:"10px",marginTop:"4px"}}
                ></i>
                    {this.props.srcName}
                </div>
                <div className='FileViewContents'>
                    <table className='FileViewTable'>
                  <pre style={{border:"none"}}>
                        {contents.map((list, i) =>
                   
                                <tr>
                                <td className='lineNumber' style={{ userSelect: "none" }}>{i + 1}</td>
                                <td className='lineNumberContent'>{list === '' ? list.replace('', ' ') : list}</td>
                            </tr>
                        )}
                        </pre>
                    </table>
                </div>
            </div>
        );
    }
}
export default RepositoryFileViewTable;