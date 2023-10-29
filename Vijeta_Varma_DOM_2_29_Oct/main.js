async function data() {
    let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");

    const details = await response.json();
    return details;
}

data().then((objectData) => {
    let tableData = "";
    objectData.map((values) => {
        tableData += `<tr>
        <td> <img src=" ${values.image}"/><td>
        <td> ${values.name}<td>
        <td> ${values.id}<td>
        <td> ${values.symbol}<td>
        <td> ${values.current_price}<td>
        <td> ${values.total_volume}<td>`
    });

    document.getElementById("crypto-table").innerHTML = tableData

}).catch((error) => {
    console.log(error);
});

