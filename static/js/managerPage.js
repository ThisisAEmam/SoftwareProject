// const xhr = new XMLHttpRequest();
// xhr.open('GET','/staff');
// xhr.onload = () =>{
//   const data = JSON.parse(xhr.responseText);
//   console.log(data);
//   for (var i in data){
//     var tr = document.createElement('tr');
//     var td1 = document.createElement('td');
//     var td2 = document.createElement('td');
//     var td3 = document.createElement('td');
//     var span = document.createElement('span');
//     var td4 = document.createElement('td');
//     var a1 = document.createElement('a');
//     var i1 = document.createElement('i');
//     var a2 = document.createElement('a');
//     var i2 = document.createElement('i');
//
//     tr.setAttribute("id", `s${i}`);
//     td1.classList.add("stuffMemberName");
//     td2.classList.add("stuffMemberRole");
//     td3.setAttribute("id", `td3${i}`);
//     span.classList.add("stuffMemberSalary");
//     td4.setAttribute("id", `td4${i}`);
//     td4.classList.add("text-nowrap");
//     a1.setAttribute("id", `a1${data[i].name}`);
//     a1.classList.add("editStuffMember");
//     a1.setAttribute("data-toggle", "modal");
//     a1.setAttribute("href","#editModal");
//     a1.setAttribute("role", "button");
//     i1.classList.add("fa");
//     i1.classList.add("fa-pencil");
//     i1.classList.add("text-inverse");
//     i1.classList.add("m-r-10");
//     a2.setAttribute("id", `a2${data[i].name}`);
//     a2.classList.add("fireStuffMember");
//     a2.setAttribute("data-toggle", "modal");
//     a2.setAttribute("href", "#fireModal");
//     a2.setAttribute("role", "button");
//     i2.classList.add("fa");
//     i2.classList.add("fa-close")
//     i2.classList.add("text-danger")
//     td1.innerHTML=`${data[i].name}`;
//     td2.innerHTML= `${data[i].job}`;
//     span.innerHTML=`${data[i].salary} EGP`;
//
//     document.querySelector('#stuffTableBody').append(tr);
//     document.querySelector(`#s${i}`).append(td1);
//     document.querySelector(`#s${i}`).append(td2);
//     document.querySelector(`#s${i}`).append(td3);
//     document.querySelector(`#td3${i}`).append(span);
//     document.querySelector(`#s${i}`).append(td4);
//     document.querySelector(`#td4${i}`).append(a1);
//     document.querySelector(`#td4${i}`).append(a2);
//     document.querySelector(`#a1${data[i].name}`).append(i1);
//     document.querySelector(`#a2${data[i].name}`).append(i2);
//
//     console.log(`i`);
//
//   }
// }
// xhr.send()

// stoooooac
// sfklm,

// const xhr1 = new XMLHttpRequest();
// xhr1.open('GET','/stock');
// xhr1.onload = () =>{
//   const data2 = JSON.parse(xhr1.responseText);
//   console.log(data2);
//   for (var i in data2){
//     var trs = document.createElement('tr');
//     var td1s = document.createElement('td');
//     var td2s = document.createElement('td');
//     var td3s = document.createElement('td');
//     var spans = document.createElement('span');
//     var td4s = document.createElement('td');
//     var a1s = document.createElement('a');
//     var i1s = document.createElement('i');
//     var a2s = document.createElement('a');
//     var i2s = document.createElement('i');
//
//     trs.setAttribute("id", `s${i}`);
//     td1s.classList.add("stockItemName");
//     td2s.classList.add("stockItemQuantity");
//     td3s.setAttribute("id", `td3s${i}`);
//     spans.classList.add("stockItemPrice");
//     td4s.setAttribute("id", `td4s${i}`);
//     td4s.classList.add("text-nowrap");
//     a1s.setAttribute("id", `a1s${data2[i].name}`);
//     a1s.classList.add("editStockItem");
//     a1s.setAttribute("data-toggle", "modal");
//     a1s.setAttribute("href","#editModal");
//     a1s.setAttribute("role", "button");
//     i1s.classList.add("fa");
//     i1s.classList.add("fa-pencil");
//     i1s.classList.add("text-inverse");
//     i1s.classList.add("m-r-10");
//     a2s.setAttribute("id", `a2s${data2[i].name}`);
//     a2s.classList.add("removeStockItem");
//     a2s.setAttribute("data-toggle", "modal");
//     a2s.setAttribute("href", "#removeModal");
//     a2s.setAttribute("role", "button");
//     i2s.classList.add("fa");
//     i2s.classList.add("fa-close")
//     i2s.classList.add("text-danger")
//
//     td1s.innerHTML=`${data2[i].name}`;
//     td2s.innerHTML= `${data2[i].quantity}`;
//     spans.innerHTML=`${data2[i].price} EGP`;
//
//     document.querySelector('#stockTableBody').append(trs);
//     document.querySelector(`#s${i}`).append(td1s);
//     document.querySelector(`#s${i}`).append(td2s);
//     document.querySelector(`#s${i}`).append(td3s);
//     document.querySelector(`#td3s${i}`).append(spans);
//     document.querySelector(`#s${i}`).append(td4s);
//     document.querySelector(`#td4s${i}`).append(a1s);
//     document.querySelector(`#td4s${i}`).append(a2s);
//     document.querySelector(`#a1s${data2[i].name}`).append(i1s);
//     document.querySelector(`#a2s${data2[i].name}`).append(i2s);
//
//     console.log(`i`);
//
//   }
// }
// xhr1.send()

$(function () {
    $(".homeBtn").click(function (event) {
        event.preventDefault();
        $('.pageLoaderSection').addClass('pageLoader');
        $('#mainNavbar').children().removeClass('active');
        $('.homeBtn').addClass('active');
        $('#customerServices').hide();
        $('#stockManagement').hide();
        $('#stuffManagement').hide();
        $('#menuManagement').hide();
        $('#feedbackSection').hide();
        $('#ordersSection').hide();
        setTimeout(function () {
            $('.pageLoaderSection').removeClass('pageLoader');
            window.location.href = '/manager';
        }, 1000);
    });

    $(".stockManageBtn").click(function (event) {
        event.preventDefault();
        $('.pageLoaderSection').addClass('pageLoader');
        $('#mainNavbar').children().removeClass('active');
        $('li.stockManageBtn').addClass('active');
        $('#managerHome').hide();
        $('#customerServices').hide();
        $('#stuffManagement').hide();
        $('#menuManagement').hide();
        $('#feedbackSection').hide();
        $('#ordersSection').hide();
        setTimeout(function () {
            $('.pageLoaderSection').removeClass('pageLoader');
            window.location.href = '/stock';
        }, 1000);
    });

    $(".stuffManageBtn").click(function (event) {
        event.preventDefault();

        $('.pageLoaderSection').addClass('pageLoader');
        $('#mainNavbar').children().removeClass('active');
        $('li.stuffManageBtn').addClass('active');
        $('#managerHome').hide();
        $('#customerServices').hide();
        $('#stockManagement').hide();
        $('#menuManagement').hide();
        $('#feedbackSection').hide();
        $('#ordersSection').hide();
        setTimeout(function () {
            $('.pageLoaderSection').removeClass('pageLoader');

            window.location.href = '/staff';
        }, 1000);

    });



    $(".customerServiceBtn").click(function (event) {
        event.preventDefault();
        $('.pageLoaderSection').addClass('pageLoader');
        $('#mainNavbar').children().removeClass('active');
        $('li.customerServiceBtn').addClass('active');
        $('#managerHome').hide();
        $('#stockManagement').hide();
        $('#stuffManagement').hide();
        $('#menuManagement').hide();
        $('#feedbackSection').hide();
        $('#ordersSection').hide();
        setTimeout(function () {
            $('.pageLoaderSection').removeClass('pageLoader');
            window.location.href = '/customerManagement';
        }, 1000);
    });

    $(".menuManageBtn").click(function (event) {
        event.preventDefault();
        $('.pageLoaderSection').addClass('pageLoader');
        $('#mainNavbar').children().removeClass('active');
        $('li.menuManageBtn').addClass('active');
        $('#managerHome').hide();
        $('#customerServices').hide();
        $('#stockManagement').hide();
        $('#stuffManagement').hide();
        $('#feedbackSection').hide();
        $('#ordersSection').hide();
        setTimeout(function () {
            $('.pageLoaderSection').removeClass('pageLoader');
            window.location.href = '/menuManagement';
        }, 1000);
    });


    // $(document).ready(() => {
    //     $('#managerHome').hide();
    //     setTimeout(function () {
    //         $('.pageLoaderSection').hide();
    //         $('#otherPages').load('customerManagement.html #customerServices');
    //     }, 1);
    // });

    //************************* STUFF PAGE *****************************//
    var roleChosen;
    var optionalFiring;
    var editedname;
    var editedsalary;
    var editedrole;
    var optionalediting;
    var buttonID;

    // Firing Stuff Member
    $("body").on("click", ".fireStuffMember", function (event) {
        optionalFiring = $(this).parent().parent();
        buttonID = $(this).attr('id')
    });

    $("body").on("click", "#btnFire", function (event) {

        event.preventDefault();
        const xhl4 = new XMLHttpRequest;
        xhl4.open('POST', '/fire');
        xhl4.onload = () => {

            const data = JSON.parse(xhl4.responseText);
            console.log(data)
        }

        const data = new FormData();
        data.append('name', buttonID);
        xhl4.send(data);

        optionalFiring.remove();
        $('#fireModal').modal('hide');
    });

    // Editing Stuff Member
    $("body").on("click", ".editStuffMember", function (event) {
        optionalediting = $(this).parent().parent();
        buttonID = $(this).attr('id')
    });

    $("body").on("click", ".roleItemChosen", function (event) {
        editedrole = $(this).html();
        $('#editStaffRole').attr('placeholder', editedrole);
    });

    $("body").on("click", "#btnEdit", function (event) {
        if ($('#editStaffName').val() != '') {
            editedname = $('#editStaffName').val();
        }

        const data = new FormData();
        data.append('name', buttonID);
        data.append('job', editedrole);

        if ($('#editStaffSalary').val() != '') {
            editedsalary = $('#editStaffSalary').val();
            data.append('salary', editedsalary);
        }
        event.preventDefault();
        const xhl4 = new XMLHttpRequest;
        xhl4.open('POST', '/edit1');
        xhl4.onload = () => {

            const data = JSON.parse(xhl4.responseText);
            console.log(data)
        }
        xhl4.send(data);



        $(optionalediting).find(".stuffMemberName").html(editedname);
        $(optionalediting).find(".stuffMemberRole").html(editedrole);
        $(optionalediting).find(".stuffMemberSalary").html(editedsalary);
        $('#editModal').modal('hide');
        $('#editStaffName').val("");
        $('#editStaffRole').attr('placeholder', 'Edit Role');
        $('#editStaffSalary').val("");
    });

    // Hiring Stuff Member
    $("body").on("click", ".roleItemChosen", function (event) {
        roleChosen = $(this).html();
        $('#hireStaffRole').attr('placeholder', roleChosen);
    });

    $("body").on("click", "#btnHire", function (event) {
        var hireName = $("#hireStaffName").val();
        var hireSalary = $("#hireStaffSalary").val();
        console.log(hireStaffRole)
        event.preventDefault();
        const xhl4 = new XMLHttpRequest;
        xhl4.open('POST', '/hire');
        xhl4.onload = () => {
            const data = JSON.parse(xhl4.responseText);

            alert("Your new Employee code is: " + data.code)
        }
        const data = new FormData();
        data.append('hireName', hireName);
        data.append('hireSalary', hireSalary);
        data.append('hireStaffRole', roleChosen)
        xhl4.send(data);


        $("#stuffTableBody").append('<tr><td>' + hireName + '</td><td>' + roleChosen + '</td><td>' + hireSalary + ' EGP</td><td class="text-nowrap"><a href="#" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil text-inverse m-r-10"></i></a><a class="fireStuffMember" data-toggle="modal" href="#fireModal" role="button"><i class="fa fa-close text-danger"></i></a></td></tr>');
        $('#hireModal').modal('hide');
        $("#hireStaffName").val("");
        $('#hireStaffRole').attr('placeholder', 'Role');
        $("#hireStaffSalary").val("");
    });



    //************************* STOCK PAGE *****************************//
    var optionalRemoving;
    var editedprice;
    var editedQuantity;
    var optionalediting;

    // Removing Stock Item
    $("body").on("click", ".removeStockItem", function (event) {
        optionalRemoving = $(this).parent().parent();
        buttonID = $(this).attr('id');
    });

    $("body").on("click", "#btnRemove", function (event) {

        event.preventDefault();
        const xhl4 = new XMLHttpRequest;
        xhl4.open('POST', '/remove');
        xhl4.onload = () => {

            const data = JSON.parse(xhl4.responseText);
            console.log(data)
        }

        const data = new FormData();
        data.append('name', buttonID);
        xhl4.send(data);

        optionalRemoving.remove();
        $('#removeModal').modal('hide');
    });

    // Editing Stock Item
    $("body").on("click", ".editStockItem", function (event) {
        optionalediting = $(this).parent().parent();
        buttonID = $(this).attr('id');
    });

    $("body").on("click", "#btnEdit", function (event) {

        const data = new FormData();
        data.append('name', buttonID);

        if ($('#editItemQuantity').val() != '') {
            editedQuantity = $('#editItemQuantity').val();
            data.append('quantity', editedQuantity);
        }
        if ($('#editItemPrice').val() != '') {
            editedprice = $('#editItemPrice').val();
            data.append('price', editedprice);
        }

        event.preventDefault();
        const xhl4 = new XMLHttpRequest;
        xhl4.open('POST', '/edit');
        xhl4.onload = () => {

            const data = JSON.parse(xhl4.responseText);
            console.log(data)
        }
        xhl4.send(data);


        $(optionalediting).find(".stockItemQuantity").html(editedQuantity);
        $(optionalediting).find(".stockItemPrice").html(editedprice);
        $('#editModal').modal('hide');
        $('#editItemQuantity').val("");
        $('#editItemPrice').val("");
    });

    // Adding Stock Item
    $("body").on("click", "#btnAdd", function (event) {
        var itemName = $("#addItemName").val();
        var itemQuantity = $("#addItemQuantity").val();
        var itemPrice = $("#addItemPrice").val();

        event.preventDefault();
        const xhl4 = new XMLHttpRequest;
        xhl4.open('POST', '/create');
        xhl4.onload = () => {
            const data = JSON.parse(xhl4.responseText);

            console.log(data)
        }
        const data = new FormData();
        data.append('itemName', itemName);
        data.append('itemQuantity', itemQuantity);
        data.append('itemPrice', itemPrice)
        xhl4.send(data);

        $("#stockTableBody").append('<tr><td>' + itemName + '</td><td>' + itemQuantity + '</td><td>' + itemPrice + ' EGP</td><td class="text-nowrap"><a class="editStockItem" data-toggle="modal" href="#editModal" role="button"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a><a class="removeStockItem" data-toggle="modal" href="#removeModal" role="button"><i class="fa fa-close text-danger"></i></a></td></tr>');
        $('#addModal').modal('hide');
        $("#addItemName").val("");
        $("#addItemQuantity").val("");
        $("#addItemPrice").val("");
    });

    //************************* MENU PAGE / OFFERS SECTION *****************************//
    var optionalRemoving;
    var editedprice;
    var editedname;
    var optionalediting;
    var offerChosen;

    // Removing Offer
    $("body").on("click", ".removeOffer", function (event) {
        optionalRemoving = $(this).parent().parent();
        buttonID = $(this).attr('id');
    });

    $("body").on("click", "#btnOfferRemove", function (event) {
        optionalRemoving.remove();
        event.preventDefault();
        const xhl5 = new XMLHttpRequest;
        xhl5.open('POST', '/remove_menu');
        xhl5.onload = () => {

            const data = JSON.parse(xhl5.responseText);
            console.log(data)
        }

        const data = new FormData();
        data.append('name', buttonID);
        xhl5.send(data);
        $('#removeOfferModal').modal('hide');
    });

    // Editing Offer
    $("body").on("click", ".editOffer", function (event) {
        optionalediting = $(this).parent().parent();
        buttonID = $(this).attr('id');
    });


    $("body").on("click", "#btnOfferEdit", function (event) {
        const data = new FormData()
        data.append('name', buttonID);
        if ($('#editOfferName').val() != '') {
            editedname = $('#editOfferName').val();
            data.append('new_name', editedname);
        }
        if ($('#editOfferPrice').val() != '') {
            editedprice = $('#editOfferPrice').val();
            data.append('price', editedprice);
        }


        event.preventDefault();
        const xhl4 = new XMLHttpRequest;
        xhl4.open('POST', '/edit_menu');
        xhl4.onload = () => {

            const data = JSON.parse(xhl4.responseText);
            console.log(data)
        }
        xhl4.send(data);
        $(optionalediting).find(".offerName").html(editedname);
        $(optionalediting).find(".offerPrice").html(editedprice);
        $('#editOfferModal').modal('hide');
        $('#editOfferName').val("");
        $('#editOfferPrice').val("");
    });

    // Adding Offer
    $("body").on("click", ".offerItemChosen", function (event) {
        offerChosen = $(this).html();
        $('#offerRole').attr('placeholder', offerChosen);
    });

    $("body").on("click", "#btnAddOffer", function (event) {
        var itemName = $("#addOfferName").val();
        var itemPrice = $("#addOfferPrice").val();
        if (offerChosen == 'OFFER') {
            $(".offerSectionBody").append('<div class="col-lg-3 col-md-4 col-sm-6 "><div class="center-text mb-30"><div class="ïmg-200x mlr-auto pos-relative"><h6 class="ribbon-cont offer color-white"><div class="ribbon primary"></div><b>OFFER</b></h6><img src="static/images/margherita.png" alt=""></div><h5 class="mt-20 offerName">' + itemName + '</h5><h4 class="mt-5 color-primary offerPrice"><b>' + itemPrice + ' EGP</b></h4><a class="editOffer" data-toggle="modal" href="#editModal" role="button"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a><a class="removeOffer" data-toggle="modal" href="#removeModal" role="button"><i class="fa fa-close text-danger"></i></a></div></div>');
        } else if (offerChosen == 'SPECIALITY') {
            $(".offerSectionBody").append('<div class="col-lg-3 col-md-4 col-sm-6 "><div class="center-text mb-30"><div class="ïmg-200x mlr-auto pos-relative"><h6 class="ribbon-cont ribbonSpecialities color-white"><div class="ribbon secondary"></div><b>SPECIALITY</b></h6><img src="static/images/margherita.png" alt=""></div><h5 class="mt-20 offerName">' + itemName + '</h5><h4 class="mt-5 color-primary offerPrice"><b>' + itemPrice + ' EGP</b></h4><a class="editOffer" data-toggle="modal" href="#editModal" role="button"> <i class="fa fa-pencil text-inverse m-r-10"></i> </a><a class="removeOffer" data-toggle="modal" href="#removeModal" role="button"><i class="fa fa-close text-danger"></i></a></div></div>');
        }

        event.preventDefault();
        const xhl4 = new XMLHttpRequest;
        xhl4.open('POST', '/create_offer');
        xhl4.onload = () => {
            const data = JSON.parse(xhl4.responseText);

            console.log(data)
        }
        const data = new FormData();
        data.append('itemName', itemName);
        data.append('offerChosen', offerChosen);
        data.append('itemPrice', itemPrice)
        xhl4.send(data);

        $('#addOfferModal').modal('hide');
        $("#addOfferName").val("");
        $('#offerRole').attr('placeholder', 'OFFER/SPECIALITY');
        $("#addOfferPrice").val("");
    });

    //************************* MENU PAGE / MENU SECTION *****************************//
    var optionalRemoving;
    var editedname;
    var editedprice;
    var editedingredients;
    var optionalediting;

    // Removing Menu Item
    $("body").on("click", ".removeMenuItem", function (event) {
        optionalRemoving = $(this).parent().parent().parent().parent();
        buttonID = $(this).attr('id');
    });

    $("body").on("click", "#btnMenuItemRemove", function (event) {
        optionalRemoving.remove();
        event.preventDefault();
        const xhl5 = new XMLHttpRequest;
        xhl5.open('POST', '/remove_menu');
        xhl5.onload = () => {

            const data = JSON.parse(xhl5.responseText);
            console.log(data)
        }

        const data = new FormData();
        data.append('name', buttonID);
        xhl5.send(data);

        $('#removeMenuItemModal').modal('hide');
    });

    // Editing Menu Item
    $("body").on("click", ".editMenuItem", function (event) {
        optionalediting = $(this).parent().parent();
        buttonID = $(this).attr('id');
    });

    $("body").on("click", "#btnMenuItemEdit", function (event) {

        const data = new FormData();
        data.append('name', buttonID);


        if ($('#editItemName').val() != '') {
            editedname = $('#editItemName').val();
            data.append('new_name', editedname);

        }
        if ($('#editItemIngredients').val() != '') {
            editedingredients = $('#editItemIngredients').val();
            data.append('parag', editedingredients);
        }
        if ($('#editMenuItemPrice').val() != '') {
            editedprice = $('#editMenuItemPrice').val();
            data.append('price', editedprice)
        }
        event.preventDefault();
        const xhl4 = new XMLHttpRequest;
        xhl4.open('POST', '/edit_menu');
        xhl4.onload = () => {

            const data = JSON.parse(xhl4.responseText);
            console.log(data)
        }
        xhl4.send(data);
        $(optionalediting).find(".menuItemName").html(editedname);
        $(optionalediting).find(".menuItemIngredients").html(editedingredients);
        $(optionalediting).find(".menuItemPrice").html(editedprice);
        $('#editMenuItemModal').modal('hide');
        $('#editItemName').val("");
        $('#editItemIngredients').val("");
        $('#editMenuItemPrice').val("");
    });

    // Adding Menu Item
    $("body").on("click", "#btnAddMenuItem", function (event) {
        var itemName = $("#addItemName").val();
        var itemIngredients = $("#addItemIngredients").val();
        var itemPrice = $("#addItemPrice").val();
        $(".menuSectionBody").append('<div class="col-md-6"><div class="sided-90x mb-30 "><div class="s-left"><img class="br-3" src="static/images/menu-1-120x120.jpg" alt="Menu Image"></div><div class="s-right"><h5 class="mb-10"><b>' + itemName + '</b><b class="color-primary float-right">' + itemPrice + ' EGP</b></h5><p class="pr-70">' + itemIngredients + '</p><div class="menuItemBtns float-right"><a class="editMenuItem" data-toggle="modal" href="#editModal" role="button"><i class="fa fa-pencil text-inverse m-r-10"></i></a><a class="removeMenuItem" data-toggle="modal" href="#removeModal" role="button"><i class="fa fa-close text-danger"></i></a></div></div></div></div>');

        event.preventDefault();
        const xhl4 = new XMLHttpRequest;
        xhl4.open('POST', '/create_menu');
        xhl4.onload = () => {
            const data = JSON.parse(xhl4.responseText);

            console.log(data)
        }
        const data = new FormData();
        data.append('itemName', itemName);
        data.append('parag', itemIngredients);
        data.append('itemPrice', itemPrice)
        xhl4.send(data);

        $('#addMenuItemModal').modal('hide');
        $("#addItemName").val("");
        $("#addItemIngredients").val("");
        $("#addItemPrice").val("");
    });

    /********************************** FEEDBACK **********************************/
    $(".feedbackManageBtn").click(function (event) {
        event.preventDefault();
        $('#customerServicesHome').hide();
        $('#customerServices').load('feedback.html #feedbackSection');
    });
});