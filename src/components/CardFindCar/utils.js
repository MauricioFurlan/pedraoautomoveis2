

export function removeDuplicates(arr) {
    let uniqueObjects = [];
    let uniqueObjectsIds = [];
    if (arr.length == 0) return;
    let genId = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]?.descricao[0].marca != undefined && !uniqueObjectsIds.includes(arr[i].descricao[0].marca.toUpperCase())) {
          uniqueObjects.push({label: arr[i].descricao[0].marca.toUpperCase()});
          uniqueObjectsIds.push(arr[i].descricao[0].marca.toUpperCase());
          genId = genId + 1
      }
    }
    return uniqueObjects;
  }

export function searchValueInList(list, search) {
if (search == '') {
    return []
}
let results = new Set();
const noSearchKeyList = ['destaque', 'opcionaisDoVeiculo', 'obs']
for (let i = 0; i < list.length; i++) {
    for (let key in list[i]) {
    if (noSearchKeyList.includes(key)) {
        continue;
    }
    if ( key == 'descricao') {
        for (let key2 in list[i][key][0]) {
            if(list[i][key][0][key2].toLowerCase().includes(search.toLowerCase())) {
                results.add(list[i]);
                continue;
                }
            }
    } else if (list[i][key].toString().toLowerCase().includes(search.toLowerCase())) {
        results.add(list[i])
        continue;
    }
    }
}
return [...results];
}