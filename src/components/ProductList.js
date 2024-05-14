
import Product from "./Product";

import "./style.css";
// function to return all products
function ProductList() {
return(
    <>
{/* div class that holds all the product cards
grids each card in a row */}
<div class="grid grid-cols-3 gap-4 content-center ...">

<div className="border-4 m-auto">
<Product/>
</div>
<div className="border-4 m-auto">
<Product/>
</div>

<div className="border-4 m-auto">
<Product/>
</div>

<div className="border-4 m-auto">
<Product/>
</div>

<div className="border-4 m-auto">
<Product/>
</div>

<div className="border-4 m-auto">
<Product/>
</div>

</div>
</>
    ) 
    }

export default ProductList;
