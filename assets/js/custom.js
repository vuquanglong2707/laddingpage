var options = [{
        title: 'Quang Long',
        description: 'Đã mua 1 sản phẩm',
        image: 'img/success.png',
        type: 'success',
        position: 'bottom-left',
        closeTimeout: 7000,
        width: 300
    }, {
        title: 'Hoàng Hà',
        description: 'Đã mua 1 sản phẩm',
        image: 'https://www.bloghong.com/wp-content/uploads/2017/10/y-nghia-icon-facebook-zalo.png',
        type: 'success',
        position: 'bottom-left',
        closeTimeout: 7000,
        width: 300
    }, {
        title: ' Dặng Thủy',
        description: 'Đã mua 1 sản phẩm',
        image: 'https://www.bloghong.com/wp-content/uploads/2017/10/y-nghia-icon-facebook-zalo.png',
        type: 'success',
        position: 'bottom-left',
        closeTimeout: 7000,
        width: 300
    }, {
        title: 'Khánh Huyền ',
        description: 'Đã mua 1 sản phẩm',
        image: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png',
        type: 'success',
        position: 'bottom-left',
        closeTimeout: 7000,
        width: 300
    }, {
        title: 'Hoàng Thu Hà ',
        description: 'Đã mua 1 sản phẩm',
        image: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png',
        type: 'success',
        position: 'bottom-left',
        closeTimeout: 7000,
        width: 300
    },
    {
        title: 'Phạm Hùng',
        description: 'Đã mua 1 sản phẩm',
        image: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png',
        type: 'success',
        position: 'bottom-left',
        closeTimeout: 7000,
        width: 300
    }, {
        title: 'Văn Nam',
        description: 'Đã mua 1 sản phẩm',
        image: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png',
        type: 'success',
        position: 'bottom-left',
        closeTimeout: 7000,
        width: 300
    }, {
        title: ' Đỗ Hà',
        description: 'Đã mua 1 sản phẩm',
        image: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png',
        type: 'success',
        position: 'bottom-left',
        closeTimeout: 7000,
        width: 300
    }, {
        title: 'Thiện Nguyễn ',
        description: 'Đã mua 1 sản phẩm',
        image: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png',
        type: 'success',
        position: 'bottom-left',
        closeTimeout: 7000,
        width: 300
    }, {
        title: 'Hoàng Nguyệt ',
        description: 'Đã mua 1 sản phẩm',
        image: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/logos-1.png',
        type: 'success',
        position: 'bottom-left',
        closeTimeout: 7000,
        width: 300
    }
];

$(document).ready(function() {
    var cnt = 0;
    setInterval(function() {
        if (cnt < options.length) {
            GrowlNotification.notify(options[cnt]);
            cnt++;
        } else {
            cnt = 0;
            GrowlNotification.notify(options[cnt]);
            cnt++;
        }


    }, 7000);
});