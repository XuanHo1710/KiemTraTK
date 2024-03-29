const orderList = document.querySelector('.order-first');


const totalPrice = (listCart) => {
    let price = 0;
    listCart.forEach(cartItem => price += parseInt(cartItem.price) * (1 - parseFloat(cartItem.discountPercent)) * parseInt(cartItem.quantity)  )
    return price;
}

const totalDueInner = document.querySelector('.order-total-due');
let totalDue = 0;
listCart.forEach(cartItem => {
    totalDue += parseInt(cartItem.price) * (1 - parseFloat(cartItem.discountPercent)) * parseInt(cartItem.quantity);
})
totalDueInner.innerHTML = `${totalDue.toLocaleString()}đ`



if(orderList){
    if(listCart.length > 0){
        listCart.forEach(cartItem => {
            orderList.innerHTML += `
            <div class="order-item">
                <div class="d-flex">    
                    <a href="../html/chitietsanpham.html?product-id=${cartItem.id}"><img src=${cartItem.thumbnail[0]} alt=""
                            style="height:80px; width: 75px;"></a>
                    <div class="order-item-detail" style="width: 90%;">
                        <div class="d-flex">
                            <div class="w-75 ms-2">
                                <a href="../html/chitietsanpham.html?product-id=${cartItem.id}" class="text-decoration-none text-dark"
                                    style="font-weight: 600;">${cartItem.title}</a>
                            </div>
                            <div class="text-end w-25">
                                <span class="text-danger">${(parseInt(cartItem.price) * (1 - parseFloat(cartItem.discountPercent))).toLocaleString()}₫ </span>
                                <br>
                                <span class="text-underline"><del>${parseInt(cartItem.price).toLocaleString()}₫</del></span>
                            </div>
                        </div>
                        <p class="ms-2 my-2" style="font-size: 12px; position: relative;">
                            Online giá rẻ quá
                            <span class="text-primary see-details"><a href="../html/chitietsanpham.html?product-id=${cartItem.id}" class="text-decoration-none">(Xem
                                    chi tiết)</a></span>
                        </p>
                        <div class="d-flex justify-content-between">
                            <p class="ms-2" style="font-size: 12px;">Màu: xanh</p>
                            <span class="chooseNumber d-flex">
                                Số lượng: <strong>${cartItem.quantity}x</strong>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3 fs-14px ">
                    <p class="fs-">Tạm tính:</p>
                    <p>${(parseInt(cartItem.price) * (1 - parseFloat(cartItem.discountPercent)) * parseInt(cartItem.quantity)).toLocaleString()}₫</p>
                </div>
            </div>
            `;
        })
    } else {
        orderList.innerHTML = `
            <h3 class="text-center mt-5 mb-5">Hiện không có sản phẩm trong giỏ hàng !</h3> 
        `
    }
}

