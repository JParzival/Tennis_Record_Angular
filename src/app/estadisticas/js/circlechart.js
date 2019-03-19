Highcharts.chart('containerCircle', 
{
    title: {
    text: 'Juegos Ganados y Perdidos'
    },

    xAxis: {
    categories: []
    },

    series: [
    {
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data: 
        [
            ['Juegos Ganados', 87, false],
            ['Juegos Perdidos', 51, false],
        ],
        showInLegend: true
    }]
});
