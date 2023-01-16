

export function removeDuplicates(arr) {
    let uniqueObjects = [];
    let uniqueObjectsIds = [];
    if (arr.length == 0) return;
    let genId = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]?.description?.marca != undefined && !uniqueObjectsIds.includes(arr[i].description.marca.toUpperCase())) {
          uniqueObjects.push({label: arr[i].description.marca.toUpperCase()});
          uniqueObjectsIds.push(arr[i].description.marca.toUpperCase());
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
const noSearchKeyList = ['destaque', 'other_description', 'options_descriptions']
for (let i = 0; i < list.length; i++) {
    for (let key in list[i]) {
    if (noSearchKeyList.includes(key)) {
        continue;
    }
    if ( key == 'description') {
        for (let key2 in list[i][key]) {
            if(list[i][key][key2].toLowerCase().includes(search.toLowerCase())) {
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