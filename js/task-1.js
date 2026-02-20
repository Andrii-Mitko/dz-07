const category = document.querySelectorAll('li.item');
console.log(`Number of categories: ${category.length}`);
category.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
   console.log(`Elements: ${item.querySelector('ul').children.length}`);
})

