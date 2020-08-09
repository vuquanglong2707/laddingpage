var options = [{
        position: 'bottom-left',
        title: 'Quang Long',
        description: 'Đã mua 1 sản phẩm',
        closeTimeout: 7000,
        width: 500
    }, {
        position: 'bottom-left',
        title: 'Hoàng Hà',
        description: 'Đã mua 1 sản phẩm',
        closeTimeout: 7000,
        width: 500
    }, {
        position: 'bottom-left',
        title: ' Dặng Thủy',
        description: 'Đã mua 1 sản phẩm',
        closeTimeout: 7000,
        width: 500
    }, {
        position: 'bottom-left',
        title: 'Khánh Huyền ',
        closeTimeout: 7000,
        description: 'Đã mua 1 sản phẩm',
        width: 500
    }, {
        position: 'bottom-left',
        title: 'Hoàng Thu Hà ',
        closeTimeout: 7000,
        description: 'Đã mua 1 sản phẩm',
        width: 500
    },
    {
        position: 'bottom-left',
        title: 'Phạm Hùng',
        description: 'Đã mua 1 sản phẩm',
        closeTimeout: 7000,
        width: 500
    }, {
        position: 'bottom-left',
        title: 'Văn Nam',
        description: 'Đã mua 1 sản phẩm',
        closeTimeout: 7000,
        width: 500
    }, {
        position: 'bottom-left',
        title: ' Đỗ Hà',
        description: 'Đã mua 1 sản phẩm',
        closeTimeout: 7000,
        width: 500
    }, {
        position: 'bottom-left',
        title: 'Thiện Nguyễn ',
        closeTimeout: 7000,
        description: 'Đã mua 1 sản phẩm',
        width: 500
    }, {
        position: 'bottom-left',
        title: 'Hoàng Nguyệt ',
        closeTimeout: 7000,
        description: 'Đã mua 1 sản phẩm',
        width: 500
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