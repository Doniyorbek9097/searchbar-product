import React, {Component} from "react";
import SearchBar from "./SearchBar";
import ProducTable from "./ProducTable";
class FilteratableProduct extends Component{
  constructor(props){
    super(props);

      this.state = {filerText:"", isStockOnly:false}
  }

handlerTextChange = (e) => {
   console.log(this.setState({filerText:e}))
}
handlerIstockChange = (e) => {
 console.log(this.setState({isStockOnly:e}))
}

  render() {
    return (
      <div>
     <SearchBar 
     filerText={this.state.filerText}
      isStockOnly={this.state.isStockOnly}
      onTextFilterChange = {this.handlerTextChange}
      IstockChange = {this.handlerIstockChange}
       />

     <ProducTable
      products= {this.props.products}
       filerText={this.state.filerText}
        isStockOnly={this.state.isStockOnly} 
        
        />
    
      </div>
    )
  }
}

export default FilteratableProduct;