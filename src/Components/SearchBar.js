import React, {Component} from "react";

class SearchBar extends Component{
  constructor(props){
    super(props);

  }

HandlerFilterChange = (e) => {
this.props.onTextFilterChange(e.target.value);

}

HandlerIstockChange = (e) => {
  this.props.IstockChange(e.target.value);
}


  render() {
    return (
      <div>
       <input
        type="text"
         placeholder="search ..."
          value={this.props.filterText}
            onChange={this.HandlerFilterChange}
            

          />
       <p>
      <label >
      <input 
      type="checkbox"
      checked={this.props.isStockOnly} 
        onChange={this.HandlerIstockChange}
       />
       faqat omborda mavjud bo'lgan mahsulotlar</label>
       </p> 

      </div>
    )
  }
}

export default SearchBar;