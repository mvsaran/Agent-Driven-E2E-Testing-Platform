# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ecommerce.spec.ts >> E-Commerce Add to Cart Flow >> User can search for a MacBook and add it to cart
- Location: playwright\tests\ecommerce.spec.ts:14:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Add to Cart' }).first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - heading "Top categories close" [level=5] [ref=e4]:
        - text: Top categories
        - link "close" [ref=e5] [cursor=pointer]:
          - /url: "#mz-component-1626147655"
          - text: 
      - navigation [ref=e8]:
        - list [ref=e10]:
          - listitem [ref=e11]:
            - link "Components" [ref=e12] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25
              - img [ref=e14]
              - generic [ref=e17]: Components
          - listitem [ref=e18]:
            - link "Cameras" [ref=e19] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33
              - img [ref=e21]
              - generic [ref=e24]: Cameras
          - listitem [ref=e25]:
            - link "Phone, Tablets & Ipod" [ref=e26] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=57
              - img [ref=e28]
              - generic [ref=e31]: Phone, Tablets & Ipod
          - listitem [ref=e32]:
            - link "Software" [ref=e33] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=17
              - img [ref=e35]
              - generic [ref=e38]: Software
          - listitem [ref=e39]:
            - link "MP3 Players" [ref=e40] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=34
              - img [ref=e42]
              - generic [ref=e45]: MP3 Players
          - listitem [ref=e46]:
            - link "Laptops & Notebooks" [ref=e47] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=18
              - img [ref=e49]
              - generic [ref=e52]: Laptops & Notebooks
          - listitem [ref=e53]:
            - link "Desktops and Monitors" [ref=e54] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=28
              - img [ref=e56]
              - generic [ref=e59]: Desktops and Monitors
          - listitem [ref=e60]:
            - link "Printers & Scanners" [ref=e61] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=30
              - img [ref=e63]
              - generic [ref=e66]: Printers & Scanners
          - listitem [ref=e67]:
            - link "Mice and Trackballs" [ref=e68] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=29
              - img [ref=e70]
              - generic [ref=e73]: Mice and Trackballs
          - listitem [ref=e74]:
            - link "Fashion and Accessories" [ref=e75] [cursor=pointer]:
              - /url: ""
              - img [ref=e77]
              - generic [ref=e80]: Fashion and Accessories
          - listitem [ref=e81]:
            - link "Beauty and Saloon" [ref=e82] [cursor=pointer]:
              - /url: ""
              - img [ref=e84]
              - generic [ref=e87]: Beauty and Saloon
          - listitem [ref=e88]:
            - link "Autoparts and Accessories" [ref=e89] [cursor=pointer]:
              - /url: ""
              - img [ref=e91]
              - generic [ref=e94]: Autoparts and Accessories
          - listitem [ref=e95]:
            - link "Washing machine" [ref=e96] [cursor=pointer]:
              - /url: ""
              - img [ref=e98]
              - generic [ref=e101]: Washing machine
          - listitem [ref=e102]:
            - link "Gaming consoles" [ref=e103] [cursor=pointer]:
              - /url: ""
              - img [ref=e105]
              - generic [ref=e108]: Gaming consoles
          - listitem [ref=e109]:
            - link "Air conditioner" [ref=e110] [cursor=pointer]:
              - /url: ""
              - img [ref=e112]
              - generic [ref=e115]: Air conditioner
          - listitem [ref=e116]:
            - link "Web Cameras" [ref=e117] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=32
              - img [ref=e119]
              - generic [ref=e122]: Web Cameras
    - generic [ref=e123]:
      - heading "Quick Links close" [level=5] [ref=e124]:
        - text: Quick Links
        - link "close" [ref=e125] [cursor=pointer]:
          - /url: "#mz-component-162614767"
          - text: 
      - generic [ref=e126]:
        - navigation [ref=e128]:
          - list [ref=e130]:
            - listitem [ref=e131]:
              - link " Special Hot" [ref=e132] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
                - generic [ref=e133]: 
                - generic [ref=e135]: Special
                - generic [ref=e136]: Hot
            - listitem [ref=e137]:
              - link " Wishlist" [ref=e138] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
                - generic [ref=e139]: 
                - generic [ref=e141]: Wishlist
            - listitem [ref=e142]:
              - link " Compare" [ref=e143] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
                - generic [ref=e144]: 
                - generic [ref=e146]: Compare
            - listitem [ref=e147]:
              - link " My account" [ref=e148] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
                - generic [ref=e149]: 
                - generic [ref=e151]: My account
            - listitem [ref=e152]:
              - link " Blog" [ref=e153] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
                - generic [ref=e154]: 
                - generic [ref=e156]: Blog
            - listitem [ref=e157]:
              - link " Tracking" [ref=e158] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/tracking
                - generic [ref=e159]: 
                - generic [ref=e161]: Tracking
            - listitem [ref=e162]:
              - link " Contact us" [ref=e163] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/contact
                - generic [ref=e164]: 
                - generic [ref=e166]: Contact us
        - separator [ref=e168]
        - paragraph [ref=e171]: Place here any module, widget, design or HTML. for example menu, categories
    - generic [ref=e172]:
      - heading "Cart close" [level=5] [ref=e173]:
        - text: Cart
        - link "close" [ref=e174] [cursor=pointer]:
          - /url: "#cart-total-drawer"
          - text: 
      - generic [ref=e175]:
        - generic [ref=e176]:
          - paragraph [ref=e177]: Your shopping cart is empty!
          - table [ref=e178]:
            - rowgroup [ref=e179]:
              - 'row "Sub-Total: $0.00" [ref=e180]':
                - cell "Sub-Total:" [ref=e181]
                - cell "$0.00" [ref=e182]:
                  - strong [ref=e183]: $0.00
              - 'row "Total: $0.00" [ref=e184]':
                - cell "Total:" [ref=e185]
                - cell "$0.00" [ref=e186]:
                  - strong [ref=e187]: $0.00
        - generic [ref=e189]:
          - button " Edit cart" [ref=e191] [cursor=pointer]:
            - generic [ref=e192]: 
            - text: Edit cart
          - button " Checkout" [ref=e194] [cursor=pointer]:
            - generic [ref=e195]: 
            - text: Checkout
    - text: 
    - generic:    
    - text:  
    - generic [ref=e196]:
      - banner [ref=e197]:
        - button "" [ref=e199] [cursor=pointer]:
          - generic [ref=e200]: 
        - generic [ref=e201]:
          - generic [ref=e202]:
            - figure [ref=e204]:
              - link "Poco Electro" [ref=e205] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                - img "Poco Electro" [ref=e206]
            - generic [ref=e210]:
              - generic [ref=e212]:
                - button "All Categories" [ref=e214] [cursor=pointer]
                - textbox "Search For Products" [ref=e216]: macbook
              - button "Search" [ref=e218] [cursor=pointer]
            - link "Compare" [ref=e220] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
              - generic "Compare" [ref=e221]:
                - img [ref=e222]
            - link "Wishlist" [ref=e225] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
              - generic "Wishlist" [ref=e226]:
                - img [ref=e227]
            - button "0" [ref=e230] [cursor=pointer]:
              - generic [ref=e231]:
                - img [ref=e233]
                - generic [ref=e235]: "0"
          - text: 
        - generic [ref=e236]:
          - generic [ref=e238] [cursor=pointer]:
            - button "Shop by Category" [ref=e240]:
              - img [ref=e242]
              - text: Shop by Category
            - navigation [ref=e245]:
              - list [ref=e247]:
                - listitem [ref=e248]:
                  - link "Home" [ref=e249]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                    - generic [ref=e251]: Home
                - listitem [ref=e252]:
                  - link "Special Hot" [ref=e253]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
                    - generic [ref=e255]: Special
                    - generic [ref=e256]: Hot
                - listitem [ref=e257]:
                  - link "Blog" [ref=e258]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
                    - generic [ref=e260]: Blog
                - listitem [ref=e261]:
                  - button "Mega Menu" [ref=e262]:
                    - generic [ref=e264]: Mega Menu
                - listitem [ref=e265]:
                  - button "AddOns Featured" [ref=e266]:
                    - generic [ref=e268]: AddOns
                    - generic [ref=e269]: Featured
                - listitem [ref=e270]:
                  - button " My account" [ref=e271]:
                    - generic [ref=e272]: 
                    - generic [ref=e274]: My account
          - text:  
          - paragraph [ref=e277]:
            - strong [ref=e278]: This is a dummy website for Web Automation Testing
      - generic [ref=e279]:
        - figure [ref=e283]:
          - link "Apple Cinema 30\"" [ref=e284] [cursor=pointer]:
            - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=42
            - img "Apple Cinema 30\"" [ref=e285]
        - generic [ref=e287]:
          - navigation "breadcrumb" [ref=e289]:
            - list [ref=e290]:
              - listitem [ref=e291]:
                - link "Home" [ref=e292] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                  - generic [ref=e293]: 
              - listitem [ref=e294]:
                - text: /
                - link "Software" [ref=e295] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=17
              - listitem [ref=e296]:
                - text: /
                - link "Search" [ref=e297] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/search&search=macbook
              - listitem [ref=e298]: / MacBook
          - generic [ref=e299]:
            - generic [ref=e300]:
              - generic [ref=e302]:
                - generic [ref=e303]:
                  - button "" [ref=e304] [cursor=pointer]:
                    - text: 
                    - generic [ref=e305]: 
                  - link "MacBook" [ref=e306] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/12-500x500.webp
                    - img "MacBook" [ref=e307]
                - generic [ref=e309]:
                  - generic [ref=e310]:
                    - group "1 / 4" [ref=e311]:
                      - link "MacBook" [ref=e312] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/12-500x500.webp
                        - img "MacBook" [ref=e313]
                    - group "2 / 4" [ref=e314]:
                      - link "MacBook" [ref=e315] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/9-500x500.webp
                        - img "MacBook" [ref=e316]
                    - group "3 / 4" [ref=e317]:
                      - link "MacBook" [ref=e318] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/19-500x500.webp
                        - img "MacBook" [ref=e319]
                    - group "4 / 4" [ref=e320]:
                      - link "MacBook" [ref=e321] [cursor=pointer]:
                        - /url: https://ecommerce-playground.lambdatest.io/image/cache/catalog/maza/demo/mz_poco/megastore-2/product/11-500x500.webp
                        - img "MacBook" [ref=e322]
                  - text:    
              - text:      
              - generic [ref=e323]:
                - tablist [ref=e326]:
                  - listitem [ref=e327]:
                    - tab "Description" [selected] [ref=e328] [cursor=pointer]
                  - listitem [ref=e329]:
                    - tab "Specification" [ref=e330] [cursor=pointer]
                  - listitem [ref=e331]:
                    - tab "Reviews" [ref=e332] [cursor=pointer]
                  - listitem [ref=e333]:
                    - tab "Custom" [ref=e334] [cursor=pointer]
                - generic [ref=e339]:
                  - paragraph [ref=e340]: Intel Core 2 Duo processor
                  - paragraph [ref=e341]: Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, the new MacBook is the fastest ever.
                  - paragraph [ref=e342]: 1GB memory, larger hard drives
                  - paragraph [ref=e343]: The new MacBook now comes with 1GB of memory standard and larger hard drives for the entire line perfect for running more of your favorite applications and storing growing media collections.
                  - paragraph [ref=e344]: Sleek, 1.08-inch-thin design
                  - paragraph [ref=e345]: MacBook makes it easy to hit the road thanks to its tough polycarbonate case, built-in wireless technologies, and innovative MagSafe Power Adapter that releases automatically if someone accidentally trips on the cord.
                  - paragraph [ref=e346]: Built-in iSight camera
                  - paragraph [ref=e347]: Right out of the box, you can have a video chat with friends or family,2 record a video at your desk, or take fun pictures with Photo Booth
            - generic [ref=e348]:
              - heading "MacBook" [level=1] [ref=e350]
              - list [ref=e354]:
                - listitem [ref=e355]: "Product Code: Product 16"
              - separator [ref=e357]
              - generic [ref=e359]:
                - list [ref=e361]:
                  - listitem [ref=e362]:
                    - text: "Brand:"
                    - link "Apple" [ref=e363] [cursor=pointer]:
                      - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8
                  - listitem [ref=e364]: "Viewed: 79716"
                  - listitem [ref=e365]: "Reward Points: 600"
                  - listitem [ref=e366]:
                    - text: "Availability:"
                    - generic [ref=e367]: Out Of Stock
                - figure [ref=e369]:
                  - link "Apple" [ref=e370] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8
                    - img "Apple" [ref=e371]
              - separator [ref=e373]
              - generic [ref=e378]:
                - heading "$602.00" [level=3] [ref=e379]
                - generic [ref=e381] [cursor=pointer]: 
              - generic [ref=e383]:
                - generic [ref=e385]:
                  - generic [ref=e387] [cursor=pointer]:
                    - button "Decrease quantity" [ref=e389]:
                      - generic [ref=e390]: 
                    - spinbutton "Qty" [ref=e391]: "1"
                    - button "Increase quantity" [ref=e393]:
                      - generic [ref=e394]: 
                  - button "Out Of Stock" [disabled] [ref=e396]
                  - button "Out Of Stock" [disabled] [ref=e398]
                - button " Compare this Product" [ref=e400] [cursor=pointer]:
                  - generic [ref=e401]:
                    - generic [ref=e402]: 
                    - text: 
                  - text: Compare this Product
              - generic [ref=e404]:
                - button "Size chart" [ref=e406] [cursor=pointer]:
                  - generic [ref=e407]: 
                  - text: Size chart
                - button "Popup" [ref=e409] [cursor=pointer]:
                  - generic [ref=e410]: 
                  - text: Popup
                - button "Ask Question" [ref=e412] [cursor=pointer]:
                  - generic [ref=e413]: 
                  - text: Ask Question
              - separator [ref=e415]
              - generic [ref=e417]:
                - generic [ref=e419]:
                  - img [ref=e421]
                  - heading "Online payment" [level=5] [ref=e427]
                - generic [ref=e429]:
                  - img [ref=e431]
                  - heading "Easy Return" [level=5] [ref=e436]
                - generic [ref=e438]:
                  - img [ref=e440]
                  - heading "24x7 Service" [level=5] [ref=e447]
              - generic [ref=e449]:
                - generic [ref=e450]:
                  - generic [ref=e451]: 0/50 reviews
                  - generic [ref=e452]:
                    - generic [ref=e453] [cursor=pointer]: ★ 5
                    - generic [ref=e454] [cursor=pointer]: ★ 4
                    - generic [ref=e455] [cursor=pointer]: ★ 3
                    - generic [ref=e456] [cursor=pointer]: ★ 2
                    - generic [ref=e457] [cursor=pointer]: ★ 1
                    - generic [ref=e458] [cursor=pointer]: ★ 0
                - heading "Write a review" [level=5] [ref=e459]
                - textbox "Your Name" [ref=e461]
                - textbox "Your Review" [ref=e463]
                - button "Write Review" [ref=e466] [cursor=pointer]
        - generic [ref=e469]:
          - heading "FAQ (Frequently Asked Questions)" [level=3] [ref=e470]
          - generic [ref=e471]:
            - heading "How can I change my shipping address? " [level=5] [ref=e474] [cursor=pointer]:
              - generic [ref=e475]: How can I change my shipping address?
              - generic [ref=e476]: 
            - heading "How can I change my shipping address? " [level=5] [ref=e479] [cursor=pointer]:
              - generic [ref=e480]: How can I change my shipping address?
              - generic [ref=e481]: 
            - heading "How do I activate my account? " [level=5] [ref=e484] [cursor=pointer]:
              - generic [ref=e485]: How do I activate my account?
              - generic [ref=e486]: 
            - heading "What do you mean by points? How do I earn it? " [level=5] [ref=e489] [cursor=pointer]:
              - generic [ref=e490]: What do you mean by points? How do I earn it?
              - generic [ref=e491]: 
            - heading "Why is there a checkout limit? / What are all the checkout limits? " [level=5] [ref=e494] [cursor=pointer]:
              - generic [ref=e495]: Why is there a checkout limit? / What are all the checkout limits?
              - generic [ref=e496]: 
            - heading "Why must I make payment immediately at checkout? " [level=5] [ref=e499] [cursor=pointer]:
              - generic [ref=e500]: Why must I make payment immediately at checkout?
              - generic [ref=e501]: 
      - contentinfo [ref=e502]:
        - paragraph [ref=e508]: © LambdaTest - Powered by OpenCart
  - text:  
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | import { BasePage } from '../utils/base-page';
  3  | 
  4  | /**
  5  |  * ProductPage
  6  |  * Builder Agent Generated
  7  |  * Source: exploration-reports/ecommerce-add-to-cart.json
  8  |  */
  9  | export class ProductPage extends BasePage {
  10 |   readonly macbookLink: Locator;
  11 |   readonly addToCartButton: Locator;
  12 |   readonly successAlert: Locator;
  13 |   readonly viewCartLink: Locator;
  14 | 
  15 |   constructor(page: Page) {
  16 |     super(page);
  17 |     
  18 |     // Source: Selector Inventory [2] - "Product Link (MacBook)"
  19 |     this.macbookLink = this.getByRole('link', { name: 'MacBook', exact: true }).first();
  20 |     
  21 |     // Source: Selector Inventory [3] - "Add to Cart Button"
  22 |     // Using getByRole for buttons is preferred over generic text locator
  23 |     this.addToCartButton = this.getByRole('button', { name: 'Add to Cart' }).first();
  24 |     
  25 |     // Source: Selector Inventory [4] - "Success Alert Notification"
  26 |     this.successAlert = this.page.getByText('Success: You have added');
  27 |     
  28 |     // Source: Selector Inventory [5] - "View Cart Link"
  29 |     this.viewCartLink = this.getByRole('link', { name: 'View Cart' }).first();
  30 |   }
  31 | 
  32 |   async clickProduct() {
  33 |     await this.macbookLink.click();
  34 |   }
  35 | 
  36 |   async addToCart() {
> 37 |     await this.addToCartButton.click();
     |                                ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  38 |   }
  39 |   
  40 |   async goToCart() {
  41 |     await this.viewCartLink.click();
  42 |   }
  43 | }
  44 | 
```