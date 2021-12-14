import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultcurso = []
    for(const prueba of value) {
      if(prueba.curso.indexOf(arg) > -1 ){
        resultcurso.push(prueba);
      }
    } 
    return resultcurso;
  }

}
