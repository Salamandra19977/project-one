let orderForm = document.getElementById("order-form")
let orderTable = document.getElementById("order-table")

orderForm.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log(event.target['dish'].value)
    let order = {
        dish: event.target['dish'].value,
        time: event.target['time'].value,
        address: event.target['adress'].value,
        tel: event.target['tel'].value,
    }

    event.target.reset()

    const serializer = new XMLSerializer()
    const xmlStr = serializer.serializeToString(event.target)
    console.log(xmlStr)

    objStr = JSON.stringify(order)
    console.log(order)
    console.log(objStr)
    console.log(JSON.parse(objStr))
    drawOrder(order)
})

function drawOrder(order) {
    let tr = document.createElement('tr')
    tr.innerHTML = `
        <td>${order.dish}</td>
        <td>${order.time}</td>
        <td>${order.address}</td>
        <td>${order.tel}</td>
        <td>${createDownloadLink(order).outerHTML}</td>
    `
    orderTable.appendChild(tr)
}

function createDownloadLink(order) {
    let text = JSON.stringify(order)
    let download = document.createElement('a')
    download.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
    download.setAttribute('download', 'order.json')
    download.innerHTML = 'link'

    return download
}