import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlaylistsViewComponent} from './components/playlists-view/playlists-view.component';

const routes: Routes = [
  {path: '', component: PlaylistsViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule {
}
