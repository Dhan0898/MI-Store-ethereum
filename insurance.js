import React from 'react';
import ReactDOM from "react-dom";
import WEB3 from "./web3";
import Patient from "./patient";
import Hadmin from "./hadmin";
import {abi,address} from './HealthCare';




 export default class Insurance extends React.Component{

  componentDidMount(){
     this.loadBlockchainData();
     
  };
  
constructor(props) {
    super(props);
    
   this.state = {
     account: '',
      recordCount : 0,
     recarray : [],
      names : [],
      dates : [],
      hnames : [],
      prices : [],
      amounts : [],
    signs : []};
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
      const SIGNS = await healthcare.methods.signArr(i).call()
      this.setState({signs: [...this.state.signs, SIGNS] }) 
    }
  }

  
  createTable = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < this.state.recordCount; i++) {
      let children = []
      if(this.state.signs[i]==true){
      children.push(<td>{this.state.recarray[i]}</td>)
      children.push(<td key={this.state.names[i]}>{this.state.names[i]}</td>)
      children.push(<td>{this.state.dates[i]}</td>)
      children.push(<td>{this.state.hnames[i]}</td>)
      children.push(<td>{this.state.prices[i]}</td>)
      children.push(<td>{this.state.amounts[i]}</td>)
      table.push(<tr key={i}>{children}</tr>)
    }
  }
    return table
  }
   render(){
     return(
     <div className="col-md-12">
      <h1  className="text-center">Insurance Page</h1>
      <div className="c-list">
               <h2 className="text-center">Approved Records</h2>


               <table className="table table-bordered table-striped" >
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
     );
   }
 }
