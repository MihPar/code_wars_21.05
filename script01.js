function countSheeps(arrayOfSheep) {
    return arrayOfSheep.map(function(item) {
      if(item === true) {
        return item
      }
    }).filter(function(item) {
        return item !== undefined
    }).length
  }
  const resutl = countSheeps([true,  true,  true,  false,
                true,  true,  true,  true ,
                true,  false, true,  false,
                true,  false, false, true ,
                true,  true,  true,  true ,
                false, false, true,  true ])
  console.log(resutl)