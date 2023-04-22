const continentDropdown = document.getElementById('continent');
const countryDropdown = document.getElementById('country');
const cityDropdown = document.getElementById('city');

const countries = {
    krishnagiri: ['Dharmapuri', 'krishnagiri', 'Tirupattur Division', 'Bommidi Division', 'Vellore Division', 'Pochampalli Division'],
    chennai: ['Cuddalore', 'Head Office', 'Porur Division', 'T Nagar Division', 'Chengalpet Division', 'Tambaram Division', 'Ambattur Division'],
    salem: ['Salem Central', 'Pudukkottai', 'Salem Division', 'Namakkal Division', 'Thanjavur Division'],
    coimbatore: ['Coimbatore 2 Division', 'Dindigul Division', 'Coimbatore 1 Division'],
};

const cities = {
    Dharmapuri: ['Dharmapuri'],
    krishnagiri: ['krishnagiri'],
    'Tirupattur Division': ['Arani', 'Tirupattur', 'Tiruvannamalai'],
    'Bommidi Division': ['Palacode', 'Bommidi'],
    'Vellore Division': ['Officers Line', 'Long Bazaar'],
    'Pochampalli Division': ['Pochampalli', 'Kaveripattinam', 'Hosur'],

    Cuddalore: ['Cuddalore'],
    'Head Office': ['Head Office'],
    'Porur Division': ['Porur', 'KK Nagar 2'],
    'T Nagar Division': ['Parrys', 'T Nagar', 'Mylapore', 'KK Nagar 1'],
    'Chengalpet Division': ['Chengalpet', 'Kanchipuram'],
    'Tambaram Division': ['Tambaram', 'Madipakkam'],
    'Ambattur Division': ['Ambattur', 'Purasawalkam'],

    'Salem Central': ['Salem Central'],
    Pudukkottai: ['Pudukkottai'],
    'Salem Division': ['Salem', 'Edappadi', 'Rasipuram', 'Omalur', 'Tiruchengode'],
    'Namakkal Division': ['Namakkal', 'Attur'],
    'Thanjavur Division': ['Kumbakonam', 'Thanjavur'],


    'Coimbatore 2 Division': ['Coimbatore 2', 'Erode 2'],
    'Dindigul Division': ['Dindigul', 'Karur'],
    'Coimbatore 1 Division': ['Coimbatore 1', 'Erode 1'],
};

continentDropdown.addEventListener('change', () => {
    const selectedContinent = continentDropdown.value;
    // Clear the country and city dropdowns
    countryDropdown.innerHTML = '<option value="">Select a Division</option>';
    cityDropdown.innerHTML = '<option value="">Select a Branch</option>';
    // Populate the country dropdown with the countries for the selected continent
    countries[selectedContinent].forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryDropdown.appendChild(option);
    });
});

countryDropdown.addEventListener('change', () => {
    const selectedCountry = countryDropdown.value;
    // Clear the city dropdown
    cityDropdown.innerHTML = '<option value="">Select a Branch</option>';
    // Populate the city dropdown with the cities for the selected country
    cities[selectedCountry].forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        cityDropdown.appendChild(option);
    });
});

function myfunction() {}