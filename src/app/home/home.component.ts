import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public layers: FormControl = new FormControl();
    public formGroup: FormGroup;
    public options = {
        layers: ['Layer 1', 'Layer 2'],
        temporalReferences: ['Temporal Ref 1', 'Temporal Ref 2'],
        maskingColors: ['Masking Color 1', 'Masking Color 2'],
        mosaics: ['Mosaic Option 1', 'Mosaic Option 2'],
        resamplingMethods: ['Resample Method 1', 'Resample Method 2'],
        resamplingFactors: ['Resample Factor 1', 'Resample Factor 2'],
        formats: ['Export Format 1', 'Export Format 2'],
        referenceShifts: ['Reference Shift 1', 'Reference Shift 2'],
      };

    constructor(private formBuilder: FormBuilder){
        this.formGroup = this.formBuilder.group({
            polygon: this.formBuilder.control([]),
            temporalReference: this.formBuilder.control([]),
            rasterExportFormat: this.formBuilder.control([]),
            resamplingMethod: this.formBuilder.control([]),
            resamplingFactor: [{value: '', disabled: true}],
            maskingColor: this.formBuilder.control([]),
            mosaiking: this.formBuilder.control([]),
            tiled: this.formBuilder.control([]),
            exportFormat: this.formBuilder.control([]),
            jpegQuality: [{value: 95, disabled: true}],
            referenceShift: this.formBuilder.control([])
      
          });
    }
  
    ngOnInit(): void {

    }
  
}
