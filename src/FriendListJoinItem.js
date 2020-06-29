import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Fluffs/assets/css/demos/group.css';
import "./DialogDelete.css"


class FriendListJoinItem extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            show: "none"
        };
    }

    onShow() {
        this.setState({
            show: "block",
        });
    }

    onClose() {
        this.setState({
            show: "none"
        });
    }

    onOkhandler() {
        this.props.callback.delete(this.props.no);
        this.setState({
            show: "none"
        })
    }

    render() {
        return (
            <div>
                <li>
                    <div className="media">
                        <img src={this.props.img} alt="" className="img-responsive img-circle" style={{ marginTop: "10px" }} />
                        <div className="media_body">
                            <Link to={`/gitbook/my/${this.props.id}`}><p><h4><b>{this.props.nickname}</b></h4></p></Link>
                            <h5>{this.props.name} ({this.props.id})</h5>
                            <div className="btn_group">
                                <Link className="kafe-btn kafe-btn-mint" to={`/gitbook/my/${this.props.id}/repository`} style={{fontFamily:"'Nanum Gothic', sans-serif"}}>Repository</Link>
                                {/* <a className="kafe-btn kafe-btn-mint">Repository</a> */}
                                <a className="kafe-btn kafe-btn-mint btn-danger" onClick={this.onShow.bind(this)}>삭제</a>
                            </div>
                                <div className="modal" style={{ display: this.state.show }}>
                                    <div className="modal-content" style={{ margin: "15% auto", height: "100px", width: "300px" }}>
                                        <div className="modal-header" style={{
                                            backgroundColor: "#0FC19E"
                                        }}>
                                            <span className="close" onClick={this.onClose.bind(this)}>&times;</span>
                                            <h6 style={{ wordBreak: "break-all",color:"#fff",fontFamily:"'Jeju Gothic', sans-serif",fontSize:"13px" }}>친구를 정말 삭제하시겠습니까?</h6>
                                        </div>
                                        <div className="modal-footer">

                                            <button
                                                style={{ width: "70px", margin: "10px auto" }}
                                                type="submit"
                                                className="kafe-btn kafe-btn-mint-small" name="button-ok"
                                                onClick={this.onOkhandler.bind(this)}
                                            >
                                                ok
                                            </button>

                                        </div>
                                    </div>
                                </div>	
                        </div>
                    </div>
                </li>
            </div>
        );
    }

}

export default FriendListJoinItem;