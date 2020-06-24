import React, { Component } from "react";




class RepositoryTable extends Component {
  
  onClicklist(e){
    console.log("ahhhh : " + e.target.id)
    this.props.clicklist.newList(e.target.id)
  }

  onClicklist2(e){ 
    let a = e.target.id.split("/");
    a.splice(a.length-1,1);
    this.props.clicklist.newList(a.join("/"))
  }
  

  render() {
        return(
            <div id="RepositoryTable">
                
                <table className="table table-hover" style={{tableLayout:"fixed"}}>
                        <thead>
                          <tr>
                            <th>File</th>
                            <th>Commit Message</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                        {(this.props.callPath != '') ?
                           <tr>
                            <td><a style={{cursor:"pointer"}} key={20000} id={this.props.callPath}  ><i id={this.props.callPath} onClick={this.onClicklist2.bind(this)} className="fas fa-undo-alt"></i></a></td>
                            <td></td>
                            <td></td>
                          </tr>: ''
                          }
                              {
                               Object.keys(this.props.gitlist && this.props.gitlist.contents).map((key) => 
                        
                               <tr style={{width:"100%"}}>
                                 <td style={{width:"35%",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}  >
                                  { (this.props.gitlist.contents[key].type=='folder') ? <i className="far fa-folder"/> : <i className="far fa-file-alt"/>}
                                      <a style={{cursor:"pointer"}} id={this.props.gitlist.contents[key].path} key={key} onClick={this.onClicklist.bind(this)}> {this.props.gitlist.contents[key].path.split('/').pop()}</a></td>
                                      <td style={{width:"45%",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}><a> {this.props.gitlist.contents[key].commit}</a></td>
                                      <td style={{width:"20%"}}>{this.props.gitlist.contents[key].date}</td>
                              </tr>
            
                               )}

                        
                        </tbody>
                      </table>
           </div>
        );
    }
   
}

export default RepositoryTable;