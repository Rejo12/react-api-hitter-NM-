import React from 'react';
import axios from 'axios';

class ApiHitter extends React.Component{

  state={urlToSearch:'',responseData:[],viewMode:''}

  async handleClick(){
    console.log(this.state.urlToSearch);
    try{
      var response = await axios.get(this.state.urlToSearch);
      if(response.data != undefined){
        if(response.data.length > 0 && response.data.data == undefined){
          this.setState({responseData:response.data})
        }
        else if(response.data.data.length > 0) {
            this.setState({responseData:response.data.data})
        }
      }
    }
    catch(error){
      console.log(error);
      this.setState({responseData:error})
    }
    this.setState({viewMode:'string'})
  }

  render(){
    // console.log(this.state.urlToSearch);
    return(
      <div className="container">
      <br/>
      <br/>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8">
        <input type="text" placeholder="enter the api url" id="apiUrl" onChange={(event)=>this.setState({urlToSearch:event.target.value})}
        value={this.state.urlToSearch} style={{'width':'80%'}}/>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <button type="primary" className="btn-primary" style={{'width':'25%','cursor':'pointer'}} onClick={()=>this.handleClick()}>Search</button>
        </div>
      </div>
      <br/>
      <br/>
      <div className="row" >


        <div className="col-lg-9 col-md-9 col-sm-9" style={{'border':'inset','minHeight':'200px','maxHeight':'600px','overflowY': 'auto'}}>
        {(this.state.responseData.length > 0 && this.state.viewMode == 'json')&&
          this.state.responseData.map((item)=>
              Object.keys(item).map((value)=>
            <p key={item.id+item[value]}>{value}:{JSON.stringify(item[value])}</p>
          )

          )

          }
          {(this.state.viewMode == 'string')&&
          JSON.stringify(this.state.responseData)

          }
            </div>

              <div className="col-lg-1 col-md-1 col-sm-1">
              </div>

              <div className="col-lg-2 col-md-2 col-sm-2">
              {(this.state.viewMode == 'string')&&
              <button type="button" className="btn btn-warning" onClick={()=>{this.setState({viewMode:'json'})}}>Show data in JSON format</button>
              }
              {(this.state.viewMode == 'json')&&
              <button type="button" className="btn btn-warning" onClick={()=>{this.setState({viewMode:'string'})}}>Show data in string format</button>
              }
              </div>




      </div>
      <br/>
      <br/>
    </div>
    )
  }
}

export default ApiHitter;
