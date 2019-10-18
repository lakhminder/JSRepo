import { Injectable } from '@angular/core';
/**
 * Like component Services also had to be associated to module
 * but this has to be done manually
 * Note that Services shared common space(called Injection context/service context) 
 * so it had to be declared with only one module
 * and not every module
 * Also in context of lazy loading of modules, its imp to note with which module service is declared
 * Also normally service should be declared in closely related module
 * refer app.module.ts
 * 
 * ng g service services/eg4-logger
 */
@Injectable({
  providedIn: 'root'
})
export class Eg4LoggerService {

  constructor() { }

  printToConsole(arg){
    console.log(arg);
    
  }
}
