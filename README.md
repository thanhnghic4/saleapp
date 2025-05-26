1. Tạo đơn hàng

Thông tin khách hàng
Tên: Khách lạ Số diện thoại: 000000

Tra cứu lịch sử mua hàng:
-> khách mới [check] tự động tạo khách hàng mới
-> khách cũ => link tra cứu lịch sử mua hàng

sản phẩm: +
select box
tên:
giá gốc: có thể edit
giá bán:
description:

nhân viên làm đơn: ....

2. Quản lý sản phẩm
   Edit sản phẩm
   Thêm sản phẩm
3. Quản lý khách hàng
   Edit khách hàng
   Thêm khách hàng
4. Báo cáo

// https://matifandy8.github.io/NeoBrutalismCSS/#started

// function loadCustomers() {
// console.log("step 1")
// google.script.run.withSuccessHandler(function(names) {
// customerList = names;
// console.log("step 2")
// console.log(names)
// const input = document.getElementById("name");
// input.addEventListener("input", function() {
// const val = this.value.toLowerCase();
// const suggestions = customerList.filter(c => c.toLowerCase().includes(val));
// const datalist = document.getElementById("suggestions");
// datalist.innerHTML = suggestions.map(name => `<option value="${name}">`).join('');
// });
// }).getCustomers();
// }

// function submitForm() {
// const data = {
// name: document.getElementById("name").value,
// amount: document.getElementById("amount").value,
// notes: document.getElementById("notes").value
// };
// google.script.run.withSuccessHandler(() => {
// alert("Đã lưu hóa đơn!");
// document.getElementById("form").reset();
// }).submitInvoice(data);
// }

// window.onload = loadCustomers;
