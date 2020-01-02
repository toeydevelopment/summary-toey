# '

## Floder Structure
```
project
│   README.md
│   package.json    
└───src
    |   main.js
    |   router.js
    |   App.vue
    └───assets
    └───components
        | [name]-component.vue
    └───pages
        |
        └───example-page
            └───containers
                |   [name]-example-container.vue
            └───components
                |   [name]-example-component.vue
            |   index.vue
    └── store
        ├── index.js          # where we assemble modules and export the store
        ├── actions.js        # root actions
        ├── mutations.js      # root mutations
        └── modules
            ├── cart.js       # cart module
            └── products.js

└───public
```
### Structure Explain

***Component*** คือ ส่วนที่ไม่มีการกำหนด state หรือ date ใน vuejs กล่าวคือ ไม่มี 
```javascript
data: () => ({}) 
```
ในไฟล์ แต่สามารถรับ props มาจาก parent ได้

---

***Container*** คือ ส่วนที่มี state มีการกำหนดสถานะต่างๆ หรือมี
```javascript
data: () => ({}) 
``` 
นั่นเอง

---

floder components ในระดับ src/
```
src
 Lcomponents 
```
คือ floder ที่รวมรวม component ต่างๆที่ใช้ซ้ำ

floder container/components ในระดับ src/pages/[name]
```
└───pages
        |
        └───example-page
            └───containers
                |   [name]-example-container.vue
            └───components
                |   [name]-example-component.vue
```

#### floder name explain
pages คือ floder ที่เก็บ floder แต่ละหน้า เช่น website มี 3 หน้า ตามนี้
| ชื่อ floder | ชื่อ path |
| --------- | ---------- |
|  home-page.vue |    /   |
|   products-page   |    /products   |
|   examples-page   |    /examples   |

#### file name explain

ชื่อไฟล์ ให้ตั้งตามนี้ ชื่อ-ชื่อ parent-หน้าที่.vue
```
 Lpages
    Lhome
        -index.vue # entry file ไว้รวมทุก components
            Lcomponents
                -dialog-home-component.vue
            Lcontainers
                -dialog-home-container.vue
```

---
## Conventions

#### Naming Conventions
- file name = kebab-case
```
    this-is-exmaple.vue
```
- variable name = camelCase
```javascript
    let isTrue = true
```
- class name = PascalCase
```javascript
    class StudentControldata {

    }
```
#### Architecture Conventions
- ใช้ Plural noun สำหรับชื่อ Class


## Tip&Trick

!! **STAY TUNED** !!