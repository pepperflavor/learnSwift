class A {
    constructor(){
        
    }
    static callMe(){
        console.log('스태틱 함수')
    }
}

const a = new A();
A.callMe();
a.callMe();