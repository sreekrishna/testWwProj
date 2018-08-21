import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestWwProjRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { TestWwProjCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { TestWwProjLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { TestWwProjDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { TestWwProjTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { TestWwProjEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { TestWwProjJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { TestWwProjJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        TestWwProjRegionMySuffixModule,
        TestWwProjCountryMySuffixModule,
        TestWwProjLocationMySuffixModule,
        TestWwProjDepartmentMySuffixModule,
        TestWwProjTaskMySuffixModule,
        TestWwProjEmployeeMySuffixModule,
        TestWwProjJobMySuffixModule,
        TestWwProjJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestWwProjEntityModule {}
