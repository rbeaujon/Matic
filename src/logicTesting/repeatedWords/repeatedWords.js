const repeatedWords = (string) => {
   let words = {}
   if(string){
    const array = string.toLowerCase().replace(/ +(?= )/g,'').split(' ')
    array.forEach(x => {
    words[x] = (words[x] || 0) + 1
  })
  }else {
    words = 'Should be a phrase, try again!'
  }
  return words
  }


module.exports = repeatedWords