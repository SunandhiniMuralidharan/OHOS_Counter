# Counter App
A Simple OpenHarmony API Version 8 Based Counter App in Javascript.

The entire Application can be viewed from by [clicking here](https://github.com/SunandhiniMuralidharan/OHOS_Counter)

![Counter](https://user-images.githubusercontent.com/71301091/173360659-63711bff-9dab-401f-bc66-9d170a07c84b.gif)


## Usage

When the app starts, first screen has the counter value set to 0 and a start button.

```js
    <div>
        <button type="capsule" style="margin-top: 100px;font-size: 50px;background-color: blueviolet;color: white;" if="{{!appear}}" on:click="start">Start Counter</button>
    </div>
```

<img width="175" alt="counter2" src="https://user-images.githubusercontent.com/71301091/173361827-ea69a6f2-1eda-4467-8d3e-7603e88bc787.jpg">

When the Start Counter button is clicked, the UI changes to a simple counter UI that has a add button, subtract button, a reset button and a text field. UI can be added with below code.

```js
    <div>
        <text class="text">{{count}}</text>
    </div>
    
    <div style="justify-content: flex-end;">
        <button style="margin-right: 250px;margin-top: 100px;" type="circle" if="{{appear}}" icon="/common/images/minus.png" on:click="subtract"></button>
        <button type="circle" style="margin-left: 25px;margin-top: 100px" if="{{appear}}" icon="/common/images/plus.png" on:click="add"></button>
    </div>

    <div>
        <button type="capsule" if="{{appear}}" style="margin-bottom: 50px;background-color: blueviolet;color: white;" on:click="reset">Reset</button>
    </div>
```

<img width="175" alt="counter2" src="https://user-images.githubusercontent.com/71301091/173362302-682ea732-1716-46b0-8ed0-8f4dcc9ccebf.png">

Event handlers are used to handle events associated with increment, decrement and reset of the counter value.
    
```js
    data: {
        count: 0,
        appear: false
    },
    
    start(){
      this.appear = true;
    },
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
