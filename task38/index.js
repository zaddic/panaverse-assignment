function describe_city(name, country) {
    if (name === void 0) { name = 'Islamabad'; }
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(name, " is in ").concat(country));
}
describe_city();
describe_city('Lahore', 'Pakistan');
describe_city('Madina', 'Saudia Arabia');
