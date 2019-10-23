import React, { useEffect } from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";
import "./App.css";

function App({fetchData, ajaxData}) {

  useEffect(() => {
    const timer = setTimeout(() => fetchData(), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header>
        <div className="logo">
          Xero<span>Source</span>
        </div>
      </header>
      <div className="nav-btn">Menu</div>
      <div className="container">
        <div className="sidebar">
          <nav className="dfsf">
            <figure>
              <img src="https://avatars1.githubusercontent.com/u/22154654?s=460&v=4" 
              className='jkk'/>
              <figcaption className="dssdsdsr">Balogun Akeem</figcaption>
            </figure>
          </nav>

          <nav>
            <ul>
              <li className="active">
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#"> Documents</a>
              </li>
              <li>
                <a href="#">Activity</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="main-content">
      

   <nav className="navbar navbar-expand-sm bg-light navbar-light kovic mt-5 mb-3 pr-0 pl-0">
  <ul className="navbar-nav dsdkdlf">
    <li className="nav-item ">
      <a className="nav-link" href="#">Company</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Users</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Roles</a>
    </li>
    <li className="nav-item">
      <a className="nav-link " href="#">Department</a>
    </li>
    <li className="nav-item">
      <a className="nav-link " href="#">Units</a>
    </li>
    <li className="nav-item active">
      <a className="nav-link " href="#"><b>Document className</b></a>
    </li>
    <li className="nav-item">
      <a className="nav-link " href="#">Workflows</a>
    </li>
  </ul>
</nav>     

<div className="clearfix mt-4"> 
  <p className="float-left docs"> Document className</p>
  <button className="float-right mr-3 kashogi "> New Class </button>
</div>

{ajaxData.length ? ajaxData.map((eachData, index)=> (
  <div className="card" key={index}>
    <div className="card-body">
      <div className="clearfix">
      <small className="card-title kpi font-weight-bold  float-left">{eachData.title} </small>
      <small className = 'float-right dzx'> &hellip;</small>
      </div>
      <p className="card-text fvc mt-2">{eachData.amount}  Documents   </p>
    </div>
  </div>
)) : <div className="spinner-border text-warning ml-5 mt-5"></div>}

          
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    ajaxData: state.ajaxData
  };
};

const mapDispachToProps = dispatch => {
  return {
    fetchData: () => dispatch({ type: "FETCH_DATA"})
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);