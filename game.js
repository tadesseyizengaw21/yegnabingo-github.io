

let bingoCardIds = [];
let selectedCardIds = []; // Array to store selected bingo card IDs
let calledNumbers = [];

// Define a function to play sound
function playSound(fileName) {
    const audio = new Audio('sa/' + fileName);
    audio.play();
}

function generateBingoCardIds() {
    const tableBody = document.querySelector('#bingoCardIds tbody');
    const customCardConfigurations = [
    { cardId: 1, cells: [['15', '16', '39', '59', '66'], ['11', '28', '40', '51', '68'], ['12', '20', 'F', '56', '67'], ['3', '30', '35', '60', '72'], ['10', '24', '37', '53', '64']] },
        { cardId: 2, cells: [['5', '21', '35', '46', '69'], ['15', '20', '42', '51', '70'], ['10', '28', 'F', '47', '67'], ['2', '26', '31', '49', '64'], ['6', '27', '33', '52', '65']] },
        { cardId: 3, cells: [['14', '23', '40', '58', '62'], ['13', '25', '32', '46', '65'], ['3', '28', 'F', '50', '63'], ['6', '16', '36', '48', '72'], ['12', '20', '45', '52', '61']] },
        { cardId: 4, cells: [['1', '19', '41', '49', '72'], ['5', '26', '36', '50', '69'], ['6', '29', 'F', '60', '61'], ['14', '25', '42', '47', '71'], ['2', '24', '45', '54', '65']] },
        { cardId: 5, cells: [['2', '16', '43', '47', '70'], ['4', '23', '32', '58', '73'], ['9', '17', 'F', '51', '74'], ['1', '26', '34', '59', '75'], ['14', '20', '31', '57', '72']] },
        { cardId: 6, cells: [['3', '28', '42', '46', '70'], ['15', '18', '36', '53', '64'], ['14', '20', 'F', '55', '67'], ['6', '21', '45', '57', '73'], ['11', '30', '41', '60', '62']] },
        { cardId: 7, cells: [['15', '28', '39', '58', '65'], ['10', '19', '34', '54', '68'], ['3', '17', 'F', '59', '71'], ['9', '16', '45', '51', '66'], ['14', '24', '36', '49', '64']] },
        { cardId: 8, cells: [['7', '20', '32', '47', '61'], ['13', '19', '36', '53', '67'], ['9', '21', 'F', '57', '66'], ['4', '18', '38', '59', '68'], ['2', '27', '45', '51', '69']] },
        { cardId: 9, cells: [['5', '26', '33', '56', '75'], ['2', '18', '39', '54', '62'], ['1', '29', 'F', '58', '72'], ['9', '22', '44', '57', '68'], ['13', '17', '42', '55', '67']] },
        { cardId: 10, cells: [['1', '20', '34', '58', '75'], ['13', '18', '40', '59', '69'], ['6', '27', 'F', '52', '67'], ['7', '23', '37', '48', '70'], ['2', '29', '44', '57', '73']] },
        { cardId: 11, cells: [['11', '21', '44', '49', '64'], ['4', '28', '34', '55', '62'], ['2', '26', 'F', '47', '71'], ['14', '29', '41', '48', '73'], ['5', '24', '31', '51', '63']] },
        { cardId: 12, cells: [['9', '20', '35', '59', '66'], ['1', '26', '43', '56', '72'], ['6', '16', 'F', '58', '64'], ['12', '22', '41', '49', '61'], ['2', '18', '38', '51', '69']] },
        { cardId: 13, cells: [['11', '16', '45', '60', '73'], ['1', '26', '44', '55', '69'], ['4', '29', 'F', '47', '72'], ['9', '28', '31', '51', '64'], ['14', '23', '40', '59', '68']] },
        { cardId: 14, cells: [['5', '18', '45', '58', '67'], ['1', '27', '42', '50', '65'], ['7', '28', 'F', '54', '64'], ['2', '21', '43', '60', '74'], ['10', '24', '32', '51', '71']] },
        { cardId: 15, cells: [['5', '30', '38', '48', '71'], ['1', '22', '42', '60', '62'], ['2', '18', 'F', '50', '65'], ['3', '29', '33', '46', '75'], ['12', '17', '32', '55', '66']] },
        { cardId: 16, cells: [['7', '23', '45', '55', '62'], ['3', '27', '42', '60', '71'], ['12', '21', 'F', '57', '66'], ['4', '24', '41', '49', '68'], ['13', '17', '44', '50', '75']] },
        { cardId: 17, cells: [['10', '28', '32', '59', '72'], ['3', '27', '40', '47', '653'], ['13', '24', 'F', '57', '71'], ['2', '21', '41', '60', '68'], ['7', '25', '42', '58', '65']] },
        { cardId: 18, cells: [['13', '27', '33', '51', '63'], ['7', '22', '42', '48', '61'], ['10', '25', 'F', '54', '65'], ['8', '16', '43', '52', '72'], ['14', '23', '38', '60', '74']] },
        { cardId: 19, cells: [['1', '22', '39', '51', '62'], ['15', '25', '35', '47', '75'], ['3', '23', 'F', '50', '66'], ['8', '26', '44', '49', '70'], ['4', '28', '38', '53', '67']] },
        { cardId: 20, cells: [['9', '19', '35', '54', '73'], ['8', '23', '43', '57', '61'], ['4', '24', 'F', '58', '68'], ['11', '17', '32', '50', '62'], ['1', '26', '38', '49', '75']] },
        { cardId: 21, cells: [['8', '18', '39', '54', '63'], ['2', '30', '37', '57', '75'], ['13', '29', 'F', '56', '68'], ['15', '27', '31', '49', '67'], ['6', '17', '45', '52', '61']] },
        { cardId: 22, cells: [['6', '26', '44', '55', '62'], ['13', '19', '32', '60', '61'], ['9', '25', 'F', '49', '75'], ['3', '20', '40', '46', '65'], ['8', '27', '31', '56', '71']] },
        { cardId: 23, cells: [['1', '27', '40', '54', '73'], ['4', '17', '33', '46', '68'], ['7', '16', 'F', '48', '63'], ['9', '23', '36', '56', '66'], ['11', '21', '34', '50', '74']] },
        { cardId: 24, cells: [['9', '19', '40', '46', '75'], ['8', '26', '31', '48', '67'], ['1', '24', 'F', '59', '65'], ['7', '20', '39', '49', '70'], ['12', '27', '43', '57', '73']] },
        { cardId: 25, cells: [['3', '23', '40', '53', '75'], ['1', '27', '45', '51', '68'], ['4', '28', 'F', '46', '73'], ['14', '29', '35', '56', '61'], ['9', '30', '41', '52', '74']] },
        { cardId: 26, cells: [['10', '25', '37', '53', '65'], ['14', '29', '38', '58', '69'], ['2', '28', 'F', '56', '68'], ['6', '22', '35', '57', '70'], ['3', '18', '45', '60', '67']] },
        { cardId: 27, cells: [['11', '26', '39', '51', '75'], ['3', '28', '33', '56', '67'], ['10', '24', 'F', '58', '74'], ['7', '18', '45', '53', '69'], ['13', '30', '44', '47', '64']] },
        { cardId: 28, cells: [['8', '17', '42', '52', '74'], ['2', '24', '39', '56', '63'], ['14', '16', 'F', '60', '62'], ['9', '21', '31', '47', '72'], ['15', '18', '35', '54', '70']] },
        { cardId: 29, cells: [['14', '16', '32', '53', '74'], ['15', '21', '34', '59', '65'], ['10', '26', 'F', '55', '66'], ['2', '19', '45', '56', '61'], ['1', '25', '40', '51', '64']] },
        { cardId: 30, cells: [['8', '27', '44', '54', '70'], ['11', '26', '31', '55', '64'], ['9', '19', 'F', '57', '67'], ['6', '23', '41', '49', '62'], ['13', '22', '40', '56', '72']] },
        { cardId: 31, cells: [['3', '27', '31', '46', '71'], ['9', '2', '40', '48', '67'], ['5', '17', 'F', '55', '62'], ['12', '18', '38', '58', '68'], ['4', '25', '36', '54', '73']] },
        { cardId: 32, cells: [['10', '20', '32', '58', '73'], ['15', '28', '34', '56', '61'], ['9', '24', 'F', '50', '75'], ['5', '25', '37', '46', '67'], ['14', '23', '31', '51', '65']] },
        { cardId: 33, cells: [['7', '29', '42', '56', '69'], ['15', '27', '40', '60', '64'], ['1', '18', 'F', '51', '74'], ['4', '16', '38', '57', '67'], ['8', '21', '39', '59', '68']] },
        { cardId: 34, cells: [['4', '17', '31', '46', '70'], ['8', '29', '37', '57', '65'], ['9', '24', 'F', '59', '75'], ['11', '27', '34', '55', '63'], ['3', '22', '36', '48', '73']] },
        { cardId: 35, cells: [['9', '17', '35', '55', '72'], ['14', '24', '45', '52', '68'], ['1', '18', 'F', '48', '66'], ['8', '21', '36', '47', '71'], ['4', '27', '37', '57', '70']] },
        { cardId: 36, cells: [['2', '22', '41', '54', '62'], ['13', '21', '45', '51', '70'], ['15', '30', 'F', '47', '63'], ['4', '26', '39', '50', '75'], ['10', '29', '34', '58', '64']] },
        { cardId: 37, cells: [['1', '21', '32', '54', '65'], ['5', '28', '42', '51', '63'], ['2', '26', 'F', '60', '61'], ['12', '24', '34', '59', '62'], ['15', '17', '43', '57', '72']] },
        { cardId: 38, cells: [['1', '30', '45', '49', '66'], ['9', '24', '42', '56', '69'], ['7', '20', 'F', '52', '74'], ['12', '17', '36', '60', '62'], ['11', '18', '35', '54', '63']] },
        { cardId: 39, cells: [['10', '27', '35', '51', '61'], ['14', '16', '37', '53', '72'], ['1', '25', 'F', '48', '69'], ['11', '26', '41', '58', '70'], ['13', '28', '42', '47', '68']] },
        { cardId: 40, cells: [['14', '17', '34', '54', '63'], ['10', '28', '43', '55', '70'], ['7', '16', 'F', '58', '71'], ['15', '24', '41', '59', '69'], ['6', '29', '36', '57', '64']] },
        { cardId: 41, cells: [['5', '18', '31', '52', '62'], ['10', '21', '43', '56', '66'], ['9', '28', 'F', '59', '69'], ['14', '25', '40', '48', '68'], ['6', '20', '35', '47', '71']] },
        { cardId: 42, cells: [['11', '20', '43', '49', '75'], ['10', '25', '33', '58', '74'], ['15', '17', 'F', '50', '67'], ['13', '21', '42', '52', '71'], ['2', '23', '35', '51', '64']] },
        { cardId: 43, cells: [['15', '18', '44', '54', '69'], ['6', '19', '31', '56', '64'], ['13', '16', 'F', '60', '70'], ['8', '27', '35', '55', '66'], ['7', '29', '38', '57', '72']] },
        { cardId: 44, cells: [['11', '28', '35', '47', '72'], ['4', '26', '45', '48', '73'], ['14', '16', 'F', '54', '71'], ['8', '25', '33', '52', '61'], ['7', '22', '44', '57', '68']] },
        { cardId: 45, cells: [['9', '27', '39', '48', '70'], ['6', '20', '38', '51', '63'], ['7', '19', 'F', '55', '68'], ['11', '22', '35', '46', '74'], ['8', '17', '45', '47', '69']] },
        { cardId: 46, cells: [['5', '17', '43', '47', '74'], ['15', '18', '42', '48', '63'], ['11', '21', 'F', '56', '64'], ['4', '23', '39', '54', '66'], ['2', '25', '33', '49', '65']] },
        { cardId: 47, cells: [['5', '17', '38', '46', '70'], ['6', '20', '43', '51', '75'], ['12', '25', 'F', '56', '61'], ['1', '16', '45', '60', '68'], ['4', '26', '35', '53', '74']] },
        { cardId: 48, cells: [['4', '28', '37', '53', '61'], ['2', '19', '31', '49', '62'], ['7', '16', 'F', '56', '64'], ['14', '26', '39', '52', '74'], ['6', '18', '32', '57', '67']] },
        { cardId: 49, cells: [['1', '21', '34', '52', '67'], ['3', '29', '41', '54', '69'], ['10', '24', 'F', '57', '70'], ['8', '26', '35', '53', '72'], ['6', '19', '31', '58', '64']] },
        { cardId: 50, cells: [['3', '17', '36', '49', '69'], ['10', '30', '40', '52', '62'], ['14', '27', 'F', '58', '66'], ['2', '19', '41', '59', '68'], ['15', '18', '42', '47', '64']] },
        { cardId: 51, cells: [['2', '21', '31', '49', '68'], ['12', '20', '45', '54', '69'], ['10', '27', 'F', '48', '75'], ['9', '16', '40', '46', '61'], ['14', '19', '39', '57', '62']] },
        { cardId: 52, cells: [['10', '22', '36', '59', '74'], ['2', '21', '44', '55', '70'], ['11', '26', 'F', '48', '72'], ['15', '23', '40', '57', '75'], ['14', '18', '31', '58', '66']] },
        { cardId: 53, cells: [['15', '30', '35', '59', '69'], ['5', '21', '45', '51', '71'], ['8', '25', 'F', '46', '67'], ['7', '23', '40', '58', '74'], ['11', '29', '42', '54', '72']] },
        { cardId: 54, cells: [['1', '26', '34', '60', '61'], ['6', '18', '35', '52', '66'], ['4', '24', 'F', '50', '69'], ['15', '29', '32', '48', '63'], ['7', '25', '45', '53', '72']] },
        { cardId: 55, cells: [['12', '24', '45', '51', '65'], ['8', '16', '42', '53', '62'], ['15', '19', 'F', '59', '64'], ['7', '25', '39', '56', '70'], ['14', '20', '32', '48', '74']] },
        { cardId: 56, cells: [['13', '17', '44', '53', '68'], ['3', '30', '45', '56', '66'], ['15', '28', 'F', '55', '73'], ['12', '20', '33', '50', '70'], ['4', '24', '43', '52', '62']] },
        { cardId: 57, cells: [['5', '28', '40', '56', '63'], ['12', '21', '36', '53', '73'], ['14', '16', 'F', '60', '68'], ['15', '25', '44', '58', '66'], ['11', '17', '45', '54', '64']] },
        { cardId: 58, cells: [['1', '16', '32', '58', '74'], ['3', '28', '44', '60', '67'], ['9', '24', 'F', '49', '64'], ['10', '20', '37', '47', '71'], ['13', '19', '39', '46', '61']] },
        { cardId: 59, cells: [['7', '20', '34', '47', '70'], ['2', '24', '43', '55', '73'], ['3', '29', 'F', '46', '62'], ['12', '18', '45', '49', '69'], ['5', '17', '33', '57', '64']] },
        { cardId:60, cells: [['14', '2', '41', '48', '75'], ['9', '17', '34', '51', '62'], ['1', '30', 'F', '60', '65'], ['13', '28', '38', '49', '73'], ['6', '22', '40', '54', '61']] },
        { cardId: 61, cells: [['11', '26', '38', '60', '71'], ['5', '25', '37', '52', '65'], ['14', '16', 'F', '59', '62'], ['7', '18', '43', '54', '64'], ['9', '28', '41', '46', '74']] },
        { cardId: 62, cells: [['13', '26', '31', '56', '68'], ['8', '27', '43', '59', '70'], ['11', '18', 'F', '53', '73'], ['6', '21', '36', '48', '72'], ['2', '20', '42', '55', '69']] },
        { cardId: 63, cells: [['12', '21', '35', '49', '62'], ['1', '29', '38', '55', '74'], ['15', '22', 'F', '51', '64'], ['5', '28', '33', '50', '65'], ['4', '17', '37', '60', '72']] },
        { cardId: 64, cells: [['15', '24', '38', '58', '64'], ['1', '22', '44', '60', '73'], ['14', '21', 'F', '48', '67'], ['2', '29', '31', '47', '68'], ['4', '23', '41', '56', '61']] },
        { cardId: 65, cells: [['6', '18', '35', '57', '64'], ['10', '28', '32', '52', '62'], ['7', '19', 'F', '48', '63'], ['9', '20', '39', '49', '68'], ['2', '30', '33', '59', '65']] },
        { cardId: 66, cells: [['1', '20', '34', '54', '67'], ['2', '27', '33', '51', '63'], ['14', '21', 'F', '58', '73'], ['3', '28', '42', '46', '70'], ['4', '24', '37', '55', '64']] },
        { cardId: 67, cells: [['13', '28', '38', '58', '71'], ['14', '22', '44', '51', '73'], ['5', '26', 'F', '56', '61'], ['12', '24', '34', '53', '72'], ['8', '17', '40', '52', '62']] },
        { cardId: 68, cells: [['14', '25', '41', '55', '66'], ['7', '28', '38', '59', '65'], ['9', '19', 'F', '53', '61'], ['13', '22', '33', '56', '68'], ['15', '18', '44', '57', '63']] },
        { cardId: 69, cells: [['10', '16', '35', '55', '65'], ['6', '28', '40', '46', '70'], ['2', '17', 'F', '59', '73'], ['15', '29', '36', '47', '75'], ['8', '27', '39', '51', '62']] },
        { cardId: 70, cells: [['15', '30', '36', '50', '70'], ['9', '18', '32', '59', '65'], ['12', '17', 'F', '58', '75'], ['6', '21', '43', '46', '62'], ['4', '23', '38', '48', '69']] },
        { cardId: 71, cells: [['6', '25', '31', '49', '72'], ['4', '22', '43', '53', '61'], ['2', '28', 'F', '57', '69'], ['7', '17', '41', '54', '63'], ['12', '19', '45', '46', '65']] },
        { cardId: 72, cells: [['8', '18', '40', '46', '64'], ['5', '10', '35', '47', '71'], ['6', '27', 'F', '49', '73'], ['10', '19', '42', '55', '65'], ['2', '17', '45', '58', '75']] },
        { cardId: 73, cells: [['6', '28', '37', '48', '72'], ['2', '23', '43', '57', '61'], ['15', '30', 'F', '54', '66'], ['13', '21', '34', '60', '65'], ['7', '27', '35', '46', '63']] },
        { cardId: 74, cells: [['10', '24', '45', '51', '72'], ['14', '21', '36', '53', '67'], ['3', '17', 'F', '49', '62'], ['7', '18', '41', '48', '66'], ['9', '26', '44', '54', '63']] },
        { cardId: 75, cells: [['6', '17', '44', '59', '75'], ['7', '20', '37', '46', '69'], ['4', '29', 'F', '50', '63'], ['3', '23', '41', '49', '71'], ['14', '24', '40', '52', '72']] },
        { cardId: 76, cells: [['4', '19', '39', '48', '62'], ['10', '24', '31', '60', '70'], ['6', '23', 'F', '51', '66'], ['8', '18', '35', '50', '73'], ['2', '27', '41', '47', '61']] },
        { cardId: 77, cells: [['1', '18', '34', '60', '74'], ['7', '27', '35', '56', '61'], ['15', '25', 'F', '55', '68'], ['14', '21', '38', '53', '64'], ['13', '17', '40', '58', '75']] },
        { cardId: 78, cells: [['15', '27', '37', '47', '67'], ['11', '17', '34', '58', '70'], ['1', '30', 'F', '46', '68'], ['8', '24', '39', '50', '62'], ['13', '22', '38', '57', '66']] },
        { cardId: 79, cells: [['4', '26', '39', '57', '72'], ['13', '17', '40', '58', '61'], ['11', '29', 'F', '54', '69'], ['3', '16', '44', '53', '65'], ['8', '18', '45', '46', '62']] },
        { cardId: 80, cells: [['8', '23', '39', '57', '73'], ['4', '27', '37', '56', '66'], ['1', '19', 'F', '51', '65'], ['5', '30', '31', '47', '63'], ['2', '17', '32', '48', '67']] },
        { cardId: 81, cells: [['3', '23', '45', '49', '66'], ['5', '16', '41', '50', '62'], ['14', '19', 'F', '47', '72'], ['9', '20', '44', '51', '73'], ['2', '25', '38', '52', '64']] },
        { cardId: 82, cells: [['14', '16', '36', '54', '63'], ['8', '17', '31', '59', '64'], ['1', '25', 'F', '55', '72'], ['7', '20', '33', '47', '66'], ['2', '18', '41', '58', '61']] },
        { cardId: 83, cells: [['1', '16', '31', '53', '67'], ['3', '20', '34', '57', '73'], ['9', '28', 'F', '49', '63'], ['10', '26', '38', '54', '70'], ['2', '25', '36', '47', '61']] },
        { cardId: 84, cells: [['11', '29', '32', '59', '64'], ['12', '19', '41', '60', '67'], ['13', '28', 'F', '56', '62'], ['10', '24', '39', '46', '75'], ['5', '22', '38', '58', '74']] },
        { cardId: 85, cells: [['13', '28', '31', '51', '62'], ['1', '30', '34', '59', '66'], ['14', '17', 'F', '50', '64'], ['3', '16', '36', '56', '71'], ['4', '29', '40', '47', '61']] },
        { cardId: 86, cells: [['4', '21', '37', '54', '67'], ['13', '27', '44', '57', '61'], ['15', '26', 'F', '46', '71'], ['2', '25', '33', '58', '70'], ['9', '28', '42', '48', '68']] },
        { cardId: 87, cells: [['5', '25', '35', '46', '66'], ['1', '17', '43', '49', '63'], ['15', '29', 'F', '59', '72'], ['14', '20', '33', '58', '62'], ['8', '22', '34', '48', '73']] },
        { cardId: 88, cells: [['13', '19', '43', '55', '64'], ['14', '18', '42', '48', '63'], ['12', '23', 'F', '57', '75'], ['15', '29', '44', '52', '65'], ['7', '27', '40', '57', '73']] },
        { cardId: 89, cells: [['2', '16', '44', '58', '75'], ['5', '26', '40', '56', '65'], ['14', '17', 'F', '54', '61'], ['10', '24', '33', '57', '72'], ['7', '22', '38', '60', '69']] },
        { cardId: 90, cells: [['13', '26', '44', '48', '69'], ['3', '20', '38', '58', '70'], ['5', '17', 'F', '46', '72'], ['12', '22', '32', '56', '62'], ['1', '24', '36', '54', '63']] },
        { cardId: 91, cells: [['5', '29', '41', '59', '72'], ['1', '25', '31', '46', '63'], ['10', '30', 'F', '57', '71'], ['8', '17', '34', '55', '75'], ['6', '28', '32', '47', '74']] },
        { cardId: 92, cells: [['5', '18', '37', '59', '63'], ['9', '27', '38', '57', '70'], ['14', '24', 'F', '52', '66'], ['13', '28', '41', '56', '71'], ['1', '30', '45', '46', '72']] },
        { cardId: 93, cells: [['14', '21', '33', '46', '65'], ['15', '18', '40', '53', '71'], ['13', '16', 'F', '51', '63'], ['7', '23', '34', '48', '75'], ['8', '20', '31', '47', '74']] },
        { cardId: 94, cells: [['1', '19', '39', '58', '67'], ['8', '22', '40', '53', '62'], ['7', '30', 'F', '50', '65'], ['5', '25', '41', '46', '72'], ['2', '17', '38', '56', '64']] },
        { cardId: 95, cells: [['4', '19', '37', '52', '70'], ['6', '24', '43', '60', '65'], ['5', '16', 'F', '56', '75'], ['12', '29', '41', '51', '67'], ['9', '30', '39', '58', '61']] },
        { cardId: 96, cells: [['2', '18', '34', '54', '74'], ['14', '27', '45', '57', '64'], ['11', '21', 'F', '56', '62'], ['13', '19', '33', '48', '61'], ['4', '16', '41', '53', '72']] },
        { cardId: 97, cells: [['2', '29', '45', '47', '66'], ['12', '30', '42', '60', '74'], ['9', '21', 'F', '58', '61'], ['6', '27', '40', '48', '62'], ['15', '23', '34', '57', '65']] },
        { cardId: 98, cells: [['13', '24', '40', '57', '68'], ['15', '20', '45', '50', '64'], ['9', '19', 'F', '60', '67'], ['8', '28', '43', '56', '70'], ['2', '27', '38', '47', '65']] },
        { cardId: 99, cells: [['7', '30', '45', '49', '66'], ['12', '19', '35', '55', '62'], ['3', '23', 'F', '53', '67'], ['10', '25', '36', '50', '65'], ['11', '29', '32', '51', '74']] },
        { cardId: 100, cells: [['15', '27', '31', '54', '73'], ['10', '29', '37', '50', '69'], ['8', '23', 'F', '57', '75'], ['11', '25', '43', '58', '68'], ['4', '24', '38', '46', '74']] }




        



    
    ];

    customCardConfigurations.forEach(config => {
        const { cardId } = config;

          // Create row for the card ID only
        const row = document.createElement('th');
        const button = document.createElement('button');
        button.textContent = cardId;
        button.classList.add('card-id');
        button.dataset.cardId = cardId;
        row.appendChild(button);
        tableBody.appendChild(row).style.display = 'inline-block';
        

        bingoCardIds.push({ id: cardId, cells: config.cells });
    });
}
// for displaying checked bingo card
function displayBingoCard(cells) {
const board = document.getElementById('board');
board.innerHTML = '';
board.style.display = 'block'; // Ensure the board is visible

cells.forEach(row => {
const rowElement = document.createElement('div');
row.forEach(cell => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.textContent = cell;
    if (calledNumbers.includes(cell)) {
        cellElement.classList.add('called');
    }
    rowElement.appendChild(cellElement);
});
board.appendChild(rowElement);
});

// Display the board buttons
document.getElementById('boardButtons').style.display = 'block';
}
function checkWinningLine(cells) {
const winningLine = {
isWinning: false,
cells: []
};

cells.forEach(row => {
if (row.every(cell => calledNumbers.includes(cell) || cell === 'F')) {
    winningLine.isWinning = true;
    winningLine.cells.push(...row);
}
});

for (let col = 0; col < cells[0].length; col++) {
let column = [];
for (let row = 0; row < cells.length; row++) {
    column.push(cells[row][col]);
}
if (column.every(cell => calledNumbers.includes(cell) || cell === 'F')) {
    winningLine.isWinning = true;
    winningLine.cells.push(...column);
}
}

let diagonal1 = [];
let diagonal2 = [];
for (let i = 0; i < cells.length; i++) {
diagonal1.push(cells[i][i]);
diagonal2.push(cells[i][cells.length - i - 1]);
}
if (diagonal1.every(cell => calledNumbers.includes(cell) || cell === 'F')) {
winningLine.isWinning = true;
winningLine.cells.push(...diagonal1);
}
if (diagonal2.every(cell => calledNumbers.includes(cell) || cell === 'F')) {
winningLine.isWinning = true;
winningLine.cells.push(...diagonal2);
}



return winningLine;
}


function updateBingoCardDisplay(cells) {
const board = document.getElementById('board');
board.innerHTML = '';
board.style.display = 'block'; // Ensure the board is visible

const winningLine = checkWinningLine(cells);

cells.forEach(row => {
const rowElement = document.createElement('div');
row.forEach(cell => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.textContent = cell;
    if (winningLine.cells.includes(cell)) {
        cellElement.classList.add('winning-line');
    } else if (calledNumbers.includes(cell)) {
        cellElement.classList.add('called1');
    }
    rowElement.appendChild(cellElement);
});
board.appendChild(rowElement);
});

// Display the board buttons
document.getElementById('boardButtons').style.display = 'block';
}

function calculateWinnings() {
    const betAmount = parseInt(document.getElementById('betAmount').value, 10);
    const selectedPlayers = selectedCardIds.length; // Assuming selectedCardIds is an array of selected player IDs
    let winnings;
  
    if (selectedPlayers >= 5) {
      winnings = betAmount * selectedPlayers - selectedPlayers * 5;
    } else {
      winnings = betAmount * selectedPlayers;
    }
  
    const winnerAmount = document.getElementById('winnerAmount');
    if (winnings > 0) {
      winnerAmount.textContent = `ደራሸ: ${winnings} ብር`;
    } else {
      winnerAmount.textContent = 'No Winnings';
    }
  
    // Send data to the Express server via AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/updateWinnings", true); // Adjust URL if needed
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
        } else {
          console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
        }
      }
    };
  
    // Prepare the data to be sent
    const data = {
      username: 'some_username', // Replace with actual username logic
      total_bet_amount: betAmount,
      deducted_amount: winnings > 0 ? selectedPlayers * 5 : 0, // Example logic
      selected_players: selectedPlayers,
      bet_amount: betAmount,
      game_played: 1, // Example logic
      package_amount: 0, // Example logic
      deducted_balance: 0, // Example logic
      current_balance: winnings // Example logic
    };
  
    console.log('Sending data:', data);
    xhr.send(JSON.stringify(data));
  }
  
  

// Assuming this is your existing code for handling game plays
function handleGamePlay() {
    // Get the selected number of players
    var selectedPlayers = getSelectedPlayersCount(); // Implement your logic to get the count of selected players
    
    // Assuming an AJAX call is made to user.php to handle game plays
    $.post("user.php", { selected_players: selectedPlayers }, function(data) {
        alert(data); // Display the response message from the server
    });
}



function checkWinner() {
const cardIdInput = document.getElementById('cardId').value.trim();
const cardId = parseInt(cardIdInput);

if (!cardId || isNaN(cardId)) {
alert('እባክዎ ካርቴላ ቁጥሩን በትክክል ያስገቡ.');
document.getElementById('cardId').value = ''; // Clear the card ID input field
return;
}

if (lockedCardId === cardId) {
    // add sound 
    playSound('cardNo.M4A');      //ካርቴላ ቁጥር
    playSound(cardId + '.MP3');   // ቁጥሩ
    playSound ('locked1.MP3');    // ታስሯል

alert('Sorry ! ካርቴላ ቁጥር '+ ' ' + cardId  +  '' +  '  ታስሯል.');
document.getElementById('cardId').value = ''; // Clear the card ID input field
return;
}

if (!selectedCardIds.includes(cardId)) {  
// set your sound file name in .mp3 file
          playSound(cardId + '.MP3'); 
       //   playSound ('dash.MP3');
          playSound('Nreg.MP3'); 
// add text alert 
        alert('ይቅርታ ! ካርቴላ ቁጥር '+ ' ' + cardId  +  '' +' ን  አላስመዘገቡም ');
        document.getElementById('cardId').value = ''; // Clear the card ID input field
   return;
    }

const matchingCard = bingoCardIds.find(card => card.id === cardId);
if (!matchingCard) {
alert('No bingo card found with the entered ID.');
document.getElementById('cardId').value = ''; // Clear the card ID input field
return;
}

updateBingoCardDisplay(matchingCard.cells);
document.getElementById('board').scrollIntoView({ behavior: 'smooth' });

// Clear the card ID input field
//  document.getElementById('cardId').value = '';
}




function closeBoard() {
const board = document.getElementById('board');
board.style.display = 'none';

// Hide the board buttons
document.getElementById('boardButtons').style.display = 'none';
document.getElementById('cardId').value = '';

}
function clearBoard() {
selectedCardIds = []; // Clear the selected card IDs
const cardIdButtons = document.querySelectorAll('.card-id');
cardIdButtons.forEach(button => {
button.style.backgroundColor = ''; // Reset the background color
});
displayStartGameButton(); // Update the visibility of the Start Game button
}

document.getElementById('btnClearBoard').addEventListener('click', clearBoard);

function lockBoard() {
const boardButtons = document.getElementById('boardButtons');
const cells = document.querySelectorAll('#board .cell');

// Disable further changes by locking the board
cells.forEach(cell => {
cell.style.pointerEvents = 'none';
});

// Optionally change the style to indicate the board is locked
cells.forEach(cell => {
cell.style.backgroundColor = 'lightgray';
});

// Hide the lock button after locking
boardButtons.style.display = 'none';
document.getElementById('cardId').value = '';

}

let lockedCardId = null;

function lockBoard() {
const cardIdInput = document.getElementById('cardId').value.trim();
const cardId = parseInt(cardIdInput);

if (!cardId || isNaN(cardId)) {
alert('Please enter a valid card ID.');
return;
}

if (!selectedCardIds.includes(cardId)) {
alert('The card ID is not registered.');
return;
}

lockedCardId = cardId; // Set the locked card ID

const boardButtons = document.getElementById('boardButtons');
const cells = document.querySelectorAll('#board .cell');

// Disable further changes by locking the board
cells.forEach(cell => {
cell.style.pointerEvents = 'none';
});

// Optionally change the style to indicate the board is locked
cells.forEach(cell => {
cell.style.backgroundColor = 'lightgray';
});

// Hide the lock button after locking
boardButtons.style.display = 'none';
document.getElementById('cardId').value = '';

// Hide or remove the board after a delay
setTimeout(() => {
const board = document.getElementById('board');
board.style.display = 'none';
}, 2000); // Adjust the delay time as needed
}



// displaying called numbers in tables
function generateAllNumbersTable() {
    const tableBody = document.querySelector('#allNumbers tbody');
    let number = 1;
    for (let row = 1; row <= 5; row++) {
        const tr = document.createElement('tr');
        for (let col = 1; col <= 15; col++) {
            const td = document.createElement('td');
            td.classList.add('number-cell');
            td.textContent = number;
            if (calledNumbers.includes(number.toString())) {
                td.classList.add('called');
            }
            tr.appendChild(td);
            number++;
        }
        tableBody.appendChild(tr);
    }
    calculateWinnings();
}

function drawBall() {
const maxNumber = 75;
let drawnNumber;
do {
drawnNumber = Math.floor(Math.random() * maxNumber) + 1;
} while (calledNumbers.includes(drawnNumber.toString()));

calledNumbers.push(drawnNumber.toString());

let letter;
if (drawnNumber >= 1 && drawnNumber <= 15) {
letter = 'B';
} else if (drawnNumber >= 16 && drawnNumber <= 30) {
letter = 'I';
} else if (drawnNumber >= 31 && drawnNumber <= 45) {
letter = 'N';
} else if (drawnNumber >= 46 && drawnNumber <= 60) {
letter = 'G';
} else if (drawnNumber >= 61 && drawnNumber <= 75) {
letter = 'O';
}

// Play sound for drawn number the file must M4A type in this case
playSound(drawnNumber + '.M4A');


const ball = document.createElement('div');
ball.classList.add('ball');

const currentCall = document.getElementById('currentCall');
currentCall.textContent = ' ' + letter + ' - ' + drawnNumber;
currentCall.style.backgroundImage = 'none'; // Remove background image

const lastFiveCalledDiv = document.getElementById('lastFiveCalled');
const lastFiveCalled = calledNumbers.slice(-5).map(number => {
const numLetter = determineLetter(number);
return `<div class="last-five-number">${numLetter} ${number}</div>`;
});
lastFiveCalledDiv.innerHTML = 'Last five called numbers: ' + lastFiveCalled.join('');



// Update the last called number
lastCalledNumber = drawnNumber;

updateAllNumbersTable();
calculateWinnings();

// Change the button text to "Call Next Number"
const btnDrawBall = document.getElementById('btnDrawBall');
btnDrawBall.textContent = 'Call Next Number';

// Clear the card ID input field
document.getElementById('cardId').value = '';
// cell.classList.remove('blink-blue');   double
}

function updateAllNumbersTable() {
const cells = document.querySelectorAll('#allNumbers .number-cell');
cells.forEach(cell => {
const number = parseInt(cell.textContent);
if (calledNumbers.includes(number.toString())) {
    cell.classList.add('blink-yellow');
    cell.classList.add('called');
    setTimeout(() => {
        cell.classList.remove('blink-blue');
    }, 5); // Duration of the blinking effect (here, it's set to 0.5 seconds)
}
});

// Change the button text to "Call Next Number"
const btnDrawBall = document.getElementById('btnDrawBall');
btnDrawBall.textContent = 'Call Next Number';

   }



function determineLetter(number) {
    if (number >= 1 && number <= 15) {
        return 'B';
    } else if (number >= 16 && number <= 30) {
        return 'I';
    } else if (number >= 31 && number <= 45) {
        return 'N';
    } else if (number >= 46 && number <= 60) {
        return 'G';
    } else if (number >= 61 && number <= 75) {
        return 'O';
    }
}

function handleCardSelection() {
    const cardIdButtons = document.querySelectorAll('.card-id');
    cardIdButtons.forEach(button => {
        button.addEventListener('click', () => {
            const cardId = parseInt(button.getAttribute('data-card-id'));
            if (!selectedCardIds.includes(cardId)) {
                selectedCardIds.push(cardId);
                button.style.backgroundColor = 'red';
                
            } else {
                selectedCardIds = selectedCardIds.filter(id => id !== cardId);
                button.style.backgroundColor = '';
            }
            displayStartGameButton(); // Add this line to display the Start Game button after marking a card ID
            displayClearBoardButton();
        });
    });
}

function displayStartGameButton() {
    const startGameButton = document.getElementById('btnStartGame');
    if (selectedCardIds.length >= 2) {
        startGameButton.style.display = 'inline-block';
    } else {
        startGameButton.style.display = 'none';
    }
}

function displayClearBoardButton() {
    const clearbooardButton = document.getElementById('btnClearBoard');
    if (selectedCardIds.length >= 2) {
        clearbooardButton.style.display = 'inline-block';
    } else {
        clearbooardButton.style.display = 'none';
    }
    
}



function startGame() {
document.getElementById('bingoCardIds').style.display = 'none';
document.getElementById('btnStartGame').style.display = 'none';
document.getElementById('betSection').style.display = 'none';
document.getElementById('gameArea').style.display = 'block';
document.getElementById('btnClearBoard').style.display = 'none';

// Clear any existing content in the game area
clearGameArea();

// Hide the game title section
document.getElementById('gameTitleSection').style.display = 'none';

// Generate all necessary content for the game area
generateAllNumbersTable();
}

function clearGameArea() {
// Clear existing content in the game area
const tableBody = document.querySelector('#allNumbers tbody');
tableBody.innerHTML = '';
document.getElementById('currentCall').textContent = '';
document.getElementById('lastFiveCalled').textContent = '';
document.getElementById('winnerAmount').textContent = '';
const board = document.getElementById('board');
board.style.display = 'none';
}


function resetGame() {
    lockedCardId = null; // Reset the locked card ID
calledNumbers = [];
// Do not reset selectedCardIds
document.getElementById('bingoCardIds').style.display = 'block';
document.getElementById('btnStartGame').style.display = 'none';
document.getElementById('btnClearBoard').style.display = 'inline-block';
document.getElementById('gameArea').style.display = 'none';
document.getElementById('cardId').value = '';
document.getElementById('winnerAmount').textContent = '';
const tableBody = document.querySelector('#allNumbers tbody');
tableBody.innerHTML = '';
document.getElementById('board').innerHTML = '';
document.getElementById('currentCall').textContent = '';
document.getElementById('lastFiveCalled').textContent = '';
document.getElementById('cardId').value = '';
displayStartGameButton(); // Display the Start Game button after resetting the game
}


document.getElementById('btnCheckWinner').addEventListener('click', checkWinner);
document.getElementById('btnDrawBall').addEventListener('click', drawBall);
document.getElementById('btnResetGame').addEventListener('click', resetGame);
document.getElementById('btnNextGame').addEventListener('click', resetGame);
document.getElementById('btnStartGame').addEventListener('click', startGame);
document.getElementById('btnCloseBoard').addEventListener('click', closeBoard);
document.getElementById('btnLockBoard').addEventListener('click', lockBoard);
// Attach event listeners to the start game and stop game buttons
document.getElementById('btnStartGame').addEventListener('click', function() {
    playSound('gamestarted.M4A');
    // Other actions when starting a new game
});

document.getElementById('btnResetGame').addEventListener('click', function() {
    playSound('clear1.MP3');
    // Other actions when resetting the game
});

document.getElementById('btnNextGame').addEventListener('click', function() {
    playSound('register1.MP3');
    // Other actions when clear and register the game
});

document.getElementById('btnSayBingo').addEventListener('click', function() {
    playSound('saybingo.MP3');
    // Other actions when say bingo!
});

document.getElementById('btnshuffle').addEventListener('click', function() {
    playSound('shufle1.MP3');
    // Other actions when clear and register the game
});

window.addEventListener('load', () => {
    generateBingoCardIds();
    handleCardSelection();
});

