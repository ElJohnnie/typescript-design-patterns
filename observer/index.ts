interface Observer {
    update(message: string): void;
  }
  
  class Subject {
    private observers: Observer[] = [];
  
    addObserver(observer: Observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer: Observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notify(message: string) {
      this.observers.forEach(observer => observer.update(message));
    }
  }
  
  class ConcreteObserver implements Observer {
    update(message: string) {
      console.log(`Recebido: ${message}`);
    }
  }
  
  const subject = new Subject();
  const observer1 = new ConcreteObserver();
  const observer2 = new ConcreteObserver();
  
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  
  subject.notify('Nova mensagem');
  