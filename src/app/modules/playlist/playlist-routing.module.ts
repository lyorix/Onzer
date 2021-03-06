import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlaylistViewComponent} from './components/playlist-view/playlist-view.component';

const routes: Routes = [
  {path: '', component: PlaylistViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule {
}
