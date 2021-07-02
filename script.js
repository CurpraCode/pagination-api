let pages = "1";

// body data response
const getStock = async () => {
  let urlStock = `https://jsonmock.hackerrank.com/api/stocks?page=${pages}`;
  try {
    const res = await fetch(urlStock);

    let datas = await res.json();
    // render heading pages details
    let headHtml = "";
    let headHtmlText = `
    <div>
    <h3>${datas.page}</h3>
    <h3>${datas.per_page}</h3>
    <h3>${datas.total}</h3>
    <h3>${datas.total_pages}</h3>
    </div>
   
    `;
    headHtml = headHtmlText;
    let headContainer = document.querySelector(".data-head");
    headContainer.innerHTML = headHtml;
    return await datas.data;
  } catch (error) {
    console.log(error);
  }
};

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
document.getElementById("next").addEventListener("click", () => {
  pages++;
  renderStock();
});
document.getElementById("prev").addEventListener("click", () => {
  pages--;
  renderStock();
});
