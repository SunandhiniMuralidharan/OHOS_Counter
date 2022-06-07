# Counter App
A Simple OpenHarmony API Version 8 Based Counter App in Javascript.

The entire Application can be viewed from by [clicking here](https://github.com/SunandhiniMuralidharan/OHOS_Counter)

## Usage


Add necessary UI needed for a simple counter that has a add button, subtract button, a reset button and a text field.

```js
    <div style="justify-content: center;">
        <button class="signs" type="circle" icon="/common/images/plus.png" on:click="add"></button>
        <text class="text">{{count}}</text>
        <button class="signs" type="circle" icon="/common/images/minus.png" on:click="subtract"></button>
    </div>

    <div>
        <button type="capsule" value="Reset Counter" style="margin: 20px;" on:click="reset"></button>
    </div>
```

Event handlers 
    
```js
    add(){
        this.count = this.count + 1;
    },
    subtract(){
        if(this.count > 0){
            this.count = this.count - 1;
        }
        else{
            this.count = 0;
        }
    },
    reset(){
        this.count = 0;
    }
```
