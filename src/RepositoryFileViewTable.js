import React, { Component } from "react";
import './RepositoryPage.css';
import Highlight from "react-highlight.js";


class RepositoryFileViewTable extends Component {
      onClicklist2(e){ 
        let a = e.target.id.split("/");
        a.splice(a.length-1,1);
        this.props.clicklist.newList(a.join("/"))
      }
     
    render() {
      
        let contents = "";

        let type = this.props.srcName.split(".")[1];

        if(type === "conf" || type === "sh" || type === "c" || type === "cpp" || type === "css"
            || type === "coffee" || type === "diff" || type === "html" || type === "xml" || type === "http"
            || type === "json" || type === "java" || type === "rb" || type === "ini" || type === "js"
            || type === "php" || type === "py" || type === "sql" || type === "md" || type === "NGINX" || type === "m") {
                type = "normal";
                contents = this.props.contents;
        } else {
            contents = this.props.contents.split('\n');
        }
        console.log(type);
        
        return (
            <div className='RepositoryFileViewTable'>
                <div className='FileViewHeader'>
                <i id={this.props.callPath} 
                     onClick={this.onClicklist2.bind(this)} 
                     className="fas fa-undo-alt"
                    style={{cursor:"pointer",float:"left",paddingLeft:"10px"}}
                ></i>
                    {this.props.srcName}
                </div>
                <div className='FileViewContents' style={{backgroundColor:"#fff"}}>
                    <table className='FileViewTable'>
                        {type==="normal" ? 
                            <Highlight className="repo-view">
                                {contents}
                            </Highlight >
                            : <pre style={{border:"none"}}>
                            {contents.map((list, i) =>
                                <tr>
                                    <td className='lineNumber' style={{ userSelect: "none" }}>{i + 1}</td>
                                    <td className='lineNumberContent'>{list === '' ? list.replace('', ' ') : list}</td>
                                </tr>
                            )}
                            </pre>
                        }
                    </table>
                </div>
            </div>
        );
    }
}

export default RepositoryFileViewTable;