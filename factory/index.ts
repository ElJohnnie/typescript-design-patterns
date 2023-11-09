interface Shape {
    draw(): void;
  }
  
  class Circle implements Shape {
    draw() {
      console.log('Desenhando um círculo');
    }
  }
  
  class Square implements Shape {
    draw() {
      console.log('Desenhando um quadrado');
    }
  }
  
  class ShapeFactory {
    createShape(type: string): Shape {
      if (type === 'circle') {
        return new Circle();
      } else if (type === 'square') {
        return new Square();
      }
      throw new Error('Tipo de forma desconhecido');
    }
  }
  
  const factory = new ShapeFactory();
  const circle = factory.createShape('circle');
  circle.draw();
  