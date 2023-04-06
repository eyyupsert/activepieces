import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlowLayoutRouting } from './flow-builder.routing';
import { CollectionBuilderComponent } from './page/flow-builder/collection-builder.component';
import { CommonLayoutModule } from '../common/common-layout.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './service/interceptor.service';
import { MatTabsModule } from '@angular/material/tabs';
import { UiCommonModule } from '@activepieces/ui/common';
import { UiFeatureBuilderTabsModule } from '@activepieces/ui/feature-builder-tabs';
import { UiFeatureBuilderHeaderModule } from '@activepieces/ui/feature-builder-header';
import { UiFeatureBuilderLeftSidebarModule } from '@activepieces/ui/feature-builder-left-sidebar';
import { UiFeatureBuilderStoreModule } from '@activepieces/ui/feature-builder-store';
import { UiFeatureBuilderCanvasModule } from '@activepieces/ui/feature-builder-canvas';
import { UiFeatureBuilderFormControlsModule } from '@activepieces/ui/feature-builder-form-controls';
import { UiFeatureBuilderRightSidebarModule } from '../../../../../ui/feature-builder-right-sidebar/src';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FlowLayoutRouting),
    FormsModule,
    ReactiveFormsModule,
    CommonLayoutModule,
    UiCommonModule,
    CodemirrorModule,
    DragDropModule,
    AngularSvgIconModule.forRoot(),
    FontAwesomeModule,
    MatExpansionModule,
    MonacoEditorModule,
    MatTabsModule,
    UiFeatureBuilderTabsModule,
    UiFeatureBuilderLeftSidebarModule,
    UiFeatureBuilderHeaderModule,
    UiFeatureBuilderStoreModule,
    UiFeatureBuilderCanvasModule,
    UiFeatureBuilderFormControlsModule,
    UiFeatureBuilderRightSidebarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  declarations: [CollectionBuilderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [],
})
export class FlowBuilderModule {}
