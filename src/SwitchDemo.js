import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//Get Data
import getData from "./data";



class SwitchDemo extends Component {
  state={
    articles:[]
  }
async  componentDidMount()  {
    let result = await getData();
    let fetchedArticles = result.response.results;
    console.log(result)
    fetchedArticles && this.setState({articles:fetchedArticles})
  }


  render(){
    console.log(this.state)
    return (
      <React.Fragment>
        {this.showArticles()}
      </React.Fragment>
    )
  }
  showArticles = () => {
    const {articles} = this.state
    const mappedArticles = articles.map((element, index) => {
      return(
        <div key={index}>
          <img src={element.fields.thumbnail}/>
          <h1>{element.webTitle}</h1>
          <h2>{element.sectionName}</h2>
        </div>
      )
    })
    return mappedArticles
  }

}
export default SwitchDemo;
