import React from 'react';
import axios from 'axios';

class ApiHitter extends React.Component{

  state={urlToSearch:'',responseData:[],viewMode:'',requestType:'get',requestBody:'',shouldRender:''}

shouldComponentUpdate(nextProps, nextState){
    // console.log(nextState.shouldRender);
    if(nextState.shouldRender == false){
      return false
    }
    else {
      return true
    }
  }

  async handleClick(){
      this.setState({shouldRender:true})
    try{
      if(this.state.requestType === 'get'){
        var response = await axios.get(this.state.urlToSearch);
      }
      else if(this.state.requestType === 'delete'){
        var response = await axios.delete(this.state.urlToSearch);
      }
      else if (this.state.requestType === 'post') {
        var response = await axios.post(this.state.urlToSearch,JSON.parse(this.state.requestBody))
      }
      else if (this.state.requestType === 'put') {
        var response = await axios.put(this.state.urlToSearch,JSON.parse(this.state.requestBody))
      }
      if(response != undefined){
        // console.log(response);
        this.setState({responseData:response.data,shouldRender:true})
      }
      /*if(response.data != undefined){
        if(response.data.length > 0 && response.data.data == undefined){
          this.setState({responseData:response.data})
        }
        else if(response.data.data.length > 0) {
            this.setState({responseData:response.data.data})
        }
      }*/
    }
    catch(error){
      // console.log(error);
      this.setState({responseData:error,shouldRender:true})
    }
    this.setState({viewMode:'string',shouldRender:true})
  }

  render(){
    var buttonDisable=true;
    if(this.state.urlToSearch != ""){
      buttonDisable=false;
    }
    var arr=[];

  if(this.state.responseData != undefined && this.state.viewMode == 'json'){
    if(this.state.responseData.length > 0){
      this.state.responseData.map((items)=>{
        Object.keys(items).map((itemKeys)=>{
          var obj={};
          obj[itemKeys]=items[itemKeys];
          arr.push(obj);
        })
      })
    }else{
    Object.keys(this.state.responseData).map((props)=>{

      if(typeof(this.state.responseData[props]) !== 'object'){
      var obj={};
      obj[props]=this.state.responseData[props];
      arr.push(obj);
      }
      else {
        if(this.state.responseData[props].length > 0){
          this.state.responseData[props].map((items)=>{
            Object.keys(items).map((itemKeys)=>{
              var obj={};
              obj[itemKeys]=items[itemKeys];
              arr.push(obj);
            })
          })
        }
      }

    })
  }
  }

    // console.log(this.state.requestType);
    // console.log(this.state.urlToSearch);
    return(
      <div style={{'height':'100vh','backgroundColor':'aliceblue'}}>
      <div className="container">
      <br/>
      <br/>
      <div className="row">
      <div  style={{'maxWidth':'max-content !important'}}>
      Request Type:
      </div>
        <div className="col-lg-1 col-md-1 col-sm-1">
      <select name="requestType" id="requestType" onChange={(event)=>{this.setState({requestType:event.target.value,shouldRender:true})}} value={this.state.requestType}>
        <option value="get" >GET</option>
        <option value="post" >POST</option>
        <option value="put" >PUT</option>
        <option value="delete" >DELETE</option>
      </select>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="col-lg-5 col-md-5 col-sm-5">
        <input type="text" placeholder="enter the api url" id="apiUrl" onChange={(event)=>this.setState({urlToSearch:event.target.value,shouldRender:false})}
        defaultValue={this.state.urlToSearch} style={{'width':'95%'}}/>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2">
          <button type="primary" className="btn-primary" style={{'width':'50%','cursor':'pointer'}}  onClick={()=>this.handleClick()}>Search</button>
        </div>
      </div>
      <br/>
      <br/>
      <div className="row" >

      {(this.state.requestType == 'post' || this.state.requestType == 'put') &&
        <div className="col-lg-9 col-md-9 col-sm-9">
        <textarea style={{'width':'100%','minHeight':'200px','overflowY': 'auto'}} placeholder="enter the request body"
        onChange={(event)=>{this.setState({requestBody:event.target.value,shouldRender:false})}} defaultValue={this.state.requestBody}/>
        </div>
      }



        <div className="col-lg-9 col-md-9 col-sm-9" style={{'border':'inset','minHeight':'200px','maxHeight':'600px','backgroundColor':'white','overflowY': 'auto'}}>
        {(this.state.responseData != undefined && this.state.viewMode == 'json')&&
          arr.map((item1)=>
        Object.keys(item1).map((value)=>{
          // console.log(item1[value]);
          return(
            <p key={value}>{value}:{JSON.stringify(item1[value])}</p>

          )
        })
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
              <button type="button" className="btn btn-warning" onClick={()=>{this.setState({viewMode:'json',shouldRender:true})}}>Format</button>
              }
              {(this.state.viewMode == 'json')&&
              <button type="button" className="btn btn-warning" onClick={()=>{this.setState({viewMode:'string',shouldRender:true})}}>Original data</button>
              }
              </div>




      </div>
      <br/>
      <br/>
    </div>
    </div>
    )
  }
}

export default ApiHitter;
