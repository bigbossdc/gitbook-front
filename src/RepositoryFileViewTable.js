import React, { Component } from "react";
import './RepositoryPage.css';



class RepositoryFileViewTable extends Component {

 
    render() {
        return(
            <div className ='RepositoryFileViewTable'>
                <div className = 'FileViewHeader'>
                    src
                </div>

                <div className ='FileViewContents'>

                <table className= 'FileViewTable'>
                
                <tr>
                    <td className='lineNumber' style={{userSelect:"none"}}>1</td>
                    <td className = 'lineNumberContent'>121212</td>
                </tr>

                <tr>
                    <td className='lineNumber' style={{userSelect:"none"}}>2</td>
                    <td className = 'lineNumberContent'>121212</td>
                </tr>

                

                <tr>
                    <td className='lineNumber' style={{userSelect:"none"}}>3</td>
                    <td className = 'lineNumberContent'>asasasa</td>
                </tr>

                <tr>
                    <td className='lineNumber' style={{userSelect:"none"}}>4</td>
                    <td className = 'lineNumberContent'>asdasdassdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasddasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasddasd</td>
                </tr>

                <tr>
                    <td className='lineNumber' style={{userSelect:"none"}}>5</td>
                    <td className = 'lineNumberContent'>asdasdassdasdasdasdazzz</td>
                </tr>


                <tr>
                    <td className='lineNumber' style={{userSelect:"none"}}>6</td>
                    <td className = 'lineNumberContent'>asdasdassdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasddasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasddddddddddddddddasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasddasd</td>
                </tr>

                <tr>
                    <td className='lineNumber' style={{userSelect:"none"}}>7</td>
                    <td className = 'lineNumberContent'>asdasdassdasdasdasdazzzsdasdasdasdasdasdasdasddasd</td>
                </tr>

              
                <tr>
                    <td className='lineNumber' style={{userSelect:"none"}}>8</td>
                    <td className = 'lineNumberContent'>a11111111</td>
                </tr>

                <tr>
                    <td className='lineNumber' style={{userSelect:"none"}}>9</td>
                    <td className = 'lineNumberContent'>azzzz</td>
                </tr>

                </table>
                
                </div>

           </div>
        );
    }
}

export default RepositoryFileViewTable;