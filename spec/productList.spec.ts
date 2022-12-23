export {};
const { I, loginSteps } = inject();
Feature('Product List');

Before(({ I }) => {
  loginSteps.login('standard_user', 'secret_sauce');
  I.seeInCurrentUrl('/inventory');
});

Scenario('Verify A to Z sort', async ({ I }) => {
  const list = await I.grabTextFromAll('.inventory_item_name');
  const sorted = list.sort();
  list.forEach((item, i) => {
    I.assertEqual(item, sorted[i]);
  });
});

Scenario('Verify Z to A sort', async ({ I }) => {
  const list = await I.grabTextFromAll('.inventory_item_name');
  I.selectOption('$product_sort_container', 'Name (Z to A)');
  const sorted = await I.grabTextFromAll('.inventory_item_name');
  list.reverse().forEach((item, i) => {
    I.assertEqual(item, sorted[i]);
  });
});

Scenario('Verify price low to high sort', async ({ I }) => {
  I.selectOption('$product_sort_container', 'Price (low to high)');
  let list = await I.grabTextFromAll('.inventory_item_price');
  let numList = [];
  for (let i = 0; i < list.length; i++) {
    let val = list[i].split('$')[1];
    numList.push(parseFloat(val));
  }
  numList.forEach((item, i) => {
    I.assertEqual(
      item,
      numList.sort((a, b) => {
        return a - b;
      })[i]
    );
  });
});

Scenario('Verify price high to low sort', async ({ I }) => {
  I.selectOption('$product_sort_container', 'Price (high to low)');
  let list = await I.grabTextFromAll('.inventory_item_price');
  let numList = [];
  for (let i = 0; i < list.length; i++) {
    let val = list[i].split('$')[1];
    numList.push(parseFloat(val));
  }
  numList.forEach((item, i) => {
    I.assertEqual(
      item,
      numList.sort((a, b) => {
        return b - a;
      })[i]
    );
  });
});

Scenario('View Product Detail via inventory title', async ({ I }) => {
    I.click('.inventory_item_name')
    I.seeInCurrentUrl('/inventory-item');
  });

Scenario('View Product Detail via inventory title', async ({ I }) => {
    I.click('.inventory_item_img')
    I.seeInCurrentUrl('/inventory-item');
  });

Scenario('Navigate back to product list from product detail', async ({ I }) => {
    I.click('.inventory_item_img')
    I.seeInCurrentUrl('/inventory-item');
    I.click('$back-to-products')
    I.seeInCurrentUrl('/inventory');
  });