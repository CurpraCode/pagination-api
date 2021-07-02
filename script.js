const getStock = async (res) => {
  let urlStock = "https://jsonmock.hackerrank.com/api/stocks?page=1";
  try {
    const res = await fetch(urlStock);
    const datas= await res.json()
    console.log(datas.data);
    return await datas.data;
  } catch (error) {
    console.log(error);
  }
};


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
