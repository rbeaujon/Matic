const repeatedWords = (string) => {
   let words = {}
   if(string){
    const array = string.split(' ')
    array.forEach(word => {
    words[word] = (words[word] || 0) + 1
  })
  }else {
    words = 'Bad Request'
  }
  return words
  }


module.exports = repeatedWords