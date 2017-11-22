import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'convertBol'})
export class ConvertBolPipe implements PipeTransform {
	transform(value) {
		return value ? 'True' : 'False';
	}
}