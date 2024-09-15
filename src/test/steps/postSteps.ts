import {Given,When,Then} from '@cucumber/cucumber';
import {chromium,Browser,Page,expect} from '@playwright/test'
import { pageFixture } from '../hooks/pageFixture';



When('I click on new post button', async function () {
  console.log('hello');
    await pageFixture.page.locator('a[href="/editor"]').click();
  });

  When('I fill up the title as {string} about as {string} article as {string} and tags as {string} required details', async function (string,string2,string3,string4) {
    console.log('hi');
    await pageFixture.page.getByPlaceholder('Article Title').fill(string);
    await pageFixture.page.getByPlaceholder('What\'s this article about?').fill(string2);
    await pageFixture.page.getByPlaceholder('Write your article (in markdown)').fill(string3);
    await pageFixture.page.getByPlaceholder('Enter tags').fill(string4);
  });


  When('I publish the article', async function () {
    await pageFixture.page.locator('//button').click();
  });

  Then('I verify the published article', async function(){
    await pageFixture.page.waitForSelector('div[class="container"] h1');
    await expect(pageFixture.page.locator('div[class="container"] h1')).toHaveText('Meee');
  });