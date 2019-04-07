console.log("He pasado el body y llegado a los scripts");

Highcharts.chart('container', 
{
    chart: {
        type: 'column'
    },
    title: {
        text: 'Partidos Ganados Vs Perdidos'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
        text: 'Porcentaje'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
        borderWidth: 0,
        dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
        }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> de partidos<br/>'
    },
    "series": 
    [
        {
        "name": "Datos",
        "colorByPoint": true,
        "data": [
            {
            "name": "Partidos Ganados",
            "y": 62.74,
            
            },
            {
            "name": "Partidos Perdidos",
            "y": 37.26,
            
            }
        ]
        }
    ]
});        


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

