import { NgModule } from '@angular/core';

import { TestWwProjSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TestWwProjSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TestWwProjSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestWwProjSharedCommonModule {}
