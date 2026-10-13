const products = [
  { name: "Somzy Acoustic Pro Headphones", price: "$249.99", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", cat:"Audio" },
  { name: "Somzy Ultra SmartWatch Series X", price: "$199.99", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", cat:"Wearable" },
  { name: "Somzy Edge Pro Smartphone 5G", price: "$999.99", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", cat:"Smartphones" },
  { name: "Somzy Book Air 13 Laptop", price: "$1299.99", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400", cat:"Laptops" },
  { name: "Somzy Pods Pro Wireless Earbuds", price: "$129.99", img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400", cat:"Audio" },
  { name: "Somzy Gaming OLED Display 32''", price: "$549.99", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400", cat:"Laptops" },
  { name: "Somzy FitPulse Health Band", price: "$99.99", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400", cat:"Wearable" },
  { name: "Somzy Pocket Mini Smartphone", price: "$499.99", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", cat:"Smartphones" },
];

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");

function render(list){
  grid.innerHTML = list.map(p => `
    <div class="prod">
      <img src="${p.img}">
      <small style="color:#38bdf8; font-size:10px;">${p.cat}</small>
      <h4>${p.name}</h4>
      <div class="price"><span>${p.price}</span><button class="add">Add</button></div>
    </div>
  `).join("");
}
render(products);

// Search
searchInput.addEventListener("input", e=>{
  const q = e.target.value.toLowerCase();
  render(products.filter(p=>p.name.toLowerCase().includes(q)));
});

// Mobile menu
document.getElementById("hamburger").addEventListener("click", ()=>{
  document.getElementById("navMenu").classList.toggle("show");
});
