
import React, { useState } from 'react';

interface CalculatorAppProps {
  onClose: () => void;
}

const CalculatorApp: React.FC<CalculatorAppProps> = ({ onClose }) => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const handleEqual = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const Button: React.FC<{
    onClick: () => void;
    className?: string;
    children: React.ReactNode;
  }> = ({ onClick, className = '', children }) => (
    <button
      onClick={onClick}
      className={`h-16 rounded-full text-white text-xl font-medium active:opacity-80 transition-opacity ${className}`}
    >
      {children}
    </button>
  );

  return (
    <div className="bg-black p-6 rounded-lg">
      {/* Display */}
      <div className="bg-black text-white text-right text-4xl font-light p-4 mb-4 min-h-[80px] flex items-end justify-end">
        {display}
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-4 gap-3">
        {/* Row 1 */}
        <Button onClick={clear} className="bg-gray-500">
          AC
        </Button>
        <Button onClick={() => {}} className="bg-gray-500">
          +/-
        </Button>
        <Button onClick={() => {}} className="bg-gray-500">
          %
        </Button>
        <Button onClick={() => performOperation('÷')} className="bg-orange-500">
          ÷
        </Button>

        {/* Row 2 */}
        <Button onClick={() => inputNumber('7')} className="bg-gray-700">
          7
        </Button>
        <Button onClick={() => inputNumber('8')} className="bg-gray-700">
          8
        </Button>
        <Button onClick={() => inputNumber('9')} className="bg-gray-700">
          9
        </Button>
        <Button onClick={() => performOperation('×')} className="bg-orange-500">
          ×
        </Button>

        {/* Row 3 */}
        <Button onClick={() => inputNumber('4')} className="bg-gray-700">
          4
        </Button>
        <Button onClick={() => inputNumber('5')} className="bg-gray-700">
          5
        </Button>
        <Button onClick={() => inputNumber('6')} className="bg-gray-700">
          6
        </Button>
        <Button onClick={() => performOperation('-')} className="bg-orange-500">
          -
        </Button>

        {/* Row 4 */}
        <Button onClick={() => inputNumber('1')} className="bg-gray-700">
          1
        </Button>
        <Button onClick={() => inputNumber('2')} className="bg-gray-700">
          2
        </Button>
        <Button onClick={() => inputNumber('3')} className="bg-gray-700">
          3
        </Button>
        <Button onClick={() => performOperation('+')} className="bg-orange-500">
          +
        </Button>

        {/* Row 5 */}
        <Button onClick={() => inputNumber('0')} className="bg-gray-700 col-span-2">
          0
        </Button>
        <Button onClick={inputDecimal} className="bg-gray-700">
          .
        </Button>
        <Button onClick={handleEqual} className="bg-orange-500">
          =
        </Button>
      </div>
    </div>
  );
};

export default CalculatorApp;
