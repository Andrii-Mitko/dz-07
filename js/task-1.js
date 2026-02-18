const categ = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categ.length}`);
categ.forEach(category => {
  console.log(`Category: ${category.querySelector('h2').textContent}`);
 console.log(`Elements: ${category.querySelectorAll('ul li').length}`);
});
