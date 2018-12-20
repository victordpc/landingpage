"use strict";



$(function () {

    $("#calcular").on("click", mostrarResultados);

    $('.slider').on('input change', function () {
        $(this).next($('.slider_label')).html(this.value);
    });
    $('.slider_label').each(function () {
        var value = $(this).prev().attr('value');
        $(this).html(value);
    });

});

function mostrarResultados() {
    $("#calcular").hide();
    let dato =0;

    $(".slider").each(
        function () {
            dato+=parseFloat($(this)[0].value);
        }
    );

    let nuevoElemento = $("<p></p>");
    nuevoElemento.text("Tu resultado es:")
    let resultado = $("<meter></meter>");
    resultado.attr('value', 100-dato);
    resultado.attr('min', 0);
    resultado.attr('max', 100);
    resultado.attr('low', 40);
    resultado.attr('high', 90);
    resultado.attr('optimum', 100);
    nuevoElemento.append(resultado);
    // value=\"91\" min="0" max="100" low="40" high="90" optimum="100"
    $("#resultados").append(nuevoElemento);
}

// resultados = {
//     'Coco': 17.41,
//     'FindingNemo': 22.18,
//     'IntoTheWoods': 42.72,
//     'Brave': 75.16,
//     'Thor': 26.74,
//     'LittleMermaid': 33.88,
//     'TheLionKingIIIHakunaMatata': 2.93,
//     'AliceInWonderland': 43.22,
//     'Deadpool': 11.73,
//     'TheRescuersDownUnder': 9.47,
//     'Aladdin': 10.93,
//     'Logan': 18.2,
//     'Aristocats': 39.47,
//     'BeautyAndTheBeastTheEnchantedChristmas': 31.5,
//     'TheAvengersInfinityWar': 13.27,
//     'TheChroniclesOfNarniaTheLionTheWitchAndTheWardrobe': 36.95,
//     'Hercules': 19.88,
//     'Cars': 11.25,
//     'Tron': 9.18,
//     'TheAvengersAgeOfUltron': 18.51,
//     'Cars2': 1.50,
//     'HighSchoolMusical': 45.72,
//     'BeautyAndTheBeast': 22.92,
//     'CampRock2TheFinalJam': 39.79,
//     'TheLastJedi': 31.56,
//     '17Again': 24.33,
//     'GuardiansOfTheGalaxyVol2': 24.0,
//     'RogeOne': 14.78,
//     'TheIncredibles': 37.44,
//     'HighSchoolMusical2': 42.79,
//     'FindingDory': 50.65,
//     'CampRock': 50.27,
//     'IronMan2': 14.8,
//     'Mulan': 20.2,
//     'TheLionKingIISimbasPride': 33.4,
//     'TronLegacy': 8.81,
//     'PiratesOfTheCaribbeanDeadMansChest': 14.8,
//     'CaptainAmericaCivilWar': 14.39,
//     'HunchbackOfNotreDame': 13.4,
//     'HighSchoolMusical3': 54.11,
//     'Frozen': 42.61,
//     'TheSleepingBeauty': 64.11,
//     'TheLionKing': 8.97,
//     'TheAvengers': 12.26,
//     'AladdinIITheReturnOfJafar': 9.2,
//     'InsideOut': 70.9,
//     'AGoofyMovie': 9.28,
//     'TheNightmareBeforeChristmas': 15.15,
//     'Zootropia': 44.44,
//     'AntMan': 14.96,
//     'PiratesOfTheCaribbean': 17.57,
//     'TheJungleBook': 10.31,
//     'ThorRagnarock': 15.58,
//     'Up': 7.221,
//     'Frankenweenie': 21.72,
//     'StarWarsEpisodeVIITheForceAwakens': 23.52,
//     'Wall-E': 12.6,
//     'AladdinIIIAndTheKingOfThieves': 7.49,
//     'MaryPoppins': 42.55
// }