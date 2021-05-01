export const getItems = async () => {
  const data = await fetch("https://datainlife.ru/junior_task/get_products.php")
    .then((response) => response.json())
    .then((data) => data
    );
  return data
};
export const postToBasket = async (productData) => {

 const data = await fetch('https://datainlife.ru/junior_task/add_basket.php', {
    method: 'POST', 
    body: productData
  })
  .then(response=>response.json())
  .then(data=>data);
  console.log(data)
  return data
}
