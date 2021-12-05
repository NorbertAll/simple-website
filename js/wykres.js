window.onload = function () {

    var options = {
        title: {
            text: "Głowne obszary w których działa nasza firma"
        },
        subtitles: [{
            text: "Grudzień, 2019"
        }],
        animationEnabled: true,
        data: [{
            type: "pie",
            startAngle: 40,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 48.36, label: "Systemy Operacyjne Szpitali" },
                { y: 26.85, label: "Sztuczna inteligencja w medycynie" },
                { y: 1.49, label: "Oprogramowanie Aptek" },
                { y: 6.98, label: "Bezpieczeństwo" },
                { y: 6.53, label: "Aplikacje mobilne dla pacjentów" },
                { y: 2.45, label: "Stony internetowe" },
                { y: 3.32, label: "Sklepy" },
                { y: 4.03, label: "Others" }
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);

}