export function numberWithCommas(x, separator = ',') {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, `$1${separator}$2`);
    return x;
}