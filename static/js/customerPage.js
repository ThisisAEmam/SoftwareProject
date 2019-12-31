$(function () {

    /********************************** FEEDBACK **********************************/
    $(".feedbackManageBtn").click(function (event) {
        event.preventDefault();
        $('.pageLoaderSection').addClass('pageLoader');
        $('#customerServices').hide();
        setTimeout(function () {
            $('.pageLoaderSection').removeClass('pageLoader');
            window.location.href = '/feedback';
        }, 1000);
    });


    /********************************** ORDERS **********************************/
    $(".ordersBtn").click(function (event) {
        event.preventDefault();
        $('.pageLoaderSection').addClass('pageLoader');
        $('#customerServices').hide();
        setTimeout(function () {
            $('.pageLoaderSection').removeClass('pageLoader');
            window.location.href = '/orders';
        }, 1000);
    });

    var optionalCheckout;
    var optionalRemoval;
    $("body").on('click','.orderCheckoutBtn',function (event) {
        optionalCheckout = $(this).parent().parent();
    });

    $("body").on('click','#btnCheckout',function (event) {
        $('#checkoutModal').modal('hide');
        optionalCheckout.remove();
        setTimeout(function () {
            $('#checkoutSuccessAlert').css("display", "block");
        }, 500);
        setTimeout(function () {
            $('#checkoutSuccessAlert').css("display", "none");
        }, 4500);
    });

    $("body").on('click','.orderCancelBtn',function (event) {
        optionalRemoval = $(this).parent().parent();
    });

    $("body").on('click','#btnOrderCancel',function (event) {
        $('#orderCancelModal').modal('hide');
        optionalRemoval.remove();
        setTimeout(function () {
            $('#orderCancelAlert').css("display", "block");
        }, 500);
        setTimeout(function () {
            $('#orderCancelAlert').css("display", "none");
        }, 4500);
    });

    /********************************** RESERVE TABLE **********************************/
    $(".reserveTableBtn").click(function (event) {
        event.preventDefault();
        $('.pageLoaderSection').addClass('pageLoader');
        $('#customerServices').hide();
        setTimeout(function () {
            $('.pageLoaderSection').removeClass('pageLoader');
            window.location.href = '/reserveTable';
        }, 1000);
    });

    $(".showTables").click(function (event) {
        event.preventDefault();
    });

    var optionalReserve;
    var optionalCancelReservation;

    $(".cardReserveTableBtn").click(function (event) {
        event.preventDefault();
        optionalReserve = $(this).parent();
    });

    $("#btnReserve").click(function (event) {
        event.preventDefault();
        optionalReserve.addClass("reservedTable");
        optionalReserve.removeClass("notReserved");
        $("#reserveTableModal").modal('hide');
    });

    $(".reservationCancelBtn").click(function (event) {
        event.preventDefault();
        optionalCancelReservation = $(this).parent();
    });

    $("#btnReserveCancel").click(function (event) {
        event.preventDefault();
        optionalCancelReservation.removeClass("reservedTable");
        optionalCancelReservation.addClass("notReserved");
        $("#reservationCancelModal").modal('hide');
    });

    $(".allTablesBtn").click(function (event) {
        event.preventDefault();
        $(".notReserved").show();
        $(".reservedTable").show();
    });

    $(".availableTablesBtn").click(function (event) {
        event.preventDefault();
        $(".notReserved").show();
        $(".reservedTable").hide();
    });

    $(".reservedTablesBtn").click(function (event) {
        event.preventDefault();
        $(".notReserved").hide();
        $(".reservedTable").show();
    });

    $('#datetimepicker').datetimepicker();

    $('#datetimepicker').click(function (event) {
        event.preventDefault();
        for (var n=0; n<=4; n++)
        {
          var i = Math.floor((Math.random() * 10));
          $(".tableCard-" + i).removeClass("notReserved");
          $(".tableCard-" + i).addClass("reservedTable");
        }
    });

});
