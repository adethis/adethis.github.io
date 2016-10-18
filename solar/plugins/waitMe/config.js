$(function () {
    initLoading();
});

//Init Loading
function initLoading() {
    $('[data-toggle="cardloading"]').on('click', function () {
        var effect = $(this).data('loadingEffect');
        var $loading = $("#page-content").waitMe({
            effect: effect,
            text: 'Loading...',
            bg: 'rgb(153, 153, 159)',
            color: '#fff'
        });

        setTimeout(function () {
            //Loading hide
            $loading.waitMe('hide');
        }, 3200);
    });
    $('[data-target="#dashboard"]').on('click', function () {
        var effect = $(this).data('loadingEffect');
        var $loading = $("#dashboard").waitMe({
            effect: effect,
            text: 'Loading...',
            bg: '#fff',
            color: '#666'
        });

        setTimeout(function () {
            //Loading hide
            $loading.waitMe('hide');
        }, 2200);
    });
    $('[data-target="#supplier"]').on('click', function () {
        var effect = $(this).data('loadingEffect');
        var $loading = $("#supplier").waitMe({
            effect: effect,
            text: 'Loading...',
            bg: '#fff',
            color: '#666'
        });

        setTimeout(function () {
            //Loading hide
            $loading.waitMe('hide');
        }, 2200);
    });
    $('[data-target="#customer"]').on('click', function () {
        var effect = $(this).data('loadingEffect');
        var $loading = $("#customer").waitMe({
            effect: effect,
            text: 'Loading...',
            bg: '#fff',
            color: '#666'
        });

        setTimeout(function () {
            //Loading hide
            $loading.waitMe('hide');
        }, 2200);
    });
    $('#refreshSupplier').on('click', function () {
        var effect = $(this).data('loadingEffect');
        var $loading = $("table").waitMe({
            effect: effect,
            text: 'Refresh...',
            bg: '#fff',
            color: '#666'
        });

        setTimeout(function () {
            //Loading hide
            $loading.waitMe('hide');
        }, 2200);
    });
    $('#refreshCustomer').on('click', function () {
        var effect = $(this).data('loadingEffect');
        var $loading = $("table").waitMe({
            effect: effect,
            text: 'Refresh...',
            bg: '#fff',
            color: '#666'
        });

        setTimeout(function () {
            //Loading hide
            $loading.waitMe('hide');
        }, 2200);
    });
    $('#refreshReporting').on('click', function () {
        var effect = $(this).data('loadingEffect');
        var $loading = $("table").waitMe({
            effect: effect,
            text: 'Refresh...',
            bg: '#fff',
            color: '#666'
        });

        setTimeout(function () {
            //Loading hide
            $loading.waitMe('hide');
        }, 2200);
    });
    $('#refreshTransaction').on('click', function () {
        var effect = $(this).data('loadingEffect');
        var $loading = $("table").waitMe({
            effect: effect,
            text: 'Refresh...',
            bg: '#fff',
            color: '#666'
        });

        setTimeout(function () {
            //Loading hide
            $loading.waitMe('hide');
        }, 2200);
    });
    $('#refreshStepTransaction').on('click', function () {
        var effect = $(this).data('loadingEffect');
        var $loading = $(".stepContainer").waitMe({
            effect: effect,
            text: 'Refresh...',
            bg: '#fff',
            color: '#666'
        });

        setTimeout(function () {
            //Loading hide
            $loading.waitMe('hide');
        }, 2200);
    });
}