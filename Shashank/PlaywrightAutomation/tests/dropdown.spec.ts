import{test,expect, Locator} from '@playwright/test'
test('dropdownHanding', async ({page}) =>
{
    //4 ways to select dropdown value - values, label,  text, indexing & locator
    await page.goto("https://qaplayground.com/practice/dropdowns")
    const selectFruit = page.locator('#fruitSelect')
    await page.waitForTimeout(2000)
    await selectFruit.selectOption({value:'banana'}) //value
    await page.waitForTimeout(2000)
    await selectFruit.selectOption({label:'Orange'}) //label
    await page.waitForTimeout(1000)
    await selectFruit.selectOption({index:2}) //indexing
    await page.waitForTimeout(1000)
    await selectFruit.selectOption('Apple') //text

    //assertion
    //how to validate the no of options in dropdown - using css selector
    const totalOptions = page.locator('#fruitSelect>option')
    await expect(totalOptions).toHaveCount(4)  
})

test('multiSelectDropdown', async ({page}) => 
{
    await page.goto("https://qaplayground.com/practice/dropdowns")
    const multipleSelect:Locator = page.locator('#heroSelect')
    await page.waitForTimeout(2000)
    await multipleSelect.selectOption(['ant-man','aquaman'])
    await page.waitForTimeout(4000)
    await multipleSelect.selectOption([{label:'Ant-Man'},{label:'Aquaman'},{label:'Batman'}])
    await page.waitForTimeout(4000)
    await multipleSelect.selectOption([{index:3},{index:2}])
    await page.waitForTimeout(4000)
    await multipleSelect.selectOption(['Aquaman','Batman'])

//custom Dropdown - like div & buttons not using select tag
    const customDropdown:Locator = page.locator('#priorityDropdownTrigger')
    await customDropdown.click()
    await page.waitForTimeout(2000)
    const customDropdownOption:Locator = page.getByRole('option',{name:'High Priority'})
    await customDropdownOption.click()


//combobox
    await page.locator("#citySearch").click()
    await page.locator("//span[.='Bengaluru']").click()
})