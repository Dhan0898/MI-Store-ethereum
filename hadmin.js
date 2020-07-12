import React from 'react';
import ReactDOM from "react-dom";
import WEB3 from "./web3";
import Patient from "./patient";
import {abi,address} from './HealthCare';

export default class Hadmin extends React.Component{

  componentDidMount(){
    this.loadBlockchainData();
  }
  
constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
   this.state = {
     account: '',
      recordCount : 0,
     recarray : [],
      names : [],
      dates : [],
      hnames : [],
      prices : [],
      amounts : []
    };
  }
  
  async loadBlockchainData(){
    const accounts = await WEB3.eth.getAccounts()
    this.setState({ account: accounts[0] })
       const healthcare = new WEB3.eth.Contract(abi, address)
    this.setState({ healthcare }) 


    const recordCount = await healthcare.methods.recordCount().call()
    this.setState({ recordCount })

    for (var i = 1; i <= recordCount; i++) {
      const reccarid = await healthcare.methods.recordsArr(i).call()
      this.setState({recarray: [...this.state.recarray, reccarid]})
      
      const NAMES = await healthcare.methods.nameArr(i).call()
      this.setState({names: [...this.state.names, NAMES]})

      const DATES = await healthcare.methods.dateArr(i).call()
      this.setState({dates: [...this.state.dates, DATES]})

      const PRICES = await healthcare.methods.priceArr(i).call()
      this.setState({prices: [...this.state.prices, PRICES]})

      const HNAMES = await healthcare.methods.hnameArr(i).call()
      this.setState({hnames: [...this.state.hnames, HNAMES]})

      const AMOUNTINSURED = await healthcare.methods.amountInsuredArr(i).call()
      this.setState({amounts: [...this.state.amounts, AMOUNTINSURED] })

    }
  }

  createTable = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < this.state.recordCount; i++) {
      let children = []
      children.push(<td>{this.state.recarray[i]}</td>)
      children.push(<td>{this.state.names[i]}</td>)
      children.push(<td>{this.state.dates[i]}</td>)
      children.push(<td>{this.state.hnames[i]}</td>)
      children.push(<td>{this.state.prices[i]}</td>)
      children.push(<td>{this.state.amounts[i]}</td>)
      table.push(<tr>{children}</tr>)
    }
    return table
  }

      
  async handleClick(event) {
    event.preventDefault();
   await this.state.healthcare.methods.signRecord(this.state.recID).send({from:this.state.account,gas: 2100000});
   this.setState({ message: "Record approved!" });
  }

   render(){
      return (
      <div className="container container-fluid login-conatiner">
        <div className="col-md-4">
          <h3 className="text-center">Hospital Admin</h3>
          <div className="login-form">
            <h4 className="text-center">Approve Medical Record</h4>


            <div className="form-group">
              <input
                type="number"
                value={this.state.recID}
                onChange={event => this.setState({ recID: event.target.value })}
                className="form-control"
                placeholder="ID"
              />
              <br />
            </div>
            </div>


            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                onClick={this.handleClick}
              >
                Approve
              </button>
            </div>

            {this.state.message && (
              <p className="alert alert-danger fade in">{this.state.message}</p>
            )}
          </div>
          


        <div className="col-md-6 col-md-offset-2">
          <div className="c-list">
            <h2 className="text-center">Records</h2>
            <table class="table table-bordered table-striped" >
                 <thead>
                   <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Date</th>
                     <th>Hospital Name</th>
                     <th>Price</th>
                     <th>AmountInsured</th>
                   </tr>
                 </thead>
                  <tbody>
                    {this.createTable()}
                  </tbody>
                </table>
          </div>
        </div>
      </div>
      
      
    );
   }
 }