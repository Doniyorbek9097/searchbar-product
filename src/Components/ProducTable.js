import React, {Component} from "react";
import ProductRow from "./ProductRow";

class ProducTable extends Component{
  constructor(props){
    super(props);

  

  }


  render() {
const filerText = this.props.filerText;
const isStockOnly = this.props.isStockOnly;

    const rows = [];
    this.props.products.map(product => {

          if(product.name.indexOf(filerText.toLowerCase()) ==1){
            return;
          }

          if(isStockOnly && !product.stocked){
            return;
          }

        rows.push( <ProductRow product={product} key={product.name} />)

      })

    return (
      <table>
        <thead>
            <tr>
              <th align="left">Nomi</th>
              <th align="left">Narxi</th>
            </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>

      </table>
    )
  }
}

export default ProducTable;