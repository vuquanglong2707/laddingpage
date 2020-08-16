/////////////////////Tinh Tien////////////////////////
$('#soluong').on('change', function() {
    alert($('#soluong').val())
    TinhTien();
});


function TinhTien() {
    var soluong = 0;
    var giatien = 0;
    if ($('#soluong') != null) {
        soluong = $('#soluong').val();
    }


    if ($('#dongia') != null) {
        giatien = $('#dongia').val();
    }
    var tt = soluong * giatien;
    $('#thanhtien').val(Intl.NumberFormat().format(tt));
}

$(document).ready(function() {
    $.ajax({
        url: 'https://pos.vveco.vn/pos/api/product/detail?shop_token=AmlWspRNhvjO7z4iPD0eWekLLUeODOYt&warehouseId=1&productID=2',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            var objProduct = data.body;
            // alert(objProduct.name);
            var lstImages = objProduct.images;
            var Name_product = objProduct.name;
            var titles = objProduct.desc;
            var Pricess = objProduct.originPrice;
            var Pri = objProduct.variants;
            var Pric = Pri[0].price;
            var Property = Pri[0].properties;
            var AllCategoriess = objProduct.categories;
            var videotest;
            var Khuyenmai1;
            var Khuyenmai2;
            ////Set đơn giá
            $('#color' && '#size').on('change', function() {

                    for (var k = 0; k < Pri.length; k++) {
                        for (var j = 0; j < Property.length; j++) {
                            for (var i = 0; i < Property.length; i++) {
                                if (Pri[k].properties[j].key === "Màu" && $('#color').val() === Pri[k].properties[j].val && Pri[k].properties[i].key === "Size" && Pri[k].properties[i].val === $('#size').val()) {
                                    var dongia = Pri[k].price;
                                    $('#dongia').val(dongia);
                                }
                            }
                        }
                    }
                })
                ////Thêm khuyến mãi
            if (Khuyenmai1 != null) {
                $('.promotion').append(`
                <h2 style="font-size: 1.5em;">Ưu đãi siêu hấp dẫn</h2>
                <hr style="height: 1px; background-color: black;">
                <p>${Khuyenmai1}</p>
                <p>${Khuyenmai2}</p>
            `)
            }

            //////Set màu và size
            for (var k = 0; k < Pri.length; k++) {
                for (var j = 0; j < Pri[0].properties.length; j++) {
                    if (Pri[k].properties[j].key === "Size") {
                        $("#size").append(`
                        <option>${Pri[k].properties[j].val}</option>
                    `);
                    } else if (Pri[k].properties[j].key === "Màu") {
                        $("#color").append(`
                        <option>${Pri[k].properties[j].val}</option>
                    `);
                    }

                }
                // var dongia = Pri[k].price;
                // $('#dongia').val(dongia);
            }
            /////////////Set ảnh auto slide
            for (var k = 0; k < lstImages.length; k++) {
                if (k === 0) {
                    $("#product-show").append(`
                    <div class="mySlides" style="display:block;">
                        <img src="https://pos.vveco.vn${lstImages[0]}" style="width:100% ">
                    </div>
                    `);
                    $("#product-showslide").append(`
                    <div class="col-xl-2 .col-lg-2 col-md-2 .col-sm-2 col-2 ">
                        <img class="demo cursor" src="https://pos.vveco.vn${lstImages[0]}" style="width:100%;" onclick="currentSlide(${0})" alt="The Woods">
                    </div>
                `);
                } else {
                    $("#product-show").append(`
                    <div class="mySlides">
                        <img src="https://pos.vveco.vn${lstImages[k]}" style="width:100%">
                    </div>
                    `);
                    $("#product-showslide").append(`
                    <div class="col-xl-2 .col-lg-2 col-md-2 .col-sm-2 col-2 ">
                        <img class="demo cursor" src="https://pos.vveco.vn${lstImages[k]}" style="width:100%;" onclick="currentSlide(${k+1})" alt="The Woods">
                    </div>
                     `);
                }
            }
            //Set ảnh hiển thị thêm
            for (var j = 0; j < 3; j++) {
                $("#bonus").append(`		
                    <div class="col-xl-4.col-lg-4 col-md-4 .col-sm-4 col-12 more-img">
                        <img src="https://pos.vveco.vn${lstImages[j]}">
                    </div>
                    `);
            }
            ////////Tên sản phẩm
            $("#Name-product").append(`	
            <br>	
            <h3 id="caption" style="font-size:25px;text-align:center;"><a href=""><b>${Name_product}</b> </a> </h3>
            <hr style="height: 1px; background-color: black;" />
            `);
            /////Tiêu đề sản phẩm
            $("#captions").append(`		
                
                <p>${titles}</p>
            `);
            /////// giá gốc
            $("#prices").append(`		
                <span class="line-through">${Pricess}đ</span>
            `);
            //////Gía khuyến mãi
            $("#price2").append(`		
                <span>${Pric}</span>
            `);
            /// thông tin chi tiết sản phẩm
            $("#tabs-2").append(`		
                <div class="detail">
                    <div class="name__detail">
                        <p>Danh mục:</p>
                    </div>
                    <div class="info__detail">
                        <p>${AllCategoriess}</p>
                    </div>
                </div>
                <div class="detail ">
                    <div class="name__detail">
                        <p>Thương hiệu:</p>
                    </div>
                    <div class="info__detail">
                        <p></p>
                    </div>
                </div>
                <div class="detail ">
                    <div class="name__detail">
                        <p>Chất liệu:</p>
                    </div>
                    <div class="info__detail">
                        <p></p>
                    </div>
                </div>

                <div class="detail ">
                    <div class="name__detail">
                        <p>Xuất xứ:</p>
                    </div>
                    <div class="info__detail">
                        <p></p>
                    </div>
                </div>
                <div class="detail ">
                    <div class="name__detail">
                        <p>Mã hàng:</p>
                    </div>
                    <div class="info__detail">
                        <p>${objProduct.barcode}</p>
                    </div>
                </div>
                <div class="detail ">
                    <div class="name__detail">
                        <p>Gửi từ:</p>
                    </div>
                    <div class="info__detail">
                        <p></p>
                    </div>
                </div>
                <div class="detail ">
                    <div class="name__detail">
                        <p>Mô tả sản phẩm:</p>
                    </div>
                    <div class="info__detail">
                        <p></p>
                    </div>
                </div>
            `);
            ////////Thêm mô tả bằng video
            if (videotest != null) {
                $("#videoinfo").append(`
            
                    <h2>Video mô tả thêm về sản phẩm</h2>
                    <hr style="height: 1px; background-color: black;">
                    <video controls>
                        <source src="${videotest}" type="video/mp4">
                        <source src="${videotest}" type="video/ogg">
                    </video>
                `);
            }

        }
    });

});
///////Set up tỉnh thành quận huyện phường xã
$(document).ready(function() {
    $.ajax({
        url: 'https://pos.vveco.vn/pos/api/province',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            var general = data.body;
            for (var i = 0; i < general.length; i++) {
                $('#tinhthanh').append(`
                    <option>${general[i].name}</option>
                `)
            }
            $('#tinhthanh').on('change', function() {
                for (var j = 0; j < general.length; j++) {
                    if ($('#tinhthanh').val() === general[j].name) {
                        // alert(general[j].id);
                        var link = "https://pos.vveco.vn/pos/api/district/" + general[j].id;
                        $.ajax({
                            url: link,
                            type: 'GET',
                            dataType: 'json',
                            success: function(data) {
                                var quanhuyens = data.body;
                                for (var k = 0; k < quanhuyens.length; k++) {
                                    $('#quanhuyen').append(`
                                    <option>${quanhuyens[k].name}</option>
                                `)
                                }
                                $('#quanhuyen').on('change', function() {
                                    for (var h = 0; h < quanhuyens.length; h++) {
                                        if ($('#quanhuyen').val() === quanhuyens[h].name) {
                                            var link2 = "https://pos.vveco.vn/pos/api/ward/" + quanhuyens[h].id;
                                            $.ajax({
                                                url: link2,
                                                type: 'GET',
                                                dataType: 'json',
                                                success: function(data) {
                                                    var xaphuong = data.body;
                                                    for (var n = 0; n < xaphuong.length; n++) {
                                                        $('#xaphuong').append(`
                                                            <option>${xaphuong[n].name}</option>
                                                        `)
                                                    }
                                                }
                                            })

                                        }
                                    }
                                })
                            }
                        })

                    }
                }
            })
        }

    })

});
///////////////////////////////API post thông tin check out
$('.submit').on('click', function() {
    var invoice = {
        "name": $('.name').val(),
        "mobile": $('.phone-number').val(),
        "tinhthanh": $('.tinhthanh').val(),
        "quanhuyen": $('.quanhuyen').val(),
        "xaphuong": $('.xaphuong').val(),
        "diachi": $('.diachi').val(),
        "product": $('.Name-product').val(),
        "soluong": $('.soluong').val(),
        "price": $('.dongia').val(),
    }
    $.ajax({
        url: 'http://api.vveco.vn/tmp/invoice/add',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(invoice),
        success: function(data) {
            console.log(data);
            location.reload();
            alert("Đăng ký mua hàng thành công!");
        },
        error: function(error) {
            alert(error);
        }
    });
})