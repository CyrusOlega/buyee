import "./style.css";




function Product() {
        return (
<div class="card">
  <div class="card-image">

      <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLivcF2kQT9fP5RUJqC5mA9zQ5xEw-xj0ybOyj4-n4g&s"
    alt="Placeholder image"
      />
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">ProductName</p>
        <p class="subtitle is-6">Product Description</p>
        <p class="subtitle is-6">Price</p>
      </div>
    </div>
  </div>
  <div class="card">
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Add to Cart 🛒</a>
  </footer>
</div>
</div>
        )
    }

export default Product;
