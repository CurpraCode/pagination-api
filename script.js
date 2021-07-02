

let pages = "1";

// body data response
const getStock = async (res) => {
  let urlStock = `https://jsonmock.hackerrank.com/api/stocks?page=${pages}`;
  try {
    const res = await fetch(urlStock);
    const datas= await res.json()
    return await datas.data;
  } catch (error) {
    console.log(error);
  }
};

// // heading data response
// const getStockHead = async (res) => {
//   let urlStock = `https://jsonmock.hackerrank.com/api/stocks?page=${pages}`;
//   try {
//     const res = await fetch(urlStock);
    
//     console.log(res.json());
//     return await res.data;
//   } catch (error) {
//     console.log(error);
//   }
  
// };
// getStockHead();

// rendered body data response into html
const renderStock = async () => {
  let stock = await getStock();
  let stockHtml = "";
  stock.forEach((stocks) => {
    let stockHtmlCard = `
        <div class="card">
        <h3>${stocks.date}</h3>
        <div>
        <p>${stocks.open}</p>        
        <p>${stocks.high}</p>
        </div>
        <div>
        <p>${stocks.low}</p>
        <p>${stocks?.close}</p>
        </div>
        </div>
        `;
    stockHtml += stockHtmlCard;
  });
  let container = document.querySelector(".container");
  container.innerHTML = stockHtml;
};
renderStock();

// onclick button listener for pagination
document.getElementById("next").addEventListener("click", ()=>{
  pages++;
  renderStock()
})
document.getElementById("prev").addEventListener("click", ()=>{
  pages--;
  renderStock()
})

