import { Parent1 } from './parent1.spec';

import('./parent1.spec.ts')
class Child extends Parent1{
    public test1(){
        console.log("Test 2")
        Parent1.test()
    }
}
const children = new Child()
children.test1();