import React from "react";
import ReactDOM from "react-dom";
import WEB3 from "./web3";
import {abi,address} from './HealthCare';


export default class Patient extends React.Component {

  componentDidMount() {
   this.loadBlockchainData();
  }

 async loadBlockchainData(){
    const accounts = await WEB3.eth.getAccounts()
    this.setState({ account: accounts[1] })
     const healthcare = new WEB3.eth.Contract(abi, address)
    this.setState({ healthcare })
  
    const recordCount = await healthcare.methods.recordCount().call()
    this.setState({ recordCount })
    for (let i = 1; i <= recordCount; i++) {
      const records = await healthcare.methods._records(i).call()
      this.setState({
        _records: [...this.state._records, records]
      })
    
    }}
  

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      account: '',
      recordCount : 0,
      _records : [],
      recID: "",
      pname: "",
      dDate: "",
      hname: "",
      price: "",
      message: "",
      amountInsured: ""
    };
  }

  async handleClick(event) {
    event.preventDefault();
    await this.state.healthcare.methods.newRecord(
      this.state.recID,
      this.state.pname,
      this.state.dDate,
      this.state.hname,
      this.state.price,
      this.state.amountInsured).send({from:this.state.account,gas: 2100000});
    this.setState({ message: "Record created" });

  }

  render() {
    return (
      <div className="container container-fluid login-conatiner">
        <div className="col-md-4">
          <div className="login-form">
            <form method="post" autoComplete="off">
              <h2 className="text-center">New Record</h2>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.recID}
                  onChange={event =>
                    this.setState({ recID: event.target.value })
                  }
                  className="form-control"
                  placeholder="ID"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.pname}
                  onChange={event =>
                    this.setState({ pname: event.target.value })
                  }
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="Date"
                  value={this.state.dDate}
                  onChange={event =>
                    this.setState({ dDate: event.target.value })
                  }
                  className="form-control"
                  placeholder="Date"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.hname}
                  onChange={event =>
                    this.setState({ hname: event.target.value })
                  }
                  className="form-control"
                  placeholder="Hospital Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.amountInsured}
                  onChange={event =>
                    this.setState({ amountInsured: event.target.value })
                  }
                  className="form-control"
                  placeholder="Amount Insured"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.price}
                  onChange={event =>
                    this.setState({ price: event.target.value })
                  }
                  className="form-control"
                  placeholder="Price"
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  onClick={this.handleClick}
                >
                  Submit
                </button>
              </div>
              {this.state.message && (
                <p className="alert alert-danger fade in">
                  {this.state.message}
                </p>
              )}
              <div className="clearfix" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}