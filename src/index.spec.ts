import { getCalculator, ICalculator } from './index';

describe('Calculator', (): void => {
  let calculator: ICalculator;

  beforeEach(async (): Promise<void> => {
    const Calculator: any = await getCalculator();
    calculator = new Calculator();
  });

  it('should display `1` when pressOne() is invoked', (): void => {

    calculator.pressOne();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('1');

  });

  it('should display `1+2` when pressOne() is invoked', (): void => {

    calculator.pressOne();
    calculator.pressPlus();
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('3');

  });

  it('should display `5-2` when pressOne() is invoked', (): void => {

    calculator.pressFive();
    calculator.pressMinus();
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('3');

  });

  it('should display `1-2` when pressOne() is invoked', (): void => {

    calculator.pressOne();
    calculator.pressMinus();
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-1');

  });


  it('should display `-5+2` when pressOne() is invoked', (): void => {

    calculator.pressMinus()
    calculator.pressFive();
    calculator.pressPlus();
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-3');

  });

  it('should display `2*0` when pressOne() is invoked', (): void => {

    calculator.pressTwo()
    calculator.pressMult();
    calculator.pressZero();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0');

  });


  it('should display `2/0` when pressOne() is invoked', (): void => {

    calculator.pressTwo()
    calculator.pressDiv()
    calculator.pressZero();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('Infinity');

  });

  it('should display `0/2` when pressOne() is invoked', (): void => {
    
    calculator.pressZero();
    calculator.pressDiv()
    calculator.pressTwo()
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0');
  });


  it('should display `0/-2` when pressOne() is invoked', (): void => {
    
    calculator.pressZero();
    calculator.pressDiv()
    calculator.pressMinus()
    calculator.pressTwo()
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('2');
  });

  it('should display `1 + 2 * 2` when pressOne() is invoked', (): void => {
    
    calculator.pressOne();
    calculator.pressPlus();
    calculator.pressTwo();
    calculator.pressMult();
    calculator.pressTwo()
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('5');
  });

  it('should display `-1 + 2 * 2` when pressOne() is invoked', (): void => {
    
    calculator.pressMinus();
    calculator.pressOne();
    calculator.pressPlus();
    calculator.pressTwo();
    calculator.pressMult();
    calculator.pressTwo()
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('3');
  });

  it('should display `-1 - -2` when pressOne() is invoked', (): void => {
    
    calculator.pressMinus();
    calculator.pressOne();
    calculator.pressMinus()
    calculator.pressMinus()
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-3');
  });

  it('should display `-1 + -2` when pressOne() is invoked', (): void => {
    
    calculator.pressMinus();
    calculator.pressOne();
    calculator.pressPlus()
    calculator.pressMinus()
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-3');
  });
  it('should display `1 + 0.2` when pressOne() is invoked', (): void => {
    
    calculator.pressOne();
    calculator.pressPlus()
    calculator.pressZero();
    calculator.pressDot()
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('1.2');
  });


  it('should display `1/0.2` when pressOne() is invoked', (): void => {
    
    calculator.pressOne();
    calculator.pressDiv()
    calculator.pressZero();
    calculator.pressDot()
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('5');
  });

  it('should display `1/0.2 clear 3` when pressOne() is invoked', (): void => {
    
    calculator.pressOne();
    calculator.pressDiv()
    calculator.pressZero();
    calculator.pressDot()
    calculator.pressTwo();
    calculator.pressClear();
    calculator.pressThree();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('3');
  });
  

  it('should display `1 * -0.2 / 2` when pressOne() is invoked', (): void => {
    
    calculator.pressOne();
    calculator.pressMult()
    calculator.pressMinus()
    calculator.pressZero();
    calculator.pressDot()
    calculator.pressTwo();
    calculator.pressDiv()
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-0.1');
  });

  it('should display `-0.2/-0.1` when pressOne() is invoked', (): void => {
    

    calculator.pressMinus()
    calculator.pressZero();
    calculator.pressDot()
    calculator.pressTwo();
    calculator.pressDiv()
    calculator.pressMinus()
    calculator.pressZero();
    calculator.pressDot()
    calculator.pressOne();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0.1');
  });


  it('should display ` -0.5 * 0` when pressOne() is invoked', (): void => {
    
    
    calculator.pressMinus()
    calculator.pressZero()
    calculator.pressDot()
    calculator.pressFive()
    calculator.pressMult()
    calculator.pressZero();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0');
  });

  it('should display ` -0.5 / 0` when pressOne() is invoked', (): void => {
    
    
    calculator.pressMinus()
    calculator.pressZero()
    calculator.pressDot()
    calculator.pressFive()
    calculator.pressDiv()
    calculator.pressZero();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('ERR');
  });

  it('should display `2 * 3.52` when pressOne() is invoked', (): void => {
    
    
    calculator.pressTwo();
    calculator.pressMult()
    calculator.pressThree();
    calculator.pressDot();
    calculator.pressFive(); 
    calculator.pressTwo();      
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('7.04');
  });


  it('should display `-3.52 * 2` when pressOne() is invoked', (): void => {
    
    calculator.pressMinus()
    calculator.pressThree();
    calculator.pressDot();
    calculator.pressFive(); 
    calculator.pressTwo();      
 
    calculator.pressMult()
    calculator.pressTwo();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-7.04');
  });

  it('should display `-3.52 * 0` when pressOne() is invoked', (): void => {
    
    calculator.pressMinus()
    calculator.pressThree();
    calculator.pressDot();
    calculator.pressFive(); 
    calculator.pressTwo();      
 
    calculator.pressMult()
    calculator.pressZero();
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0');
  });

  it('should display ` 0 * -3.52 ` when pressOne() is invoked', (): void => {
    
    
    calculator.pressZero();
    calculator.pressMult()
    calculator.pressMinus()
    calculator.pressThree();
    calculator.pressDot();
    calculator.pressFive(); 
    calculator.pressTwo();      
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-3.52');
  });

  it('should display ` 0 * -0 ` when pressOne() is invoked', (): void => {
    
    
    calculator.pressZero();
    calculator.pressMult()
    calculator.pressMinus()
    calculator.pressZero()     
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0');
  });


  it('should display ` 0 / -0 ` when pressOne() is invoked', (): void => {
    
    
    calculator.pressZero();
    calculator.pressDiv()
    calculator.pressMinus()
    calculator.pressZero()     
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0');
  });
  
  

  it('should display `-0  *  0 ` when pressOne() is invoked', (): void => {
    
    calculator.pressMinus()
    calculator.pressZero();
    calculator.pressMult()

    calculator.pressZero()     
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0');
  });

  it('should display `-1  *  0 ` when pressOne() is invoked', (): void => {
    
    calculator.pressMinus()
    calculator.pressOne();
    calculator.pressMult()

    calculator.pressZero()     
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0');
  });


  it('should display `1 / 2 / 2 ` when pressOne() is invoked', (): void => {
    
    calculator.pressOne();
    calculator.pressDiv()
    calculator.pressTwo()
    calculator.pressDiv()
    calculator.pressTwo()    
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0.25');
  });

  it('should display `1 * 2 / 2 ` when pressOne() is invoked', (): void => {
    
    calculator.pressOne();
    calculator.pressMult()
    calculator.pressTwo()
    calculator.pressDiv()
    calculator.pressTwo()    
    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('1');
  });

  it('should display `5.5 * 2 ` when pressOne() is invoked', (): void => {
    
    calculator.pressFive();
    calculator.pressDot();
    calculator.pressFive();
    calculator.pressMult()
    calculator.pressTwo()

    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('11');
  });

  it('should display `-5.5 * 2 ` when pressOne() is invoked', (): void => {
    
    calculator.pressMinus()
    calculator.pressFive();
    calculator.pressDot();
    calculator.pressFive();
    calculator.pressMult()
    calculator.pressTwo()

    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-11');
  });

  it('should display `1 * - 3.0 ` when pressOne() is invoked', (): void => {
    
 
    calculator.pressOne()

    calculator.pressMult()

    calculator.pressMinus()
    calculator.pressThree();
    calculator.pressDot();
    calculator.pressZero();

    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-3');
  });

  it('should display `2 * - 3.0 / 0.5` when pressOne() is invoked', (): void => {
    
 
    calculator.pressTwo()

    calculator.pressMult()

    calculator.pressMinus()
    calculator.pressThree();
    calculator.pressDot();
    calculator.pressZero();

    calculator.pressDiv()
    calculator.pressZero();
    calculator.pressDot();
    calculator.pressFive();

    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-6');
  });


  
  it('should display `2 / 3` when pressOne() is invoked', (): void => {
    
 
    calculator.pressTwo()
    calculator.pressDiv()
    calculator.pressThree()

    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0.6666666666666666');
  });

  it('should display `- 2 / 3` when pressOne() is invoked', (): void => {
    
 
    calculator.pressMinus()
    calculator.pressTwo()
    calculator.pressDiv()
    calculator.pressThree()

    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('-0.6666666666666666');
  });


  it('should display `0 + 0` when pressOne() is invoked', (): void => {
    
 
    calculator.pressZero()
    calculator.pressPlus()
    calculator.pressZero()

    calculator.pressEquals();
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('0');
  });
  

  it('should display `2 + 2  = +  3` when pressOne() is invoked', (): void => {
    
 
    calculator.pressTwo()
    calculator.pressPlus()
    calculator.pressTwo()
    calculator.pressEquals()
    calculator.pressPlus()
    calculator.pressThree()
    calculator.pressEquals()
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('7');
  });


  it('should display `5.5 * 2  = 11` when pressOne() is invoked', (): void => {
    
 
    calculator.pressFive()
    calculator.pressDot()
    calculator.pressFive()
    calculator.pressMult()
    calculator.pressTwo()

    calculator.pressEquals()
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('11');
  });


  


  


});
