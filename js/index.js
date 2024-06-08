// Tạo một số hằng số để quản lí các dữ liệu chuỗi
const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";

function timKiemGiaTienKmDauTien(loaiXe) {
  switch (loaiXe) {
    case UBER_CAR: {
      return 8000;
    }
    case UBER_SUV: {
      return 9000;
    }
    case UBER_BLACK: {
      return 10000;
    }
  }
}

function timKiemGiaTienTu1Den19(loaiXe) {
  switch (loaiXe) {
    case UBER_CAR: {
      return 7500;
    }
    case UBER_SUV: {
      return 8500;
    }
    case UBER_BLACK: {
      return 9500;
    }
  }
}
function timKiemGiaTienTu19TroLen(loaiXe) {
  switch (loaiXe) {
    case UBER_CAR: {
      return 7000;
    }
    case UBER_SUV: {
      return 8000;
    }
    case UBER_BLACK: {
      return 9000;
    }
  }
}
function timKiemGiaTienThoiGianCho(loaiXe) {
  switch (loaiXe) {
    case UBER_CAR: {
      return 2000;
    }
    case UBER_SUV: {
      return 3000;
    }
    case UBER_BLACK: {
      return 3500;
    }
  }
}

document.getElementById("btnTinhTien").onclick = function () {
  console.log("Tôi là nút tính tiền");
  // Truy xuất và lấy dữ liệu của các input số KM, thời gian chờ và loại xe
  let soKm = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  console.log(soKm);
  console.log(thoiGianCho);

  //
  // let loaiXe = document.querySelector("li input:checked");
  let loaiXe = document.querySelector("input[type='radio']:checked").value;
  console.log(loaiXe);
  

  // Xử lí tìm kiếm giá tiền phù hợp
  let tienKmDauTien = timKiemGiaTienKmDauTien(loaiXe);
  let tienKmTu1Den19 = timKiemGiaTienTu1Den19(loaiXe);
  let tienKmTu19TroLen = timKiemGiaTienTu19TroLen(loaiXe);
  let tienThoiGianCho = timKiemGiaTienThoiGianCho(loaiXe);
  console.log(tienKmDauTien);
  console.log(tienKmTu1Den19);
  console.log(tienKmTu19TroLen);
  console.log(tienThoiGianCho);

  let tongTien = 0;
  if (soKm <= 1) {
    // TH1 Người dùng đi trong khoảng 1km
    tongTien = soKm * tienKmDauTien;
  } else if (soKm > 1 && soKm <= 19) {
    // TH2 Người dùng đi trong khoảng 1 đến 19
    tongTien = tienKmDauTien + (soKm - 1) * tienKmTu1Den19;
  } else {
    // TH3 Người dùng đi trên 19km
    tongTien =
      tienKmDauTien + 18 * tienKmTu1Den19 + (soKm - 19) * tienKmTu19TroLen;
  }
  console.log(tongTien);
  // BTVN (Tính thời gian chờ) 10p ==> (10 - 3) / 3 ==> 3.... => 3 * 2000 ==> 6000
  let tinhThoiGianCho = (thoiGianCho - 3) / 3;
  let lamTronXuong = Math.floor(tinhThoiGianCho);
  console.log(lamTronXuong);
  let tongTienThoiGianCho = lamTronXuong * tienThoiGianCho;
  tongTien += tongTienThoiGianCho;

  //
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tongTien.toLocaleString(
    "vi",
    {
      currency: "VND",
      style: "currency",
    }
  );
};


document.getElementById("btnInHoaDon").onclick = function () {
  // Truy xuất và lấy dữ liệu của các input số KM, thời gian chờ và loại xe
  let soKm = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  console.log(soKm);
  console.log(thoiGianCho);
  let loaiXe = document.querySelector("input[type='radio']:checked").value;
  let loaiXeContent = document.querySelector("input[type='radio']:checked").nextElementSibling.textContent;
  console.log(loaiXeContent);

   // Xử lí tìm kiếm giá tiền phù hợp
   let tienKmDauTien = timKiemGiaTienKmDauTien(loaiXe);
   let tienKmTu1Den19 = timKiemGiaTienTu1Den19(loaiXe);
   let tienKmTu19TroLen = timKiemGiaTienTu19TroLen(loaiXe);
  let tienThoiGianCho = timKiemGiaTienThoiGianCho(loaiXe);


  // Thực hiện tính toán số Km
  let soKmDauTien = 0;
  let soKmTu1Den19 = 0;
  let soKmTu19TroLen = 0;
  if (soKm <= 1) {
    sokmContent = soKm;
  } else if (soKm > 1 && soKm <= 19) {
    soKmDauTien = 1;
    soKmTu1Den19 = soKm - 1;
  } else {
    soKmDauTien = 1;
    soKmTu1Den19 = 18;
    soKmTu19TroLen = soKm - 19;
  }
  console.log(soKmDauTien);
  console.log(soKmTu1Den19);
  console.log(soKmTu19TroLen);

  // Thực hiện xử lí tính toán số tiền
  let tongTien = 0;
  let tienKmDau = 0;
  let tienTu1KmDen19Km = 0;
  let tienTu19KmTroLen = 0;
  if (soKm <= 1) {
    tienKmDau = tienKmDauTien * 1;
    tongTien = tienKmDau;
  } else if (soKm > 1 && soKm <= 19) {
    tienKmDau = tienKmDauTien * 1;
    tienTu1KmDen19Km = tienKmTu1Den19 * (soKm - 1);
    tongTien = tienKmDau + tienTu1KmDen19Km;
  } else {
    tienKmDau = tienKmDauTien * 1;
    tienTu1KmDen19Km = tienKmTu1Den19 * 18;
    tienTu19KmTroLen = tienKmTu19TroLen * (soKm - 19);
    tongTien = tienKmDau + tienTu1KmDen19Km + tienTu19KmTroLen;
  }
  console.log(tongTien);
  // BTVN (Tính thời gian chờ) 10p ==> (10 - 3) / 3 ==> 3.... => 3 * 2000 ==> 6000
  let tinhThoiGianCho = (thoiGianCho - 3) / 3;
  let lamTronXuong = Math.floor(tinhThoiGianCho);
  console.log(lamTronXuong);
  let tongTienThoiGianCho = lamTronXuong * tienThoiGianCho;
  tongTien += tongTienThoiGianCho;



  document.getElementById("modal-body").innerHTML = `
  <div
  class="table-responsive"
>
  <table
    class="table table-primary"
  >
    <thead> 
        <th colspan="4" class="text-center bg-success text-white border-2 border-dark">CHI TIẾT HÓA ĐƠN</th>
        <tr class="">
        <td scope="row" class="border-2 border-dark">Loại xe</td>
        <td colspan="3" class="loaiXe text-center" id="loaiXe">${loaiXeContent}</td>
        </tr>
    </thead>
    <tbody>
      <tr class="text-center">
        <td scope="row">CHI TIẾT</td>
        <td>SỬ DỤNG</td>
        <td>ĐƠN GIÁ<br>(1,000đ)</td>
        <td>THÀNH TIỀN<br>(1,000đ)</td>
      </tr>
      <tr class="text-center">
        <td scope="row">KM ĐẦU<br>TIÊN</td>
        <td>${soKmDauTien} Km</td>
        <td class="donGia">${tienKmDauTien.toLocaleString()}</td>
        <td class="thanhTien">${tienKmDau.toLocaleString()}</td>
      </tr>
      <tr class="text-center">
        <td scope="row">Từ 1Km<br>đến 19Km</td>
        <td class="soKm">${soKmTu1Den19} Km</td>
        <td class="donGia">${tienKmTu1Den19.toLocaleString()}</td>
        <td class="thanhTien">${tienTu1KmDen19Km.toLocaleString()}</td>
      </tr>
      <tr class="text-center">
        <td scope="row">Từ > 19Km<br>trở lên</td>
        <td class="soKm">${soKmTu19TroLen} Km</td>
        <td class="donGia">${tienKmTu19TroLen.toLocaleString()}</td>
        <td class="thanhTien">${tienTu19KmTroLen.toLocaleString()}</td>
      </tr>
      <tr class="text-center">
        <td scope="row">Thời gian<br>chờ trên 3<br>phút (mỗi<br>3 phút)</td>
        <td class="thoiGianChoTinhPhi">Tài xế đã chờ<br>bạn ${thoiGianCho} phút<br>Free 3 phút<br>Tính phí: ${(thoiGianCho-3) < 3 ? 0 :(thoiGianCho-3)} phút</td>
        <td class="donGia">${tienThoiGianCho.toLocaleString()}</td>
        <td class="thanhTien">${tongTienThoiGianCho.toLocaleString()}</td></td>
      </tr>
      <th colspan="4" class="text-right">Tổng tiền: ${tongTien.toLocaleString("vi", {
        style: "currency",
        currency: "VND"
      })}</th>
    </tbody>
  </table>
</div>
  `;
  // Gọi tới modal và hiển thị
  $("#exampleModal").modal("show");
};